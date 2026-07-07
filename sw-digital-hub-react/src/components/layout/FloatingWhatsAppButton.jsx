import { FaInstagramSquare, FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsAppButton() {
  return (
    <div className="fixed bottom-6 left-5 z-50 grid gap-3">
      <a className="grid h-12 w-12 place-items-center rounded-full bg-pink-500 text-2xl text-white shadow-panel transition hover:-translate-y-1" href="https://www.instagram.com/sw__multimedia/" target="_blank" rel="noreferrer" aria-label="Open Instagram profile">
        <FaInstagramSquare />
      </a>
      <a className="grid h-12 w-12 place-items-center rounded-full bg-emerald-500 text-2xl text-white shadow-panel transition hover:-translate-y-1" href="https://wa.me/919112166105" target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp">
        <FaWhatsapp />
      </a>
    </div>
  );
}
