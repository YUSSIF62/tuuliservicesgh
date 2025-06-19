
import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface ContactFormData {
  firstName: string
  lastName: string
  email: string
  phone?: string
  serviceNeeded: string
  message: string
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabaseClient = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    )

    // Parse request body
    const formData: ContactFormData = await req.json()

    // Validate required fields
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Store form submission in database
    const { data, error: dbError } = await supabaseClient
      .from('contact_submissions')
      .insert({
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone || null,
        service_needed: formData.serviceNeeded,
        message: formData.message
      })
      .select()

    if (dbError) {
      console.error('Database error:', dbError)
      return new Response(
        JSON.stringify({ error: 'Failed to save submission' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      )
    }

    // Send email notification to company
    const emailSubject = `New Contact Form Submission from ${formData.firstName} ${formData.lastName}`
    const emailBody = `
      New contact form submission received:
      
      Name: ${formData.firstName} ${formData.lastName}
      Email: ${formData.email}
      Phone: ${formData.phone || 'Not provided'}
      Service Needed: ${formData.serviceNeeded}
      
      Message:
      ${formData.message}
      
      Submitted at: ${new Date().toLocaleString()}
    `

    // For now, we'll just log the email content
    // You can integrate with your preferred email service (Resend, SendGrid, etc.)
    console.log('Email to send:', {
      to: 'tuuli.inc@gmail.com',
      subject: emailSubject,
      body: emailBody
    })

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully',
        submissionId: data?.[0]?.id 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )

  } catch (error) {
    console.error('Error processing form submission:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    )
  }
})
