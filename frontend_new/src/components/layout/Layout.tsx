import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>{children}</main>
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default Layout;
