// components/SubscribeForm.js
import Script from "next/script";
import React from "react";
import Button from "./Button";

const SubscribeForm = () => {
  return (
    <div className="w-full">
      <form
        className="js-cm-form"
        id="subForm"
        action="https://www.createsend.com/t/subscribeerror?description="
        method="post"
        data-id="5B5E7037DA78A748374AD499497E309EF7189DEA4B9B9CEC14758B50508F1EEDA7998CA6E8A9333D4A5A5FC9764659EEBB7AC0D21E5A021D4C7A58CADE19C05A"
      >
        <div className="flex flex-col gap-10 items-stretch w-full mt-10">
          <div>
            <input aria-label="Name" placeholder="Full Name" id="fieldName" name="cm-name" className="border border-gray4 py-10 px-14 placeholder:text-gray text-black text-sm rounded-md w-full"/>
          </div>
          <div>
            <input
              autoComplete="Email"
              aria-label="Email"
              placeholder="Email Address"
              className="js-cm-email-input border border-gray4 py-10 px-14 placeholder:text-gray text-black text-sm rounded-md w-full"
              id="fieldEmail"
              name="cm-buyjrjh-buyjrjh"
              required
              type="email"
            />
          </div>
          <Button type="submit" variant="primary" size="normal" pill uppercase>
            Subscribe
          </Button>
        </div>
      </form>
      <Script
        src="https://js.createsend1.com/javascript/copypastesubscribeformlogic.js"
        strategy="lazyOnload"
      />
    </div>
  );
};

export default SubscribeForm;
