'use client';
import { useState } from 'react';

export default function TechStack() {
  const [activeTab, setActiveTab] = useState('frontend');

  const technologies = {
    frontend: ['React JS', 'HTML5', 'CSS3', 'JavaScript', 'Next.js', 'Vue.js', 'Angular', 'TypeScript'],
    backend: ['PHP', 'Node.js', '.NET', 'Python', 'Java', 'Ruby on Rails', 'Go', 'Laravel'],
    apps: ['Android', 'iOS', 'Flutter', 'React Native', 'Kotlin', 'Swift', 'Xamarin', 'Ionic'],
    enterprise: ['SAP', 'Microsoft Dynamics 365', 'Custom ERP', 'Custom CRM', 'Salesforce', 'Oracle', 'Odoo'],
    database: ['MySQL', 'MSSQL', 'MongoDB', 'Firebase', 'PostgreSQL', 'Redis', 'Cassandra', 'DynamoDB'],
    devops: ['CI/CD', 'AWS', 'Google Cloud', 'Azure', 'Docker', 'Kubernetes', 'Jenkins', 'GitLab'],
    payment: ['Razorpay', 'Paytm', 'PayPal', 'Stripe', 'CCAvenue', 'PayU', 'Instamojo', 'Cashfree']
  };

  const tabs = [
    { key: 'frontend', label: 'Frontend' },
    { key: 'backend', label: 'Backend' },
    { key: 'apps', label: 'Apps Development' },
    { key: 'enterprise', label: 'Enterprise Solutions' },
    { key: 'database', label: 'Database' },
    { key: 'devops', label: 'DevOps & Cloud' },
    { key: 'payment', label: 'Payment Gateways' }
  ];

  return (
    <section className="section-spacing bg-white">
      <div className="container-custom">
        <h2 className="text-center mb-4">Technology Stack We Master</h2>
        <p className="text-center text-gray-600 text-xl mb-12">Cutting-edge technologies for modern solutions</p>

        <div className="flex gap-4 mb-12 overflow-x-auto pb-3 justify-center flex-wrap">
          {tabs.map(tab => (
            <button
              key={tab.key}
              className={`px-8 py-3 rounded-full text-base font-semibold whitespace-nowrap transition-all duration-300 ${
                activeTab === tab.key 
                  ? 'bg-primary text-white border-2 border-primary' 
                  : 'bg-gray-100 text-dark border-2 border-transparent hover:bg-accent hover:text-primary'
              }`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
          {technologies[activeTab].map((tech, index) => (
            <div key={index} className="bg-accent p-6 rounded-xl text-center transition-all duration-300 cursor-pointer hover:scale-105 hover:bg-primary hover:shadow-2xl hover:shadow-primary/30 group">
              <span className="font-semibold text-primary group-hover:text-white transition-colors">{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
