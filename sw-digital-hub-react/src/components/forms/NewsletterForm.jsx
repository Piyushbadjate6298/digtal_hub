import Button from '../common/Button';
import Input from '../ui/Input';

export default function NewsletterForm() {
  return (
    <form className="flex flex-col gap-3 sm:flex-row" onSubmit={(event) => event.preventDefault()}>
      <Input className="min-w-0 flex-1" placeholder="Email for digital growth tips" type="email" aria-label="Newsletter email" />
      <Button type="submit" icon={false}>Subscribe</Button>
    </form>
  );
}
