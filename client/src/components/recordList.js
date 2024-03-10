import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../style/navbar.css";

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
    <div className="main-content"> {/* Changed from id to className */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="prompt">Enter your prompt:</label>
        <input
            id="prompt"
            type="text"
            value={prompt}
            onChange={handleInputChange}
        />
        <button type="submit">Submit</button>
      </form>
      {response && <div><p>Response:</p><p>{response}</p></div>}
    </div>
  );
}
