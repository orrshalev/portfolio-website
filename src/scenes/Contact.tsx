import LineGradient from "../components/LineGradient";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

import type { FormEvent} from "react";
import { useEffect } from "react";
import React from "react";
import { useRef } from "react";
import useIsInViewport from "../hooks/useIsInViewport";
import type { Order} from "../pages";
import { AnchorPrioritiesMap} from "../pages";

type Props = {isInViewport: (inViewport: Order) => void};

const Contact = ({isInViewport}: Props) => {
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
          className={`flex items-center flex-col md:flex-row justify-center gap-16`}
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
            className={`flex basis-1/2 just`}
            src="/assets/image/contact-me.png"
            width={300}
            height={300}
            alt="contact"
          />
          <form
            className={`basis-1/2 w-full`}
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/shalev.orr@gmail.com"
            method="POST"
          >
            <div className={`flex flex-col gap-2`}>
            <input
              className={`w-full bg-gray-100 border-black border-2 text-black rounded-sm p-3 font-semibold placeholder-opaque-black`}
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
              className={`w-full bg-gray-100 border-black border-2 text-black rounded-sm p-3 font-semibold placeholder-opaque-black`}
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
              className={`w-full text-black bg-gray-100 border-black border-2 rounded-sm px-3 pt-3 pb-10 font-semibold placeholder-opaque-black`}
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
              className={`mt-5 rounded-sm bg-yellow mx-auto flex p-5 font-semibold text-deep-blue transition duration-500 hover:bg-purple hover:text-white`}
            >
              SEND A MESSAGE
            </button>
          </form>
        </motion.div>
    </section>
  );
};

export default Contact;
