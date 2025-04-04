import Return from "@/app/components/return";
import Image from "next/image";

export default function MediaRequest() {
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
                            Media Request
                        </h1>
                    </div>
                </section>

                <section className="my-8">
                    <form className="max-w-[90%] mx-auto p-6 bg-white rounded-lg shadow-md">
                        {/* Name Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-500 text-sm font-bold mb-2">
                                    First Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 text-sm font-bold mb-2">
                                    Last Name *
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
                                />
                            </div>
                        </div>

                        {/* Contact Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                                <label className="block text-gray-500 text-sm font-bold mb-2">
                                    Email *
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full p-2 border rounded  focus:ring-2 focus:ring-[#003366]"
                                />
                            </div>
                            <div>
                                <label className="block text-gray-500 text-sm font-bold mb-2">
                                    Phone *
                                </label>
                                <input
                                    type="tel"
                                    required
                                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
                                />
                            </div>
                        </div>

                        {/* Dropdown Row */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">

                            <div>
                                <label className="block text-gray-500 text-sm font-bold mb-2">
                                    Select Domain *
                                </label>
                                <select className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003366]">
                                    <option value="">Select a domain</option>
                                    <option value="diginfo">Diginfo</option>
                                    <option value="dgacademy">DGAcademy</option>
                                    <option value="dgmagazine">DGMagazine</option>
                                </select>
                            </div>
                        </div>

                        {/* Inquiry Field */}
                        <div className="mb-6">
                            <label className="block text-gray-500 text-sm font-bold mb-2">
                                Inquiry *
                            </label>
                            <textarea
                                rows={4}
                                required
                                className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#003366]"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                className="bg-[#003366] text-white px-8 py-3 rounded hover:bg-[#F69226] transition-colors duration-300"
                            >
                                SUBMIT YOUR INQUIRY
                            </button>
                        </div>
                    </form>
                </section>

            </div>

            <Return />
        </div>
    );
}