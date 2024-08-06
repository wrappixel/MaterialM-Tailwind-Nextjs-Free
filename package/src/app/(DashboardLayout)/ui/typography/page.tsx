import React from "react";

const page = () => {
  return (
    <>
      <div className="rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
        <h5 className="card-title">Typography</h5>
        <div className="mt-6">
          <div className="border border-ld rounded-lg px-6 py-4 mb-6">
            <h1 className="font-semibold text-4xl">h1.Heading</h1>
            <p className="mt-2">font size: 36 | line-height: 40 | font weight: 600</p>
          </div>
          <div className="border border-ld rounded-lg px-6 py-4 mb-6">
            <h2 className="font-semibold text-3xl">h2.Heading</h2>
            <p className="mt-2">font size: 30 | line-height: 36 | font weight: 600</p>
          </div>
          <div className="border border-ld rounded-lg px-6 py-4 mb-6">
            <h3 className="font-semibold text-2xl">h3.Heading</h3>
            <p className="mt-2">font size: 24 | line-height: 32 | font weight: 600</p>
          </div>
          <div className="border border-ld rounded-lg px-6 py-4 mb-6">
            <h4 className="font-semibold text-xl">h4.Heading</h4>
            <p className="mt-2">font size: 20 | line-height: 28 | font weight: 600</p>
          </div>
          <div className="border border-ld rounded-lg px-6 py-4 mb-6">
            <h5 className="font-semibold text-lg">h5.Heading</h5>
            <p className="mt-2">font size: 20 | line-height: 28 | font weight: 600</p>
          </div>
          <div className="border border-ld rounded-lg px-6 py-4 mb-6">
            <h6 className="font-semibold text-base">h6.Heading</h6>
            <p className="mt-2">font size: 16 | line-height: 24 | font weight: 600</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
