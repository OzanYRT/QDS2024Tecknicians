import React from 'react';
import '../style/ScholarshipCard.css'; // Make sure the path matches where you save your CSS file

export default function ScholarshipCard({ scholarship }) {
  return (
    <div className="scholarship-card">
      <h3>{scholarship.name}</h3>
      <p>Amount: {scholarship.amount}</p>
      <p>Deadline: {scholarship.deadline}</p>
    </div>
  );
}
