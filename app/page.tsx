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
import Reels from "@/components/reels";
import Reels2 from "@/components/reels2";
import About from "@/components/about";
import JoinUs from "@/components/join-us";

const Page = () => {
  return (
    <>
      <main className="relative ">
        <Loader />
        <Hero />
        <div className="relative overflow-hidden">
          <GradientRec />
          <About />
          <Clientnumber />
          <Services />
        </div>
        <div className="h-screen flex flex-col justify-center items-center overflow-hidden mb-96">
          <Reels2 />
          <Reels />
        </div>
        <TrustedClient />

        <Client />
        <JoinUs />
        <Footer />
      </main>
    </>
  );
};

export default Page;
