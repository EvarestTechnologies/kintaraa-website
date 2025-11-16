# KitMedi Platform - Complete Implementation Plan

**"Uber for Drugs" - Pharmacy Marketplace Platform for Kenya**

---

## 📋 Table of Contents

1. [Project Overview](#project-overview)
2. [Architecture](#architecture)
3. [Repository Setup](#repository-setup)
4. [Phase 1: Backend API](#phase-1-backend-api)
5. [Phase 2: Mobile Apps](#phase-2-mobile-apps)
6. [Phase 3: Integrations](#phase-3-integrations)
7. [Testing Strategy](#testing-strategy)
8. [Deployment](#deployment)

---

## Project Overview

### Mission
"Medicine when you need it, from pharmacies near you."

### Business Model
- **Revenue:** Commission-based (10% for orders < KES 1,000, 12% for >= KES 1,000)
- **Target Market:** 8,000+ independent pharmacies in Kenya
- **Launch:** Kisumu pilot with MEDS Pharmacy, then expand to Nairobi, Mombasa

### Key Features
1. Customer searches for medicine by name
2. Request broadcasts to nearby pharmacies (2km radius)
3. Pharmacies respond within 5 minutes with price/availability
4. Customer selects pharmacy and pays via M-Pesa
5. Customer picks up medicine at pharmacy
6. Commission auto-deducted, pharmacy gets weekly payout

---

## Architecture

### Monorepo Structure

```
kitmedi/
├── apps/
│   ├── backend-api/           # Node.js/Express + Socket.IO
│   ├── customer-app/          # React Native (Expo)
│   ├── pharmacy-app/          # React Native (Expo)
│   └── admin-dashboard/       # Next.js
├── packages/
│   ├── shared-ui/             # Shared React Native components
│   ├── shared-types/          # TypeScript interfaces
│   └── shared-utils/          # Utility functions
├── infrastructure/
│   ├── database/              # PostgreSQL schemas
│   └── docker/                # Docker configs
└── docs/
    └── PRD.md                 # Complete requirements
```

### Technology Stack

**Backend:**
- Node.js 18+ with Express.js
- PostgreSQL 14 (primary database)
- Redis 7 (caching, sessions)
- MongoDB 6 (logs, analytics)
- Socket.IO (real-time WebSocket)

**Mobile Apps:**
- React Native with Expo (Android + iOS)
- Redux Toolkit (state management)
- React Navigation (routing)
- Axios (API client)
- AsyncStorage (offline data)

**Integrations:**
- M-Pesa Daraja API (payments)
- WhatsApp Business API (notifications)
- Africa's Talking SMS (fallback)
- Firebase Cloud Messaging (push)
- Google Maps API (location)

---

## Repository Setup

### Step 1: Create GitHub Repository

```bash
# On GitHub.com:
# 1. Go to https://github.com/EvarestTechnologies
# 2. Click "New repository"
# 3. Name: kitmedi
# 4. Description: KitMedi - Pharmacy Marketplace Platform for Kenya
# 5. Private or Public
# 6. DO NOT initialize with README
# 7. Create repository
```

### Step 2: Clone and Initialize

```bash
# Clone the repository
git clone https://github.com/EvarestTechnologies/kitmedi.git
cd kitmedi

# Create directory structure
mkdir -p apps/{backend-api/src/{config,controllers,services,models,routes,middleware,utils,db},customer-app,pharmacy-app,admin-dashboard}
mkdir -p packages/{shared-ui,shared-types,shared-utils}
mkdir -p infrastructure/{database,docker}
mkdir -p docs
```

---

## Phase 1: Backend API

### File 1: Root `package.json`

**Location:** `/package.json`

```json
{
  "name": "kitmedi-platform",
  "version": "1.0.0",
  "description": "KitMedi - Pharmacy Marketplace Platform",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev:backend": "npm run dev --workspace=apps/backend-api",
    "dev:customer": "npm run start --workspace=apps/customer-app",
    "dev:pharmacy": "npm run start --workspace=apps/pharmacy-app",
    "dev:admin": "npm run dev --workspace=apps/admin-dashboard",
    "build:all": "npm run build --workspaces",
    "test:all": "npm run test --workspaces"
  },
  "keywords": ["pharmacy", "marketplace", "healthcare", "kenya", "mpesa"],
  "author": "Kintaraa Technologies",
  "license": "PROPRIETARY"
}
```

### File 2: Backend API Package

**Location:** `/apps/backend-api/package.json`

```json
{
  "name": "@kitmedi/backend-api",
  "version": "1.0.0",
  "main": "src/index.js",
  "scripts": {
    "dev": "nodemon src/index.js",
    "start": "node src/index.js",
    "test": "jest"
  },
  "dependencies": {
    "express": "^4.18.2",
    "cors": "^2.8.5",
    "helmet": "^7.1.0",
    "compression": "^1.7.4",
    "dotenv": "^16.4.5",
    "pg": "^8.11.3",
    "sequelize": "^6.35.2",
    "redis": "^4.6.12",
    "socket.io": "^4.6.2",
    "jsonwebtoken": "^9.0.2",
    "bcryptjs": "^2.4.3",
    "joi": "^17.12.0",
    "axios": "^1.6.5",
    "moment": "^2.30.1",
    "winston": "^3.11.0",
    "express-rate-limit": "^7.1.5"
  },
  "devDependencies": {
    "nodemon": "^3.0.3",
    "jest": "^29.7.0",
    "supertest": "^6.3.4"
  }
}
```

### File 3: Main Server

**Location:** `/apps/backend-api/src/index.js`

```javascript
/**
 * KitMedi Backend API
 * "Uber for Drugs" - Pharmacy Marketplace Platform
 */

require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);

// Socket.IO for real-time communication
const io = new Server(httpServer, {
  cors: {
    origin: process.env.CORS_ORIGIN || '*',
    methods: ['GET', 'POST']
  }
});

// Middleware
app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health check
app.get('/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

// API routes
app.get('/api/v1', (req, res) => {
  res.json({
    name: 'KitMedi API',
    version: '1.0.0',
    description: 'Pharmacy Marketplace Platform',
    endpoints: {
      health: '/health',
      auth: '/api/v1/auth',
      medicines: '/api/v1/medicines',
      orders: '/api/v1/orders',
      pharmacies: '/api/v1/pharmacies',
      payments: '/api/v1/payments'
    }
  });
});

// Socket.IO for real-time updates
io.on('connection', (socket) => {
  console.log('Socket connected:', socket.id);

  // Customer joins to listen for pharmacy responses
  socket.on('customer:join', (data) => {
    const { customerId, requestId } = data;
    socket.join(`customer:${customerId}`);
    socket.join(`request:${requestId}`);
    console.log(`Customer ${customerId} joined request ${requestId}`);
  });

  // Pharmacy joins to receive medicine requests
  socket.on('pharmacy:join', (data) => {
    const { pharmacyId } = data;
    socket.join(`pharmacy:${pharmacyId}`);
    console.log(`Pharmacy ${pharmacyId} joined`);
  });

  socket.on('ping', () => socket.emit('pong'));

  socket.on('disconnect', () => {
    console.log('Socket disconnected:', socket.id);
  });
});

// Make io accessible globally
global.io = io;

// Error handler
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.statusCode || 500).json({
    success: false,
    error: {
      message: err.message || 'Internal server error',
      code: err.code || 'INTERNAL_ERROR'
    }
  });
});

// Start server
const PORT = process.env.PORT || 3000;
httpServer.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════╗
║                                                        ║
║        🏥  KitMedi Backend API Server                 ║
║        "Uber for Drugs" - Pharmacy Marketplace        ║
║                                                        ║
║  Port:        ${PORT}                                     ║
║  Environment: ${process.env.NODE_ENV || 'development'}                             ║
║  WebSocket:   Socket.IO Ready                         ║
║                                                        ║
║  📱 Mobile: Use Expo Go to test                       ║
║  📊 Health: http://localhost:${PORT}/health              ║
║                                                        ║
╚════════════════════════════════════════════════════════╝
  `);
});

module.exports = { app, io };
```

### File 4: Environment Configuration

**Location:** `/apps/backend-api/.env.example`

```bash
# Server
NODE_ENV=development
PORT=3000
API_BASE_URL=http://localhost:3000

# Database (PostgreSQL)
DB_HOST=localhost
DB_PORT=5432
DB_NAME=kitmedi_dev
DB_USER=postgres
DB_PASSWORD=kitmedi_dev_password

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# JWT
JWT_SECRET=your-super-secret-key-change-in-production
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# M-Pesa (Sandbox)
MPESA_ENVIRONMENT=sandbox
MPESA_CONSUMER_KEY=your_consumer_key
MPESA_CONSUMER_SECRET=your_consumer_secret
MPESA_SHORTCODE=174379
MPESA_PASSKEY=your_passkey
MPESA_CALLBACK_URL=http://localhost:3000/api/v1/payments/mpesa/callback

# WhatsApp (Twilio)
WHATSAPP_ENABLED=false
TWILIO_ACCOUNT_SID=your_account_sid
TWILIO_AUTH_TOKEN=your_auth_token
WHATSAPP_FROM_NUMBER=+14155238886

# SMS (Africa's Talking)
SMS_ENABLED=false
AFRICAS_TALKING_API_KEY=your_api_key
AFRICAS_TALKING_USERNAME=your_username
SMS_SENDER_ID=KITMEDI

# Firebase Cloud Messaging
FCM_ENABLED=false
FCM_SERVER_KEY=your_fcm_server_key

# Google Maps
GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# CORS
CORS_ORIGIN=*
```

### File 5: Docker Compose

**Location:** `/docker-compose.yml`

```yaml
version: '3.8'

services:
  postgres:
    image: postgres:14-alpine
    container_name: kitmedi-postgres
    restart: unless-stopped
    environment:
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: kitmedi_dev_password
      POSTGRES_DB: kitmedi_dev
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    healthcheck:
      test: ["CMD-SHELL", "pg_isready -U postgres"]
      interval: 10s
      timeout: 5s
      retries: 5

  redis:
    image: redis:7-alpine
    container_name: kitmedi-redis
    restart: unless-stopped
    ports:
      - "6379:6379"
    volumes:
      - redis_data:/data
    healthcheck:
      test: ["CMD", "redis-cli", "ping"]
      interval: 10s
      timeout: 3s
      retries: 5

  mongodb:
    image: mongo:6
    container_name: kitmedi-mongodb
    restart: unless-stopped
    environment:
      MONGO_INITDB_ROOT_USERNAME: mongo
      MONGO_INITDB_ROOT_PASSWORD: kitmedi_mongo_password
    ports:
      - "27017:27017"
    volumes:
      - mongodb_data:/data/db

volumes:
  postgres_data:
  redis_data:
  mongodb_data:
```

### File 6: Git Ignore

**Location:** `/.gitignore`

```
# Dependencies
node_modules/
.pnp
.pnp.js

# Environment
.env
.env.local
.env.*.local

# Logs
logs/
*.log
npm-debug.log*

# Build
dist/
build/
.next/

# Testing
coverage/

# IDEs
.vscode/
.idea/
*.swp

# Expo
.expo/
.expo-shared/

# OS
.DS_Store
Thumbs.db

# Misc
*.tmp
.cache/
```

---

## Phase 2: Mobile Apps

### Customer App Initialization

**Commands:**

```bash
# Navigate to customer app directory
cd apps/customer-app

# Initialize Expo project
npx create-expo-app . --template blank

# Install core dependencies
npm install @react-navigation/native @react-navigation/stack
npm install @reduxjs/toolkit react-redux
npm install axios socket.io-client
npm install expo-location react-native-maps
npm install @react-native-async-storage/async-storage

# Install Expo dependencies
npx expo install react-native-screens react-native-safe-area-context
```

### Pharmacy App Initialization

**Commands:**

```bash
# Navigate to pharmacy app directory
cd apps/pharmacy-app

# Initialize Expo project
npx create-expo-app . --template blank

# Install same dependencies as customer app
npm install @react-navigation/native @react-navigation/stack
npm install @reduxjs/toolkit react-redux
npm install axios socket.io-client
npm install expo-location react-native-maps
npm install @react-native-async-storage/async-storage
npx expo install react-native-screens react-native-safe-area-context
```

### Mobile App Structure

Both apps should have this structure:

```
apps/customer-app/  (or pharmacy-app/)
├── App.js                    # Main entry point
├── app.json                  # Expo configuration
├── package.json              # Dependencies
├── src/
│   ├── screens/              # Screen components
│   │   ├── HomeScreen.js
│   │   ├── SearchScreen.js
│   │   └── ...
│   ├── components/           # Reusable components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   └── ...
│   ├── navigation/           # Navigation config
│   │   └── AppNavigator.js
│   ├── store/                # Redux store
│   │   ├── store.js
│   │   ├── slices/
│   │   │   ├── authSlice.js
│   │   │   ├── orderSlice.js
│   │   │   └── ...
│   ├── services/             # API services
│   │   ├── api.js
│   │   ├── socket.js
│   │   └── ...
│   ├── utils/                # Utilities
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── ...
│   └── config/               # Configuration
│       └── config.js
└── assets/                   # Images, fonts, etc.
```

---

## Phase 3: Integrations

### M-Pesa Integration (Priority 1)

**File:** `/apps/backend-api/src/services/mpesa.service.js`

```javascript
const axios = require('axios');
const moment = require('moment');

class MpesaService {
  constructor() {
    this.consumerKey = process.env.MPESA_CONSUMER_KEY;
    this.consumerSecret = process.env.MPESA_CONSUMER_SECRET;
    this.shortcode = process.env.MPESA_SHORTCODE;
    this.passkey = process.env.MPESA_PASSKEY;
    this.baseUrl = process.env.MPESA_ENVIRONMENT === 'production'
      ? 'https://api.safaricom.co.ke'
      : 'https://sandbox.safaricom.co.ke';
  }

  async getAccessToken() {
    const auth = Buffer.from(`${this.consumerKey}:${this.consumerSecret}`).toString('base64');

    const response = await axios.get(`${this.baseUrl}/oauth/v1/generate?grant_type=client_credentials`, {
      headers: {
        'Authorization': `Basic ${auth}`
      }
    });

    return response.data.access_token;
  }

  async initiateSTKPush(phoneNumber, amount, orderId) {
    const accessToken = await this.getAccessToken();
    const timestamp = moment().format('YYYYMMDDHHmmss');
    const password = Buffer.from(`${this.shortcode}${this.passkey}${timestamp}`).toString('base64');

    const response = await axios.post(
      `${this.baseUrl}/mpesa/stkpush/v1/processrequest`,
      {
        BusinessShortCode: this.shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: Math.round(amount),
        PartyA: this.formatPhoneNumber(phoneNumber),
        PartyB: this.shortcode,
        PhoneNumber: this.formatPhoneNumber(phoneNumber),
        CallBackURL: process.env.MPESA_CALLBACK_URL,
        AccountReference: `KitMedi-${orderId}`,
        TransactionDesc: `Medicine payment - Order ${orderId}`
      },
      {
        headers: {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json'
        }
      }
    );

    return response.data;
  }

  formatPhoneNumber(phone) {
    // Convert 0712345678 to 254712345678
    if (phone.startsWith('0')) {
      return '254' + phone.substring(1);
    }
    if (phone.startsWith('+')) {
      return phone.substring(1);
    }
    return phone;
  }
}

module.exports = new MpesaService();
```

### Database Schema

**File:** `/infrastructure/database/schema.sql`

```sql
-- Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Users table (customers and pharmacy staff)
CREATE TABLE users (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  phone_number VARCHAR(20) UNIQUE NOT NULL,
  phone_verified BOOLEAN DEFAULT FALSE,
  email VARCHAR(255),
  first_name VARCHAR(100),
  last_name VARCHAR(100),
  user_type VARCHAR(20) NOT NULL CHECK (user_type IN ('customer', 'pharmacy', 'admin')),
  password_hash VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  is_active BOOLEAN DEFAULT TRUE
);

CREATE INDEX idx_users_phone ON users(phone_number);
CREATE INDEX idx_users_type ON users(user_type);

-- Pharmacies table
CREATE TABLE pharmacies (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id UUID REFERENCES users(id),
  business_name VARCHAR(255) NOT NULL,
  license_number VARCHAR(100) UNIQUE NOT NULL,
  phone_number VARCHAR(20) NOT NULL,
  whatsapp_number VARCHAR(20),
  address TEXT NOT NULL,
  city VARCHAR(100) NOT NULL,
  latitude DECIMAL(10, 8) NOT NULL,
  longitude DECIMAL(11, 8) NOT NULL,
  is_open BOOLEAN DEFAULT FALSE,
  rating DECIMAL(3,2) DEFAULT 0.00,
  total_reviews INTEGER DEFAULT 0,
  total_orders INTEGER DEFAULT 0,
  commission_rate DECIMAL(5,2) DEFAULT 10.00,
  verification_status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_pharmacies_location ON pharmacies(latitude, longitude);
CREATE INDEX idx_pharmacies_city ON pharmacies(city);

-- Medicines table
CREATE TABLE medicines (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(255) NOT NULL,
  generic_name VARCHAR(255),
  strength VARCHAR(50),
  form VARCHAR(50),
  manufacturer VARCHAR(255),
  category VARCHAR(100),
  requires_prescription BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_medicines_name ON medicines(name);

-- Pharmacy inventory
CREATE TABLE pharmacy_inventory (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  pharmacy_id UUID REFERENCES pharmacies(id) ON DELETE CASCADE,
  medicine_id UUID REFERENCES medicines(id),
  current_stock INTEGER DEFAULT 0,
  price DECIMAL(10,2) NOT NULL,
  is_available BOOLEAN DEFAULT TRUE,
  updated_at TIMESTAMP DEFAULT NOW(),
  UNIQUE(pharmacy_id, medicine_id)
);

-- Order requests (customer searches)
CREATE TABLE order_requests (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  customer_id UUID REFERENCES users(id),
  medicine_id UUID REFERENCES medicines(id),
  customer_latitude DECIMAL(10, 8) NOT NULL,
  customer_longitude DECIMAL(11, 8) NOT NULL,
  search_radius_km DECIMAL(5,2) DEFAULT 2.0,
  status VARCHAR(20) DEFAULT 'broadcasting',
  pharmacies_notified INTEGER DEFAULT 0,
  pharmacies_responded INTEGER DEFAULT 0,
  selected_pharmacy_id UUID REFERENCES pharmacies(id),
  broadcast_at TIMESTAMP DEFAULT NOW(),
  expires_at TIMESTAMP DEFAULT NOW() + INTERVAL '5 minutes'
);

CREATE INDEX idx_requests_status ON order_requests(status);

-- Pharmacy responses
CREATE TABLE pharmacy_responses (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  request_id UUID REFERENCES order_requests(id) ON DELETE CASCADE,
  pharmacy_id UUID REFERENCES pharmacies(id),
  has_stock BOOLEAN NOT NULL,
  price DECIMAL(10,2),
  ready_time VARCHAR(20),
  response_time_seconds INTEGER,
  responded_at TIMESTAMP DEFAULT NOW(),
  is_selected BOOLEAN DEFAULT FALSE,
  UNIQUE(request_id, pharmacy_id)
);

-- Orders table
CREATE TABLE orders (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_number VARCHAR(20) UNIQUE NOT NULL,
  request_id UUID REFERENCES order_requests(id),
  customer_id UUID REFERENCES users(id),
  pharmacy_id UUID REFERENCES pharmacies(id),
  medicine_id UUID REFERENCES medicines(id),
  medicine_name VARCHAR(255) NOT NULL,
  quantity INTEGER DEFAULT 1,
  medicine_price DECIMAL(10,2) NOT NULL,
  service_fee DECIMAL(10,2) NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  commission_amount DECIMAL(10,2) NOT NULL,
  commission_rate DECIMAL(5,2) NOT NULL,
  payment_method VARCHAR(20) NOT NULL,
  payment_status VARCHAR(20) DEFAULT 'pending',
  payment_transaction_id VARCHAR(100),
  paid_at TIMESTAMP,
  status VARCHAR(20) DEFAULT 'confirmed',
  estimated_ready_time TIMESTAMP,
  ready_at TIMESTAMP,
  picked_up_at TIMESTAMP,
  completed_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_orders_customer ON orders(customer_id, created_at DESC);
CREATE INDEX idx_orders_pharmacy ON orders(pharmacy_id, created_at DESC);
CREATE INDEX idx_orders_status ON orders(status);

-- Transactions table
CREATE TABLE transactions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id),
  pharmacy_id UUID REFERENCES pharmacies(id),
  transaction_type VARCHAR(20) NOT NULL,
  amount DECIMAL(10,2) NOT NULL,
  currency VARCHAR(3) DEFAULT 'KES',
  payment_method VARCHAR(20),
  provider_transaction_id VARCHAR(100),
  commission_amount DECIMAL(10,2),
  pharmacy_net_amount DECIMAL(10,2),
  status VARCHAR(20) DEFAULT 'pending',
  initiated_at TIMESTAMP DEFAULT NOW(),
  completed_at TIMESTAMP
);

-- Ratings table
CREATE TABLE ratings (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  order_id UUID REFERENCES orders(id) UNIQUE,
  customer_id UUID REFERENCES users(id),
  pharmacy_id UUID REFERENCES pharmacies(id),
  overall_rating INTEGER NOT NULL CHECK (overall_rating BETWEEN 1 AND 5),
  pharmacy_rating INTEGER CHECK (pharmacy_rating BETWEEN 1 AND 5),
  text_feedback TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX idx_ratings_pharmacy ON ratings(pharmacy_id, created_at DESC);
```

---

## Testing Strategy

### Test Backend with Expo Go

**Steps:**

1. **Start backend API**
   ```bash
   npm run dev:backend
   ```

2. **Start databases**
   ```bash
   docker-compose up -d
   ```

3. **Start customer app**
   ```bash
   cd apps/customer-app
   npx expo start
   ```

4. **Test on your phone**
   - Install Expo Go app on your Android/iOS device
   - Scan QR code displayed in terminal
   - App loads on your phone instantly
   - Make changes in code → see them live on phone

5. **Test pharmacy app** (in separate terminal)
   ```bash
   cd apps/pharmacy-app
   npx expo start
   ```

### Test Complete Flow

1. **Customer searches** for "Amoxicillin 500mg"
2. **Backend broadcasts** via WebSocket to nearby pharmacies
3. **Pharmacy receives** push notification + full-screen alert
4. **Pharmacy responds** with price (e.g., KES 350)
5. **Customer sees** pharmacy response in real-time
6. **Customer selects** pharmacy and confirms order
7. **M-Pesa STK Push** prompts customer to pay
8. **Customer enters PIN** and payment completes
9. **Pharmacy receives** order confirmation
10. **Customer picks up** medicine at pharmacy

---

## Deployment

### Backend API Deployment (Render/Heroku)

**Render:**

```bash
# In Render dashboard:
# 1. New Web Service
# 2. Connect GitHub repo
# 3. Root directory: apps/backend-api
# 4. Build command: npm install
# 5. Start command: npm start
# 6. Add environment variables from .env.example
```

### Mobile App Deployment (EAS Build)

**Customer App:**

```bash
cd apps/customer-app

# Install EAS CLI
npm install -g eas-cli

# Login to Expo
eas login

# Configure EAS
eas build:configure

# Build for Android
eas build --platform android

# Build for iOS (future)
eas build --platform ios
```

### Database Setup (AWS RDS or Neon)

**AWS RDS:**
1. Create PostgreSQL 14 instance
2. Security group: Allow port 5432
3. Update `.env` with RDS endpoint
4. Run migrations: `psql -h <rds-endpoint> -U postgres -d kitmedi_prod -f infrastructure/database/schema.sql`

---

## Next Session Checklist

### ✅ Before You Start

1. **Create GitHub repository:** https://github.com/EvarestTechnologies/kitmedi
2. **Have Expo Go installed** on your phone (Android/iOS)
3. **Have Docker Desktop installed** for local databases
4. **Have Node.js 18+** installed

### 🚀 First Commands

```bash
# Clone repo
git clone https://github.com/EvarestTechnologies/kitmedi.git
cd kitmedi

# Create all files from this plan
# (Copy/paste file contents from above)

# Install dependencies
npm install

# Start databases
docker-compose up -d

# Configure environment
cp apps/backend-api/.env.example apps/backend-api/.env
# Edit .env with your settings

# Start backend
npm run dev:backend

# Initialize mobile apps
cd apps/customer-app && npx create-expo-app . --template blank && npm install
cd ../pharmacy-app && npx create-expo-app . --template blank && npm install

# Test on your device
cd apps/customer-app && npx expo start
# Scan QR code with Expo Go!
```

---

## 📊 Implementation Progress Tracking

**Phase 1 - Backend (Week 1-2):**
- [ ] Repository setup
- [ ] Backend API server
- [ ] Docker Compose
- [ ] Database schema
- [ ] Authentication endpoints
- [ ] Medicine search API
- [ ] Order broadcasting system
- [ ] WebSocket real-time updates

**Phase 2 - Mobile Apps (Week 3-4):**
- [ ] Customer app initialization
- [ ] Customer app screens (Home, Search, Order)
- [ ] Pharmacy app initialization
- [ ] Pharmacy app screens (Dashboard, Alerts, Orders)
- [ ] Redux state management
- [ ] API integration
- [ ] Expo Go testing

**Phase 3 - Integrations (Week 5-6):**
- [ ] M-Pesa payment integration
- [ ] WhatsApp notifications
- [ ] SMS fallback
- [ ] Firebase Cloud Messaging
- [ ] Google Maps integration
- [ ] Rating system
- [ ] Earnings dashboard

**Phase 4 - Launch (Week 7-8):**
- [ ] End-to-end testing
- [ ] MEDS Pharmacy onboarding
- [ ] Backend deployment
- [ ] Mobile app builds (APK)
- [ ] Pilot launch in Kisumu

---

## 🎯 Success Criteria

**Technical:**
- ✅ Backend API responding < 200ms
- ✅ WebSocket real-time updates working
- ✅ Mobile apps working on Expo Go
- ✅ M-Pesa payments processing successfully
- ✅ Complete order flow (search → pay → pickup) working

**Business:**
- ✅ MEDS Pharmacy signed up
- ✅ 5+ pharmacies active in Kisumu
- ✅ 100+ successful test orders
- ✅ 4.5+ star average rating
- ✅ < 5% payment failure rate

---

## 📞 Support Resources

- **PRD:** See attached PRD.md for complete requirements
- **Expo Docs:** https://docs.expo.dev
- **M-Pesa Docs:** https://developer.safaricom.co.ke
- **Socket.IO Docs:** https://socket.io/docs

---

**Ready to build a healthcare revolution for Kenya! 🇰🇪💊**
