import Image from "next/image";

export default function AboutSection() {
    return (
        <section className="bg-white py-16 sm:py-20 lg:py-24">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                    {/* Text */}
                    <div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                            About
                        </h2>
                        <div className="space-y-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                            <p>
                                MyHome is a modern property marketplace built to make property
                                discovery simple and transparent. Our platform connects property
                                seekers with trusted real estate agents and verified listings in
                                one place.
                            </p>
                            <p>
                                Searching for a property often requires visiting multiple
                                websites, contacting different agents, and comparing scattered
                                information. MyHome solves this problem by bringing listings,
                                property details, and agent communication into one streamlined
                                experience.
                            </p>
                            <p>
                                Whether you are looking to buy a home, rent an apartment, or
                                explore investment opportunities, MyHome helps you find the
                                right property faster and with more confidence.
                            </p>
                        </div>
                    </div>

                    {/* Image */}
                    <div className="relative w-full h-64 sm:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-lg">
                        <Image
                            src="/about-img1.jpg"
                            alt="Modern apartment building"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}