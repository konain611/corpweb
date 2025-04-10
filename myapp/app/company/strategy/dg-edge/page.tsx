import Return from "@/app/components/return";
import Image from "next/image";

export default function DGEdge() {
    return (
        <div className="bg-white">
            <section className="relative min-h-[300px] flex items-center">

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/DGEdge/banner.png"
                        alt="DGEdge"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                        DG Edge
                    </h1>
                </div>
            </section>

            <section className="text-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded"
                            alt="DGEdge"
                            src="/DGEdge/globe.png"
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-start text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                            DG Edge
                        </h1>
                        <p className="mb-8 leading-relaxed">
                            WITH ‘INNOVATION’ AS THE DEFINING CHARACTERISTIC, WE HAVE DEVISED A STRATEGY THAT MAKES ALL THE DIFFERENCE.
                        </p>
                        <p className="mb-8 leading-relaxed">
                        We believe that, in future, the most vital competitive advantage for businesses will be ‘innovation’. Customers around the world would be looking for it. They would seek newer products and newer ways to address day to day problems.<br></br>
                        </p>
                        <p className="mb-8 leading-relaxed">
                        On one side is the demand for tech advancement which puts a pressure on manufacturers and service providers to develop and integrate multi-channel strategy that includes both human and electronic elements. And on the other side is a legitimate concern for customer loyalty and fear of cyber risks which engender a customer-centric business strategy that protects both the company and its clients.
                        We are looking at both angles and adapting ourselves to mutually profitable relationship.
                        </p>
                    </div>
                </div>
            </section>

            <Return />
        </div>
    )
}