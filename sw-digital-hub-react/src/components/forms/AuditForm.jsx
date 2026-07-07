import Button from '../common/Button';
import Input from '../ui/Input';
import Textarea from '../ui/Textarea';

export default function AuditForm() {
  return (
    <form className="glass grid gap-4 rounded-2xl p-6" onSubmit={(event) => event.preventDefault()}>
      <Input placeholder="Website URL" type="url" aria-label="Website URL" />
      <Input placeholder="Business email" type="email" aria-label="Business email" />
      <Textarea placeholder="What do you want to improve?" aria-label="Audit goals" />
      <Button type="submit">Request Free Audit</Button>
    </form>
  );
}
