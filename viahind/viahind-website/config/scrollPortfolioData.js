// Scroll Portfolio Configuration
// Edit this file to customize your portfolio showcase

export const portfolioServices = [
  {
    id: 1,
    title: 'Web Applications',
    description: 'Building next-gen Web Applications while seamlessly integrating all facets of your business',
    features: [
      'Reliable Application Performance',
      'Exceptional Interface & Experience',
      'Static, Dynamic & E-commerce Apps'
    ],
    color: 'from-[#0066FF] to-[#0047B3]',
    clients: ['YOLO', 'DG Connect', 'Alhadaf', 'Shital Photo', 'Foodie'],
    deviceScreens: {
      laptop: '/api/placeholder/800/500',
      tablet: '/api/placeholder/600/800',
      mobile: '/api/placeholder/400/800'
    }
  },
  {
    id: 2,
    title: 'Web Designing',
    description: 'Creating stunning, user-centric designs that captivate and convert your audience',
    features: [
      'Modern UI/UX Design',
      'Responsive Layouts',
      'Brand Identity Integration'
    ],
    color: 'from-[#2EAE4D] to-[#1E7A33]',
    clients: ['Creative Co', 'Design Hub', 'Brand Studio', 'Visual Arts', 'Pixel Perfect'],
    deviceScreens: {
      laptop: '/api/placeholder/800/500',
      tablet: '/api/placeholder/600/800',
      mobile: '/api/placeholder/400/800'
    }
  },
  {
    id: 3,
    title: 'E-Commerce Website',
    description: 'Powerful online stores that drive sales and deliver exceptional shopping experiences',
    features: [
      'Secure Payment Integration',
      'Inventory Management',
      'Mobile-First Shopping Experience'
    ],
    color: 'from-[#00B8D4] to-[#008BA3]',
    clients: ['Shop Plus', 'Market Pro', 'E-Store', 'Retail Hub', 'Commerce King'],
    deviceScreens: {
      laptop: '/api/placeholder/800/500',
      tablet: '/api/placeholder/600/800',
      mobile: '/api/placeholder/400/800'
    }
  },
  {
    id: 4,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications that users love',
    features: [
      'iOS & Android Development',
      'Seamless Performance',
      'Intuitive User Interface'
    ],
    color: 'from-[#6B4FBB] to-[#4A3580]',
    clients: ['App Innovate', 'Mobile First', 'Tech Apps', 'Smart Solutions', 'App Masters'],
    deviceScreens: {
      laptop: '/api/placeholder/800/500',
      tablet: '/api/placeholder/600/800',
      mobile: '/api/placeholder/400/800'
    }
  },
  {
    id: 5,
    title: 'Desktop Applications',
    description: 'Robust desktop solutions for enterprise-level productivity and efficiency',
    features: [
      'Cross-Platform Compatibility',
      'High Performance',
      'Enterprise Security'
    ],
    color: 'from-[#E94E3D] to-[#B33A2C]',
    clients: ['Enterprise Tech', 'Desktop Pro', 'Software Inc', 'Business Apps', 'Pro Solutions'],
    deviceScreens: {
      laptop: '/api/placeholder/800/500',
      tablet: '/api/placeholder/600/800',
      mobile: '/api/placeholder/400/800'
    }
  },
  {
    id: 6,
    title: 'Search Engine Optimization',
    description: 'Data-driven SEO strategies that boost your visibility and organic traffic',
    features: [
      'Keyword Research & Strategy',
      'Technical SEO Optimization',
      'Content & Link Building'
    ],
    color: 'from-[#FF7A3D] to-[#CC5E2E]',
    clients: ['SEO Masters', 'Rank High', 'Search Pro', 'Digital Boost', 'Web Visibility'],
    deviceScreens: {
      laptop: '/api/placeholder/800/500',
      tablet: '/api/placeholder/600/800',
      mobile: '/api/placeholder/400/800'
    }
  },
  {
    id: 7,
    title: 'Social Media Marketing',
    description: 'Engaging social media campaigns that build communities and drive conversions',
    features: [
      'Multi-Platform Management',
      'Content Strategy & Creation',
      'Analytics & Reporting'
    ],
    color: 'from-[#FF7A3D] to-[#CC5E2E]',
    clients: ['Social Buzz', 'Media Masters', 'Viral Marketing', 'Engage Pro', 'Social Growth'],
    deviceScreens: {
      laptop: '/api/placeholder/800/500',
      tablet: '/api/placeholder/600/800',
      mobile: '/api/placeholder/400/800'
    }
  }
];

// Animation Configuration
export const animationConfig = {
  scrollSpeed: 1, // Lower = faster, Higher = slower
  transitionDuration: 1000, // milliseconds for color transitions
  snapDuration: 0.5, // seconds for snap animation
  snapEase: 'power2.inOut'
};

// Layout Configuration
export const layoutConfig = {
  showSkipButton: true,
  showProgressIndicator: true,
  maxClientsVisible: 4,
  enableClickNavigation: true
};
