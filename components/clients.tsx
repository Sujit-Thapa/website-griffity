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
    { name: "nepal", text: "NEPAL" },
    { name: "ntc", text: "NEPAL TELECOME" },
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
    <div className="relative w-full">
      <div className="max-w-screen-2xl mt-52 w-full mx-auto">
        {Array.from({ length: maxLength }).map((_, idx) => (
          <div key={idx}>
            {pairedGroups[idx] && (
              <div className="flex justify-between mb-32">
                {pairedGroups[idx].map((client, i) => (
                  <div
                    key={i}
                    className={`flex flex-col items-start ${
                      i === 0 ? "translate-y-32" : ""
                    }`}
                  >
                    <div className="flex items-center p-14 justify-center w-[336px] h-[382px] border border-primary z-40">
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
                <div className="flex flex-col w-[336px]">
                  <div className="flex items-center justify-center p-14 h-[382px] z-40 border border-primary">
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
