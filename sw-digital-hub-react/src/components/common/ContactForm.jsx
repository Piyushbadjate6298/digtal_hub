import Button from './Button';

export default function ContactForm({ compact = false }) {
  return (
    <form className="glass grid gap-4 rounded-2xl p-5 sm:p-7" onSubmit={(event) => event.preventDefault()}>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="focus-ring rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Full name" aria-label="Full name" />
        <input className="focus-ring rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Email address" type="email" aria-label="Email address" />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <input className="focus-ring rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Phone number" aria-label="Phone number" />
        <select className="focus-ring rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white" defaultValue="" aria-label="Requirement">
          <option value="" disabled className="text-ink">Select requirement</option>
          <option className="text-ink">Website Development</option>
          <option className="text-ink">Training Program</option>
          <option className="text-ink">Internship</option>
          <option className="text-ink">Digital Marketing</option>
        </select>
      </div>
      {!compact && (
        <textarea className="focus-ring min-h-32 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-white placeholder:text-slate-400" placeholder="Tell us what you want to build or learn" aria-label="Message" />
      )}
      <Button type="submit" className="w-full sm:w-fit">Submit Enquiry</Button>
    </form>
  );
}
