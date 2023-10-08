import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Prompt } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface AnimetedContainerProps extends React.ComponentProps<typeof motion.div> {}

export default function AnimatedContainer({ children, ...props }: AnimetedContainerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{
        type: 'tween',
        ease: 'anticipate',
        duration: 0.7,
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
