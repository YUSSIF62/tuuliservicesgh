
import { Target, Eye, Users } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-tuuli-navy mb-6">About Tuuli Service</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A dynamic software development company based in Ghana, dedicated to providing innovative 
            technology solutions that empower individuals and businesses globally.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Our expertise spans web development, mobile application development, graphic design, 
              IT consultancy, digital marketing, e-voting, and SMS services. We pride ourselves on 
              delivering high-quality, customer-centric solutions that enhance digital presence and 
              drive business growth.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At Tuuli, we believe in a collaborative approach to deliver solutions tailored to meet 
              our clients' unique needs. Our team works closely with clients to understand their goals, 
              challenges, and vision, ensuring that our solutions drive real value and impact.
            </p>
          </div>
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=800&h=600" 
              alt="Team collaboration"
              className="rounded-lg shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-tuuli-green text-white p-6 rounded-lg shadow-lg">
              <div className="text-2xl font-bold">Ghana Based</div>
              <div className="text-sm opacity-90">Global Solutions</div>
            </div>
          </div>
        </div>

        {/* Mission, Vision, Approach */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-tuuli-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tuuli-green group-hover:text-white transition-colors duration-300">
              <Target className="h-8 w-8 text-tuuli-green group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-tuuli-navy mb-4">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              To provide technical assistance and make technology easy for individuals and 
              organizations worldwide to access.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-tuuli-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tuuli-green group-hover:text-white transition-colors duration-300">
              <Eye className="h-8 w-8 text-tuuli-green group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-tuuli-navy mb-4">Our Vision</h3>
            <p className="text-gray-600 leading-relaxed">
              To be one of the leading tech services and product providers in and around the country.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg text-center group hover:shadow-2xl transition-shadow duration-300">
            <div className="bg-tuuli-green/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-tuuli-green group-hover:text-white transition-colors duration-300">
              <Users className="h-8 w-8 text-tuuli-green group-hover:text-white" />
            </div>
            <h3 className="text-2xl font-bold text-tuuli-navy mb-4">Our Approach</h3>
            <p className="text-gray-600 leading-relaxed">
              Collaborative solutions tailored to meet our clients' unique needs, leveraging 
              latest technologies and industry best practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
