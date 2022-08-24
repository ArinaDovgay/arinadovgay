import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/photo.jpg";
// import EnvArina from "../.env";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your average developer
          </p>
          <p className="py-2 text-gray-600">
            In 2021, I started learning Front-end. I found all the material I
            needed on the internet: YouTube, various courses and books. In the
            spring and summer of 2022, I took courses from ITVDN and SheCodes. I
            have a lot of pet-projects, you can see some of them in the Projects
            section. To see all the pet-projects, you can visit my{" "}
            <a
              href="https://github.com/ArinaDovgay"
              target="_blank"
              className="py-2 text-gray-600 underline cursor-pointer"
            >
              GitHub
            </a>
            .
          </p>
          <p className="py-2 text-gray-600">
            If we talk about Big Data, that's the main area I'm working on right
            now. I also studied Python myself through YouTube courses, books,
            articles and ITVDN courses. I am constantly improving my skills,
            practising. You can find the Big Data project in the "Projects"
            section.
          </p>
          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src='/public/assets/photo.jpg' className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
