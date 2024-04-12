import Button from "../Button";
import { AnimatePresence, motion } from "framer-motion";

export default function OpenMenu() {
  const variants = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25, // Animation duration
      },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transition: {
        duration: 0.5, // Animation duration
      },
    },
  };

  const initialVariant: string = "hidden";

  return (
    <motion.div
      initial={initialVariant}
      animate="visible"
      exit="exit"
      variants={variants}
      className="absolute text-gray px-6 text-center md:mx-12 md:hidden w-full z-50"
    >
      <motion.div className="py-10 bg-darkviolet rounded-xl font-bold p-6">
        <motion.ul className="space-y-10">
          <motion.li>Features</motion.li>
          <motion.li>Pricing</motion.li>
          <motion.li>Resources</motion.li>
        </motion.ul>
        <motion.div className="w-full bg-grayishviolet/25 h-[1px] my-6"></motion.div>
        <motion.div className="space-y-8">
          <p>Login</p>
          <Button type="long">Sign Up</Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

// Once I am done with this, I'mma framer motion it.
