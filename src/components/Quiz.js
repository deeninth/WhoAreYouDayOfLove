import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

import "../styles/next-btn.css"

import นักโรแมนติก from '../images/นักโรแมนติก.png';
import คนจริงใจ from '../images/คนจริงใจ.png';
import รักอิสระ from '../images/รักอิสระ.png';
import รักมั่นคง from '../images/รักมั่นคง.png';
import รักสดใส from '../images/รักสดใส.png';



const questions = [
  {
    question: "วันวาเลนไทน์สำหรับคุณคืออะไร?",
    options: [
      { text: "วันพิเศษที่ควรทำอะไรโรแมนติก", drink: "นักโรแมนติก" },
      { text: "วันธรรมดาๆ วันหนึ่งเท่านั้น", drink: "รักอิสระ" },
      { text: "โอกาสที่จะบอกความในใจกับใครสักคน", drink: "คนจริงใจ" }
    ]
  },
  {
    question: "หากคุณต้องเลือกของขวัญให้คนรัก คุณจะเลือกอะไร?",
    options: [
      { text: "ดอกไม้และช็อกโกแลตสุดคลาสสิก", drink: "นักโรแมนติก" },
      { text: "ของที่มีความหมายพิเศษเฉพาะเรา", drink: "คนจริงใจ" },
      { text: "พาไปเที่ยวเปิดประสบการณ์ใหม่ๆ", drink: "รักอิสระ" }
    ]
  },
  {
    question: "อะไรที่คุณให้ความสำคัญมากที่สุดในความรัก?",
    options: [
      { text: "ความเข้าใจและการอยู่เคียงข้างกัน", drink: "คนจริงใจ" },
      { text: "ความสนุกสนานและการผจญภัยไปด้วยกัน", drink: "รักอิสระ" },
      { text: "ช่วงเวลาที่แสนหวานและโรแมนติก", drink: "นักโรแมนติก" }
    ]
  },
  {
    question: "หากคุณมีโอกาสออกเดตกับคนที่ชอบ คุณอยากไปที่ไหน?",
    options: [
      { text: "ดินเนอร์ใต้แสงเทียนสุดโรแมนติก", drink: "นักโรแมนติก" },
      { text: "เดินเล่นในสวน หรือคาเฟ่บรรยากาศสบายๆ", drink: "คนจริงใจ" },
      { text: "ไปเที่ยวสถานที่ใหม่ๆ หรือทำกิจกรรมสนุกๆ", drink: "รักอิสระ" }
    ]
  },
  {
    question: "คุณคิดว่าคู่แท้ของคุณควรเป็นคนแบบไหน?",
    options: [
      { text: "ใส่ใจและอบอุ่น มอบความรักให้เสมอ", drink: "นักโรแมนติก" },
      { text: "เป็นเพื่อนคู่คิดที่เข้าใจและซื่อสัตย์", drink: "คนจริงใจ" },
      { text: "มีความเป็นตัวเองและพร้อมลุยไปด้วยกัน", drink: "รักอิสระ" }
    ]
  },
  {
    question: "คุณชอบบรรยากาศแบบไหนเมื่ออยู่กับคนที่คุณรัก?",
    options: [
      { text: "เงียบสงบ มีเวลาให้กันแบบสบายๆ", drink: "รักมั่นคง" },
      { text: "เต็มไปด้วยเสียงหัวเราะและเรื่องสนุกๆ", drink: "รักสดใส" },
      { text: "ช่วงเวลาที่เต็มไปด้วยความโรแมนติก", drink: "นักโรแมนติก" }
    ]
  },
  {
    question: "คุณจัดการกับความขัดแย้งในความสัมพันธ์อย่างไร?",
    options: [
      { text: "พูดคุยกันตรงๆ เพื่อหาทางออกที่ดี", drink: "คนจริงใจ" },
      { text: "พยายามหาจุดกึ่งกลางที่ทุกคนพอใจ", drink: "รักมั่นคง" },
      { text: "เว้นระยะห่างก่อน แล้วค่อยกลับมาคุยกัน", drink: "รักอิสระ" }
    ]
  },
  {
    question: "คุณคิดว่าวิธีที่ดีที่สุดในการแสดงความรักคืออะไร?",
    options: [
      { text: "การใช้เวลาร่วมกันและทำกิจกรรมที่ชอบ", drink: "รักสดใส" },
      { text: "การสนับสนุนกันในทุกสถานการณ์", drink: "รักมั่นคง" },
      { text: "การแสดงออกทางคำพูดและการกระทำที่อ่อนโยน", drink: "นักโรแมนติก" }
    ]
  },
  {
    question: "ถ้าคุณต้องเลือกสีที่สื่อถึงความรักของคุณ คุณจะเลือกสีอะไร?",
    options: [
      { text: "สีแดง ร้อนแรงและเต็มไปด้วยพลัง", drink: "รักสดใส" },
      { text: "สีฟ้า สงบสุขและมั่นคง", drink: "รักมั่นคง" },
      { text: "สีชมพู อ่อนโยนและอบอุ่น", drink: "นักโรแมนติก" }
    ]
  }
];


