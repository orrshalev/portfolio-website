import LineGradient from "../components/LineGradient";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import type { FormEvent } from "react";
import { useEffect } from "react";
import React from "react";
import { useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";
import type { Order } from "../pages";
import { AnchorPrioritiesMap } from "../pages";

type Props = { isInViewport: (inViewport: Order) => void };

const Contact = ({ isInViewport }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  const contactRef = useRef(null);
  const inViewport = useIsInViewport(contactRef);

  useEffect(() => {
    inViewport ? isInViewport(AnchorPrioritiesMap.contact) : isInViewport(-1);
  }, [isInViewport, inViewport]);

  return (
    <section ref={contactRef} id="contact" className={`pb-48`}>
      {/* HEADINGS */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className={`font-playfair text-4xl font-semibold`}>
            <span className={`text-yellow`}>CONTACT ME</span> TO GET STARTED
          </p>
          <div className={`my-5 flex md:justify-end`}>
            <LineGradient width="mx-auto w-full" />
          </div>
        </div>
      </motion.div>

      {/* FORM & IMAGE */}
      <motion.div
        className={`flex flex-col items-center justify-center gap-16 md:flex-row `}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className={`flex flex-col gap-10 basis-1/2 justify-center`}>
          <Image
            className={`basis-1/2 max-w-[350px] mx-auto`}
            src="/assets/image/contact-image.png"
            width={2353}
            height={2311}
            alt="contact"
          />
          <p className={`basis-1/2 my-auto font-playfair text-2xl text-center`}>
            I sometimes take on <span className={`text-purple`}>freelance projects</span>. If you have a project you
            would like to discuss or otherwise would like to make contact, please email me 
            through this form or through one of my socials.
          </p>
        </div>
        <form
          className={`w-full basis-1/2`}
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/shalev.orr@gmail.com"
          method="POST"
        >
          <div className={`flex flex-col gap-2`}>
            <input
              className={`w-full rounded-sm border-2 border-black bg-gray-100 p-3 font-semibold text-black placeholder-opaque-black`}
              type="text"
              placeholder="NAME"
              {...register("name", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.name && (
              <p className={`mt-1 text-yellow`}>
                {errors.name.type === "required" && "This field is required."}
                {errors.name.type === "maxLength" &&
                  "Max length is 100 characters."}
              </p>
            )}

            <input
              className={`w-full rounded-sm border-2 border-black bg-gray-100 p-3 font-semibold text-black placeholder-opaque-black`}
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className={`mt-1 text-yellow`}>
                {errors.email.type === "required" && "This field is required."}
                {errors.email.type === "pattern" && "Invalid email address."}
              </p>
            )}

            <textarea
              className={`w-full rounded-sm border-2 border-black bg-gray-100 px-3 pt-3 pb-10 font-semibold text-black placeholder-opaque-black`}
              placeholder="MESSAGE"
              {...register("message", {
                required: true,
                maxLength: 3000,
              })}
            />
            {errors.message && (
              <p className={`mt-1 text-yellow`}>
                {errors.message.type === "required" &&
                  "This field is required."}
                {errors.message.type === "maxLength" &&
                  "Max length is 3000 characters."}
              </p>
            )}
          </div>

          <button
            type="submit"
            className={`mx-auto mt-5 flex rounded-sm bg-yellow p-5 font-semibold text-deep-blue transition duration-500 hover:bg-purple hover:text-white`}
          >
            SEND A MESSAGE
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
