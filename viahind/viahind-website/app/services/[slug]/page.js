import { use } from 'react';
import ServiceDetailClient from './ServiceDetailClient';

export async function generateStaticParams() {
  return [
    { slug: 'web-application' },
    { slug: 'web-designing' },
    { slug: 'ecommerce' },
    { slug: 'mobile' },
    { slug: 'windows' },
    { slug: 'saas' },
    { slug: 'seo' }
  ];
}

export default function ServiceDetailPage({ params }) {
  const resolvedParams = use(params);

  const serviceData = {
    'web-application': {
      title: 'Web Application Development',
      description: 'Build powerful, scalable web applications tailored to your business needs.',
      overview: 'We specialize in creating custom web applications using cutting-edge technologies. Our solutions are designed for performance, scalability, and user experience. From enterprise applications to customer-facing portals, we deliver robust solutions that drive business growth.',
      expertise: ['React & Next.js', 'Node.js & Express', 'MongoDB & PostgreSQL', 'AWS & Cloud Services', 'RESTful APIs', 'Microservices Architecture'],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'Redis', 'GraphQL'],
      workflow: [
        { step: 'Pre Discovery Phase', desc: 'Understanding your requirements and business goals' },
        { step: 'Discovery Phase', desc: 'Detailed analysis, planning and feasibility study' },
        { step: 'Architecture Design', desc: 'System architecture and technical design' },
        { step: 'Design Phase', desc: 'UI/UX design and interactive prototyping' },
        { step: 'Development & Testing', desc: 'Agile development with continuous testing' },
        { step: 'Delivery Phase', desc: 'Final review, documentation and handover' },
        { step: 'Launch & Deployment', desc: 'Production deployment and go-live' },
        { step: 'Support', desc: 'Ongoing maintenance and technical support' }
      ],
      clients: ['Acme Corp', 'TechVision', 'GlobalSoft', 'InnovateLabs', 'DataFlow'],
      values: [
        { title: 'Collaborative Consulting', desc: 'We work closely with you throughout the project lifecycle' },
        { title: 'Comprehensive Solutions', desc: 'End-to-end development services from concept to deployment' },
        { title: 'Committed Support', desc: '24/7 support and maintenance for peace of mind' }
      ]
    },
    'web-designing': {
      title: 'Web Designing',
      description: 'Beautiful, user-friendly designs that engage users and drive conversions.',
      overview: 'Our design team creates stunning, intuitive interfaces that captivate users and enhance brand identity. We focus on user experience, accessibility, and modern design principles to deliver websites that not only look great but perform exceptionally.',
      expertise: ['UI/UX Design', 'Responsive Design', 'Brand Identity', 'Prototyping & Wireframing', 'Design Systems', 'User Research'],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Adobe Photoshop', 'Adobe Illustrator', 'InVision', 'Zeplin', 'Principle'],
      workflow: [
        { step: 'Research', desc: 'User research and competitive analysis' },
        { step: 'Strategy', desc: 'Design strategy and information architecture' },
        { step: 'Wireframing', desc: 'Low-fidelity wireframes and user flows' },
        { step: 'Visual Design', desc: 'High-fidelity mockups and design system' },
        { step: 'Prototyping', desc: 'Interactive prototypes for testing' },
        { step: 'User Testing', desc: 'Usability testing and feedback' },
        { step: 'Refinement', desc: 'Design iterations and improvements' },
        { step: 'Handoff', desc: 'Developer handoff and design documentation' }
      ],
      clients: ['StyleHub', 'DesignCo', 'BrandWorks', 'CreativeMinds', 'PixelPerfect'],
      values: [
        { title: 'User-Centered Design', desc: 'Designs that prioritize user needs and behaviors' },
        { title: 'Brand Consistency', desc: 'Cohesive design language across all touchpoints' },
        { title: 'Conversion Focused', desc: 'Designs optimized for business goals and conversions' }
      ]
    },
    'ecommerce': {
      title: 'E-Commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      overview: 'Build powerful online stores that drive sales and provide seamless shopping experiences. Our e-commerce solutions include custom storefronts, secure payment processing, inventory management, and advanced analytics to help you grow your online business.',
      expertise: ['Custom Storefront Development', 'Payment Gateway Integration', 'Inventory Management', 'Order Processing', 'Multi-vendor Platforms', 'Mobile Commerce'],
      technologies: ['Shopify', 'WooCommerce', 'Magento', 'Next.js Commerce', 'Stripe', 'PayPal', 'Square', 'BigCommerce'],
      workflow: [
        { step: 'Business Analysis', desc: 'Understanding your e-commerce requirements' },
        { step: 'Platform Selection', desc: 'Choosing the right e-commerce platform' },
        { step: 'Store Design', desc: 'Custom storefront design and branding' },
        { step: 'Development', desc: 'Building features and integrations' },
        { step: 'Payment Setup', desc: 'Secure payment gateway integration' },
        { step: 'Testing', desc: 'Comprehensive testing and QA' },
        { step: 'Launch', desc: 'Store launch and go-live' },
        { step: 'Optimization', desc: 'Ongoing optimization and support' }
      ],
      clients: ['ShopMart', 'FashionHub', 'TechStore', 'GroceryOnline', 'LuxuryBoutique'],
      values: [
        { title: 'Seamless Experience', desc: 'Smooth shopping journey from browse to checkout' },
        { title: 'Secure Transactions', desc: 'PCI-compliant payment processing and data security' },
        { title: 'Scalable Growth', desc: 'Solutions that grow with your business' }
      ]
    },
    'mobile': {
      title: 'iOS/Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      overview: 'Create engaging mobile experiences that users love. We develop high-performance native and cross-platform mobile applications using the latest technologies. From concept to app store deployment, we handle every aspect of mobile app development.',
      expertise: ['iOS Development', 'Android Development', 'React Native', 'Flutter', 'Mobile UI/UX', 'App Store Optimization'],
      technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'Xcode', 'Android Studio', 'Firebase', 'TestFlight'],
      workflow: [
        { step: 'Ideation', desc: 'App concept and feature planning' },
        { step: 'Design', desc: 'Mobile-first UI/UX design' },
        { step: 'Development', desc: 'Native or cross-platform development' },
        { step: 'Testing', desc: 'Device testing and QA' },
        { step: 'Beta Testing', desc: 'User testing and feedback' },
        { step: 'App Store Submission', desc: 'Submission to app stores' },
        { step: 'Launch', desc: 'App launch and marketing' },
        { step: 'Updates', desc: 'Regular updates and maintenance' }
      ],
      clients: ['MobileFirst', 'AppVenture', 'SwiftApps', 'MobileTech', 'AppInnovate'],
      values: [
        { title: 'Native Performance', desc: 'Fast, responsive apps with native feel' },
        { title: 'Cross-Platform Efficiency', desc: 'Code once, deploy everywhere' },
        { title: 'App Store Success', desc: 'Optimized for app store approval and ranking' }
      ]
    },
    'windows': {
      title: 'Windows Forms Development',
      description: 'Powerful desktop applications for Windows, Mac, and Linux platforms.',
      overview: 'Build robust desktop applications with rich user interfaces and powerful functionality. Our desktop solutions leverage modern frameworks to create cross-platform applications that work seamlessly across Windows, Mac, and Linux.',
      expertise: ['Windows Forms', 'WPF Applications', 'Electron Apps', 'Cross-platform Development', 'Desktop UI/UX', 'System Integration'],
      technologies: ['.NET Framework', 'WPF', 'Electron', 'C#', 'Visual Studio', 'Qt', 'JavaFX', 'Node.js'],
      workflow: [
        { step: 'Requirements', desc: 'Desktop application requirements analysis' },
        { step: 'Architecture', desc: 'Application architecture and design' },
        { step: 'UI Design', desc: 'Desktop interface design' },
        { step: 'Development', desc: 'Application development and coding' },
        { step: 'Integration', desc: 'System and third-party integrations' },
        { step: 'Testing', desc: 'Comprehensive testing across platforms' },
        { step: 'Deployment', desc: 'Application packaging and deployment' },
        { step: 'Maintenance', desc: 'Updates and technical support' }
      ],
      clients: ['DesktopPro', 'EnterpriseApps', 'SystemWorks', 'DesktopSolutions', 'AppMaster'],
      values: [
        { title: 'Rich Functionality', desc: 'Full-featured desktop applications' },
        { title: 'Cross-Platform', desc: 'Works on Windows, Mac, and Linux' },
        { title: 'Offline Capability', desc: 'Applications that work without internet' }
      ]
    },
    'saas': {
      title: 'SaaS Development',
      description: 'Scalable Software-as-a-Service solutions with subscription management.',
      overview: 'Build and launch your SaaS product with our comprehensive development services. We create multi-tenant, scalable cloud applications with subscription billing, user management, and analytics. From MVP to enterprise-scale SaaS platforms.',
      expertise: ['Multi-tenancy Architecture', 'Subscription Billing', 'Cloud Infrastructure', 'API Development', 'SaaS Security', 'Analytics & Reporting'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Stripe', 'Auth0', 'PostgreSQL', 'Redis', 'Kubernetes', 'Terraform', 'Microservices'],
      workflow: [
        { step: 'Product Strategy', desc: 'SaaS product planning and strategy' },
        { step: 'MVP Development', desc: 'Minimum viable product development' },
        { step: 'Infrastructure', desc: 'Cloud infrastructure setup' },
        { step: 'Feature Development', desc: 'Core features and functionality' },
        { step: 'Billing Integration', desc: 'Subscription and payment setup' },
        { step: 'Security', desc: 'Security implementation and compliance' },
        { step: 'Launch', desc: 'Product launch and onboarding' },
        { step: 'Scale', desc: 'Scaling and optimization' }
      ],
      clients: ['CloudSaaS', 'SoftwareHub', 'SaaSVenture', 'PlatformPro', 'CloudApps'],
      values: [
        { title: 'Scalable Architecture', desc: 'Built to handle growth from day one' },
        { title: 'Recurring Revenue', desc: 'Subscription billing and management' },
        { title: 'Cloud Native', desc: 'Leveraging cloud infrastructure for reliability' }
      ]
    },
    'seo': {
      title: 'SEO/SEM Services',
      description: 'Comprehensive digital marketing strategies to grow your online presence.',
      overview: 'Boost your online visibility and drive qualified traffic with our SEO and SEM services. We combine technical SEO, content optimization, and paid advertising to help you rank higher, attract more visitors, and convert them into customers.',
      expertise: ['SEO Optimization', 'Google Ads', 'Social Media Marketing', 'Content Marketing', 'Link Building', 'Analytics & Reporting'],
      technologies: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Moz', 'Google Ads', 'Facebook Ads', 'Screaming Frog'],
      workflow: [
        { step: 'Audit', desc: 'Comprehensive SEO audit and analysis' },
        { step: 'Strategy', desc: 'SEO/SEM strategy development' },
        { step: 'Keyword Research', desc: 'Target keyword identification' },
        { step: 'On-Page SEO', desc: 'Website optimization' },
        { step: 'Content Creation', desc: 'SEO-optimized content development' },
        { step: 'Link Building', desc: 'Quality backlink acquisition' },
        { step: 'Campaign Management', desc: 'PPC campaign setup and management' },
        { step: 'Reporting', desc: 'Performance tracking and reporting' }
      ],
      clients: ['MarketPro', 'SEOExperts', 'DigitalGrowth', 'SearchMasters', 'AdVenture'],
      values: [
        { title: 'Data-Driven Results', desc: 'Strategies based on analytics and insights' },
        { title: 'Transparent Reporting', desc: 'Clear metrics and ROI tracking' },
        { title: 'Long-term Growth', desc: 'Sustainable organic growth strategies' }
      ]
    }
  };

  const service = serviceData[resolvedParams.slug] || serviceData['web-application'];

  // If service not found, return 404 or redirect
  if (!serviceData[resolvedParams.slug]) {
    console.warn(`Service not found: ${resolvedParams.slug}, using default`);
  }

  return <ServiceDetailClient service={service} slug={resolvedParams.slug} />;
}
