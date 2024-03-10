import React from 'react';
import axios from 'axios';

export default function ScholarshipCard({ scholarship }) {
    let userData = null


  const handleGeneratePdf = async () => {
      const email = localStorage.getItem("email")
      console.log(email)

      try{
          const response = await axios.get(`http://localhost:5050/api/${email}`)
          userData = response.data
          console.log(userData)
      } catch(error){
          console.log("There was an error", error)
      }
        console.log(scholarship.name)

    try {
        const response = await axios.get(`http://localhost:5050/api/generatePdf`, {
          params: {
            scholarshipName: scholarship.name,
            userData: JSON.stringify(userData) // Since it's a GET request, you can stringify the user data
          }
    });
    } catch (error) {
      console.error('There was an error generating the PDF:', error);
    }
  };

  return (
      <div className="scholarship-card">
          <h3>{scholarship.name}</h3>
          <p>Amount: {scholarship.amount}</p>
          <p>Deadline: {scholarship.deadline}</p>
          <button onClick={() => handleGeneratePdf(scholarship.name, userData)}>Generate PDF</button>

      </div>
  );
}