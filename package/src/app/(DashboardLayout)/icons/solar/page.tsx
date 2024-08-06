import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solar Icons",
};

const page = () => {
  return (
    <>
      <div className="rounded-lg dark:shadow-dark-md shadow-md bg-white dark:bg-darkgray p-6 relative w-full break-words">
        <h5 className="card-title">Icons</h5>
        <div className="mt-6">
          <iframe
            src="https://icon-sets.iconify.design/solar/"
            title="Inline Frame Example"
            width="100%"
            height="650"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default page;
