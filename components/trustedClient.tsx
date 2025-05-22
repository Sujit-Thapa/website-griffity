"use client";

const TrustedClients = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Fixed header in the middle of the page */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-full text-center">
        <p className="text-primary font-medium text-lg">[TRUSTED CLIENTS]</p>
      </div>

      {/* Scrollable container for client boxes */}
      <div className="absolute inset-0 overflow-y-auto pt-24 pb-24">
        <div className="max-w-screen-2xl px-16 w-full mx-auto">
          <div className="flex justify-between mb-32">
            <div className="flex items-center justify-center w-[336px] h-[382px] translate-y-32 border border-primary bg-white">
              <p className="text-gray-400">Client 1</p>
            </div>
            <div className="flex items-center justify-center w-[336px] h-[382px] border border-primary bg-white">
              <p className="text-gray-400">Client 2</p>
            </div>
          </div>
          <div className="flex justify-between mb-32">
            <div className="flex items-center justify-center w-[336px] h-[382px] translate-y-32 border border-primary bg-white">
              <p className="text-gray-400">Client 3</p>
            </div>
            <div className="flex items-center justify-center w-[336px] h-[382px] border border-primary bg-white">
              <p className="text-gray-400">Client 4</p>
            </div>
          </div>
          <div className="flex justify-between mb-32">
            <div className="flex items-center justify-center w-[336px] h-[382px] translate-y-32 border border-primary bg-white">
              <p className="text-gray-400">Client 5</p>
            </div>
            <div className="flex items-center justify-center w-[336px] h-[382px] border border-primary bg-white">
              <p className="text-gray-400">Client 6</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustedClients;
