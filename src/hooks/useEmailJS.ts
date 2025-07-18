
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  message: string;
}

export const useEmailJS = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (formData: ContactFormData) => {
    console.log('useEmailJS: Starting form submission with data:', formData);
    setIsSubmitting(true);
    
    try {
      console.log('useEmailJS: Calling EmailJS...');
      
      // Prepare template parameters for EmailJS
      const templateParams = {
        from_name: `${formData.firstName} ${formData.lastName}`,
        from_email: formData.email,
        phone: formData.phone || 'Not provided',
        service_needed: formData.serviceNeeded,
        message: formData.message,
        to_email: 'tuuli.inc@gmail.com'
      };

      console.log('useEmailJS: Template params:', templateParams);

      const result = await emailjs.send(
        'service_udo8nwk', // Your Service ID
        'template_aihqr77', // Your Template ID
        templateParams,
        'QreFmh9o0EIZKjg87' // Your Public Key
      );

      console.log('useEmailJS: EmailJS response:', result);

      if (result.status === 200) {
        console.log('useEmailJS: Form submitted successfully');
        toast({
          title: "Message sent successfully!",
          description: "Thank you for contacting us. We'll get back to you soon.",
        });
        return { success: true, data: result };
      } else {
        throw new Error(`EmailJS returned status: ${result.status}`);
      }
    } catch (error) {
      console.error('useEmailJS: Form submission error:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly at tuuli.inc@gmail.com",
        variant: "destructive",
      });
      return { success: false, error };
    } finally {
      setIsSubmitting(false);
    }
  };

  return { submitForm, isSubmitting };
};
