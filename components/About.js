"use client";

import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className=" bg-slate-100 py-10 flex flex-col justify-center items-center">
      <div className="max-w-7xl">
        <div className="flex w-full mt-20 flex-col justify-center items-center">
          <h1 className="title text-center mb-8">About us</h1>
        </div>
        <div className="flex flex-col gap-4 lg:flex-row bg-base-100 lg:px-0 px-5 my-5">
          <div
            className="flex relative justify-center lg:mx-4 items-center w-full lg:w-1/2 p-4 min-h-[400px]" // Added min-height
          >
            <Image
              src="/images/about.jpg"
              fill
              className="object-cover rounded-2xl" // Added rounded corners
              alt="About HZ Group LLC"
            />
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, amount: 0.2 }}
            className="w-full lg:w-1/2 md:py-8 py-1 flex flex-col lg:px-4"
          >
            <div className="flex flex-col gap-3 h-full">
              <p className="text-lg font-bold text-[#535252] md:text-3xl lg:mb-4 mb-2">
                Your Partner in Digital Transformation
              </p>

              <p className="text-sm font-inter text-gray-700 leading-relaxed">
                At <strong>HZ Group LLC</strong>, we specialize in delivering
                cutting-edge technology solutions that empower businesses to
                scale, innovate, and stay ahead in a fast-changing digital
                world.
                <br />
                <br />
                Our team of experts provides end-to-end services across software
                development, cloud solutions, IT consulting, and digital
                transformation. Whether you are a startup building your first
                product, an enterprise optimizing workflows, or an organization
                adopting AI-driven solutions, we tailor our services to match
                your unique goals and challenges.
                <br />
                <br />
                By combining technical expertise with a client-first approach,
                we ensure seamless project delivery, robust security, and
                scalable solutions. With strong partnerships and a passion for
                innovation, HZ Group LLC is committed to being your trusted
                technology partner every step of the way.
              </p>
              <Link href="/about">
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#001E80",
                    color: "#fff",
                    fontWeight: "bold",
                    textTransform: "uppercase",
                    px: 4,
                    py: 1.5,
                    borderRadius: 999,
                    "&:hover": {
                      backgroundColor: "rgb(14,52,178)",
                    },
                  }}
                >
                  Explore More
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
