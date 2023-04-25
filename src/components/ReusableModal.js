import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { AnimatePresence, motion } from "framer-motion";
import "../styles/ReusableModal.css";

const ReusableModal = ({
  show,
  onClose,
  children,
  backdropStyles,
  modalStyles,
}) => {
  const modalRef = useRef();

  useEffect(() => {
    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  });

  const handleClick = (e) => {
    if (modalRef.current && modalRef.current.contains(e.target)) {
      return;
    }
    onClose();
  };

  const backDrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modal = {
    initial: {
      opacity: 0,
      scale: 1,
    },
    current: {
      opacity: 1,
      scale: 1,
      transform: { delay: 1 },
      transistion: { duration: 0.6 },
    },
    exit: {
      opacity: 0,
      scale: 0,
      transistion: { duration: 0.6 },
    },
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          variants={backDrop}
          initial="hidden"
          animate="visible"
          exit="hidden"
          className="backdrop"
          style={{ ...backdropStyles }}
        >
          <motion.div
            variants={modal}
            initial="initial"
            animate="current"
            exit="exit"
            className="modal"
            ref={modalRef}
            style={{ ...modalStyles }}
          >
            <div className="modalContent">{children}</div>

            <button onClick={onClose} className="closeBtn">
              <p>X</p>
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

ReusableModal.prototypes = {
  show: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  backdropStyles: PropTypes.object,
  modalStyles: PropTypes.object,
};

export default ReusableModal;
