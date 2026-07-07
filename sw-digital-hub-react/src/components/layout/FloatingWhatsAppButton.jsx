import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsAppButton() {
  return (
    <a className="fixed bottom-6 left-5 z-50 grid size-12 place-items-center rounded-full bg-emerald-500 text-2xl text-white shadow-panel transition hover:-translate-y-1" href="https://wa.me/919876543210" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
      <FaWhatsapp />
    </a>
  );
}
