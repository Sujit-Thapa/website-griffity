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
import TrustedClient from "@/components/trustedClient";

const About = dynamic(() => import("@/components/about"), { ssr: false });

const Page = () => {
  return (
    <>
      <main className="overflow-hidden relative ">
        <Loader />
        <Hero />
        <div className="relative ">
          <GradientRec />
          <About />
          <Clientnumber />
        </div>
        <Services />
        {/* <TrustedClient /> */}
        <Client />
        <Footer />
      </main>
    </>
  );
};

export default Page;
