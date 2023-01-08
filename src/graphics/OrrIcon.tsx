import React from "react";
import { motion } from "framer-motion";

/**
 * TSX representation of /assets/image/orr-icon.svg for
 * the purpose of animating with framer-motion
 * 
 * @returns Animated Icon
 */
const OrrIcon = () => {
  return (
    <motion.svg
      initial="hidden"
      whileInView="visible"
      transition={{ duration: 3, repeat: Infinity }}
      animate={{ y: [20, -20, 20] }}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 331.615 531.348"
      className={`w-[70%] h-[70%] md:w-auto md:h-auto`}
    >
      <g id="PC_Body" data-name="PC Body">
        <polygon
          points="13.12 3.283 152.12 184.283 326.12 181.283 166.675 2.506 13.12 3.283"
          style={{
            fill: "#414042",
            stroke: "#231f20",
            strokeMiterlimit: 10,
            strokeWidth: "5px",
          }}
        />
        <polygon
          points="152.675 186.506 148.342 528.172 323.009 528.839 329.009 186.172 152.675 186.506"
          style={{
            fill: "#414042",
            stroke: "#231f20",
            strokeMiterlimit: 10,
            strokeWidth: "5px",
          }}
        />
        <circle
          cx="240.12"
          cy="355.506"
          r="50"
          style={{
            fill: "none",
            stroke: "#231f20",
            strokeMiterlimit: 10,
            strokeWidth: "1.5px",
          }}
        />
        <circle
          cx="239.675"
          cy="465.506"
          r="50"
          style={{
            fill: "none",
            stroke: "#231f20",
            strokeMiterlimit: 10,
            strokeWidth: "1.5px",
          }}
        />
        <polygon
          points="9.717 3.589 149.786 185.728 145.453 527.395 2.564 365.172 9.717 3.589"
          style={{ fill: "#414042", stroke: "#231f20", strokeMiterlimit: 10 }}
        />
        <polyline
          points="147.675 528.996 2.523 366.756 11.092 1.589"
          style={{
            fill: "none",
            stroke: "#231f20",
            strokeMiterlimit: 10,
            strokeWidth: "5px",
          }}
        />
      </g>
      <g id="PC_Wheels" data-name="PC Wheels">
        <g id="Color_Wheels" data-name="Color Wheels">
          <motion.image
            href="/assets/image/yellow-circle.png"
            height={100}
            width={100}
            x={191}
            y={194}
            transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
            animate={{ rotate: 360 }}
          />
          <motion.image
            initial={{ rotate: 135 }}
            href="/assets/image/yellow-circle.png"
            height={100}
            width={100}
            x={190}
            y={306}
            transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
            animate={{ rotate: 495 }}
          />
          <motion.image
            initial={{ rotate: 270 }}
            href="/assets/image/yellow-circle.png"
            height={100}
            width={100}
            x={190}
            y={415}
            transition={{ duration: 0.4, repeat: Infinity, ease: "linear" }}
            animate={{ rotate: 630 }}
          />
        </g>
        <circle
          cx="241.009"
          cy="244.172"
          r="50"
          style={{
            fill: "none",
            stroke: "#231f20",
            strokeMiterlimit: 10,
            strokeWidth: "1.5px",
          }}
        />
        <path
          d="m241.019,233.734c-2.402,0-4.318.886-5.748,2.657s-2.146,4.291-2.146,7.56.717,5.787,2.146,7.559,3.346,2.657,5.748,2.657,4.309-.886,5.719-2.657,2.115-4.291,2.115-7.559-.705-5.771-2.115-7.55-3.317-2.667-5.719-2.667"
          style={{ fill: "#231f20" }}
        />
        <path
          d="m241.009,221.728c-12.15,0-22,9.9-22,22.111s9.85,22.111,22,22.111,22-9.9,22-22.111-9.85-22.111-22-22.111m9.518,34.364c-2.191,2.269-5.361,3.403-9.508,3.403s-7.316-1.134-9.508-3.403c-2.939-2.783-4.41-6.793-4.41-12.028,0-5.342,1.471-9.352,4.41-12.029,2.191-2.269,5.361-3.404,9.508-3.404s7.316,1.135,9.508,3.404c2.928,2.677,4.391,6.687,4.391,12.029,0,5.235-1.464,9.245-4.391,12.028"
          style={{ fill: "#231f20" }}
        />
        <path
          d="m244.8,347.391c-.515-.274-1.289-.41-2.319-.41h-5.533v6.247h5.395c1.071,0,1.875-.125,2.411-.379.947-.442,1.423-1.313,1.423-2.619,0-1.408-.459-2.355-1.376-2.838"
          style={{ fill: "#231f20" }}
        />
        <path
          d="m241.565,333.95c-12.272,0-22.223,10.049-22.223,22.444s9.951,22.444,22.223,22.444,22.221-10.049,22.221-22.444-9.949-22.444-22.221-22.444m12.709,36.897h-6.693c-.184-.643-.314-1.16-.393-1.555-.158-.814-.244-1.646-.256-2.5l-.041-2.697c-.023-1.85-.344-3.084-.959-3.701-.613-.615-1.766-.924-3.453-.924h-5.922v11.377h-5.925v-29.016h13.879c1.984.039,3.51.289,4.578.748s1.975,1.135,2.717,2.027c.613.734,1.1,1.549,1.459,2.441.357.893.537,1.908.537,3.051,0,1.379-.348,2.732-1.043,4.064s-1.844,2.273-3.445,2.826c1.338.537,2.287,1.303,2.844,2.293.559.99.838,2.504.838,4.537v1.949c0,1.324.053,2.225.16,2.697.16.748.533,1.299,1.119,1.652v.731h0Z"
          style={{ fill: "#231f20" }}
        />
        <path
          d="m243.355,454.169c-.515-.274-1.289-.41-2.319-.41h-5.533v6.247h5.395c1.071,0,1.875-.125,2.411-.379.947-.442,1.423-1.313,1.423-2.619,0-1.408-.459-2.355-1.376-2.838"
          style={{ fill: "#231f20" }}
        />
        <path
          d="m240.12,440.728c-12.272,0-22.223,10.049-22.223,22.444s9.951,22.444,22.223,22.444,22.221-10.049,22.221-22.444-9.949-22.444-22.221-22.444m12.709,36.897h-6.693c-.184-.643-.314-1.16-.393-1.555-.158-.814-.244-1.646-.256-2.5l-.041-2.697c-.023-1.85-.344-3.084-.959-3.701-.613-.615-1.766-.924-3.453-.924h-5.922v11.377h-5.925v-29.016h13.879c1.984.039,3.51.289,4.578.748s1.975,1.135,2.717,2.027c.613.734,1.1,1.549,1.459,2.441.357.893.537,1.908.537,3.051,0,1.379-.348,2.732-1.043,4.064s-1.844,2.273-3.445,2.826c1.338.537,2.287,1.303,2.844,2.293.559.99.838,2.504.838,4.537v1.949c0,1.324.053,2.225.16,2.697.16.748.533,1.299,1.119,1.652v.731h0Z"
          style={{ fill: "#231f20" }}
        />
      </g>
    </motion.svg>
  );
};

export default OrrIcon;
