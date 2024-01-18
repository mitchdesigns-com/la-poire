import React from "react";

export default function Field({ text, label, textarea, ...props }: any) {
  return (
    <div className="w-full">
      {label && <label htmlFor="">{text}</label>}
      {textarea ? (
        <textarea
          {...props}
          className="border border-gray4 py-10 px-14 placeholder:text-gray text-black text-sm rounded-md w-full h-[160px] resize-none"
        />
      ) : (
        <input
          type="text"
          {...props}
          className="w-full py-10 text-sm text-black border rounded-md border-gray4 px-14 placeholder:text-gray"
        />
      )}
    </div>
  );
}
