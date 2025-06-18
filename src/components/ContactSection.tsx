
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Globe, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tuuli-navy mb-6">Get In Touch</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your digital presence? Let's discuss how Tuuli can help your business thrive
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="shadow-lg border-0">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-tuuli-navy">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                  <Input placeholder="Your first name" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                  <Input placeholder="Your last name" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                <Input type="email" placeholder="your.email@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                <Input type="tel" placeholder="+233 XX XXX XXXX" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Service Needed</label>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tuuli-green">
                  <option>Select a service</option>
                  <option>Web Development</option>
                  <option>Mobile App Development</option>
                  <option>Graphic Design</option>
                  <option>IT Consultancy</option>
                  <option>SMS Services</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea placeholder="Tell us about your project..." rows={4} />
              </div>
              <Button className="w-full bg-tuuli-green hover:bg-tuuli-green/90 text-white py-3">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-tuuli-navy mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-tuuli-green/10 p-3 rounded-full">
                      <Mail className="h-6 w-6 text-tuuli-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-tuuli-navy">Email</p>
                      <p className="text-gray-600">tuuli.inc@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-tuuli-green/10 p-3 rounded-full">
                      <Phone className="h-6 w-6 text-tuuli-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-tuuli-navy">Phone</p>
                      <p className="text-gray-600">+233 55 877 9247</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-tuuli-green/10 p-3 rounded-full">
                      <Globe className="h-6 w-6 text-tuuli-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-tuuli-navy">Website</p>
                      <p className="text-gray-600">tuuli.vercel.app</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-tuuli-green/10 p-3 rounded-full">
                      <MapPin className="h-6 w-6 text-tuuli-green" />
                    </div>
                    <div>
                      <p className="font-semibold text-tuuli-navy">Location</p>
                      <p className="text-gray-600">Ghana</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Media */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-tuuli-navy mb-6">Follow Us</h3>
                <div className="grid grid-cols-2 gap-4">
                  <a 
                    href="https://x.com/TuuliIncorpora1?t=NWV9sbjDV-fqFGFUDcr63w&s=35" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-tuuli-green/10 transition-colors duration-200"
                  >
                    <Twitter className="h-6 w-6 text-blue-400" />
                    <span className="font-medium">Twitter</span>
                  </a>
                  <a 
                    href="https://web.facebook.com/profile.php?id=100091131316887&mibextid=rS40aB7S9Ucbxw6v&_rdc=1&_rdr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-tuuli-green/10 transition-colors duration-200"
                  >
                    <Facebook className="h-6 w-6 text-blue-600" />
                    <span className="font-medium">Facebook</span>
                  </a>
                  <a 
                    href="https://www.linkedin.com/company/92875843/admin/dashboard/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-tuuli-green/10 transition-colors duration-200"
                  >
                    <Linkedin className="h-6 w-6 text-blue-700" />
                    <span className="font-medium">LinkedIn</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/tuuli.inc/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-tuuli-green/10 transition-colors duration-200"
                  >
                    <Instagram className="h-6 w-6 text-pink-600" />
                    <span className="font-medium">Instagram</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