const drinks = {
  "นักโรแมนติก": {
    image: นักโรแมนติก, 
    description: "คุณคือคนที่เชื่อในความรักแบบโรแมนติก ต้องการช่วงเวลาพิเศษและการแสดงความรักที่ชัดเจน เนื้อคู่ของคุณเป็นคนที่อบอุ่น ใส่ใจ และทำให้คุณรู้สึกเป็นคนพิเศษเสมอ!",
    compatible: "คนจริงใจ"
  },
  "คนจริงใจ": {
    image: คนจริงใจ, 
    description: "คุณเป็นคนที่ให้ความสำคัญกับความเข้าใจและความซื่อสัตย์มากกว่าความหวือหวา เนื้อคู่ของคุณคือคนที่ซื่อสัตย์ เข้าใจคุณ และพร้อมเดินไปด้วยกันในทุกสถานการณ์!",
    compatible: "รักมั่นคง"
  },
  "รักอิสระ": {
    image: รักอิสระ, 
    description: "คุณคือคนที่มองความรักเป็นเรื่องของการเติบโตและการเดินทางไปด้วยกันโดยไม่ผูกมัด เนื้อคู่ของคุณคือคนที่เข้าใจในความเป็นตัวเองของคุณ พร้อมผจญภัยไปด้วยกัน!",
    compatible: "นักโรแมนติก"
  },
  "รักมั่นคง": {
    image: รักมั่นคง, 
    description: "คุณเป็นคนที่ให้ความสำคัญกับความมั่นคงและความสบายใจในความสัมพันธ์ เนื้อคู่ของคุณคือคนที่พร้อมอยู่เคียงข้างและให้ความรู้สึกมั่นคงไม่ว่าอะไรจะเกิดขึ้น!",
    compatible: "รักสดใส"
  },
  "รักสดใส": {
    image: รักสดใส, 
    description: "คุณคือคนที่เต็มไปด้วยพลังบวกและความสนุกสนาน ความรักของคุณคือความสดใสที่ทำให้ทุกวันมีความหมาย เนื้อคู่ของคุณคือคนที่สามารถเติมเต็มและแชร์ความสุขไปด้วยกัน!",
    compatible: "รักอิสระ"
  }
};


function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null); // Track the selected answer
  const [scores, setScores] = useState({});
  const [result, setResult] = useState(null);

  
  
  function handleAnswer(drink) {
    setScores((prevScores) => {
      const newScores = { ...prevScores };
  
      // Decrease the score for the previously selected drink
      if (selectedAnswer) {
        newScores[selectedAnswer] -= 1;
      }
  
      // Increase the score for the newly selected drink
      newScores[drink] = (newScores[drink] || 0) + 1;
  
      return newScores;
    });
  
    setSelectedAnswer(drink); // Mark the new answer as selected
  }
  

  function handleNextQuestion() {
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null); // Reset selected answer for the next question
    } else {
      calculateResult();
    }
  }

  function calculateResult() {
    let maxDrink = null;
    let maxScore = 0;

    for (const [drink, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxDrink = drink;
        maxScore = score;
      }
    }

    setResult(maxDrink);
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScores({});
    setResult(null);
  }
  
  if (result) {
    const compatible = drinks[result].compatible;
    return (
      <Result
        drink={result}
        compatible={compatible}
        description={drinks[result].description}
        drinkImage={drinks[result].image}
        compatibleImage={drinks[compatible].image}
        restartQuiz={restartQuiz}
      />
    );
  }

  return (
    <div className="quiz-container-with-next">
     
      <Question
        question={questions[currentQuestion].question}
        options={questions[currentQuestion].options}
        onAnswer={handleAnswer}
        selectedAnswer={selectedAnswer}
      />

      <button className="next-btn"
        onClick={handleNextQuestion}
        disabled={!selectedAnswer} // Disable the button until an answer is selected
      >
        ไปต่อ {currentQuestion + 1}/9  &gt;
      </button>
    </div>
);
}

export default Quiz;
