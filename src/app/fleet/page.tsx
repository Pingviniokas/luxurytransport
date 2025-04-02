import Image from "next/image";
import { MotionDiv } from "../../components/MotionDiv";

export default function FleetPage() {
  // Vehicle data organized by categories
  const vehicleCategories = [
    {
      title: "Ultra-Luxury",
      description: "Experience the pinnacle of automotive engineering and craftsmanship.",
      vehicles: [
        {
          name: "Rolls-Royce Ghost",
          price: "From €300/hour",
          image: "/rolls-royce.jpg",
          pricing: [
            { hours: "1-3h", price: "300€/hour" },
            { hours: "3-6h", price: "280€/hour" },
            { hours: "6-9h", price: "250€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only. Vilnius city prices. Other cities: 2€/km extra."
        },
        {
          name: "Bentley Flying Spur 6.0 W12 2022",
          price: "From €400/hour",
          image: "/bentley.jpeg",
          pricing: [
            { hours: "1-3h", price: "400€/hour" },
            { hours: "3-6h", price: "350€/hour" },
            { hours: "6-9h", price: "300€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        }
      ]
    },
    {
      title: "Premium Sedans",
      description: "Elegant and sophisticated vehicles for a stylish and comfortable journey.",
      vehicles: [
        {
          name: "Mercedes-Benz S-Class W223 Long 2022",
          price: "From €300/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "300€/hour" },
            { hours: "3-6h", price: "250€/hour" },
            { hours: "6-9h", price: "220€/hour" },
            { hours: "12h+", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz W223 Long (S500) 2021",
          price: "From €200/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "5h", price: "5h/1000€" },
            { hours: "8h", price: "8h/1300€" },
            { hours: "Additional hours", price: "By agreement" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz W221 S600 Long (Armoured B7)",
          price: "From €200/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "3-6h", price: "1h/200€" },
            { hours: "6-9h", price: "1h/160€" },
            { hours: "Additional hours", price: "By agreement" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only. Minimum order: 3 hours (800€)."
        },
        {
          name: "Mercedes-Benz MAYBACH 2017",
          price: "From €120/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "120€/hour" },
            { hours: "3-6h", price: "100€/hour" },
            { hours: "6-9h", price: "90€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz S-Class W222 Long",
          price: "From €100/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "100€/hour" },
            { hours: "3-6h", price: "90€/hour" },
            { hours: "6-9h", price: "85€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz S-Class W222 S 6.3 AMG Line",
          price: "From €100/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "100€/hour" },
            { hours: "3-6h", price: "90€/hour" },
            { hours: "6-9h", price: "85€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz S500 AMG Coupe 2017",
          price: "From €100/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "100€/hour" },
            { hours: "3-6h", price: "90€/hour" },
            { hours: "6-9h", price: "85€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz E-Class 2023",
          price: "From €70/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "70€/hour" },
            { hours: "3-6h", price: "65€/hour" },
            { hours: "6-9h", price: "60€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz E-Class 2018",
          price: "From €60/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "60€/hour" },
            { hours: "3-6h", price: "55€/hour" },
            { hours: "6-9h", price: "50€/hour" },
            { hours: "12h", price: "350€" },
          ],
          note: "Prices with chauffeur only."
        }
      ]
    },
    {
      title: "Performance & SUVs",
      description: "Powerful and versatile vehicles designed for both comfort and capability.",
      vehicles: [
        {
          name: "Tesla Model X90 2019",
          price: "From €100/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "100€/hour" },
            { hours: "3-6h", price: "90€/hour" },
            { hours: "6-9h", price: "85€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz G500",
          price: "From €90/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "90€/hour" },
            { hours: "3-6h", price: "80€/hour" },
            { hours: "6-9h", price: "70€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz G55 AMG",
          price: "From €90/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "90€/hour" },
            { hours: "3-6h", price: "80€/hour" },
            { hours: "6-9h", price: "70€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz GL 6.3 AMG 2016",
          price: "From €90/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "90€/hour" },
            { hours: "3-6h", price: "80€/hour" },
            { hours: "6-9h", price: "70€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz GL 6.3 AMG 2015",
          price: "From €90/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "90€/hour" },
            { hours: "3-6h", price: "80€/hour" },
            { hours: "6-9h", price: "70€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz GL 5.5 AMG 2015",
          price: "From €90/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "90€/hour" },
            { hours: "3-6h", price: "80€/hour" },
            { hours: "6-9h", price: "75€/hour" },
            { hours: "12h", price: "800€" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz GLE 350d 4Matic 2017",
          price: "From €70/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "70€/hour" },
            { hours: "3-6h", price: "65€/hour" },
            { hours: "6-9h", price: "60€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz CLA 45 AMG 2015",
          price: "Available upon request",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "Contact for pricing" },
            { hours: "3-6h", price: "Contact for pricing" },
            { hours: "6-9h", price: "Contact for pricing" },
            { hours: "12h", price: "Contact for pricing" },
          ],
          note: "Prices with chauffeur only."
        }
      ]
    },
    {
      title: "Group Transportation",
      description: "Spacious and luxurious vehicles for comfortable group travel.",
      vehicles: [
        {
          name: "Mercedes-Benz VIP Sprinter 2017 (6 seats)",
          price: "From €500/3 hours",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "3h", price: "500€" },
            { hours: "8h", price: "1000€" },
            { hours: "Additional hours", price: "By agreement" },
          ],
          note: "Rental with chauffeur only. Prices in Vilnius."
        },
        {
          name: "Mercedes-Benz Sprinter 8+1 2022",
          price: "From €110/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "110€/hour" },
            { hours: "3-6h", price: "100€/hour" },
            { hours: "6-9h", price: "90€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz V-Class Extra Long 2025 (7+1)",
          price: "From €100/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "100€/hour" },
            { hours: "3-6h", price: "90€/hour" },
            { hours: "6-9h", price: "80€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only."
        },
        {
          name: "Mercedes-Benz Edition 1 V250 Long 2019 (6 seats)",
          price: "From €70/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "70€/hour" },
            { hours: "3-6h", price: "60€/hour" },
            { hours: "6-9h", price: "50€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only. Rental without chauffeur: 300€/day."
        },
        {
          name: "Mercedes-Benz V250 Extra Long 2019 (8 seats)",
          price: "From €70/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "70€/hour" },
            { hours: "3-6h", price: "60€/hour" },
            { hours: "6-9h", price: "50€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only. Rental without chauffeur: 300€/day."
        },
        {
          name: "Mercedes-Benz V-Class 2015 (7+1)",
          price: "From €70/hour",
          image: "/mercedes-s.jpeg",
          pricing: [
            { hours: "1-3h", price: "70€/hour" },
            { hours: "3-6h", price: "60€/hour" },
            { hours: "6-9h", price: "50€/hour" },
            { hours: "12h", price: "By agreement" },
          ],
          note: "Prices with chauffeur only. Rental without chauffeur from 70€ depending on duration."
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="/mercedes-s.jpeg"
            alt="Luxury Fleet"
            fill
            className="object-cover opacity-70"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-transparent z-0"></div>
        <div className="container-custom relative z-10 text-white">
          <h1 className="text-5xl font-normal mb-4 font-montserrat">
            Our <span className="text-gold">Premium</span> Fleet
          </h1>
          <p className="text-xl font-light max-w-2xl">
            Explore our extensive collection of luxury vehicles available for your next journey. 
            From elegant sedans to spacious SUVs, we offer the finest selection for every occasion.
          </p>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          {vehicleCategories.map((category) => (
            <div key={category.title} className="mb-20 last:mb-0">
              <div className="text-center mb-12">
                <span className="text-sm text-gold uppercase font-montserrat tracking-wider">Premium Selection</span>
                <h2 className="text-3xl font-normal mt-2 mb-4 font-montserrat">{category.title}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.vehicles.map((vehicle, index) => (
                  <MotionDiv
                    key={vehicle.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group"
                  >
                    <div className="relative h-56 bg-gray-200">
                      <Image
                        src={vehicle.image}
                        alt={vehicle.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm py-1.5 px-4 text-white text-sm font-light">
                        {vehicle.price}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-medium mb-4 font-montserrat">{vehicle.name}</h3>
                      
                      <div className="mb-4">
                        <h4 className="text-sm font-medium mb-2 text-gold uppercase tracking-wider">Pricing</h4>
                        <table className="w-full text-sm">
                          <tbody>
                            {vehicle.pricing.map((price, i) => (
                              <tr key={i} className="border-b border-gray-100 last:border-0">
                                <td className="py-2 font-light">{price.hours}</td>
                                <td className="py-2 text-right font-medium">{price.price}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                      
                      <p className="text-xs text-gray-500 italic mb-4">{vehicle.note}</p>
                      
                      <button className="w-full py-3 border border-gold text-black hover:bg-gold/10 transition-colors duration-300 font-montserrat font-medium text-sm tracking-wider uppercase">
                        Book Now
                      </button>
                    </div>
                  </MotionDiv>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-gray-900 to-black p-12 relative overflow-hidden">
            <div className="absolute inset-0 overflow-hidden opacity-20">
              <div className="absolute -right-10 -top-10 w-64 h-64 rounded-full bg-gold/30 blur-3xl"></div>
              <div className="absolute -left-10 -bottom-10 w-64 h-64 rounded-full bg-gold/20 blur-3xl"></div>
            </div>
            <div className="relative z-10 max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-normal text-white mb-4 font-montserrat">
                Need Help Choosing the Right Vehicle?
              </h2>
              <p className="text-gray-300 mb-8 text-lg font-light">
                Our luxury transport experts are available to help you select the perfect vehicle for your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="btn-primary uppercase">
                  Book Consultation
                </button>
                <button className="btn-outline uppercase text-white">
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