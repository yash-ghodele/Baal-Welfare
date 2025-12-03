import { useState } from 'react';

const DonationSection = () => {
    const [selectedAmount, setSelectedAmount] = useState(1000);
    const [customAmount, setCustomAmount] = useState('');

    const donationTiers = [500, 1000, 2500, 5000];

    const handleDonate = () => {
        const amount = customAmount || selectedAmount;
        console.log(`Donation of ₹${amount} initiated`);
        alert(`Thank you for your donation of ₹${amount}! This is a demo - no actual payment processed.`);
    };

    return (
        <section id="donate" className="relative py-20 bg-white">
            <div className="absolute inset-0 z-0 opacity-5">
                <img
                    src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?q=80&w=2000&auto=format&fit=crop"
                    alt="Donation Background"
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">How Your Donation Helps</h2>
                    <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
                </div>

                <div className="grid md:grid-cols-2 gap-12 mb-12">
                    <div className="space-y-6">
                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                                1
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Choose an Amount</h3>
                                <p className="text-gray-600">Select a donation tier or enter a custom amount</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                                2
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fill Basic Details</h3>
                                <p className="text-gray-600">Provide your contact information for acknowledgment</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                                3
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure Payment</h3>
                                <p className="text-gray-600">Complete your donation through our secure payment gateway</p>
                            </div>
                        </div>

                        <div className="flex items-start space-x-4">
                            <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold flex-shrink-0">
                                4
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">Receive Confirmation</h3>
                                <p className="text-gray-600">Get a receipt and impact report showing how your donation helps</p>
                            </div>
                        </div>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-semibold text-gray-800 mb-6">Make a Donation</h3>

                        <div className="mb-6">
                            <label className="block text-gray-700 font-medium mb-3">Select Amount</label>
                            <div className="grid grid-cols-2 gap-3 mb-4">
                                {donationTiers.map((amount) => (
                                    <button
                                        key={amount}
                                        onClick={() => {
                                            setSelectedAmount(amount);
                                            setCustomAmount('');
                                        }}
                                        className={`py-3 px-4 rounded-lg font-semibold transition ${selectedAmount === amount && !customAmount
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-100'
                                            }`}
                                    >
                                        ₹{amount}
                                    </button>
                                ))}
                            </div>

                            <input
                                type="number"
                                placeholder="Custom Amount"
                                value={customAmount}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => setCustomAmount(e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        <button
                            onClick={handleDonate}
                            className="w-full bg-blue-600 text-white py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
                        >
                            Donate ₹{customAmount || selectedAmount}
                        </button>

                        <p className="text-sm text-gray-500 mt-4 text-center">
                            Your donation is tax-deductible under Section 80G
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DonationSection;
