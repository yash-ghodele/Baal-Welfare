import { useState } from 'react';
import { volunteerRoles } from '../../data/mockData';

const VolunteerSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Volunteer form submitted:', formData);
        alert('Thank you for your interest! We will contact you soon. (This is a demo - no data was actually sent)');
        setFormData({ name: '', email: '', phone: '', interest: '', message: '' });
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    return (
        <section id="volunteer" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Volunteer With Us</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Join our community of dedicated volunteers and make a real difference in children's lives
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                    {volunteerRoles.map((role) => (
                        <div
                            key={role.id}
                            className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">{role.title}</h3>
                            <p className="text-gray-600">{role.description}</p>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-8 rounded-xl shadow-lg max-w-3xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Sign Up to Volunteer</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Name *</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Your full name"
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
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Phone *</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="+91 1234567890"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 font-medium mb-2">Area of Interest *</label>
                                <select
                                    name="interest"
                                    value={formData.interest}
                                    onChange={handleChange}
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    <option value="">Select an area</option>
                                    <option value="teaching">Teaching Support</option>
                                    <option value="events">Event Volunteer</option>
                                    <option value="fundraising">Fundraising Partner</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div>
                            <label className="block text-gray-700 font-medium mb-2">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Tell us about yourself and why you want to volunteer..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-4 rounded-lg font-semibold hover:bg-green-700 transition shadow-lg"
                        >
                            Submit Application
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default VolunteerSection;
