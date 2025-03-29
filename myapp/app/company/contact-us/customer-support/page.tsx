import Return from "@/app/components/return";
import Image from "next/image";

export default function CustomerSupport() {
    return (
        <div>
            <div className="bg-white">
                <section className="mt-10 relative min-h-[300px] flex items-center">

                    <div className="absolute inset-0 z-0">
                        <Image
                            src="/CustomerSupport/support.png"
                            alt="Threat Assurance Background"
                            layout="fill"
                            objectFit="cover"
                            className="absolute inset-0"
                        />
                    </div>

                    <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                        <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                            Customer Support
                        </h1>
                        <p className="text-lg text-gray-200 max-w-3xl mx-auto">
                            24/7 expert assistance to resolve technical challenges and maintain seamless business continuity
                        </p>
                    </div>
                </section>

            </div>

            <Return/>
        </div>
    );
}