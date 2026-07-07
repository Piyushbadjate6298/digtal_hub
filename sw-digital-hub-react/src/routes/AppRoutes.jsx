import { Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/About';
import Blog from '../pages/Blog';
import BlogDetail from '../pages/BlogDetail';
import CaseStudies from '../pages/CaseStudies';
import Contact from '../pages/Contact';
import FreeAudit from '../pages/FreeAudit';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';
import Portfolio from '../pages/Portfolio';
import PrivacyPolicy from '../pages/PrivacyPolicy';
import ServiceDetail from '../pages/ServiceDetail';
import Services from '../pages/Services';
import Terms from '../pages/Terms';

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/free-audit" element={<FreeAudit />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
