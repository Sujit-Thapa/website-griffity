"use client";

import React, { useEffect, useState } from "react";
import Hero from "../components/hero";
import Loader from "../components/loader";

const Page = () => {
  return (
    <>
      <Loader />
      <main>
        <Hero />
      </main>
    </>
  );
};

export default Page;
