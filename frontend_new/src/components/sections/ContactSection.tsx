import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Contact form submitted:', formData);
        alert('Thank you for reaching out! We will get back to you soon. (This is a demo - no data was actually sent)');
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="relative py-20 bg-white">
            <div className="absolute inset-0 z-0 opacity-5">
                <img
                    src="https://images.unsplash.com/photo-1423666639041-f142fcb93370?q=80&w=2000&auto=format&fit=crop"
                    alt="Contact Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Have questions or want to get involved? We'd love to hear from you
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4 border border-blue-50">
                            <div className="bg-blue-100 text-blue-600 p-4 rounded-full flex-shrink-0">
                                <FaMapMarkerAlt className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Visit Us</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    123 Child Welfare Street<br />
                                    Mumbai, Maharashtra 400001<br />
                                    India
                                </p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4 border border-blue-50">
                            <div className="bg-blue-100 text-blue-600 p-4 rounded-full flex-shrink-0">
                                <FaEnvelope className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Email Us</h3>
                                <p className="text-gray-600">info@baalsanjeevani.org</p>
                                <p className="text-gray-600">support@baalsanjeevani.org</p>
                            </div>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4 border border-blue-50">
                            <div className="bg-blue-100 text-blue-600 p-4 rounded-full flex-shrink-0">
                                <FaPhone className="text-2xl" />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Call Us</h3>
                                <p className="text-gray-600">+91 22 1234 5678</p>
                                <p className="text-gray-600">+91 98765 43210</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your name"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Email *</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="your.email@example.com"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Subject *</label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="What is this about?"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Message *</label>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;
