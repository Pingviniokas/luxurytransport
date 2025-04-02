import Image from "next/image";
import { MotionDiv } from '../components/MotionDiv';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center">
        <div className="absolute inset-0 z-0 bg-black">
        <Image
            src="/hero-bg.webp"
            alt="Luxury Car"
            fill
            className="object-cover"
          priority
        />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-0"></div>
        <div className="px-8 md:px-20 lg:px-28 w-full relative z-10 text-white flex flex-col md:flex-row justify-between items-center">
          <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl content-spacing bg-black/20 backdrop-blur-sm p-8 border border-white/10"
          >
            <h1 className="hero-heading text-left">
              Experience <span className="text-gold">Luxury</span><br />
              On Wheels
            </h1>
            <p className="hero-subtext text-left">
              Discover our exclusive collection of premium vehicles for your next journey. Unparalleled comfort and service await.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-start">
              <button className="btn-primary uppercase">
                Explore Our Fleet
              </button>
              <button className="btn-outline uppercase bg-white/20 backdrop-blur-sm text-white border-gold hover:bg-gold/20">
                Book Consultation
              </button>
            </div>
          </MotionDiv>
          
          {/* Availability Check Form - Glassmorphism Style */}
          <MotionDiv
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-10 md:mt-0 w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8"
          >
            <div className="mb-6">
              <h3 className="text-xl font-montserrat font-medium text-white mb-2">Quick Reservation</h3>
              <div className="h-0.5 w-12 bg-gold"></div>
            </div>
            
            <form className="space-y-5">
              <div>
                <label className="block text-white text-sm mb-2 font-light" htmlFor="pickup-date">
                  Pickup Date
                </label>
                <div className="relative">
                  <input 
                    type="date" 
                    id="pickup-date"
                    className="w-full bg-white/5 border border-white/10 text-white p-3 focus:outline-none focus:border-gold transition-colors placeholder-white/50 font-light"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white text-sm mb-2 font-light" htmlFor="pickup-time">
                    Pickup Time
                  </label>
                  <div className="relative">
                    <input 
                      type="time" 
                      id="pickup-time"
                      className="w-full bg-white/5 border border-white/10 text-white p-3 focus:outline-none focus:border-gold transition-colors placeholder-white/50 font-light"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm mb-2 font-light" htmlFor="hours">
                    Duration (hours)
                  </label>
                  <div className="relative">
                    <select 
                      id="hours"
                      className="w-full bg-white/5 border border-white/10 text-white p-3 focus:outline-none focus:border-gold transition-colors font-light appearance-none"
                    >
                      <option>4</option>
                      <option>8</option>
                      <option>12</option>
                      <option>24</option>
                    </select>
                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-white text-sm mb-2 font-light" htmlFor="vehicle-type">
                  Vehicle Type
                </label>
                <div className="relative">
                  <select 
                    id="vehicle-type"
                    className="w-full bg-white/5 border border-white/10 text-white p-3 focus:outline-none focus:border-gold transition-colors font-light appearance-none"
                  >
                    <option>Luxury Sedan</option>
                    <option>Executive SUV</option>
                    <option>Sports Car</option>
                    <option>Limousine</option>
                  </select>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
              
              <div>
                <label className="block text-white text-sm mb-2 font-light" htmlFor="location">
                  Pickup Location
                </label>
                <div className="relative">
                  <input 
                    type="text" 
                    id="location" 
                    placeholder="Enter address or location"
                    className="w-full bg-white/5 border border-white/10 text-white p-3 focus:outline-none focus:border-gold transition-colors placeholder-white/50 font-light"
                  />
                </div>
              </div>
              
              <button className="w-full bg-gold hover:bg-gold-dark text-black py-4 transition-colors duration-300 font-montserrat font-medium tracking-wider uppercase text-sm">
                Check Availability
              </button>
              
              <div className="text-center text-xs text-white/70 font-light">
                No credit card required for availability check
              </div>
            </form>
          </MotionDiv>
        </div>
        <div className="absolute bottom-12 left-0 right-0 flex justify-center">
          <div className="animate-bounce">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Featured Vehicles Section */}
      <section className="section-spacing bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="section-title mt-3">Featured Vehicles</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Choose from our exclusive selection of premium vehicles for your next journey.</p>
          </div>
          
          {/* Category: Luxury Sedans */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-montserrat border-b-2 border-gold pb-1">Luxury Sedans</h3>
              <a href="/fleet" className="text-sm text-gold hover:text-gold-dark transition-colors font-montserrat font-medium tracking-wider flex items-center">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Rolls-Royce Ghost",
                  price: "From €300/hour",
                  image: "/rolls-royce.jpg",
                  features: ["Professional Chauffeur", "Premium Interior"],
                },
                {
                  name: "Bentley Flying Spur W12",
                  price: "From €400/hour",
                  image: "/bentley.jpeg",
                  features: ["Professional Chauffeur", "Handcrafted Interior"],
                },
                {
                  name: "Mercedes-Benz S-Class W223",
                  price: "From €300/hour",
                  image: "/mercedes-s.jpeg",
                  features: ["Professional Chauffeur", "Executive Experience"],
                },
                {
                  name: "Audi A8 L",
                  price: "From €250/hour",
                  image: "/mercedes-s.jpeg", // Placeholder image
                  features: ["Professional Chauffeur", "Luxury Interior"],
                },
              ].map((vehicle, index) => (
                <MotionDiv
                  key={vehicle.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 w-[350px] mx-auto"
                >
                  <div className="relative h-64 w-full">
          <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-black py-1 px-2 text-white text-xs font-light">
                      {vehicle.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2 font-montserrat">{vehicle.name}</h3>
                    <ul className="space-y-1 mb-3">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs text-gray-600 font-light">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-2 border border-gold text-black hover:bg-gold/10 transition-colors duration-300 font-montserrat font-medium text-xs tracking-wider uppercase">
                      Reserve
                    </button>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
          
          {/* Separator */}
          <div className="border-t border-gray-100 my-12"></div>
          
          {/* Category: SUVs & G-Class */}
          <div className="mb-10">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-montserrat border-b-2 border-gold pb-1">Luxury SUVs</h3>
              <a href="/fleet" className="text-sm text-gold hover:text-gold-dark transition-colors font-montserrat font-medium tracking-wider flex items-center">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Mercedes-Benz G500",
                  price: "From €90/hour",
                  image: "/mb-g500.png",
                  features: ["Professional Chauffeur", "Iconic Design"],
                },
                {
                  name: "Mercedes-Benz GL 6.3 AMG",
                  price: "From €90/hour",
                  image: "/gl-63-amg-2016.jpg",
                  features: ["Professional Chauffeur", "High Performance"],
                },
                {
                  name: "Mercedes-Benz GLE 350d",
                  price: "From €70/hour",
                  image: "/gle-350d.jpg",
                  features: ["Professional Chauffeur", "All-Wheel Drive"],
                },
                {
                  name: "Range Rover Autobiography",
                  price: "From €95/hour",
                  image: "/gle-350d.jpg", // Placeholder image
                  features: ["Professional Chauffeur", "Premium Luxury"],
                },
              ].map((vehicle, index) => (
                <MotionDiv
                  key={vehicle.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 w-[350px] mx-auto"
                >
                  <div className="relative h-64 w-full">
          <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-black py-1 px-2 text-white text-xs font-light">
                      {vehicle.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2 font-montserrat">{vehicle.name}</h3>
                    <ul className="space-y-1 mb-3">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs text-gray-600 font-light">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-2 border border-gold text-black hover:bg-gold/10 transition-colors duration-300 font-montserrat font-medium text-xs tracking-wider uppercase">
                      Reserve
                    </button>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
          
          {/* Separator */}
          <div className="border-t border-gray-100 my-12"></div>
          
          {/* Category: Group Transportation */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-montserrat border-b-2 border-gold pb-1">Group Transportation</h3>
              <a href="/fleet" className="text-sm text-gold hover:text-gold-dark transition-colors font-montserrat font-medium tracking-wider flex items-center">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  name: "Mercedes-Benz VIP Sprinter",
                  price: "From €500/3 hours",
                  image: "/sprinter-vip.jpg",
                  features: ["Professional Chauffeur", "6 Passenger Seats"],
                },
                {
                  name: "Mercedes-Benz V-Class",
                  price: "From €100/hour",
                  image: "/mb-v-extra-long.jpg",
                  features: ["Professional Chauffeur", "8 Passenger Seats"],
                },
                {
                  name: "Mercedes-Benz Sprinter",
                  price: "From €110/hour",
                  image: "/sprinter.jpg",
                  features: ["Professional Chauffeur", "8+1 Seating Capacity"],
                },
                {
                  name: "Minibus Executive",
                  price: "From €150/hour",
                  image: "/sprinter.jpg", // Placeholder image
                  features: ["Professional Chauffeur", "16 Passenger Seats"],
                },
              ].map((vehicle, index) => (
                <MotionDiv
                  key={vehicle.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="group bg-white border border-gray-100 overflow-hidden hover:shadow-md transition-all duration-300 w-[350px] mx-auto"
                >
                  <div className="relative h-64 w-full">
          <Image
                      src={vehicle.image}
                      alt={vehicle.name}
                      fill
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 right-3 bg-black py-1 px-2 text-white text-xs font-light">
                      {vehicle.price}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium mb-2 font-montserrat">{vehicle.name}</h3>
                    <ul className="space-y-1 mb-3">
                      {vehicle.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-xs text-gray-600 font-light">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-gold mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full py-2 border border-gold text-black hover:bg-gold/10 transition-colors duration-300 font-montserrat font-medium text-xs tracking-wider uppercase">
                      Reserve
                    </button>
                  </div>
                </MotionDiv>
              ))}
            </div>
          </div>
          
          <div className="text-center mt-8">
            <a href="/fleet" className="inline-flex items-center btn-primary uppercase">
              View Complete Fleet
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-sm text-gold uppercase font-montserrat tracking-wider">Our Offerings</span>
            <h2 className="section-title mt-3">Experience Exceptional Service</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Luxury Car Rental",
                description: "Choose from our selection of premium vehicles - from economy class to luxury executive models, all maintained to perfection.",
                icon: "🏎️",
              },
              {
                title: "Minibus Rental",
                description: "We offer new, spacious Mercedes minibuses with up to 8 seats, available with automatic or manual transmission.",
                icon: "🚐",
              },
              {
                title: "Passenger Transportation",
                description: "Travel comfortably and safely across Lithuania, Poland, Latvia, Belarus and other countries for business or leisure.",
                icon: "✈️",
              },
            ].map((feature, index) => (
              <MotionDiv
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 border border-gray-100 hover:border-gold/30 hover:shadow-xl transition-all duration-300 rounded-xl bg-white content-spacing"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="card-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="section-spacing bg-black text-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-sm text-gold uppercase font-montserrat tracking-wider">Client Reviews</span>
            <h2 className="section-title mt-3 text-white">What Our Clients Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote: "Absolutely exceptional service. The vehicle was immaculate and the chauffeur was professional and courteous. Will definitely use again for corporate events.",
                author: "James Wilson",
                position: "CEO, TechGlobal Inc.",
              },
              {
                quote: "Made our wedding day even more special. The attention to detail was incredible and everything was perfectly on time. Thank you for the memorable experience!",
                author: "Emily & David Thompson",
                position: "Newlyweds",
              },
            ].map((testimonial, index) => (
              <MotionDiv
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 border border-gray-800 hover:border-gold/30 transition-all duration-300 rounded-xl bg-black/50 content-spacing"
              >
                <svg className="h-10 w-10 text-gold mb-4" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-gray-300 mb-4 italic font-light">
                  {testimonial.quote}
                </p>
                <div>
                  <p className="font-medium text-white font-montserrat">{testimonial.author}</p>
                  <p className="text-gold text-sm font-light">{testimonial.position}</p>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <span className="text-sm text-gold uppercase font-montserrat tracking-wider">Our Services</span>
            <h2 className="section-title mt-3">Exceptional Experiences</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Airport Services",
                description: "Passenger greeting at airports in Lithuania, Latvia, Poland, and Belarus. VIP lounge service at Vilnius Airport. Airport service booking and transfers between airports.",
                icon: "✈️",
              },
              {
                title: "Personal Chauffeur",
                description: "Order personal chauffeur services with or without a vehicle, ensuring discretion and professionalism throughout your journey.",
                icon: "👨‍✈️",
              },
              {
                title: "Special Events",
                description: "Transportation services for weddings, delegations, and various events. We also organize guided tours across Lithuania and can provide security services.",
                icon: "🎉",
              },
            ].map((service, index) => (
              <MotionDiv
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="p-8 hover:shadow-xl transition-all duration-300 border-b-2 border-transparent hover:border-gold group content-spacing"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="feature-description mb-4">
                  {service.description}
                </p>
                <a href="#" className="inline-flex items-center text-gold hover:text-gold-dark transition-colors font-montserrat font-medium text-sm tracking-wider">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </MotionDiv>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-spacing bg-black">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-gray-900 to-black p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-gold/30 blur-3xl"></div>
              <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full bg-gold/20 blur-3xl"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto text-center content-spacing">
              <h2 className="text-4xl font-normal text-white mb-4 font-montserrat tracking-wide">
                Ready to Experience Luxury Transportation?
              </h2>
              <p className="text-gray-300 mb-6 text-lg font-light">
                Book your premium vehicle today and enjoy unparalleled comfort, style, and service.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <button className="btn-primary uppercase">
                  Book Now
                </button>
                <button className="btn-outline text-white border-gold uppercase">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
