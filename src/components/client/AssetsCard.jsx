import React, { useState, useEffect } from "react";
import "./AssetsCard.css";

import trumpcard from "../../assets/card.jpeg";
import trumpAgreement from "../../assets/aggrement.png";
import trumpCertificate from "../../assets/certificate.jpeg";

const AssetsCard = ({ userData, isLoading, formatDate, width }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  /* ---------- helpers -------------------------------------------------- */
  const getImageByPaymentSource = () => {
    switch (userData?.payment_source) {
      case "TRUMP_CARD":
        return trumpcard;
      case "TRUMP_AGREEMENT":
        return trumpAgreement;
      case "TRUMP_CERTIFICATE":
      default:
        return trumpCertificate;
    }
  };

  /* ---------- modal helpers ------------------------------------------- */
  const handleImageClick = () => {
    setModalOpen(true);
    window.scrollTo({ top: 80, behavior: "smooth" });
  };
  const closeModal = () => setModalOpen(false);

  /* Prevent background scroll when modal open */
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? "hidden" : "auto";
  }, [isModalOpen]);

  const selectedImage = getImageByPaymentSource();
  const paymentSource  = userData?.payment_source;

  /* ---------- render --------------------------------------------------- */
  return (
    <div
      className={`assets-container ${
        paymentSource === "TRUMP_CERTIFICATE" ? "assets-container-certificate" : ""
      }`}
      style={width ? { maxWidth: width } : undefined}
    >
      <div
        className={`card p-3 assets-card-wrapper ${
          paymentSource === "TRUMP_CERTIFICATE" ? "certificate-card" : ""
        }`}
        role="button"
        onClick={handleImageClick}
      >
        {/* ---------- image ---------- */}
        <img
          className="assets-card-img"
          src={selectedImage}
          alt="Trump Document"
        />

        {/* ---------- optional shine / overlay for TRUMP_CARD ---------- */}
        {paymentSource === "TRUMP_CARD" && (
          <>
            <div className="card-shine" />
            {/* overlay texts removed; add back if needed */}
          </>
        )}
      </div>

      {/* ---------- modal ---------- */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <button
            className="modal-close-button"
            type="button"
            onClick={closeModal}
          >
            &times;
          </button>

          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img
              className={`modal-img ${
                paymentSource === "TRUMP_CERTIFICATE"
                  ? "modal-img-certificate"
                  : paymentSource === "TRUMP_CARD"
                  ? "modal-img-card"
                  : "modal-img-agreement"
              }`}
              src={selectedImage}
              alt="Enlarged Document"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default AssetsCard;
