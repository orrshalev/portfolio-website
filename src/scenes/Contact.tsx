import LineGradient from "../components/LineGradient";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import type { FormEvent} from "react";
import { useEffect } from "react";
import React from "react";
import { useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";

type Props = { isInViewport: (inViewport: boolean) => void};

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
    console.log("inViewport", inViewport);
  }, [inViewport, isInViewport]);

  return (
    <section ref={contactRef} id="contact" className={`py-48`}>
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
        className={`flex flex-col items-center justify-center gap-16 md:flex-row`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <Image
          className={`just flex basis-1/2`}
          src="/assets/contact-me.png"
          width={300}
          height={300}
          alt="contact"
        />
        <form
          className={`w-full basis-1/2`}
          target="_blank"
          onSubmit={onSubmit}
          action="https://formsubmit.co/shalev.orr@gmail.com"
          method="POST"
        >
          <div className={`flex flex-col gap-2`}>
            <input
              className={`w-full bg-yellow p-3 font-semibold placeholder-opaque-black`}
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
              className={`w-full bg-yellow p-3 font-semibold placeholder-opaque-black`}
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
              className={`w-full bg-yellow p-3 font-semibold placeholder-opaque-black`}
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
            className={`mx-auto mt-5 flex bg-yellow p-5 font-semibold text-deep-blue transition duration-500 hover:bg-red hover:text-white`}
          >
            SEND A MESSAGE
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;
