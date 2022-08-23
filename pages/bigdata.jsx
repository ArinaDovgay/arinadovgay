import Image from "next/image";
import React from "react";
import propertyImg from "../public/assets/projects/bigdata.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { motion } from 'framer-motion';

const bigdata = () => {
  return (
    <div className="w-full">
      <motion.div initial='hidden' animate='visible' variants={{
            hidden: {
              scale: .8,
              opacity: 0
            },
            visible: {
              scale: 1,
              opacity: 1,
              transition: {
                delay: .4
              }
            }
          }}>
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={propertyImg}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Big Data</h2>
          <h3>Python / Apache Spark / SQL</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p>Project</p>
          <h2 className="mt-5 mb-4">Overview</h2>
          <p>
            This project was written in Python and Apache Spark was also used. A
            new DataFrame is created using these techniques. Actions on the
            existing table are attached: 
          </p>
          <ul>
            <li>|-- Vendor: string (nullable = true) - name of vendor</li>
            <li>|-- Payment Type: string (nullable = true) - name of payment type0</li>
            <li>|-- Payment Rate: double (nullable = true) - payment_total / passengers count per vendor and payment type</li>
            <li>|-- Next Payment Rate: double (nullable = true) - next record(bigger) payment rate for vendor</li>
            <li>|-- Max Payment Rate: double (nullable = true) - max payment rate for vendor</li>
            <li>|-- Percents to next rate: string (nullable = true) - how many points (in percents) is necessary to achieve the next record payment rate</li>
          </ul>
          <p>In addition, a Python script has been written that can send results to the email</p>
          <a
            href="https://github.com/ArinaDovgay/Big-Data-Test-Task"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-300">Code</button>
          </a>
          <a
            href="https://www.kaggle.com/datasets/anandaramg/taxi-trip-data-nyc?resource=download"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 hover:scale-105 ease-in duration-300">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Apache Spark
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> SQL
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
      </motion.div>
    </div>
  );
};

export default bigdata;
