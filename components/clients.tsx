"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { text } from "stream/consumers";

const Client = () => {
  const pairedClients = [
    { name: "ncell", text: "NCELL" },
    { name: "prvu", text: "PRABHU BANK" },
    { name: "veda", text: "VEDA STUDIOS" },
    { name: "aitc", text: "AITC" },
    { name: "eureka", text: "EUREKA" },
    { name: "hult", text: "HULT PRIZE" },
    { name: "cafe", text: "CAFE BOH" },
    { name: "maha", text: "MAHAK MAHA" },
  ];

  const singleClients = [
    { name: "nepal", text: "OFFICE OF PRIME MINISTER" },
    { name: "ntc", text: "NEPAL TELECOM" },
    { name: "acem", text: "ADVANCED COLLEGE OF ENGINEERING & MANAGEMENT" },
  ];

  interface PairedClient {
    name: string;
    text: string;
  }

  interface SingleClient {
    name: string;
  }

  const pairedGroups: PairedClient[][] = [];
  for (let i = 0; i < pairedClients.length; i += 2) {
    pairedGroups.push(pairedClients.slice(i, i + 2));
  }

  const maxLength = Math.max(pairedGroups.length, singleClients.length);

  return (
    <div className="relative w-full" id="clients">
      <div className="max-w-screen-3xl mt-52 w-full mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 py-6 sm:py-8 md:py-10 flex flex-col gap-40">
        {Array.from({ length: maxLength }).map((_, idx) => (
          <div key={idx}>
            {pairedGroups[idx] && (
              <div className="flex flex-col sm:flex-row justify-between gap-10">
                {pairedGroups[idx].map((client, i) => (
                  <div
                    key={i}
                    className={`flex flex-col 
                    ${i === 0 ? "sm:items-start" : ""}
                    ${i % 2 !== 0 ? "items-end" : ""}
                  `}
                  >
                    <div className="w-[150px] xs:w-[200px] md:w-[250px]  lg:w-[336px]  aspect-[336/382] border border-primary flex items-center justify-center p-[10%] sm:p-14 z-10">
                      <Image
                        width={336}
                        height={382}
                        src={`/images/clientLogo/${client.name}.svg`}
                        alt={client.text}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                    <p className="p-base font-semibold text-primary mt-3">
                      {client.text}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {singleClients[idx] && (
              <div className="flex flex-col items-center mb-32 translate-y-32">
                <div className="flex flex-col  w-[150px] xs:w-[200px] md:w-[250px]  lg:w-[336px] ">
                  <div className="flex items-center justify-center  p-[10%] w-[150px] xs:w-[200px] md:w-[250px]  lg:w-[336px]  aspect-[336/382] z-40 border border-primary">
                    <Image
                      width={336}
                      height={382}
                      src={`/images/clientLogo/${singleClients[idx].name}.svg`}
                      alt={singleClients[idx].text}
                      className="max-h-full max-w-full object-contain"
                    />
                  </div>
                  <p className="text-left p-base font-semibold text-primary mt-3">
                    {singleClients[idx].text}
                  </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Client;
