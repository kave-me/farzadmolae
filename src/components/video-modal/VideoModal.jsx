import React, { useEffect, useState } from "react";
import styles from "./VideoModal.module.scss";
import { FaPlayCircle } from "react-icons/fa";

const VideoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  // Close the modal when the Escape key is pressed
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Stop propagation to prevent the modal from closing when clicking inside it
  const handleModalContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div>
      <button onClick={handleOpen} className={styles.button}>

        <span>ویدیو معرفی</span>
        <FaPlayCircle style={{ width: "40px", height: "40px" }} />
      </button>
      {isOpen && (
        <div className={styles.modal} onClick={handleClose}>
          <div className={styles.modalContent} onClick={handleModalContentClick}>
            {/*<span className={styles.closeButton} onClick={handleClose}>&times;</span>*/}
            <video width="100%" controls frameBorder="0" allowFullScreen volume="0.3" autoPlay>
              {/*<source src="vid/intro.webm" type="video/webm"/>*/}
              {/*<source src="vid/intro.ogv" type="video/ogg"/>*/}
              <source src="vid/intro.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      )}
    </div>
  );
};

export default VideoModal;
