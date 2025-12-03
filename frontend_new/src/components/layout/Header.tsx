
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
        <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-md shadow-md z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between p-4">
                <div className="text-2xl font-semibold text-gray-800">
                    Baal Sanjeevani Child Welfare
                </div>
                <nav className="hidden md:flex space-x-4">
                    {menuItems.map((item) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            smooth={true}
                            duration={500}
                            offset={-80}
                            className="cursor-pointer text-gray-600 hover:text-blue-600 transition"
                        >
                            {item.name}
                        </Link>
                    ))}
                    <Link
                        to="donate"
                        smooth={true}
                        duration={500}
                        offset={-80}
                        className="ml-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition cursor-pointer"
                    >
                        Donate Now
                    </Link>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
                    <div className="flex flex-col px-4 py-2 space-y-2">
                        {menuItems.map((item) => (
                            <Link
                                key={item.to}
                                to={item.to}
                                smooth={true}
                                duration={500}
                                offset={-80}
                                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
                                onClick={toggleMenu}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
