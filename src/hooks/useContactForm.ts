
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceNeeded: string;
  message: string;
}

export const useContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const submitForm = async (formData: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('submit-contact-form', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Message sent successfully!",
        description: "Thank you for contacting us. We'll get back to you soon.",
      });

      return { success: true, data };
    } catch (error) {
      console.error('Form submission error:', error);
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
