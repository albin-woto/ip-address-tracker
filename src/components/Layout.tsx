import React, { ReactNode } from 'react';
import Footer from '../components/Footer';
import '../assets/styles/components/Layout.scss';

const Layout: React.FC<ReactNode> = ({ children }) => (
  <div className="layout">
    {children}
    <Footer />
  </div>
);

export default Layout;
