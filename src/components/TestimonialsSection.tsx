
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechFlow Solutions",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "Tuuli Service delivered an exceptional e-commerce platform that exceeded our expectations. Their attention to detail and professional approach made the entire process seamless."
    },
    {
      name: "Michael Asante",
      position: "Founder, Ghana Business Hub",
      image: "https://images.unsplash.com/photo-1519390950473-47ba0277781c?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "The mobile app developed by Tuuli has transformed how we connect with our customers. Their technical expertise and innovative solutions are truly impressive."
    },
    {
      name: "Emma Thompson",
      position: "Marketing Director, Digital Innovators",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "Working with Tuuli on our digital marketing campaign was a game-changer. Their SMS services and graphic design work helped us reach new heights in customer engagement."
    },
    {
      name: "David Osei",
      position: "CTO, West Africa Enterprises",
      image: "https://images.unsplash.com/photo-1519390950473-47ba0277781c?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "Tuuli's IT consultancy services helped us streamline our operations and implement cutting-edge technologies. Their team's knowledge and professionalism are outstanding."
    },
    {
      name: "Lisa Chen",
      position: "Operations Manager, Modern Commerce Ltd",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "The mentorship program offered by Tuuli has been invaluable for our team's growth. Their training sessions are comprehensive and practical."
    },
    {
      name: "James Kwame",
      position: "Director, Innovation Partners",
      image: "https://images.unsplash.com/photo-1519390950473-47ba0277781c?w=100&h=100&fit=crop&crop=face",
      rating: 5,
      testimonial: "Tuuli's web development services are top-notch. They created a beautiful, responsive website that perfectly represents our brand and drives real results."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear from the businesses we've helped transform
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-tuuli-yellow fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground leading-relaxed mb-6 italic">
                  "{testimonial.testimonial}"
                </blockquote>
                
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            Ready to join our satisfied clients?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-tuuli-green text-white font-semibold rounded-lg hover:bg-tuuli-green/90 transition-colors duration-300"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
