import Link from "next/link";
import ReviewCarousel from "./reviewCarousel";

const reviews = [
    {
        id: 1,
        text: 'Working with the staff with SBS is always a pleasure. They helped us write policies that we never had, did intrusion testing and a vulnerability assessment. We are more secure because of the work they do for us',
        author: 'Dr Ashfaq A. Malik',
        position: 'prof./ Cdr (R) PN, Ex-Dean/HoD, Cyber Security Department, PN Engg College.'
    },
    {
        id: 2,
        text: 'DGACADEMY has provided a flexible and comprehensive VM certification course',
        author: 'Dr. Zeeshan',
        position: 'Dean/ HoD, Naval Architecture Department, NUST-PNEC'
    },
    {
        id: 3,
        text: 'DIGINFO provides us with true security management capabilities',
        author: 'Syed Konain Nasir'
    }
];

export default function CustomerRecognition() {
    return (
        <div className="container px-4 sm:px-6 lg:px-32 py-8 sm:py-10 md:py-12 mx-auto bg-[#F7F7F7]">
            {/* Headings */}
            <div className="mb-8 md:mb-12">
                <h2 className="text-[#F69226] text-2xl sm:text-3xl font-semibold mb-2 sm:mb-3 text-center md:text-left">
                    CUSTOMER RECOGNITION
                </h2>
                <h1 className="text-[#003366] text-2xl sm:text-3xl md:text-4xl font-semibold text-center md:text-left leading-tight sm:leading-snug">
                    WHAT OUR CUSTOMERS SAY ABOUT US
                </h1>
            </div>

            {/* Content Grid */}
            <div className="flex flex-col lg:flex-row justify-center items-center gap-6 sm:gap-8 md:gap-12 max-w-6xl mx-auto">
                {/* Review Carousel */}
                <div className="w-full lg:w-[60%] bg-[#003366] text-white p-4 sm:p-6 md:p-7 rounded-lg shadow-lg">
                    <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center mb-4 sm:mb-6 md:mb-8">
                        Customer Reviews
                    </h1>
                    <ReviewCarousel
                        reviews={reviews}
                        autoRotate={true}
                        rotateInterval={3000}
                    />
                </div>

                {/* Accreditation Section */}
                <div className="w-full lg:w-[40%] p-4 sm:p-6 bg-white rounded-lg shadow-md">
                    <h3 className="text-[#003366] text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">
                        ACCREDITATION
                    </h3>
                    <p className="text-gray-700 font-medium mb-4 sm:mb-5 text-sm sm:text-base">
                        We work across a range of industries.
                    </p>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3 mb-5 sm:mb-6">
                        {['Banking', 'Transport', 'Healthcare', 'Technology', 'Retail'].map((industry) => (
                            <div key={industry} className="flex items-center">
                                <span className="text-[#F69226] mr-2">✔</span>
                                <span className="text-gray-600 text-sm sm:text-base font-medium">
                                    {industry}
                                </span>
                            </div>
                        ))}
                    </div>

                    <Link 
                        href="/company/about-us/experience" 
                        className="inline-block mt-4 sm:mt-6 px-4 py-2 sm:px-5 sm:py-2.5 text-[#F69226] font-medium border border-[#F69226] rounded-md hover:bg-[#F69226] hover:text-white transition-all duration-300 text-sm sm:text-base"
                    >
                        Experience →
                    </Link>
                </div>
            </div>
        </div>
    );
}