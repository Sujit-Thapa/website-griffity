"use client";

import React, { useEffect, useState } from "react";
import Hero from "../components/hero";
import Loader from "../components/loader";
import About from "@/components/about";
import Clientnumber from "@/components/clientnumbers";
import Services from "@/components/services";
import Client from "@/components/clients";
import Footer from "@/components/footer";

const Page = () => {
  return (
    <>
      
     <main>
      <Loader />
        <Hero />
        <About/>
        <Clientnumber/>
        <Services/>
        <Client/>
        <Footer/>
      
      
      </main>
    </>
  );
};

export default Page;
