import { useState } from "react";
import Button from "./Button";
import Field from "./Field";
import axios from "axios";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const ContactForm = () => {
  const locale = useLocale();
  const t = useTranslations();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateEmail = (email: string): boolean => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      setErrors((prevErrors) => ({ ...prevErrors, name: "Name is required" }));
      return;
    }

    if (!validateEmail(formData.email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Invalid email address",
      }));
      return;
    }
    try {
      const response = await axios.post(`${apiUrl}/contact-us-forms`, {
        data: formData,
      });
      console.log("Form submitted successfully:", response.data);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error("Error submitting form:", error.response);
    }
  };
  const handleOverlayClick = () => {
    window.location.reload();
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-3">
          <Field
            text="Full Name"
            label="Your Full Name"
            value={formData.name}
            onChange={handleChange}
            name="name"
            required
          />
          <Field
            text="Email Address"
            label="Your Email Address"
            value={formData.email}
            onChange={handleChange}
            name="email"
            required
          />
          <Field
            text="Mobile Number"
            label="Your Mobile Number"
            value={formData.mobile}
            onChange={handleChange}
            name="mobile"
            required
          />
          <Field
            text="Message"
            label="Enter Questions or Special Message"
            value={formData.message}
            onChange={handleChange}
            name="message"
            textarea
            required
          />
          <div className="pt-4">
            <Button
              variant="primary"
              size="normal"
              uppercase
              pill
              type="submit"
            >
              SUBMIT REQUEST
            </Button>
          </div>
        </div>
      </form>
      {isSubmitted && (
        <>
          <div className="fixed inset-0 z-[1111] m-auto flex h-[600px] w-[90%] items-center justify-center rounded-[30px] bg-white lg:w-[600px]">
            <div className="felx flex-col items-center justify-center gap-10 text-center">
              <Image
                src="/images/thankyou.webp"
                alt=""
                width={317}
                height={238}
                className="mx-auto"
              />

              <h2 className="text-primary-100 mx-auto text-center text-[40px] font-bold leading-[55px]">
                {t("common.thank_you")}
              </h2>
              <p>{t("common.for_your_registration")}</p>
              <div className="mt-50 flex gap-20">
                <Button
                  variant="borderGray"
                  size="normal"
                  className="rounded-xl"
                  onClick={handleOverlayClick}
                >
                  {t("common.back_to_lapoire")}
                </Button>
                <Button
                  variant="primary"
                  size="normal"
                  className="rounded-xl"
                  onClick={handleOverlayClick}
                >
                  {t("common.back_to_lapoire")}
                </Button>
              </div>
            </div>
          </div>
          <div
            className="fixed inset-0 z-[1110] bg-black opacity-70"
            onClick={handleOverlayClick}
          ></div>
        </>
      )}
    </>
  );
};

export default ContactForm;
