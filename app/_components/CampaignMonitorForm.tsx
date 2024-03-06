// components/SubscribeForm.js
import Script from "next/script";
import React from "react";
import Button from "./Button";
import { useTranslations } from "next-intl";

const SubscribeForm = () => {
  const t = useTranslations('common')
  return (
    <div className="w-full">
      <form
        className="js-cm-form"
        id="subForm"
        action="https://www.createsend.com/t/subscribeerror?description="
        method="post"
        data-id="5B5E7037DA78A748374AD499497E309EF7189DEA4B9B9CEC14758B50508F1EEDA7998CA6E8A9333D4A5A5FC9764659EEBB7AC0D21E5A021D4C7A58CADE19C05A"
      >
        <div className="mt-10 flex w-full flex-col items-stretch gap-10">
          <div>
            <input aria-label="Name" placeholder={t('full_name')} id="fieldName" name="cm-name" className="w-full rounded-md border border-gray4 px-14 py-10 text-sm text-black placeholder:text-gray"/>
          </div>
          <div>
            <input
              autoComplete="Email"
              aria-label="Email"
              placeholder={t('email')}
              className="js-cm-email-input w-full rounded-md border border-gray4 px-14 py-10 text-sm text-black placeholder:text-gray"
              id="fieldEmail"
              name="cm-buyjrjh-buyjrjh"
              required
              type="email"
            />
          </div>
          <Button type="submit" variant="primary" size="normal" pill uppercase>
            {t("subscribe")}
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
