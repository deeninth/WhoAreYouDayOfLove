import React, { useState } from "react";
import Question from "./Question";
import Result from "./Result";

import "../styles/next-btn.css"

import นักโรแมนติก from '../images/นักโรแมนติก.png';
import คนจริงใจ from '../images/คนจริงใจ.png';
import รักอิสระ from '../images/รักอิสระ.png';
import รักมั่นคง from '../images/รักมั่นคง.png';
import รักสดใส from '../images/รักสดใส.png';
import รักอ่อนโยน from '../images/รักอ่อนโยน.png';


const questions = [
  {
    question: "วันวาเลนไทน์สำหรับคุณคืออะไร?",
    options: [
      { text: "วันพิเศษที่ควรทำอะไรโรแมนติก", drink: "นักโรแมนติก" },
      { text: "วันธรรมดาๆ วันหนึ่งเท่านั้น", drink: "รักอิสระ" },
      { text: "โอกาสที่จะบอกความในใจกับใครสักคน", drink: "คนจริงใจ" },
      { text: "วันแห่งความสุขที่แบ่งปันให้ทุกคน", drink: "รักสดใส" }
    ]
  },
  {
    question: "หากคุณต้องเลือกของขวัญให้คนรัก คุณจะเลือกอะไร?",
    options: [
      { text: "ดอกไม้และช็อกโกแลตสุดคลาสสิก", drink: "นักโรแมนติก" },
      { text: "ของที่มีความหมายพิเศษเฉพาะเรา", drink: "คนจริงใจ" },
      { text: "พาไปเที่ยวเปิดประสบการณ์ใหม่ๆ", drink: "รักอิสระ" },
      { text: "ของขวัญทำมือที่มีความหมาย", drink: "รักอ่อนโยน" }
    ]
  },
  {
    question: "อะไรที่คุณให้ความสำคัญมากที่สุดในความรัก?",
    options: [
      { text: "ความเข้าใจและการอยู่เคียงข้างกัน", drink: "คนจริงใจ" },
      { text: "ความสนุกสนานและการผจญภัยไปด้วยกัน", drink: "รักอิสระ" },
      { text: "ช่วงเวลาที่แสนหวานและโรแมนติก", drink: "นักโรแมนติก" },
      { text: "การให้เกียรติและเคารพซึ่งกันและกัน", drink: "รักมั่นคง" }
    ]
  },
  {
    question: "หากคุณต้องเลือกกิจกรรมวันหยุดกับคนรัก คุณจะเลือกอะไร?",
    options: [
      { text: "ไปเที่ยวทะเลชมพระอาทิตย์ตก", drink: "นักโรแมนติก" },
      { text: "เดินเล่นในสวนสาธารณะ", drink: "คนจริงใจ" },
      { text: "ลุยกิจกรรมผจญภัย", drink: "รักอิสระ" },
      { text: "อยู่บ้านดูหนังและทำอาหารด้วยกัน", drink: "รักหวานซึ้ง" }
    ]
  },
  {
    question: "คุณให้ความสำคัญกับอะไรในความสัมพันธ์?",
    options: [
      { text: "ความมั่นคงและความซื่อสัตย์", drink: "รักมั่นคง" },
      { text: "ความสนุกสนานและเสียงหัวเราะ", drink: "รักสดใส" },
      { text: "ความอบอุ่นและเข้าใจกัน", drink: "รักอ่อนโยน" },
      { text: "การให้เกียรติและเคารพซึ่งกันและกัน", drink: "คนจริงใจ" }
    ]
  },
  {
    question: "หากคุณมีโอกาสเลือกสถานที่ขอแต่งงาน คุณจะเลือกที่ไหน?",
    options: [
      { text: "ริมทะเลแสนโรแมนติก", drink: "นักโรแมนติก" },
      { text: "บนยอดเขาที่วิวสวยงาม", drink: "รักอิสระ" },
      { text: "ในร้านอาหารสุดหรู", drink: "รักหวานซึ้ง" },
      { text: "ที่บ้านที่เต็มไปด้วยความทรงจำดีๆ", drink: "รักมั่นคง" }
    ]
  },
  {
    question: "คุณชอบเซอร์ไพรส์แบบไหนจากคนรัก?",
    options: [
      { text: "ดินเนอร์ใต้แสงเทียน", drink: "นักโรแมนติก" },
      { text: "การ์ดเขียนข้อความจากใจ", drink: "รักหวานซึ้ง" },
      { text: "การวางแผนเที่ยวสุดพิเศษ", drink: "รักอิสระ" },
      { text: "สิ่งเล็กๆ ที่ใส่ใจในชีวิตประจำวัน", drink: "รักอ่อนโยน" }
    ]
  },
  {
    question: "หากคุณต้องเลือกของขวัญวันครบรอบให้คนรัก คุณจะเลือกอะไร?",
    options: [
      { text: "เครื่องประดับที่มีความหมาย", drink: "รักหวานซึ้ง" },
      { text: "รูปภาพหรือของสะสมที่มีความทรงจำ", drink: "คนจริงใจ" },
      { text: "แพลนทริปไปที่ที่อยากไปด้วยกัน", drink: "รักอิสระ" },
      { text: "ทำเซอร์ไพรส์ด้วยของขวัญทำมือ", drink: "รักอ่อนโยน" }
    ]
  },
  {
    question: "คุณคิดว่าอะไรคือกุญแจสำคัญของความรักที่ยั่งยืน?",
    options: [
      { text: "ความเข้าใจและให้อภัยกัน", drink: "รักมั่นคง" },
      { text: "การทำให้กันมีความสุขในทุกวัน", drink: "รักสดใส" },
      { text: "ความซื่อสัตย์และจริงใจ", drink: "คนจริงใจ" },
      { text: "การแสดงออกถึงความรักผ่านการกระทำ", drink: "รักอ่อนโยน" }
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
  },
  "รักอ่อนโยน": {
    image: รักอ่อนโยน, 
    description: "คุณคือคนที่เต็มไปด้วยพลังบวกและความสนุกสนาน ความรักของคุณคือความสดใสที่ทำให้ทุกวันมีความหมาย เนื้อคู่ของคุณคือคนที่สามารถเติมเต็มและแชร์ความสุขไปด้วยกัน!",
    compatible: "รักสดใส"
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
