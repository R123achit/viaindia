import ServiceDetailClient from './ServiceDetailClient';

export async function generateStaticParams() {
  return [
    // Web Development
    { slug: 'web-application' },
    { slug: 'web-designing' },
    { slug: 'ecommerce' },
    // Mobile Application
    { slug: 'ios' },
    { slug: 'android' },
    { slug: 'flutter' },
    { slug: 'react-native' },
    { slug: 'pwa' },
    // Desktop App
    { slug: 'windows-forms' },
    { slug: 'wpf' },
    // Enterprise Solution
    { slug: 'saas' },
    { slug: 'crm' },
    { slug: 'erp' },
    { slug: 'hrms' },
    { slug: 'inventory' },
    { slug: 'payroll' },
    // Enterprise Integration
    { slug: 'sap' },
    { slug: 'microsoft' },
    { slug: 'zoho' },
    { slug: 'whatsapp' },
    { slug: 'hardware' },
    // Digital Marketing
    { slug: 'sem' },
    { slug: 'seo' },
    { slug: 'smm' },
    { slug: 'smo' },
    // ERP Implementation
    { slug: 'sap-impl' },
    { slug: 'microsoft-impl' },
    { slug: 'zoho-impl' }
  ];
}

export default async function ServiceDetailPage({ params }) {
  const resolvedParams = await params;

  const serviceData = {
    // Web Development Services
    'web-application': {
      title: 'Web Application',
      description: 'We create and deliver flawless Web Application that accelerates business processes and enhances productivity along with business efficiency.',
      overview: 'Our web application development services focus on creating robust, scalable, and secure applications tailored to your business needs. We use cutting-edge technologies and best practices to ensure your application performs optimally and provides an exceptional user experience.',
      expertise: ['Custom Web Application Development', 'Progressive Web Apps (PWA)', 'Single Page Applications (SPA)', 'RESTful API Development', 'GraphQL Integration', 'Database Design & Optimization'],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Redis', 'GraphQL'],
      workflow: [
        { step: 'Discovery Phase', desc: 'Understanding your requirements and business goals' },
        { step: 'Planning & Design', desc: 'Architecture design and technical planning' },
        { step: 'Development', desc: 'Agile development with continuous testing' },
        { step: 'Testing & QA', desc: 'Comprehensive testing and quality assurance' },
        { step: 'Deployment', desc: 'Production deployment and go-live' },
        { step: 'Support', desc: 'Ongoing maintenance and technical support' }
      ],
      clients: ['TechCorp Solutions', 'Global Finance Ltd', 'HealthCare Plus', 'EduTech Systems', 'RetailPro Inc'],
      values: [
        { title: 'Scalable Solutions', desc: 'Built to grow with your business needs' },
        { title: 'Modern Technology', desc: 'Latest frameworks and best practices' },
        { title: 'Fast Delivery', desc: 'Agile methodology for rapid development' }
      ]
    },
    'web-designing': {
      title: 'Web Designing',
      description: 'Our core beliefs in good website designs are consistency, colors, typography, imagery, simplicity, and functionality.',
      overview: 'We create visually stunning and user-friendly web designs that not only look great but also drive conversions. Our design process focuses on understanding your brand, target audience, and business goals to deliver designs that truly resonate.',
      expertise: ['User Interface (UI) Design', 'User Experience (UX) Design', 'Responsive Web Design', 'Mobile-First Design', 'Interactive Prototyping', 'Brand Identity Design'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'InVision', 'Photoshop', 'Illustrator', 'After Effects', 'Principle'],
      workflow: [
        { step: 'Research', desc: 'User research and competitive analysis' },
        { step: 'Strategy', desc: 'Design strategy and information architecture' },
        { step: 'Wireframing', desc: 'Low-fidelity wireframes and user flows' },
        { step: 'Visual Design', desc: 'High-fidelity mockups and design system' },
        { step: 'Prototyping', desc: 'Interactive prototypes for testing' },
        { step: 'Handoff', desc: 'Developer handoff and design documentation' }
      ],
      clients: ['Fashion Forward', 'Creative Agency Co', 'Luxury Hotels Group'],
      values: [
        { title: 'User-Centered Design', desc: 'Designs that prioritize user needs and behaviors' },
        { title: 'Brand Consistency', desc: 'Cohesive design language across all touchpoints' },
        { title: 'Conversion Focused', desc: 'Designs optimized for business goals' }
      ]
    },
    'ecommerce': {
      title: 'E-Commerce',
      description: 'A Functional E-Commerce website can help increase sales by reaching customers who search for products online.',
      overview: 'Our e-commerce solutions are designed to maximize conversions and provide seamless shopping experiences. From product catalogs to payment processing, we handle every aspect of your online store.',
      expertise: ['Custom E-Commerce Development', 'Shopping Cart Solutions', 'Payment Gateway Integration', 'Order Management System', 'Inventory Management', 'Product Catalog Management'],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Custom Solutions', 'Stripe', 'PayPal', 'Razorpay', 'BigCommerce'],
      workflow: [
        { step: 'Business Analysis', desc: 'Understanding your e-commerce requirements' },
        { step: 'Platform Selection', desc: 'Choosing the right e-commerce platform' },
        { step: 'Store Design', desc: 'Custom storefront design and branding' },
        { step: 'Development', desc: 'Building features and integrations' },
        { step: 'Payment Setup', desc: 'Secure payment gateway integration' },
        { step: 'Launch', desc: 'Store launch and optimization' }
      ],
      clients: ['ShopEasy Online', 'Fashion Boutique', 'Electronics Hub', 'Organic Foods Co', 'Sports Gear Pro', 'Home Decor Plus'],
      values: [
        { title: 'Seamless Experience', desc: 'Smooth shopping journey from browse to checkout' },
        { title: 'Secure Transactions', desc: 'PCI-compliant payment processing' },
        { title: 'Scalable Growth', desc: 'Solutions that grow with your business' }
      ]
    },
    // Mobile Application Services
    'ios': {
      title: 'iOS Development',
      description: 'We have a great team of iOS mobile app developers to support you at every stage of the process, from business validation and ideation to design, development, and release.',
      overview: 'Our iOS development team specializes in creating high-performance, intuitive applications for iPhone and iPad. We leverage the latest iOS technologies and Apple design guidelines to deliver apps that users love.',
      expertise: ['Native iOS Development', 'Swift & SwiftUI', 'App Store Optimization', 'Push Notifications', 'In-App Purchases', 'Core Data Integration'],
      technologies: ['Swift', 'SwiftUI', 'Xcode', 'Firebase', 'Core Data', 'CloudKit', 'ARKit', 'HealthKit'],
      workflow: [
        { step: 'Ideation', desc: 'App concept and feature planning' },
        { step: 'Design', desc: 'iOS-specific UI/UX design' },
        { step: 'Development', desc: 'Native iOS development' },
        { step: 'Testing', desc: 'Device testing and QA' },
        { step: 'Beta Testing', desc: 'TestFlight beta testing' },
        { step: 'Launch', desc: 'App Store submission and launch' }
      ],
      clients: ['Fitness Tracker Pro', 'Banking Plus', 'Food Delivery Now', 'Travel Companion', 'Social Connect', 'Learning Hub'],
      values: [
        { title: 'Native Performance', desc: 'Fast, responsive apps with native feel' },
        { title: 'Apple Guidelines', desc: 'Following Apple Human Interface Guidelines' },
        { title: 'App Store Success', desc: 'Optimized for approval and ranking' }
      ]
    },
    'android': {
      title: 'Android Development',
      description: 'We offer high ROI Customized Android app development with faster deployment and enhanced security features.',
      overview: 'Our Android development expertise covers the entire Android ecosystem, from smartphones to tablets and wearables. We create feature-rich applications that work seamlessly across all Android devices.',
      expertise: ['Native Android Development', 'Kotlin & Java', 'Material Design', 'Google Play Services', 'Firebase Integration', 'Room Database'],
      technologies: ['Kotlin', 'Java', 'Android Studio', 'Firebase', 'Room', 'Retrofit', 'Dagger', 'Jetpack'],
      workflow: [
        { step: 'Planning', desc: 'Android app planning and architecture' },
        { step: 'Design', desc: 'Material Design implementation' },
        { step: 'Development', desc: 'Native Android development' },
        { step: 'Testing', desc: 'Multi-device testing' },
        { step: 'Beta Testing', desc: 'Google Play beta testing' },
        { step: 'Launch', desc: 'Play Store submission' }
      ],
      clients: ['Ride Share App', 'E-Wallet Solutions', 'News Portal', 'Gaming Platform', 'Healthcare Connect'],
      values: [
        { title: 'Wide Reach', desc: 'Access to billions of Android users' },
        { title: 'Material Design', desc: 'Beautiful, consistent user interfaces' },
        { title: 'Cross-device', desc: 'Works on phones, tablets, and wearables' }
      ]
    },
    'flutter': {
      title: 'Flutter Development',
      description: 'Cross-compile apps can be a better choice for running apps on multiple platforms. Therefore, Flutter offers more dynamic and faster app development and reducing in cost.',
      overview: 'Flutter enables us to build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. This approach significantly reduces development time and costs while maintaining high performance.',
      expertise: ['Cross-Platform Development', 'Single Codebase', 'Hot Reload', 'Rich Widget Library', 'Native Performance', 'Custom UI Components'],
      technologies: ['Flutter', 'Dart', 'Firebase', 'Provider', 'Bloc', 'GetX', 'Dio', 'Hive'],
      workflow: [
        { step: 'Planning', desc: 'Cross-platform app planning' },
        { step: 'Design', desc: 'Custom widget design' },
        { step: 'Development', desc: 'Flutter development with hot reload' },
        { step: 'Testing', desc: 'Multi-platform testing' },
        { step: 'Optimization', desc: 'Performance optimization' },
        { step: 'Deployment', desc: 'Deploy to iOS and Android' }
      ],
      clients: ['Multi-Platform Startup', 'Retail Chain App', 'Event Management', 'Real Estate Portal', 'Booking System', 'Fitness Community'],
      values: [
        { title: 'Cost Effective', desc: 'Single codebase for multiple platforms' },
        { title: 'Fast Development', desc: 'Hot reload for rapid iteration' },
        { title: 'Beautiful UI', desc: 'Customizable widgets and animations' }
      ]
    },
    'react-native': {
      title: 'React Native Development',
      description: 'React Native Mobile app development is the best choice for implementing functional and beautiful UI applications. An application will allow you to achieve remarkable efficiency.',
      overview: 'React Native allows us to leverage JavaScript and React to build truly native mobile applications. Our team creates high-quality apps that provide native performance and user experience.',
      expertise: ['Cross-Platform Apps', 'JavaScript/TypeScript', 'React Ecosystem', 'Native Modules', 'Third-party Libraries', 'Hot Reloading'],
      technologies: ['React Native', 'TypeScript', 'Redux', 'React Navigation', 'Expo', 'Firebase', 'AsyncStorage'],
      workflow: [
        { step: 'Setup', desc: 'React Native project setup' },
        { step: 'Development', desc: 'Component-based development' },
        { step: 'Integration', desc: 'Native module integration' },
        { step: 'Testing', desc: 'Cross-platform testing' },
        { step: 'Optimization', desc: 'Performance tuning' },
        { step: 'Deployment', desc: 'App store deployment' }
      ],
      clients: ['Social Network App', 'Marketplace Platform', 'Music Streaming', 'Task Manager Pro'],
      values: [
        { title: 'React Ecosystem', desc: 'Leverage React knowledge and libraries' },
        { title: 'Native Performance', desc: 'True native app performance' },
        { title: 'Fast Iteration', desc: 'Quick development and updates' }
      ]
    },
    'pwa': {
      title: 'Progressive Web App (PWA)',
      description: 'We Make web applications function similarly to mobile or desktop apps for a better user experience.',
      overview: 'Progressive Web Apps combine the best of web and mobile apps. They work offline, load instantly, and provide an app-like experience without requiring installation from an app store.',
      expertise: ['Offline Functionality', 'App-like Experience', 'Push Notifications', 'Fast Loading', 'Responsive Design', 'Service Workers'],
      technologies: ['React', 'Vue.js', 'Service Workers', 'Workbox', 'IndexedDB', 'Web App Manifest', 'Lighthouse'],
      workflow: [
        { step: 'Planning', desc: 'PWA strategy and planning' },
        { step: 'Development', desc: 'Progressive enhancement' },
        { step: 'Service Workers', desc: 'Offline functionality setup' },
        { step: 'Testing', desc: 'Cross-browser testing' },
        { step: 'Optimization', desc: 'Performance optimization' },
        { step: 'Deployment', desc: 'PWA deployment' }
      ],
      clients: ['News Portal PWA', 'E-commerce Lite', 'Weather App'],
      values: [
        { title: 'No Installation', desc: 'Works without app store installation' },
        { title: 'Offline Access', desc: 'Works without internet connection' },
        { title: 'Low Data Usage', desc: 'Minimal data consumption' }
      ]
    }
  };

  const service = serviceData[resolvedParams.slug] || serviceData['web-development'];

  // If service not found, return 404 or redirect
  if (!serviceData[resolvedParams.slug]) {
    console.warn(`Service not found: ${resolvedParams.slug}, using default`);
  }

  return <ServiceDetailClient service={service} slug={resolvedParams.slug} />;
}
