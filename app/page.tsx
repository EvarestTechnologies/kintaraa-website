import Header from '@/components/Header'
import Footer from '@/components/Footer'
import {
  Shield,
  Users,
  MessageSquare,
  Heart,
  Lock,
  Network,
  Clock,
  FileText,
  Stethoscope,
  Scale,
  Phone,
  UserCircle,
  Home,
  Briefcase,
  Activity,
} from 'lucide-react'

export default function HomePage() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Anonymous Reporting',
      description: 'Report incidents safely and anonymously without revealing your identity.',
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Intelligent Matching',
      description: 'Get connected with the right service providers based on your specific needs.',
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Secure Messaging',
      description: 'Communicate with providers through end-to-end encrypted messaging.',
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Mental Health Resources',
      description: 'Access wellbeing resources, coping strategies, and mental health support.',
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: 'Safety Planning',
      description: 'Create personalized safety plans to protect yourself and your loved ones.',
    },
    {
      icon: <Network className="w-6 h-6" />,
      title: 'Care Coordination',
      description: 'Multiple providers working together for comprehensive support.',
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Real-Time Updates',
      description: 'Stay informed with real-time case updates and provider responses.',
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Data Security',
      description: 'Your data is encrypted and protected with industry-leading security.',
    },
  ]

  const providerTypes = [
    { icon: <Stethoscope className="w-8 h-8" />, name: 'Healthcare Providers' },
    { icon: <Scale className="w-8 h-8" />, name: 'Legal Professionals' },
    { icon: <Phone className="w-8 h-8" />, name: 'Law Enforcement' },
    { icon: <UserCircle className="w-8 h-8" />, name: 'Counselors & Therapists' },
    { icon: <Home className="w-8 h-8" />, name: 'Social Services' },
    { icon: <Briefcase className="w-8 h-8" />, name: 'GBV Rescue Organizations' },
    { icon: <Activity className="w-8 h-8" />, name: 'Community Health Workers' },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-light via-white to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-neutral-light text-primary rounded-full mb-8 border border-neutral-mid">
                <Shield className="w-4 h-4 mr-2" />
                <span className="text-sm font-medium font-body">Safe • Secure • Confidential</span>
              </div>

              {/* Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary-dark mb-6">
                Empowering GBV Survivors Through{' '}
                <span className="bg-gradient-purple bg-clip-text text-transparent">
                  Connected Care
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl text-neutral-dark mb-8 max-w-3xl mx-auto font-body">
                Connecting survivors with specialized service providers for comprehensive, coordinated support.
                Your safety, privacy, and wellbeing are our top priorities.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="px-8 py-4 bg-gradient-purple text-white rounded-full font-heading font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg">
                  Download on App Store
                  <span className="block text-sm font-normal opacity-90 font-body">Coming Soon</span>
                </button>
                <button className="px-8 py-4 bg-white text-primary border-2 border-primary rounded-full font-heading font-semibold hover:bg-neutral-light transition-colors duration-200">
                  Get it on Google Play
                  <span className="block text-sm font-normal font-body">Coming Soon</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-neutral-dark font-body">
                <div className="flex items-center gap-2">
                  <Lock className="w-4 h-4 text-success" />
                  <span>End-to-End Encrypted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-success" />
                  <span>Anonymous Option</span>
                </div>
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-success" />
                  <span>Trauma-Informed</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-primary-dark mb-6">
              Breaking Down Barriers to Support
            </h2>
            <p className="text-lg text-neutral-dark font-body mb-4">
              GBV survivors often face fragmented care, requiring them to navigate multiple service providers
              independently. This leads to gaps in support, repeated trauma, and difficulty accessing
              comprehensive help when they need it most.
            </p>
            <p className="text-lg text-neutral-dark font-body">
              Kintaraa changes this by connecting survivors with a coordinated network of specialized providers
              who work together to deliver comprehensive, trauma-informed care.
            </p>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-neutral-light">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">
                Everything You Need for Your Recovery Journey
              </h2>
              <p className="text-lg text-neutral-dark font-body max-w-3xl mx-auto">
                Kintaraa provides a comprehensive platform designed to support survivors at every step
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 border border-neutral-mid/20"
                >
                  <div className="w-12 h-12 bg-neutral-light rounded-lg flex items-center justify-center text-primary mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-primary-dark mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-dark font-body text-sm">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Provider Types */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-heading font-bold text-primary-dark mb-4">
                Comprehensive Network of Service Providers
              </h2>
              <p className="text-lg text-neutral-dark font-body max-w-3xl mx-auto">
                Connect with specialized providers across multiple disciplines for coordinated care
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {providerTypes.map((provider, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center p-6 bg-gradient-to-br from-neutral-light to-white rounded-xl hover:shadow-md transition-shadow duration-200 border border-neutral-mid/20"
                >
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary mb-4 shadow-sm border-2 border-primary/10">
                    {provider.icon}
                  </div>
                  <h3 className="text-center font-heading font-semibold text-primary-dark">
                    {provider.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* For Survivors / For Providers */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary-dark text-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* For Survivors */}
              <div>
                <div className="w-12 h-12 bg-primary-pink rounded-lg flex items-center justify-center mb-6">
                  <Heart className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-6">For Survivors</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-pink rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-body">✓</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Safe & Anonymous</h3>
                      <p className="text-neutral-light font-body text-sm">
                        Report incidents and seek help without revealing your identity
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-pink rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-body">✓</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Coordinated Care</h3>
                      <p className="text-neutral-light font-body text-sm">
                        Multiple providers working together for your wellbeing
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-pink rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-body">✓</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Comprehensive Support</h3>
                      <p className="text-neutral-light font-body text-sm">
                        Healthcare, legal, counseling, and social services in one place
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-primary-pink rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-body">✓</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Always There</h3>
                      <p className="text-neutral-light font-body text-sm">
                        Access resources and support whenever you need them
                      </p>
                    </div>
                  </li>
                </ul>
              </div>

              {/* For Providers */}
              <div>
                <div className="w-12 h-12 bg-secondary-teal rounded-lg flex items-center justify-center mb-6">
                  <Users className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-heading font-bold mb-6">For Service Providers</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-secondary-teal rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-body">✓</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Intelligent Case Routing</h3>
                      <p className="text-neutral-light font-body text-sm">
                        Get matched with cases that fit your expertise and capacity
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-secondary-teal rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-body">✓</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Secure Communication</h3>
                      <p className="text-neutral-light font-body text-sm">
                        Encrypted messaging with survivors and other providers
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-secondary-teal rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-body">✓</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Multi-Provider Coordination</h3>
                      <p className="text-neutral-light font-body text-sm">
                        Collaborate with other specialists for comprehensive care
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-secondary-teal rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                      <span className="text-sm font-body">✓</span>
                    </div>
                    <div>
                      <h3 className="font-heading font-semibold mb-1">Streamlined Workflow</h3>
                      <p className="text-neutral-light font-body text-sm">
                        Efficient case management tools to help more survivors
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-purple">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Join Us in Supporting Survivors
            </h2>
            <p className="text-xl font-body mb-8 opacity-90">
              Download Kintaraa today and be part of a coordinated care network dedicated to empowering GBV survivors
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-white text-primary rounded-full font-heading font-semibold hover:bg-neutral-light transition-colors duration-200 shadow-lg">
                Download on App Store
                <span className="block text-sm font-normal font-body opacity-70">Coming Soon</span>
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-heading font-semibold hover:bg-white/10 transition-colors duration-200">
                Get it on Google Play
                <span className="block text-sm font-normal opacity-70">Coming Soon</span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
