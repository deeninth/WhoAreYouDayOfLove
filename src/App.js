import React, { useState } from "react";
import Quiz from "./components/Quiz";
import theCabin from "./images/Nlove_stand.png";
import "./App.css";

const App = () => {
  const [showStartPage, setShowStartPage] = useState(true);

  const handleStartQuiz = () => {
    setShowStartPage(false);
  };

  return (
    <div className="center-layout">
      <div className="container">
        {showStartPage ? (
          <div className="start-page">
            <img 
              src={theCabin} 
              alt="sleepyyot" 
              style={{ 
                width: "300px",          // ความกว้างสูงสุดของภาพ
                height: "auto",          // ปรับความสูงให้อัตโนมัติ
                maxWidth: "500%",        // ไม่ให้เกินขนาดของ container
                objectFit: "contain",    // รักษาสัดส่วนของภาพ
                marginBottom: "-20px"     // ระยะห่างจากด้านล่าง
              }} 
            />
            <h1 style={{
              fontSize: "30px",
            }}>
              คุณเป็นใครในโลกแห่งความรัก?
            </h1>
            <p>ค้นหาความเป็นคุณเป็นใครในโลกแห่งความรัก?</p>
            <button 
              onClick={handleStartQuiz} 
              style={{ fontSize: '24px', padding: '15px 25px' }}
            >
              ไปกันเลยยยย
            </button>
          </div>
        ) : (
          <Quiz />
        )}
      </div>
    </div>
  );
};

export default App;
