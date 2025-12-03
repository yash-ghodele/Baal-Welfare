
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
        <footer className="bg-gray-900 text-white pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-1">
                        <h3 className="text-2xl font-bold mb-6 text-white">Baal Sanjeevani</h3>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Nurturing hope, building futures, and empowering every child to reach their full potential through education, healthcare, and love.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-600 hover:text-white transition-all duration-300">
                                <FaFacebook className="text-lg" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-pink-600 hover:text-white transition-all duration-300">
                                <FaInstagram className="text-lg" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-700 hover:text-white transition-all duration-300">
                                <FaLinkedin className="text-lg" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-blue-400 hover:text-white transition-all duration-300">
                                <FaTwitter className="text-lg" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.to}>
                                    <Link
                                        to={link.to}
                                        smooth={true}
                                        duration={500}
                                        offset={-80}
                                        className="text-gray-400 hover:text-blue-400 transition cursor-pointer flex items-center"
                                    >
                                        <span className="mr-2">›</span> {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Contact Info</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start">
                                <span className="text-blue-500 mr-3 mt-1">📍</span>
                                <span>123 Child Welfare Street,<br />Mumbai, Maharashtra 400001</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-3">✉️</span>
                                <span>info@baalsanjeevani.org</span>
                            </li>
                            <li className="flex items-center">
                                <span className="text-blue-500 mr-3">📞</span>
                                <span>+91 22 1234 5678</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold mb-6 text-white">Newsletter</h4>
                        <p className="text-gray-400 mb-4">Subscribe to get updates on our latest programs and success stories.</p>
                        <form className="space-y-3">
                            <input
                                type="email"
                                placeholder="Your email address"
                                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-gray-300"
                            />
                            <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg">
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-gray-500 text-sm mb-4 md:mb-0">
                        © 2024 Baal Sanjeevani Child Welfare. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center">
                        Made with <FaHeart className="text-red-500 mx-2 animate-pulse" /> for a better future.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
