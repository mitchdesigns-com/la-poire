import React, { useState } from "react";
import Field from "./Field";
import Button from "./Button";
import axios from "axios";
import { useTranslations } from "next-intl";
import Image from "next/image";
// import { sendRequest } from "../api/requestForm";

const RequestForm = () => {
  const t = useTranslations("form");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    company: "",
    title: "",
    message: "",
    email: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    mobile: "",
    company: "",
    title: "",
    message: "",
    email: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    const apiUrl = process.env.NEXT_PUBLIC_STRAPI_URL;
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
      const response = await axios.post(`${apiUrl}/franchise-forms`, {
        data: formData,
      });
      console.log("Form submitted successfully:", response.data);
      setIsSubmitted(true);
    } catch (error: any) {
      console.error("Error submitting form:", error.response);
    }
  };

  const handleOverlayClick = () => {
    setIsSubmitted(false);
    setFormData({
      name: "",
      mobile: "",
      company: "",
      title: "",
      message: "",
      email: "",
    });
  };

  return (
    <>
      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <div className='flex flex-col gap-3'>
            <Field
              text={t("full_name")}
              label='Your Full Name'
              value={formData.name}
              onChange={(e: any) => handleChange(e)}
              name='name'
              required
            />
            <Field
              text={t("email_address")}
              label='Your Email Address'
              value={formData.email}
              onChange={(e: any) => handleChange(e)}
              name='email'
              required
            />
            <Field
              text={t("mobile_number")}
              label='Your Mobile Number'
              value={formData.mobile}
              onChange={(e: any) => handleChange(e)}
              name='mobile'
              required
            />
            <Field
              text={t("company")}
              label='Company Name'
              value={formData.company}
              onChange={(e: any) => handleChange(e)}
              name='company'
            />
            <Field
              text={t("title")}
              label='Your Title'
              value={formData.title}
              onChange={(e: any) => handleChange(e)}
              name='title'
            />
            <Field
              text={t("message")}
              label='Enter Questions or Special Message'
              value={formData.message}
              onChange={(e: any) => handleChange(e)}
              name='message'
              textarea
              required
            />
            <div className='pt-4'>
              <Button
                variant='primary'
                size='normal'
                pill
                uppercase
                type='submit'>
                {t("submit")}
              </Button>
            </div>
          </div>
        </form>
      ) : (
        <div className='fixed inset-0 z-[1111] m-auto flex h-[500px] md:h-[600px] w-[80%] md:w-[90%] items-center justify-center rounded-[30px] bg-white lg:w-[600px]'>
          <div className='flex flex-col items-center justify-center gap-10 text-center'>
            <Image
              src='/images/thankyou.webp'
              alt=''
              width={317}
              height={238}
              className='mx-auto max-w-[66%] md:max-w-[100%]'
            />

            <h2 className='text-primary-100 mx-auto text-center text-[30px] md:text-[40px] font-bold leading-[55px]'>
              {t("thank_you")}
            </h2>
            <p>{t("for_your_registration")}</p>
            <div className='hidden mt-50 md:flex gap-20'>
              <Button
                variant='borderGray'
                size='normal'
                className='rounded-xl'
                onClick={handleOverlayClick}>
                {t("back_to_lapoire")}
              </Button>
              <Button
                variant='primary'
                size='normal'
                className='rounded-xl'
                onClick={handleOverlayClick}>
                {t("back_to_lapoire")}
              </Button>
            </div>
            <div className='mt-50 flex md:hidden gap-20'>
              <Button
                variant='borderGray'
                size='small'
                className='rounded-xl'
                onClick={handleOverlayClick}>
                {t("back_to_lapoire")}
              </Button>
              <Button
                variant='primary'
                size='small'
                className='rounded-xl'
                onClick={handleOverlayClick}>
                {t("back_to_lapoire")}
              </Button>
            </div>
          </div>
        </div>
      )}
      {isSubmitted && (
        <div
          className='fixed inset-0 z-[1110] bg-black opacity-70'
          onClick={handleOverlayClick}></div>
      )}
    </>
  );
};

export default RequestForm;
