
import { Link } from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
    const quickLinks = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Programs', to: 'programs' },
        { name: 'Donate', to: 'donate' },
        { name: 'Volunteer', to: 'volunteer' },
        { name: 'Impact', to: 'impact' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <footer className="bg-gray-800 text-white py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">Baal Sanjeevani Child Welfare</h3>
                        <p className="text-gray-300 mb-4">
                            Nurturing hope, building futures, and empowering every child to reach their full potential.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-blue-400 transition">
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-pink-400 transition">
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-blue-500 transition">
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-blue-300 transition">
                                <FaTwitter className="text-2xl" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="text-gray-300 hover:text-blue-400 transition cursor-pointer"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-semibold mb-4">Contact Info</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>123 Child Welfare Street</li>
                            <li>Mumbai, Maharashtra 400001</li>
                            <li>India</li>
                            <li className="mt-4">Email: info@baalsanjeevani.org</li>
                            <li>Phone: +91 22 1234 5678</li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-8 text-center">
                    <p className="text-gray-300 flex items-center justify-center">
                        © 2024 Baal Sanjeevani Child Welfare. Made with <FaHeart className="text-red-500 mx-2" /> for children.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
