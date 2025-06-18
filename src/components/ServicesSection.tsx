
import { Monitor, Smartphone, Palette, Settings, MessageSquare, GraduationCap } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ServicesSection = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "Custom website design and development, e-commerce solutions, and responsive web design that works across all devices.",
      features: ["Custom Website Design", "E-commerce Solutions", "Responsive Web Design", "Performance Optimization"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "iOS and Android app development with cross-platform solutions and comprehensive maintenance support.",
      features: ["iOS Development", "Android Development", "Cross-platform Solutions", "App Maintenance & Support"]
    },
    {
      icon: Palette,
      title: "Graphic Design",
      description: "Professional branding, marketing materials, and digital graphics that make your business stand out.",
      features: ["Branding & Identity", "Marketing Materials", "Digital Graphics", "Social Media Assets"]
    },
    {
      icon: Settings,
      title: "IT Consultancy",
      description: "Strategic technology planning, system integration, and comprehensive IT project management services.",
      features: ["Technology Strategy", "System Integration", "IT Project Management", "Digital Transformation"]
    },
    {
      icon: MessageSquare,
      title: "SMS Services",
      description: "Bulk SMS campaigns, API integration, and comprehensive SMS marketing strategies for your business.",
      features: ["Bulk SMS Campaigns", "SMS API Integration", "Marketing Strategies", "Automated Messaging"]
    },
    {
      icon: GraduationCap,
      title: "Mentorship & Training",
      description: "Professional development programs, coding bootcamps, and personalized mentorship in technology skills.",
      features: ["Coding Bootcamps", "Technology Training", "Career Mentorship", "Skill Development Programs"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tuuli-navy mb-6">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive technology solutions designed to empower your business and drive digital growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <div className="bg-tuuli-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-tuuli-green group-hover:text-white transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-tuuli-green group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-tuuli-navy group-hover:text-tuuli-green transition-colors duration-300">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-gray-600 leading-relaxed">
                  {service.description}
                </CardDescription>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-2 h-2 bg-tuuli-green rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-tuuli-navy text-center mb-12">Why Choose Tuuli?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Customer-Centric Solutions",
                description: "We focus on understanding and meeting the specific needs of our clients."
              },
              {
                title: "Innovative Technologies",
                description: "We leverage the latest technologies to deliver cutting-edge solutions."
              },
              {
                title: "Collaborative Approach",
                description: "We work closely with our clients to ensure successful project outcomes."
              },
              {
                title: "Experienced Team",
                description: "Our skilled professionals bring wealth of experience to every project."
              },
              {
                title: "High-Quality Deliverables",
                description: "We are committed to delivering solutions that exceed client expectations."
              },
              {
                title: "Continuous Support",
                description: "We provide ongoing support and maintenance for all our solutions."
              }
            ].map((item, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-tuuli-green/5 transition-colors duration-300">
                <h4 className="text-lg font-semibold text-tuuli-navy mb-3">{item.title}</h4>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
