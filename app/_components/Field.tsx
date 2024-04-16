import React from "react";

export default function Field({ text, label, textarea, ...props }: any) {
  return (
    <div className="w-full">
      {label && <label htmlFor="">{text}</label>}
      {textarea ? (
        <textarea
          {...props}
          className="h-[160px] w-full resize-none rounded-md border border-gray4 px-14 py-10 text-sm text-black placeholder:text-gray"
        />
      ) : (
        <input
          type="text"
          {...props}
          className="w-full rounded-md border border-gray4 px-14 py-10 text-sm text-black placeholder:text-gray"
        />
      )}
    </div>
  );
}
