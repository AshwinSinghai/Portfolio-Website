"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import useDownloader from "react-use-downloader";

const Homepage = () => {
  const { download } = useDownloader()
  const fileUrl = "/Res.jpg"
  const fileName = "Resume.jpg"

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/prof2.png" alt="hero" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-3/4 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold">
            Crafting Digital Experiences, Designing Tomorrow.
          </h1>
          {/* DESC */}
          <p className="md:text-xl">
            Welcome to my digital Portfolio, where innovation and creativity
            converge. With a keen eye for aesthetics and a dexterity of code, my
            portfolio showcases a diverse collection of projects that reflect my
            commitment to excellence.
          </p>
          {/* BUTTONS */}
          <div className=" w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white" onClick={() => download(fileUrl, fileName)}>
              My Resume
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              <Link href="/contact">Contact Me</Link>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  )
};

export default Homepage;
