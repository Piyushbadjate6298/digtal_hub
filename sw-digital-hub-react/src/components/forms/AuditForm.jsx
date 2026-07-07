import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Button from '../common/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

const SERVICE_ID = 'service_k1ktk3c';
const AUDIT_TEMPLATE_ID = 'template_j8uy2mi';
const PUBLIC_KEY = 'ofacHDr_LrOtb920R';

export default function AuditForm() {
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
      await emailjs.sendForm(SERVICE_ID, AUDIT_TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus('success');
      formRef.current.reset();
    } catch (error) {
      console.error('EmailJS audit form error:', error);
      setStatus('error');
    }
  };

  return (
    <form ref={formRef} className="glass grid gap-4 rounded-2xl p-6" onSubmit={handleSubmit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input name="name" placeholder="Full name" aria-label="Full name" required />
        <Input name="phone" placeholder="Phone number" type="tel" aria-label="Phone number" pattern="[0-9]{7,15}" title="Enter 7 to 15 digits" required />
      </div>
      <Input name="website" placeholder="Website URL" type="url" aria-label="Website URL" required />
      <Input name="email" placeholder="Business email" type="email" aria-label="Business email" required />
      <Textarea name="goals" placeholder="What do you want to improve?" aria-label="Audit goals" required />
      <Button type="submit">Request Free Audit</Button>
      {status === 'sending' && <p className="text-slate-300">Sending audit request...</p>}
      {status === 'success' && <p className="text-green-400">Audit request sent successfully.</p>}
      {status === 'error' && <p className="text-red-400">Failed to send audit request. Please try again.</p>}
    </form>
  );
}
