import { motion } from 'framer-motion';

const AnimatedPage = ({ children }) => {
  const animation = {
    intial: { opacity: 0, x: 100 },
    animate: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -100 },
    transition: { duration: 1 },
  };
  return (
    <motion.div
      variants={animation}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};
export default AnimatedPage;
