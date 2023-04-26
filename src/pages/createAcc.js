import React, { useState } from "react";
import ReusableModal from "../components/ReusableModal";
import "../styles/createAcc.css";

const CreateAcc = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <button className=" createAccBtn" onClick={() => setShowModal(true)}>
        Create Account
      </button>

      <ReusableModal show={showModal} onClose={() => setShowModal(false)}>
        <h3>Thihs is a real modal ... heck Yeah!</h3>
        <p>This Is The FIRST Modal</p>
      </ReusableModal>
    </div>
  );
};

export default CreateAcc;
