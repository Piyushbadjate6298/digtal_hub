import { Outlet } from 'react-router-dom';
import Footer from '../components/common/Footer';
import Navbar from '../components/common/Navbar';
import BackToTop from '../components/layout/BackToTop';
import Breadcrumb from '../components/layout/Breadcrumb';
import CookieBanner from '../components/layout/CookieBanner';
import FloatingWhatsAppButton from '../components/layout/FloatingWhatsAppButton';
import ScrollToTop from '../components/layout/ScrollToTop';
import TopBar from '../components/layout/TopBar';

export default function MainLayout() {
  return (
    <div className="page-shell">
      <ScrollToTop />
      <TopBar />
      <Navbar />
      <Breadcrumb />
      <main>
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
      <BackToTop />
      <CookieBanner />
    </div>
  );
}
