import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../common/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';

const SERVICE_ID = 'service_k1ktk3c';
const CONTACT_TEMPLATE_ID = 'template_yje10dr';
const PUBLIC_KEY = 'ofacHDr_LrOtb920R';

export default function ContactForm() {
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formRef.current.checkValidity()) {
      formRef.current.reportValidity();
      return;
    }

    setStatus('sending');

    try {
      await emailjs.sendForm(SERVICE_ID, CONTACT_TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS contact form error:', error);
      setStatus('error');
    }
  };

  return (
    <form ref={formRef} className="glass grid gap-4 rounded-2xl p-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" placeholder="Full name" aria-label="Full name" required />
        <Input name="email" placeholder="Email address" type="email" aria-label="Email address" required />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="phone" placeholder="Phone number" type="tel" aria-label="Phone number" pattern="[0-9]{7,15}" title="Enter 7 to 15 digits" required />
        <Select name="service" defaultValue="" aria-label="Service" required>
          <option value="" disabled className="text-ink">Select service</option>
          <option className="text-ink">Website Development</option>
          <option className="text-ink">Digital Marketing</option>
          <option className="text-ink">Business Software</option>
        </Select>
      </div>
      <Textarea name="message" placeholder="Tell us about your requirement" aria-label="Message" required />
      <Button type="submit" className="w-full sm:w-fit">Send Message</Button>
      {status === 'sending' && <p className="text-slate-300">Sending message...</p>}
      {status === 'success' && <p className="text-green-400">Message sent successfully.</p>}
      {status === 'error' && <p className="text-red-400">Failed to send message. Please try again.</p>}
    </form>
  );
}
