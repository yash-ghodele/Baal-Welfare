
import { FaQuoteLeft } from 'react-icons/fa';
import { testimonials } from '../../data/mockData';

const TestimonialsSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">Stories & Testimonials</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Hear from the people whose lives have been touched by our work
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
                        >
                            <div className="absolute top-4 right-4 text-blue-100 text-6xl opacity-50">
                                <FaQuoteLeft />
                            </div>
                            <div className="relative z-10">
                                <p className="text-gray-600 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                                <div className="flex items-center pt-4">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className="w-14 h-14 rounded-full object-cover mr-4 border-2 border-blue-100"
                                    />
                                    <div>
                                        <p className="font-bold text-gray-800 text-lg">{testimonial.name}</p>
                                        <p className="text-sm text-blue-600 font-medium">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
