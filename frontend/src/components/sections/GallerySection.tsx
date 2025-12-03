

const GallerySection = () => {
    const placeholderImages = [
        { id: 1, alt: 'Children in classroom', src: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=800&auto=format&fit=crop' },
        { id: 2, alt: 'Girl studying', src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=800&auto=format&fit=crop' },
        { id: 3, alt: 'Sports day event', src: 'https://images.unsplash.com/photo-1551958219-acbc608c6377?q=80&w=800&auto=format&fit=crop' },
        { id: 4, alt: 'Community gathering', src: 'https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=800&auto=format&fit=crop' },
        { id: 5, alt: 'Happy group', src: 'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=800&auto=format&fit=crop' },
        { id: 6, alt: 'Child dreaming', src: 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=800&auto=format&fit=crop' },
        { id: 7, alt: 'Smiling child', src: 'https://images.unsplash.com/photo-1516627145497-ae6968895b74?q=80&w=800&auto=format&fit=crop' },
        { id: 8, alt: 'Playing cricket', src: 'https://images.unsplash.com/photo-1531415074968-036ba1b575da?q=80&w=800&auto=format&fit=crop' },
        { id: 9, alt: 'Hands together', src: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?q=80&w=800&auto=format&fit=crop' },
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4">
                <div className="text-center mb-16">
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">Our Moments</span>
                    <h2 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Gallery</h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 to-green-500 mx-auto rounded-full mb-6"></div>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Glimpses of our programs, events, and the joy we bring to children's lives.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {placeholderImages.map((image) => (
                        <div
                            key={image.id}
                            className="aspect-video rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 group relative cursor-pointer"
                        >
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10"></div>
                            <img
                                src={image.src}
                                alt={image.alt}
                                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                            />
                            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                                <p className="text-white font-medium text-lg">{image.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="px-8 py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300">
                        View All Photos
                    </button>
                </div>
            </div>
        </section>
    );
};

export default GallerySection;
