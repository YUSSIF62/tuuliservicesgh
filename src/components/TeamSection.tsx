import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { X, Linkedin, Facebook, Github, Instagram } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abdul-Rahaman Yussif",
      role: "Founder, CEO and Project Manager",
      description: "Visionary leader responsible for the company's overall strategic direction and growth.",
      image: "/images/yussif.jpg",
      socialLinks: [
        { 
          icon: X, 
          url: "https://x.com/YussifGomda9247",
          color: "text-foreground hover:text-muted-foreground"
        },
        { 
          icon: Linkedin, 
          url: "https://www.linkedin.com/in/yussif-abdul-rahaman/",
          color: "text-blue-700 hover:text-blue-800"
        },
        { 
          icon: Facebook, 
          url: "https://www.facebook.com/profile.php?id=100075486901277",
          color: "text-blue-600 hover:text-blue-700"
        },
        { 
          icon: Github, 
          url: "https://github.com/YUSSIF62",
          color: "text-gray-800 hover:text-gray-900"
        },
        { 
          icon: Instagram, 
          url: "https://www.instagram.com/yussif_ary/",
          color: "text-pink-600 hover:text-pink-700"
        }
      ]
    },
    {
      name: "Abdul-Rashid Issah",
      role: "Chief Technology Officer (CTO)",
      description: "Oversees technological development and innovation within the company.",
      image: "/images/rashid.jpg",
      socialLinks: [
        { 
          icon: X, 
          url: "https://x.com/AmAbdel",
          color: "text-foreground hover:text-muted-foreground"
        },
        { 
          icon: Linkedin, 
          url: "https://www.linkedin.com/in/amabdel/",
          color: "text-blue-700 hover:text-blue-800"
        },
        { 
          icon: Facebook, 
          url: "https://www.facebook.com/AmAbdel",
          color: "text-blue-600 hover:text-blue-700"
        },
        { 
          icon: Github, 
          url: "https://github.com/abdulrashid232",
          color: "text-gray-800 hover:text-gray-900"
        },
        { 
          icon: Instagram, 
          url: "https://www.instagram.com/AmAbdel",
          color: "text-pink-600 hover:text-pink-700"
        }
      ]
    },
    {
      name: "Mohammed Jawad Nassam",
      role: "Front-end Developer",
      description: "Specializes in implementing user interfaces and enhancing user experience.",
      image: "/images/jawad.jpg",
      socialLinks: [
        { 
          icon: X, 
          url: "https://x.com/Nassam_Jawad",
          color: "text-foreground hover:text-muted-foreground"
        },
        { 
          icon: Linkedin, 
          url: "https://www.linkedin.com/in/nassam-mohammed-jawad-777b2b230/",
          color: "text-blue-700 hover:text-blue-800"
        },
        { 
          icon: Facebook, 
          url: "https://www.facebook.com/code.pj.7",
          color: "text-blue-600 hover:text-blue-700"
        },
        { 
          icon: Github, 
          url: "https://github.com/Jawadx7",
          color: "text-gray-800 hover:text-gray-900"
        },
        { 
          icon: Instagram, 
          url: "https://www.instagram.com/jawad_nassam/",
          color: "text-pink-600 hover:text-pink-700"
        }
      ]
    },
    {
      name: "Razik Abdul-Rahaman",
      role: "Back-end Developer",
      description: "Focuses on server-side logic and database management for robust applications.",
      image: "/images/razik.jpg",
      socialLinks: [
        { 
          icon: X, 
          url: "https://x.com/razik_abdul",
          color: "text-foreground hover:text-muted-foreground"
        },
        { 
          icon: Linkedin, 
          url: "https://www.linkedin.com/in/razik-abdul-rahaman/",
          color: "text-blue-700 hover:text-blue-800"
        },
        { 
          icon: Facebook, 
          url: "https://www.facebook.com/razik.abdulrahaman",
          color: "text-blue-600 hover:text-blue-700"
        },
        { 
          icon: Github, 
          url: "https://github.com/razikabdul",
          color: "text-gray-800 hover:text-gray-900"
        },
        { 
          icon: Instagram, 
          url: "https://www.instagram.com/razik_abdul/",
          color: "text-pink-600 hover:text-pink-700"
        }
      ]
    },
    {
      name: "Tijani Abdul-Rahaman",
      role: "Mobile App Developer",
      description: "Specializes in creating cross-platform mobile applications for iOS and Android.",
      image: "/images/tijani.jpg",
      socialLinks: [
        { 
          icon: X, 
          url: "https://x.com/tijani_abdul",
          color: "text-foreground hover:text-muted-foreground"
        },
        { 
          icon: Linkedin, 
          url: "https://www.linkedin.com/in/tijani-abdul-rahaman/",
          color: "text-blue-700 hover:text-blue-800"
        },
        { 
          icon: Facebook, 
          url: "https://www.facebook.com/tijani.abdulrahaman",
          color: "text-blue-600 hover:text-blue-700"
        },
        { 
          icon: Github, 
          url: "https://github.com/tijaniabdul",
          color: "text-gray-800 hover:text-gray-900"
        },
        { 
          icon: Instagram, 
          url: "https://www.instagram.com/tijani_abdul/",
          color: "text-pink-600 hover:text-pink-700"
        }
      ]
    },
    {
      name: "Magnus Opoku",
      role: "UI/UX Designer",
      description: "Creates intuitive and visually appealing user experiences for digital products.",
      image: "/images/magnus.jpg",
      socialLinks: [
        { 
          icon: X, 
          url: "https://x.com/magnus_opoku",
          color: "text-foreground hover:text-muted-foreground"
        },
        { 
          icon: Linkedin, 
          url: "https://www.linkedin.com/in/magnus-opoku/",
          color: "text-blue-700 hover:text-blue-800"
        },
        { 
          icon: Facebook, 
          url: "https://www.facebook.com/magnus.opoku",
          color: "text-blue-600 hover:text-blue-700"
        },
        { 
          icon: Github, 
          url: "https://github.com/magnusopoku",
          color: "text-gray-800 hover:text-gray-900"
        },
        { 
          icon: Instagram, 
          url: "https://www.instagram.com/magnus_opoku/",
          color: "text-pink-600 hover:text-pink-700"
        }
      ]
    }
  ];

  return (
    <section id="team" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Meet the talented professionals behind Tuuli Service's innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-card">
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
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-tuuli-green transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-tuuli-green font-semibold mb-4">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">{member.description}</p>
                
                {/* Social Media Icons */}
                <div className="flex justify-center space-x-3">
                  {member.socialLinks.map((social, socialIndex) => (
                    <a
                      key={socialIndex}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors duration-200 ${social.color}`}
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
