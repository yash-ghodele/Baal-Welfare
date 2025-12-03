
import { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const menuItems = [
        { name: 'Home', to: 'home' },
        { name: 'About', to: 'about' },
        { name: 'Programs', to: 'programs' },
        { name: 'Donate', to: 'donate' },
        { name: 'Volunteer', to: 'volunteer' },
        { name: 'Impact', to: 'impact' },
        { name: 'Contact', to: 'contact' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isOpen ? 'bg-white' : 'bg-white/80 backdrop-blur-lg shadow-sm'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center cursor-pointer">
                        <Link to="home" smooth={true} duration={500} offset={-80} className="flex items-center gap-2">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg">
                                B
                            </div>
                            <span className="font-bold text-2xl text-gray-800 tracking-tight">
                                Baal<span className="text-blue-600">Sanjeevani</span>
                            </span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {menuItems.map((item) => (
                            item.name !== 'Donate' && (
                                <Link
                                    key={item.to}
                                    to={item.to}
                                    smooth={true}
                                    duration={500}
                                    offset={-80}
                                    className="text-gray-600 hover:text-blue-600 font-medium transition-colors duration-300 cursor-pointer text-sm uppercase tracking-wide"
                                >
                                    {item.name}
                                </Link>
                            )
                        ))}
                        <Link
                            to="donate"
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-2.5 rounded-full font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer flex items-center gap-2"
                        >
                            <span>Donate Now</span>
                            <span className="bg-white/20 rounded-full w-5 h-5 flex items-center justify-center text-xs">➜</span>
                        </Link>
                    </nav>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-600 hover:text-blue-600 focus:outline-none p-2 transition-colors"
                        >
                            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`md:hidden absolute top-20 left-0 w-full bg-white shadow-xl transition-all duration-300 ease-in-out transform origin-top ${isOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0 pointer-events-none'}`}>
                <div className="px-4 pt-2 pb-6 space-y-2">
                    {menuItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${item.name === 'Donate'
                                    ? 'bg-blue-50 text-blue-600 border border-blue-100'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-blue-600'
                                }`}
                            onClick={toggleMenu}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </div>
        </header>
    );
};

export default Header;
