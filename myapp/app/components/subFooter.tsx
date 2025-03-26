import Link from "next/link";

export default function SubFooter() {
    return (
        <section className="text-white body-font bg-[#003366]">
            <div className="container flex flex-wrap px-5 py-12 mx-auto items-center">

                <div className="w-full sm:w-full md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#F69226]">
                        Call us: +92-21-34325505
                    </h1>
                    <p className="leading-relaxed text-base">
                        CONTACT US FOR YOUR CYBER SECURITY NEEDS
                    </p>
                    <Link
                        href="/customer-support"
                        className="text-[#F69226] border-[#F69226] p-3 font-bold inline-flex items-center mt-6 transition-all duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer border-2 sm:border-2 md:border-3"
                    >
                        GET IN TOUCH &nbsp; ▶
                    </Link>
                </div>

                <div className="w-full sm:w-full md:w-1/2 md:pl-12">
                    <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-[#F69226]">
                        Visit Us
                    </h1>
                    <p className="leading-relaxed text-base">
                        DIGITAL INFORMATION SYSTEMS (PRIVATE) LIMITED Office 5, Amber Estate, Main Shahrah-e-Faisal,Near Baloch Colony Flyover, Karachi 75350. Sindh, Pakistan
                    </p>
                </div>

            </div>
        </section>
    );
}
