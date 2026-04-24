export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Spacer for navigation */}
      <div className="h-20"></div>

      {/* Main Content - Text Section with Image Card */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Page Title - Professional Style */}
          <div className="mb-12">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">About Us</h1>
            <div className="w-20 h-1 bg-blue-600"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-12">
            {/* Text Content */}
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                At <strong>Viahind</strong>, we're much more than just your average IT service provider. As a customer-centric team of tech visionaries, we're dedicated to innovating new products that meet the evolving needs of our clients & delivering exceptional service that helps them stay ahead of the curve.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                Our goal is simple - to help our clients achieve their business goals & maximize RoI through reliable and creative web-based solutions that are tailored to their unique needs. With over a decade of industry experience, a dedicated team of 80+ innovators, you can rest assured that you're in safe hands.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6">
                But we're not content with just delivering great services - we're also dedicated to transforming digital journeys and shaping the future of business. From IT strategy consulting to custom software development, we're focused on delivering real results that drive real change. Whether you're an individual, a startup, or a Fortune 500 company, we're here to help you achieve your goals and realize your full potential.
              </p>

              <p className="text-base md:text-lg text-gray-900 font-semibold italic">
                Here at Viahind, Our motto is "Excellence for betterment of life."
              </p>
            </div>

            {/* Image Card */}
            <div>
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-12 flex items-center justify-center h-full min-h-[400px] border border-gray-100 shadow-xl">
                  <div className="text-center">
                    <div className="relative">
                      {/* Icon background circle */}
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl"></div>
                      
                      <svg className="relative w-40 h-40 mx-auto text-blue-600 mb-6 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                    </div>
                    <p className="text-blue-700 font-bold text-lg">Building Digital Solutions</p>
                    <p className="text-gray-600 text-sm mt-2">Innovation • Excellence • Growth</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Image Card Section 1 - Who We Are */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1">
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 rounded-2xl p-12 flex items-center justify-center h-80 border border-gray-100 shadow-xl">
                  <div className="text-center">
                    <div className="relative">
                      {/* Icon background */}
                      <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl"></div>
                      
                      <svg className="relative w-32 h-32 mx-auto text-blue-600 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <p className="text-blue-700 font-bold mt-4">Our Expert Team</p>
                    <p className="text-gray-600 text-sm mt-1">80+ Professionals</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Text */}
            <div className="order-1 lg:order-2">
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                We're a team of passionate problem solvers, tech enthusiasts, and digital innovators. We help clients win in the markets they operate in. Our mission is simple - deliver disruptive, industry-oriented technology solutions, software platforms, and IT services that transform our clients' businesses. At Viahind, there's no such thing as a one-size-fits-all solution. That's why we work closely with our clients to identify their challenges, needs, and goals.
              </p>
              
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                We're not just tech experts - we're digital alchemists who turn ideas into reality. We take pride in delivering digital experiences that are not just impactful but also awe-inspiring. So, whether you need a tech sidekick, a digital strategist, or a full-on IT superhero team, Viahind has got your back.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Card Section 2 - What We Do */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                From designing, developing, and marketing desktop, web, and mobile applications, customized ERP solutions, e-commerce websites and much more, we do it all. In simple terms, we are the one-stop-solution for all our clients' tech needs. We help bridge the gap between technology and business goals. Leveraging the latest technologies and industry best practices, our team of experts accelerates brands' digital transformation journey and navigates them towards the future. With our full-cycle product development services and strategic gap filling, we are committed to delivering exceptional value and unparalleled results to our clients.
              </p>
            </div>
            
            {/* Image */}
            <div>
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                
                {/* Main card */}
                <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 rounded-2xl p-12 flex items-center justify-center h-80 border border-gray-100 shadow-xl">
                  <div className="text-center">
                    <div className="relative">
                      {/* Icon background */}
                      <div className="absolute inset-0 bg-purple-500/10 rounded-full blur-2xl"></div>
                      
                      <svg className="relative w-32 h-32 mx-auto text-purple-600 drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <p className="text-purple-700 font-bold mt-4">Comprehensive Services</p>
                    <p className="text-gray-600 text-sm mt-1">End-to-End Solutions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">80+</div>
              <div className="text-sm text-gray-600">Expert Team</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">750+</div>
              <div className="text-sm text-gray-600">Projects</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">650+</div>
              <div className="text-sm text-gray-600">Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Our Vision</h2>
              <p className="text-base text-gray-600 leading-relaxed">
                To be the global leader in digital transformation, empowering businesses with cutting-edge technology solutions that drive innovation, efficiency, and sustainable growth.
              </p>
            </div>

            {/* Mission Card */}
            <div className="bg-white border border-gray-200 rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h2>
              <p className="text-base text-gray-600 leading-relaxed">
                To automate and excel business processes through smart IT solutions, delivering exceptional value and fostering long-term partnerships with our clients worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-10">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Innovation', desc: 'Continuous learning and improvement', icon: '💡' },
              { title: 'Accountability', desc: 'Complete transparency', icon: '✓' },
              { title: 'Success', desc: 'Collaborative excellence', icon: '🏆' },
              { title: 'Excellence', desc: 'Exceptional quality', icon: '⭐' }
            ].map((value, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
