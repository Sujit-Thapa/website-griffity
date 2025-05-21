"use client";

import React, { useEffect, useState } from "react";
import Hero from "../components/hero";
import Loader from "../components/loader";

const Page = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 30000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader />
      {/* <main>
        <Hero />
      </main> */}
    </>
  );
};

export default Page;
