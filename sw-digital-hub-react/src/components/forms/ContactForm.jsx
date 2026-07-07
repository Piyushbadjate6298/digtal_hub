import Button from '../common/Button';
import Input from '../ui/Input';
import Select from '../ui/Select';
import Textarea from '../ui/Textarea';

export default function ContactForm() {
  return (
    <form className="glass grid gap-4 rounded-2xl p-6" onSubmit={(event) => event.preventDefault()}>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input placeholder="Full name" aria-label="Full name" />
        <Input placeholder="Email address" type="email" aria-label="Email address" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <Input placeholder="Phone number" aria-label="Phone number" />
        <Select defaultValue="" aria-label="Service">
          <option value="" disabled className="text-ink">Select service</option>
          <option className="text-ink">Website Development</option>
          <option className="text-ink">Digital Marketing</option>
          <option className="text-ink">Business Software</option>
        </Select>
      </div>
      <Textarea placeholder="Tell us about your requirement" aria-label="Message" />
      <Button type="submit" className="w-full sm:w-fit">Send Message</Button>
    </form>
  );
}
