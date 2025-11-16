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
        <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden gradient-mesh">
          {/* Floating Blobs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 blob opacity-60 blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary-pink/10 blob-2 opacity-60 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-secondary/10 blob opacity-40 blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center max-w-5xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-5 py-2.5 glass text-primary rounded-full mb-10 shadow-lg fade-in-up">
                <Shield className="w-5 h-5 mr-2" />
                <span className="text-sm font-semibold font-body">Safe • Secure • Confidential</span>
              </div>

              {/* Headline */}
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-heading font-bold text-primary-dark mb-8 leading-tight fade-in-up">
                Empowering Survivors Through{' '}
                <span className="bg-gradient-purple bg-clip-text text-transparent block mt-2">
                  Connected Care
                </span>
              </h1>

              {/* Subheadline */}
              <p className="text-xl sm:text-2xl text-neutral-dark mb-12 max-w-3xl mx-auto font-body leading-relaxed fade-in-up">
                Connecting survivors with specialized service providers for comprehensive, coordinated support.
                Your safety, privacy, and wellbeing are our top priorities.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-5 justify-center mb-16 fade-in-up">
                <button className="group px-10 py-5 bg-gradient-purple text-white rounded-full font-heading font-bold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 shadow-xl">
                  <span className="block">Download on App Store</span>
                  <span className="block text-sm font-normal opacity-90 font-body mt-1">Coming Soon</span>
                </button>
                <button className="group px-10 py-5 glass text-primary rounded-full font-heading font-bold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 border-2 border-primary/20">
                  <span className="block">Get it on Google Play</span>
                  <span className="block text-sm font-normal font-body mt-1 opacity-70">Coming Soon</span>
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap justify-center items-center gap-8 text-base text-neutral-dark font-body fade-in-up">
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
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary-dark mb-6">
                Everything You Need for Your Recovery Journey
              </h2>
              <p className="text-xl text-neutral-dark font-body max-w-3xl mx-auto leading-relaxed">
                A comprehensive platform designed to support survivors at every step
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="glass p-8 rounded-3xl hover-lift cursor-pointer group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-16 h-16 bg-gradient-purple rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-dark mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-dark font-body leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Provider Types */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-neutral-light to-white relative overflow-hidden">
          {/* Decorative blob */}
          <div className="absolute -bottom-20 -right-20 w-96 h-96 bg-secondary/10 blob opacity-50 blur-3xl"></div>

          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl sm:text-5xl font-heading font-bold text-primary-dark mb-6">
                Comprehensive Network of Service Providers
              </h2>
              <p className="text-xl text-neutral-dark font-body max-w-3xl mx-auto leading-relaxed">
                Connect with specialized providers across multiple disciplines for coordinated care
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {providerTypes.map((provider, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center p-8 glass rounded-3xl hover-lift cursor-pointer"
                >
                  <div className="w-20 h-20 bg-gradient-purple rounded-full flex items-center justify-center text-white mb-5 shadow-xl group-hover:scale-110 transition-transform duration-300">
                    {provider.icon}
                  </div>
                  <h3 className="text-center font-heading font-bold text-primary-dark text-lg">
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
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-purple overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-80 h-80 bg-white/10 blob opacity-60 blur-2xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/20 blob-2 opacity-60 blur-2xl"></div>

          <div className="relative max-w-5xl mx-auto text-center text-white">
            <div className="glass-dark p-12 rounded-[3rem] backdrop-blur-xl">
              <h2 className="text-5xl sm:text-6xl font-heading font-bold mb-8 leading-tight">
                Join Us in Supporting Survivors
              </h2>
              <p className="text-xl sm:text-2xl font-body mb-12 opacity-90 leading-relaxed max-w-3xl mx-auto">
                Be part of a coordinated care network dedicated to empowering GBV survivors
              </p>
              <div className="flex flex-col sm:flex-row gap-5 justify-center">
                <button className="px-10 py-5 bg-white text-primary rounded-full font-heading font-bold text-lg hover:scale-105 hover:shadow-2xl transition-all duration-300 shadow-xl">
                  <span className="block">Download on App Store</span>
                  <span className="block text-sm font-normal opacity-70 font-body mt-1">Coming Soon</span>
                </button>
                <button className="px-10 py-5 bg-transparent border-2 border-white/50 text-white rounded-full font-heading font-bold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300 backdrop-blur-sm">
                  <span className="block">Get it on Google Play</span>
                  <span className="block text-sm font-normal opacity-70 font-body mt-1">Coming Soon</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
