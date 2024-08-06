import React from "react";

const page = () => {
  return (
    <>
      <div className="rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
        <h5 className="card-title">Shadow</h5>
        <div className="mt-6">
          <div className="grid grid-cols-12 gap-30">
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <div className="shadow-none bg-primary rounded-lg h-32 text-center flex justify-center items-center text-white text-xl ">
                1
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <div className="shadow bg-primary rounded-lg h-32 text-center flex justify-center items-center text-white text-xl">
                2
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <div className="shadow-sm bg-primary rounded-lg h-32 text-center flex justify-center items-center text-white text-xl">
                3
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <div className="shadow-md bg-primary rounded-lg h-32 text-center flex justify-center items-center text-white text-xl">
                4
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <div className="shadow-lg bg-primary rounded-lg h-32 text-center flex justify-center items-center text-white text-xl">
                5
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <div className="shadow-xl bg-primary rounded-lg h-32 text-center flex justify-center items-center text-white text-xl">
                6
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <div className="shadow-2xl bg-primary rounded-lg h-32 text-center flex justify-center items-center text-white text-xl">
                7
              </div>
            </div>
            <div className="lg:col-span-3 md:col-span-6 col-span-12">
              <div className="shadow-inner bg-primary rounded-lg h-32 text-center flex justify-center items-center text-white text-xl">
                8
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
