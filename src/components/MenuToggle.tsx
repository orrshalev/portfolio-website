import * as React from "react";
import { motion } from "framer-motion";
import type { SVGMotionProps } from "framer-motion";

const Path = (props: SVGMotionProps<SVGPathElement>) => (
  <motion.path
    fill="transparent"
    strokeWidth="3"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

export type MenuToggleProps = {
  toggle: () => void;
};

const MenuToggle = ({ toggle  }: MenuToggleProps) => (
  <button onClick={toggle}>
    <svg width="23" height="23" viewBox="0 0 23 23">
      <Path
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5", stroke: "#f7be22" },
          "closed-top": { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5", stroke: "#f7be22"  },
        }}
      />
      <Path
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1, stroke: "#f7be22" },
          "closed-top": { opacity: 1,  },
          open: { opacity: 0 },
        }}
      />
      <Path
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" , stroke: "#f7be22" },
          "closed-top": { d: "M 2 16.346 L 20 16.346",  },
          open: { d: "M 3 2.5 L 17 16.346", stroke: "#f7be22" },
        }}
      />
    </svg>
  </button>
);

export default MenuToggle;
