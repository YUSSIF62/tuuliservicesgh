import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Globe, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import { useContactForm } from '@/hooks/useContactForm';

const ContactSection = () => {
  const { submitForm, isSubmitting } = useContactForm();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    serviceNeeded: 'Select a service',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (formData.serviceNeeded === 'Select a service') {
      newErrors.serviceNeeded = 'Please select a service';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted with data:', formData);
    
    if (!validateForm()) {
      console.log('Form validation failed:', errors);
      return;
    }

    console.log('Form validation passed, submitting via Supabase...');
    const result = await submitForm(formData);
    console.log('Submit result:', result);
    
    if (result.success) {
      console.log('Form submitted successfully via Supabase');
      // Reset form on success
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        serviceNeeded: 'Select a service',
        message: ''
      });
      setErrors({});
    }
  };

  const handleInputChange = (field: string, value: string) => {
    console.log(`Field ${field} changed to:`, value);
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <Input 
                      placeholder="Your first name" 
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={errors.firstName ? 'border-red-500' : ''}
                    />
                    {errors.firstName && (
                      <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <Input 
                      placeholder="Your last name" 
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={errors.lastName ? 'border-red-500' : ''}
                    />
                    {errors.lastName && (
                      <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                    )}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className={errors.email ? 'border-red-500' : ''}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                  <Input 
                    type="tel" 
                    placeholder="+233 XX XXX XXXX" 
                    value={formData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select 
                    className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-tuuli-green ${
                      errors.serviceNeeded ? 'border-red-500' : ''
                    }`}
                    value={formData.serviceNeeded}
                    onChange={(e) => handleInputChange('serviceNeeded', e.target.value)}
                  >
                    <option>Select a service</option>
                    <option>Web Development</option>
                    <option>Mobile App Development</option>
                    <option>Graphic Design</option>
                    <option>IT Consultancy</option>
                    <option>SMS Services</option>
                    <option>Other</option>
                  </select>
                  {errors.serviceNeeded && (
                    <p className="text-red-500 text-sm mt-1">{errors.serviceNeeded}</p>
                  )}
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <Textarea 
                    placeholder="Tell us about your project..." 
                    rows={4} 
                    value={formData.message}
                    onChange={(e) => handleInputChange('message', e.target.value)}
                    className={errors.message ? 'border-red-500' : ''}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">{errors.message}</p>
                  )}
                </div>
                <Button 
                  type="submit"
                  className="w-full bg-tuuli-green hover:bg-tuuli-green/90 text-white py-3"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-tuuli-navy mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <a 
                      href="mailto:tuuli.inc@gmail.com"
                      className="bg-tuuli-green/10 p-3 rounded-full hover:bg-tuuli-green/20 transition-colors duration-200 cursor-pointer"
                    >
                      <Mail className="h-6 w-6 text-tuuli-green" />
                    </a>
                    <div>
                      <p className="font-semibold text-tuuli-navy">Email</p>
                      <a 
                        href="mailto:tuuli.inc@gmail.com" 
                        className="text-gray-600 hover:text-tuuli-green transition-colors duration-200"
                      >
                        tuuli.inc@gmail.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <a 
                      href="tel:+233558779247"
                      className="bg-tuuli-green/10 p-3 rounded-full hover:bg-tuuli-green/20 transition-colors duration-200 cursor-pointer"
                    >
                      <Phone className="h-6 w-6 text-tuuli-green" />
                    </a>
                    <div>
                      <p className="font-semibold text-tuuli-navy">Phone</p>
                      <a 
                        href="tel:+233558779247" 
                        className="text-gray-600 hover:text-tuuli-green transition-colors duration-200"
                      >
                        +233 55 877 9247
                      </a>
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
                    <a 
                      href="https://www.google.com/maps/place/Accra,+Ghana/@5.6037168,-0.1869644,12z/data=!3m1!4b1!4m6!3m5!1s0xfdf9084b2b7a773:0xbed14ed8650e2dd3!8m2!3d5.6037168!4d-0.1869644!16zL20vMGZuMmg"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-tuuli-green/10 p-3 rounded-full hover:bg-tuuli-green/20 transition-colors duration-200 cursor-pointer"
                    >
                      <MapPin className="h-6 w-6 text-tuuli-green" />
                    </a>
                    <div>
                      <p className="font-semibold text-tuuli-navy">Location</p>
                      <a 
                        href="https://www.google.com/maps/place/Accra,+Ghana/@5.6037168,-0.1869644,12z/data=!3m1!4b1!4m6!3m5!1s0xfdf9084b2b7a773:0xbed14ed8650e2dd3!8m2!3d5.6037168!4d-0.1869644!16zL20vMGZuMmg"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-tuuli-green transition-colors duration-200"
                      >
                        Accra, Ghana
                      </a>
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
