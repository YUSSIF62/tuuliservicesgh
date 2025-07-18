
const ClientsSection = () => {
  const clients = [
    {
      name: "TechFlow Solutions",
      logo: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=200&h=100&fit=crop&crop=center"
    },
    {
      name: "Digital Innovators",
      logo: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=200&h=100&fit=crop&crop=center"
    },
    {
      name: "Ghana Business Hub",
      logo: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=200&h=100&fit=crop&crop=center"
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

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {clients.map((client, index) => (
            <div 
              key={index} 
              className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden rounded-md bg-muted h-16 flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`}
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <p className="text-sm font-medium text-foreground text-center mt-3">{client.name}</p>
            </div>
          ))}
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
