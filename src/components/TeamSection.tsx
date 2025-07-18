import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Twitter, Linkedin, Facebook, Github, Instagram } from 'lucide-react';

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Abdul-Rahaman Yussif",
      role: "Founder, CEO and Project Manager",
      description: "Visionary leader responsible for the company's overall strategic direction and growth.",
      image: "/images/yussif.jpg",
      socialLinks: [
        { 
          icon: Twitter, 
          url: "https://x.com/YussifGomda9247",
          color: "text-blue-400 hover:text-blue-500"
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
          icon: Twitter, 
          url: "https://x.com/AmAbdel",
          color: "text-blue-400 hover:text-blue-500"
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
          url: "https://github.com/AmAbdel",
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
          icon: Twitter, 
          url: "https://x.com/Nassam_Jawad",
          color: "text-blue-400 hover:text-blue-500"
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
      name: "Abdul-Razik",
      role: "Graphic Designer",
      description: "Creates visually appealing graphics for branding and marketing purposes.",
      image: "/images/razik.jpg",
      socialLinks: [
        { 
          icon: Twitter, 
          url: "https://x.com/iRazikGraphix",
          color: "text-blue-400 hover:text-blue-500"
        },
        { 
          icon: Linkedin, 
          url: "https://www.linkedin.com/in/abdul-razik",
          color: "text-blue-700 hover:text-blue-800"
        },
        { 
          icon: Facebook, 
          url: "https://www.facebook.com/abdul.razik.280358",
          color: "text-blue-600 hover:text-blue-700"
        },
       
        { 
          icon: Instagram, 
          url: "https://www.instagram.com/abdul_razik_design",
          color: "text-pink-600 hover:text-pink-700"
        }
      ]
    },
    {
      name: "Abubakari Ahmad Tijani",
      role: "Media and Public Relations",
      description: "Manages media strategies, public relations activities, and content creation.",
      image: "/images/tijani.jpg",
      socialLinks: [
        { 
          icon: Twitter, 
          url: "https://x.com/AbuAhmadTijani",
          color: "text-blue-400 hover:text-blue-500"
        },
        { 
          icon: Linkedin, 
          url: "https://www.linkedin.com/in/ahmad-tijani-abubakari/",
          color: "text-blue-700 hover:text-blue-800"
        },
        { 
          icon: Facebook, 
          url: "https://www.facebook.com/tijay.smart",
          color: "text-blue-600 hover:text-blue-700"
        },
       
        { 
          icon: Instagram, 
          url: "https://www.instagram.com/abubakariahmad.tijani/",
          color: "text-pink-600 hover:text-pink-700"
        }
      ]
    },
    {
      name: "Magnus Tetteh",
      role: "Backend Developer",
      description: "Develops and maintains backend applications, ensuring high performance and usability.",
      image: "/images/magnus.jpg",
      socialLinks: [
        { 
          icon: Twitter, 
          url: "https://x.com/bra_magnus?s=21&t=gxiADwvyZXxdG9XruEOeeA",
          color: "text-blue-400 hover:text-blue-500"
        },
        { 
          icon: Linkedin, 
          url: "https://www.linkedin.com/in/magnus-tetteh-b1b208213/",
          color: "text-blue-700 hover:text-blue-800"
        },
        { 
          icon: Facebook, 
          url: "https://www.facebook.com/share/1AdApuyMK5/?mibextid=wwXIfr",
          color: "text-blue-600 hover:text-blue-700"
        },
        { 
          icon: Github, 
          url: "https://github.com/magnus984",
          color: "text-gray-800 hover:text-gray-900"
        },
        { 
          icon: Instagram, 
          url: "https://www.instagram.com/mrr.magnus/",
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
