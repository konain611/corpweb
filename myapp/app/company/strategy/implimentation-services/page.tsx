import Return from "@/app/components/return";
import Image from "next/image";

export default function ImplimentationServices() {
    return (
        <div className="bg-white">
            <section className="mt-10 relative min-h-[300px] flex items-center">

                <div className="absolute inset-0 z-0">
                    <Image
                        src="/DGEdge/banner.png"
                        alt="ImpServices"
                        layout="fill"
                        objectFit="cover"
                        className="absolute inset-0"
                    />
                </div>

                <div className="relative z-10 max-w-6xl mx-auto px-4 text-center">
                    <h1 className="text-4xl lg:text-5xl font-bold text-[#F69226] mb-6">
                        Implementation Services
                    </h1>
                </div>
            </section>

            <section className="text-gray-900 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
                        <Image
                            className="object-cover object-center rounded"
                            alt="DGEdge"
                            src="/DGEdge/impService.png"
                            width={600}
                            height={600}
                        />
                    </div>
                    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-start text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-[#003366]">
                            Implementation Services
                        </h1>
                        <p className="mb-8 leading-relaxed">
                        DIGINFO Implementation Services focus on delivering the maximum value for you, in the shortest time possible, so that you can take full advantage of the products that you have purchased, regardless of your size.
                        </p>
                        <p className="mb-8 leading-relaxed">
                        OUR EXPERTISE revolved around the number of successful implementations with best practices developed across a multitude of customer organizations.<br></br>
                        </p>
                        <p className="mb-8 leading-relaxed">
                        DIGINFO implementation team is staffed globally by individuals that truly understand how all the technical and business processes that are associated with cyber security.<br></br>
                        </p>
                        <p className="mb-8 leading-relaxed">
                        Our team is trained in-house and receives continuous development to stay current on the latest technology and regulatory developments. Your implementation is supported by multiple teams to ensure a smooth and seamless transition from pre-sales to implementation and beyond.
                        </p>
                    </div>
                </div>
            </section>

            <Return />
        </div>
    )
}