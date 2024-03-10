import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/navbar.css";
import "../style/record.css"; 

export default function RecordList() {
  const navigate = useNavigate();
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");

  const handleInputChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const result = await axios.get(`http://localhost:5171/api/Scholarship?question=${encodeURIComponent(prompt)}`);
      const names = result.data.match(/\*\*(.*?)\*\*/g).map(name => name.replace(/\*\*/g, ''));
      console.log(names);
      navigate('/home', { state: { scholarships: names } });
    } catch (error) {
      console.error("There was an error fetching the response:", error);
      setResponse("Error fetching response.");
    }
  };


  return (
    <div className="record-page-container">
      <div className="ai-message-container">
        <p><b>This feature is powered by AI. By entering a prompt on what types of scholarships you want to see, this will customize your scholarship card stack!</b></p>
      </div>

      <div className="main-content">
        <form onSubmit={handleSubmit}>
          <div className="label-container">
            <label htmlFor="prompt"><b>Enter your prompt: </b></label>
          </div>
          <br></br>
          <input
            id="prompt"
            type="text"
            value={prompt}
            onChange={handleInputChange}
            placeholder="Ex: Nursing scholarships"
          />
          <button type="submit">Submit</button>
        </form>
        <br></br>
        {response && <div className="message"><p><b>Response:</b></p><p>{response}</p></div>}
      </div>
    </div>
  );
}