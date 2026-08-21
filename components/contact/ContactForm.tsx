'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { Label } from '@/components/ui/label';

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    const formData = new FormData(e.currentTarget);
    const scriptURL = process.env.NEXT_PUBLIC_APPSCRIPT_URL;

    if (!scriptURL) {
      setErrorMessage('Server configuration error. Please contact support.');
      setIsSubmitting(false);
      return;
    }

    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      message: formData.get('message'),
    };

    try {
      // Send JSON string. Fetch defaults to text/plain which avoids CORS preflight issues with Google Apps Script
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: JSON.stringify(data),
      });

      // Google Apps Script usually returns a 200 OK with the JSON output
      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSuccess(true);
      // Hide success message after 5 seconds
      setTimeout(() => setIsSuccess(false), 5000);
      
      // Reset form
      e.currentTarget.reset();
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setErrorMessage('An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center h-full flex flex-col items-center justify-center">
        <CheckCircle2 className="w-16 h-16 text-green-500 mb-4" />
        <h3 className="text-2xl font-bold text-green-800 mb-2">Message Sent!</h3>
        <p className="text-green-600">
          Thank you for contacting JAS Pest Control Service. Our team will get back to you shortly.
        </p>
        <Button 
          className="mt-6 bg-green-600 hover:bg-green-700 text-white"
          onClick={() => setIsSuccess(false)}
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100">
      <h3 className="text-2xl font-heading font-bold text-primary mb-6">Send Us a Message</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name <span className="text-red-500">*</span></Label>
          <Input id="name" name="name" required placeholder="John Doe" className="bg-slate-50 border-slate-200 focus-visible:ring-accent" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input id="email" name="email" type="email" placeholder="john@example.com" className="bg-slate-50 border-slate-200 focus-visible:ring-accent" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number <span className="text-red-500">*</span></Label>
          <Input id="phone" name="phone" required placeholder="+91 9876543210" className="bg-slate-50 border-slate-200 focus-visible:ring-accent" />
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Message <span className="text-red-500">*</span></Label>
          <Textarea 
            id="message" 
            name="message"
            required 
            placeholder="Tell us about your pest problem..." 
            className="bg-slate-50 border-slate-200 focus-visible:ring-accent min-h-[120px] resize-y" 
          />
        </div>
        
        {errorMessage && (
          <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-md border border-red-100">
            <AlertCircle className="w-5 h-5 flex-shrink-0" />
            <p className="text-sm">{errorMessage}</p>
          </div>
        )}

        <Button 
          type="submit" 
          className="w-full bg-secondary hover:bg-accent text-white py-6 text-lg transition-all"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
              Sending Message...
            </>
          ) : (
            'Submit Request'
          )}
        </Button>
      </form>
    </div>
  );
}
