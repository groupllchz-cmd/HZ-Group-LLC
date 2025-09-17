"use client"

import Image from "next/image";
import { services } from "../data";
import React from "react";
import ContactBanner from "@/components/ContactBanner";
import { Palette } from "@mui/icons-material";

export default function ServiceDetail({ params }) {
    const { id } = React.use(params);
    const service = services[id]; 

    if (!service) {
        return <div className="text-center mt-10 text-gray-600">Service not found</div>;
    }

    return (
        <>
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* Banner Image */}
                <div className="w-full relative object-cover h-[400px] sm:h-[500px] md:h-[700px] mb-6">
                    <Image
                        src="/images/about.jpg"
                        fill
                        className="rounded-2xl"
                        alt={service.title}
                    />
                </div>

                {/* Title & Headline */}
                <h1 className="title mb-4">{service.title}</h1>
                <p className="subtitle mb-6">{service.headline}</p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-8">{service.description}</p>

                {/* Key Features */}
                {service.keyFeatures && (
                    <div className="mb-8">
                        <h2 className="subtitle mb-4">Key Features</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {service.keyFeatures.map((feature, index) => (
                                <li key={index}>{feature}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Ideal For */}
                {service.idealFor && (
                    <div className="mb-8">
                        <h2 className="subtitle mb-4">Ideal For</h2>
                        <ul className="list-disc list-inside space-y-2 text-gray-700">
                            {service.idealFor.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                )}

                {/* Why Choose Us */}
                {service.whyChooseUs && (
                    <div className="mb-8">
                        <h2 className="subtitle mb-4">Why Choose Us</h2>
                        <p className="text-gray-700">{service.whyChooseUs}</p>
                    </div>
                )}
            </div>

            {/* Contact Banner */}
            <ContactBanner />
        </>
    );
}
