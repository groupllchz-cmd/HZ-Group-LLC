"use client"

import Image from "next/image";
import { services } from "../data";
import React from "react";
import ContactBanner from "@/components/ContactBanner";


export default function ServiceDetail({ params }) {
     const { id } = React.use(params);

    const service = services[id]; // if you’re using array index

    if (!service) {
        return <div className="text-center mt-10 text-gray-600">Service not found</div>;
    }

    return (
        <>
             <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="w-full relative object-cover h-[400px] sm:h-[500px] md:h-[700px] mb-4">
                <Image
                    src="/images/about.jpg"
                    fill
                    className="rounded-2xl"
                    alt="About HZ Group LLC"
                />
            </div>

            <h1 className="title mb-4">{service.title}</h1>
            <p className="subtitle mb-6">{service.headline}</p>
            <p className="text-gray-600 leading-relaxed">{service.description}</p>
        </div>
      <ContactBanner />

        </>
  );
}
