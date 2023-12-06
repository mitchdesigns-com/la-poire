import React from "react";

export default function Field({ text, label, ...props }: any) {
  return (
    <div className="w-full">
      {label && <label htmlFor="">{text}</label>}
      <input type="text" {...props} className="border border-gray4 py-10 px-14 placeholder:text-gray text-black text-sm rounded-md w-full"/>
    </div>
  );
}
