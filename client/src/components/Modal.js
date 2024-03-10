// Modal.js
import React from 'react';
import '../style/Modal.css'; // Make sure to create this CSS file for styling

const Modal = ({ showModal, setShowModal, cardDetails }) => {
  if (!showModal) {
    return null;
  }

  return (
    <div className="modal-overlay" onClick={() => setShowModal(false)}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2 className="h2">{cardDetails.name}</h2>
        <p>Amount: {cardDetails.amount}</p>
        <p>Deadline: {cardDetails.deadline}</p>
        <p>Notes: {cardDetails.notes}</p>
        <p>Level of Study: {cardDetails.levelofstudy}</p>
        <p>Link: <a href={cardDetails.link} target="_blank" rel="noopener noreferrer">Scholarship Link</a></p>
        <p>Gender: {cardDetails.gender}</p>
        <p>Citizenship: {cardDetails.citizenship}</p>
        <p>Year of Study: {cardDetails.yearofstudy}</p>
        <p>Schools Attended: {cardDetails.schoolsattended}</p>
        <p>Heritage: {cardDetails.heritage}</p>
        <p>School of Study: {cardDetails.schoolofstudy}</p>
        <p>Field of Study: {cardDetails.fieldofstudy}</p>
        <p>Region of Residence: {cardDetails.regionofresidence}</p>
        <p>Course Load: {cardDetails.courseload}</p>
        <p>Region of Study: {cardDetails.regionofstudy}</p>
        <p>Academic Standing: {cardDetails.academicstanding}</p>
        <p>Activities: {cardDetails.activities}</p>
        <p>Financial Need: {cardDetails.financialneed}</p>
        <p>Contact Name: {cardDetails.contactinfoname}</p>
        <p>Contact Email: {cardDetails.contactinfoemail}</p>
        <p>Contact Phone: {cardDetails.contactinfophone}</p>
        <p>Contact Address: {cardDetails.contactinfoaddress}</p>
        <button onClick={() => setShowModal(false)}>Close</button>
      </div>
    </div>
  );
};

export default Modal;
