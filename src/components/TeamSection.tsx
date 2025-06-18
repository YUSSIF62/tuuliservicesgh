
import { Card, CardContent } from '@/components/ui/card';
import { User, Crown, Code, Palette, Megaphone, Server } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abdul-Rahaman Yussif",
      role: "Founder, CEO and Project Manager",
      description: "Visionary leader responsible for the company's overall strategic direction and growth.",
      icon: Crown
    },
    {
      name: "Abdul-Rashid Issah",
      role: "Chief Technology Officer (CTO)",
      description: "Oversees technological development and innovation within the company.",
      icon: Code
    },
    {
      name: "Mohammed Jawad Nassam",
      role: "Front-end Developer",
      description: "Specializes in implementing user interfaces and enhancing user experience.",
      icon: Code
    },
    {
      name: "Abdul-Razik",
      role: "Graphic Designer",
      description: "Creates visually appealing graphics for branding and marketing purposes.",
      icon: Palette
    },
    {
      name: "Abubakari Ahmad Tijani",
      role: "Media and Public Relations",
      description: "Manages media strategies, public relations activities, and content creation.",
      icon: Megaphone
    },
    {
      name: "Magnus Tetteh",
      role: "Backend Developer",
      description: "Develops and maintains backend applications, ensuring high performance and usability.",
      icon: Server
    }
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tuuli-navy mb-6">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the talented professionals behind Tuuli Service's innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white">
              <CardContent className="p-8 text-center">
                <div className="bg-tuuli-green/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tuuli-green group-hover:text-white transition-colors duration-300">
                  <member.icon className="h-10 w-10 text-tuuli-green group-hover:text-white" />
                </div>
                <h3 className="text-xl font-bold text-tuuli-navy mb-2 group-hover:text-tuuli-green transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-tuuli-green font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-tuuli-navy rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-tuuli-yellow mb-2">6</div>
              <div className="text-white">Team Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-tuuli-yellow mb-2">5+</div>
              <div className="text-white">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-tuuli-yellow mb-2">100%</div>
              <div className="text-white">Dedicated</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-tuuli-yellow mb-2">24/7</div>
              <div className="text-white">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
