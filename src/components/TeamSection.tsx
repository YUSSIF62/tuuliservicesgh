
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Twitter, Linkedin, Facebook, Github, Instagram } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abdul-Rahaman Yussif",
      role: "Founder, CEO and Project Manager",
      description: "Visionary leader responsible for the company's overall strategic direction and growth.",
      image: "https://tuuli.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FYussif.48280139.jpg&w=1080&q=75"
    },
    {
      name: "Abdul-Rashid Issah",
      role: "Chief Technology Officer (CTO)",
      description: "Oversees technological development and innovation within the company.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
    },
    {
      name: "Mohammed Jawad Nassam",
      role: "Front-end Developer",
      description: "Specializes in implementing user interfaces and enhancing user experience.",
      image: "https://tuuli.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FJawad.43fc5700.jpg&w=1920&q=75"
    },
    {
      name: "Abdul-Razik",
      role: "Graphic Designer",
      description: "Creates visually appealing graphics for branding and marketing purposes.",
      image: "https://tuuli.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FRazik.0ec74caf.jpg&w=1920&q=75"
    },
    {
      name: "Abubakari Ahmad Tijani",
      role: "Media and Public Relations",
      description: "Manages media strategies, public relations activities, and content creation.",
      image: "https://tuuli.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FTijani.2cff26e1.jpg&w=3840&q=75"
    },
    {
      name: "Magnus Tetteh",
      role: "Backend Developer",
      description: "Develops and maintains backend applications, ensuring high performance and usability.",
      image: "https://media.licdn.com/dms/image/v2/D4D03AQHAPnIsYpbjFg/profile-displayphoto-shrink_800_800/B4DZXdO2wWHsAc-/0/1743173415757?e=1755734400&v=beta&t=dkwIQ1l_c32OEa0XIR4c9OuUev7Rbz2hANuspGaEtBk"
    }
  ];

  const socialLinks = [
    { 
      icon: Twitter, 
      url: "https://x.com/TuuliIncorpora1?t=NWV9sbjDV-fqFGFUDcr63w&s=35",
      color: "text-blue-400 hover:text-blue-500"
    },
    { 
      icon: Linkedin, 
      url: "https://www.linkedin.com/company/92875843/admin/dashboard/",
      color: "text-blue-700 hover:text-blue-800"
    },
    { 
      icon: Facebook, 
      url: "https://web.facebook.com/profile.php?id=100091131316887&mibextid=rS40aB7S9Ucbxw6v&_rdc=1&_rdr",
      color: "text-blue-600 hover:text-blue-700"
    },
    { 
      icon: Github, 
      url: "#",
      color: "text-gray-800 hover:text-gray-900"
    },
    { 
      icon: Instagram, 
      url: "https://www.instagram.com/tuuli.inc/",
      color: "text-pink-600 hover:text-pink-700"
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
                <div className="mb-6 mx-auto">
                  <Avatar className="w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300">
                    <AvatarImage 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-tuuli-green text-white text-xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <h3 className="text-xl font-bold text-tuuli-navy mb-2 group-hover:text-tuuli-green transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-tuuli-green font-semibold mb-4">{member.role}</p>
                <p className="text-gray-600 leading-relaxed mb-6">{member.description}</p>
                
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-3">
                  {socialLinks.map((social, socialIndex) => (
                    <a
                      key={socialIndex}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors duration-200 ${social.color}`}
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
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
