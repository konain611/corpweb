import Image from 'next/image';

export default function Approach() {
    const approaches = [
        {
            icon: "/Approach/educate.png",
            alt: "Educate icon",
            title: "EDUCATE",
            points: [
                "Creation of awareness and gathering of knowledge",
                "Training and educating our customers."
            ]
        },
        {
            icon: "/Approach/practise.png",
            alt: "Practice icon",
            title: "PRACTICE",
            points: [
                "Assessment of problems",
                "Optimum solution, professional services, pre-sales, solution designing",
                "Implementing DG Solutions",
                "Best practices and International standards"
            ]
        },
        {
            icon: "/Approach/manage.png",
            alt: "Manage icon",
            title: "MANAGE",
            points: [
                "Our methodical approach in managing and following tested procedures helps our client realize optimum benefit from their investments in people, technology, equipment and business procedures."
            ]
        },
        {
            icon: "/Approach/ensure.png",
            alt: "Ensure icon",
            title: "ENSURE",
            points: [
                "Assurance, audit, compliance, certifications",
                "DG Safeguarding and Ensuring"
            ]
        }
    ];

    return (
        <div className="container px-4 sm:px-6 lg:px-8 xl:px-32 py-8 sm:py-10 md:py-12 mx-auto bg-white">
            {/* Headings */}
            <div className="mb-8 md:mb-12">
                <h2 className="text-[#F69226] text-2xl sm:text-3xl font-semibold mb-3 sm:mb-4">
                    OUR APPROACH
                </h2>
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-[#003366] leading-tight sm:leading-snug">
                    WHY US
                </h1>
            </div>

            {/* Approach Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {approaches.map((approach, index) => (
                    <div 
                        key={index}
                        className="flex items-start p-4 sm:p-5 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                        <div className="flex-shrink-0 mr-4 sm:mr-5">
                            <Image
                                alt={approach.alt}
                                width={64}
                                height={64}
                                className="w-12 h-12 sm:w-16 sm:h-16 object-contain"
                                src={approach.icon}
                            />
                        </div>
                        <div>
                            <h4 className="text-xl sm:text-2xl text-gray-800 font-bold mb-2 sm:mb-3">
                                {approach.title}
                            </h4>
                            <ul className="space-y-2 sm:space-y-3">
                                {approach.points.map((point, i) => (
                                    <li 
                                        key={i}
                                        className="text-gray-600 text-sm sm:text-base leading-relaxed"
                                    >
                                        {point}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}