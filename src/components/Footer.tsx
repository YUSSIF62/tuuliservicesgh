
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-tuuli-navy text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-tuuli-green rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">TS</span>
              </div>
              <span className="text-2xl font-bold">TUULISERVICESGH.COM</span>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Empowering individuals and businesses globally with innovative technology solutions. 
              Based in Ghana, serving the world.
            </p>
            <div className="text-sm text-gray-400">
              <p>Email: tuuli.inc@gmail.com</p>
              <p>Phone: +233 55 877 9247</p>
              <p>Website: tuuliservicesgh.com</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-tuuli-yellow">Services</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#services" className="hover:text-tuuli-green transition-colors">Web Development</a></li>
              <li><a href="#services" className="hover:text-tuuli-green transition-colors">Mobile Apps</a></li>
              <li><a href="#services" className="hover:text-tuuli-green transition-colors">Graphic Design</a></li>
              <li><a href="#services" className="hover:text-tuuli-green transition-colors">IT Consultancy</a></li>
              <li><a href="#services" className="hover:text-tuuli-green transition-colors">SMS Services</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-tuuli-yellow">Quick Links</h3>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#home" className="hover:text-tuuli-green transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-tuuli-green transition-colors">About</a></li>
              <li><a href="#services" className="hover:text-tuuli-green transition-colors">Services</a></li>
              <li><a href="#team" className="hover:text-tuuli-green transition-colors">Team</a></li>
              <li><a href="#contact" className="hover:text-tuuli-green transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Tuuli Services. All rights reserved.
            </p>
            <div className="flex items-center space-x-1 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>in Ghana</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
