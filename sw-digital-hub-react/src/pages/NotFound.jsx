import Button from '../components/common/Button';

export default function NotFound() {
  return (
    <section className="container-pad grid min-h-[70vh] place-items-center py-16 text-center">
      <div>
        <span className="text-7xl font-black text-cyan">404</span>
        <h1 className="mt-4 text-4xl font-black text-white">Page not found</h1>
        <p className="mx-auto mt-4 max-w-xl text-slate-300">The page you are looking for does not exist or may have moved.</p>
        <Button to="/" className="mt-8">Back To Home</Button>
      </div>
    </section>
  );
}
