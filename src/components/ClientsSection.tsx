import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const ClientsSection = () => {
  const clients = [
    {
      name: "Vision Star Academy",
      logo: "/images/visalogo.jpg"
    },
    {
      name: "HakSon Realty",
      logo: "/images/hakson.png"
    },
    {
      name: "NASPA Yendi Secretariat",
      logo: "/images/naspa.jpg"
    },
    {
      name: "West Africa Enterprises",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&crop=center"
    },
    {
      name: "Modern Commerce Ltd",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&crop=center"
    },
    {
      name: "Innovation Partners",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&crop=center"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Trusted Clients</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We're proud to work with amazing companies and organizations across Ghana and beyond
          </p>
        </div>

        <div className="relative">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {clients.map((client, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/2 md:basis-1/3 lg:basis-1/4">
                  <div className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group">
                    <div className="relative overflow-hidden rounded-md bg-muted h-16 flex items-center justify-center">
                      <img 
                        src={client.logo} 
                        alt={`${client.name} logo`}
                        className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <p className="text-sm font-medium text-foreground text-center mt-3">{client.name}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground">
            Join our growing list of satisfied clients and experience the Tuuli difference
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;