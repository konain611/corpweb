import Link from "next/link";

export default function SubFooter() {
    return (
        <section className="text-white bg-[#003366]">
            <div className="container flex flex-wrap px-5 py-12 mx-auto items-center max-w-7xl">
                {/* Contact Section */}
                <div className="w-full md:w-1/2 md:pr-12 md:py-8 md:border-r md:border-b-0 mb-10 md:mb-0 pb-10 border-b border-gray-200/30">
                    <h1 className="text-2xl sm:text-3xl font-medium title-font mb-3 text-[#F69226]">
                        Call us: +92-21-34325505
                    </h1>
                    <p className="leading-relaxed text-base mb-5">
                        CONTACT US FOR YOUR CYBER SECURITY NEEDS
                    </p>
                    <Link
                        href="/company/contact-us/customer-support"
                        className="text-[#F69226] border-[#F69226] px-5 py-2 font-bold inline-flex items-center mt-2 transition-all duration-200 hover:bg-[#F69226] hover:text-white border-2"
                    >
                        GET IN TOUCH &nbsp; ▶
                    </Link>
                </div>

                {/* Address Section */}
                <div className="w-full md:w-1/2 md:pl-12">
                    <h1 className="text-2xl sm:text-3xl font-medium title-font mb-3 text-[#F69226]">
                        Visit Us
                    </h1>
                    <p className="leading-relaxed text-base">
                        DIGITAL INFORMATION SYSTEMS (PRIVATE) LIMITED<br />
                        Office 5, Amber Estate, Main Shahrah-e-Faisal,<br />
                        Near Baloch Colony Flyover, Karachi 75350.<br />
                        Sindh, Pakistan
                    </p>
                </div>
            </div>
        </section>
    );
}