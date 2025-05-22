"use client";

import React, { useEffect, useState } from "react";
import Hero from "../components/hero";
import Loader from "../components/loader";
import Clientnumber from "@/components/clientnumbers";
import Services from "@/components/services";
import Client from "@/components/clients";
import Footer from "@/components/footer";
import GradientRec from "@/components/gradientRec";


import dynamic from "next/dynamic";

const About = dynamic(() => import("@/components/about"), { ssr: false });

const Page = () => {
  return (
    <>
      <main>
        <Loader />
        <Hero />
        <div className="relative overflow-hidden ">
          <GradientRec />
          <About />
          <Clientnumber />
        </div>
        <Services />
        <Client />
        <Footer />
      </main>
    </>
  );
};

export default Page;
