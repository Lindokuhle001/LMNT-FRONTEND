import { React, useState, useEffect } from "react";
import "./Trivia.css";
import db from "../firebase";
// import firebase from "firebase";
import { useStateValue } from "../StateProvider";


export default function Trivia() {
  // fetch("https://opentdb.com/api.php?amount=50&category=12")
  // .then((res) => res.json())
  // .then((data) => console.log(data.results[0]));

  /* data.map({
      questionText: data.question
      correct_answers.map()
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
  })*/
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [myScore, setMyScore] = useState(0);
  const [opponentScore, setOpponentScore] = useState(0);
  // eslint-disable-next-line no-unused-vars
  const [{ user }, dispatch] = useStateValue();

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  function updateScore(){
    const unsub = db.collection("players").onSnapshot((snapshot) =>{
      setOpponentScore(
        snapshot.docs
          .map((doc) => ({
            score0: doc.data().score0,
            score1: doc.data().score1,
            users: doc.data().users,
          }))
          .filter((a) => {
            return a.users.includes(user.displayName);
          }).pop()
          
      )
      });
      return () => {
        unsub();
      };
      
  }
  function getScore(){
    const unsub = db.collection("players").onSnapshot((snapshot) =>{
      setMyScore(
        snapshot.docs
          .map((doc) => ({
            // scores: doc.data().score,
            users: doc.data().users,
          }))
          .filter((a) => {
            return a.users.includes(user.displayName);
          }).pop()
          
      )
      });
      return () => {
        unsub();
      };
      
  }

  // useEffect(() => {
  //   let index = getScore();
  //   if( index === 1){
  //   db.collection("players").docs
  //     .filter((a) => {
  //        return a.data().users.includes(user.displayName) ;
  //      })
  //     .update({
  //      score1: score
  //     })
  
  // }else{
  //   db.collection("players").docs
  //     .filter((a) => {
  //        return a.data().users.includes(user.displayName) ;
  //      })
  //     .update({
  //      score0: score
  //   })
  // }

  // }, [score])
 
 console.log(opponentScore) 
 console.log(myScore) 



  return (
    <div className="Trivia">
      <div className="app">
        {showScore ? (
          <div className="score-section">
            You scored {score} out of {questions.length}
          </div>
        ) : (
          <>
            <div className="question-section">
              {/* <p>{opponentScore.users[1].split(' ').shift()} = {opponentScore.scores[1]}</p> */}
              {/* <p>{opponentScore.users[0].split(' ').shift()} = {opponentScore.scores[0]}</p> */}
              <div className="question-count">
                <span>Question {currentQuestion + 1}</span>/{questions.length}
              </div>
              <div className="question-text">
                {questions[currentQuestion].questionText}
              </div>
            </div>
            <div className="answer-section">
              {questions[currentQuestion].answerOptions.map((answerOption) => (
                <button
                  key={answerOption.answerText}
                  onClick={() =>{handleAnswerOptionClick(answerOption.isCorrect); 
                    updateScore();
                    getScore()
                  }}
                    
                  
                  
                >
                  {answerOption.answerText}
                </button>
              ))}
            </div>

            {/* <iframe  src='https://play.famobi.com/solitaire-classic/A-WILLINGGAMES'  ></iframe> */}
          </>
        )}
      </div>
    </div>
  );
}
