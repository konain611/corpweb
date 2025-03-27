import Link from "next/link";
import ReviewCarousel from "./reviewCarousel";

const reviews = [
    {
        id: 1,
        text: 'Working with the staff with SBS is always a pleasurer. They helped us write policies that we never had, did intrusion tendting and a vulnerability assessment. We are more secure because of the work they do for us',
        author: 'Dr Ashfaq A. Malik',
        position: 'prof./ Cdr (R) PN, Ex-Dean/HoD, Cyber Security Department, PN Engg College.'
    },
    {
        id: 2,
        text: 'VERY NICE WEBSITE',
        author: 'Syed Konain Nasir'
    },
    {
        id: 3,
        text: 'HELLO WORLD Sample Text.',
        author: 'Syed Konain Nasir'
    }
];

export default function CustomerRecognition() {
    return (

        <div className="container md:px-32 py-12">
            <h2 className="text-[#F69226] text-3xl font-semibold mb-7 text-left md:text-left">CUSTOMER RECOGNITION</h2>
            <h1 className="text-[#003366] md:text-4xl font-semibold mb-9 text-left md:text-left leading-snug">WHAT OUR CUSTOMER SAY ABOUT US</h1>
            <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-12 max-w-6xl mx-auto">

                <div className="bg-[#003366] text-white py-7 rounded-lg">
                    <h1 className="text-3xl font-bold text-center mb-8">Customer Reviews</h1>
                    <ReviewCarousel
                        reviews={reviews}
                        autoRotate={true}
                        rotateInterval={3000}
                    />
                </div>


                <div className="">
                    <h3 className="text-[#003366] text-2xl font-semibold mb-4">ACREDATION</h3>
                    <p className="text-gray-700 font-medium mb-4">
                        We work with across a range of industries.
                    </p>
                    <div className="grid grid-cols-2 gap-2 text-gray-600 text-sm font-medium">
                        <span>✔ Banking</span>
                        <span>✔ Transport</span>
                        <span>✔ Healthcare</span>
                        <span>✔ Technology</span>
                        <span>✔ Retail</span>
                    </div>
                    <Link href="/experience" className="mt-6 px-4 py-2 text-[#F69226] font-medium border border-[#F69226] rounded-md flex items-center gap-2 hover:bg-[#F69226] hover:text-white transition-all" >
                        Experience →
                    </Link >
                </div>
            </div>

        </div>
    )
}