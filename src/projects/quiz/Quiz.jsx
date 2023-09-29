import { useState } from 'react';
import './quiz.css';

const questions = [
  {
    title: 'React - это ... ?',
    variants: ['библиотека', 'фреймворк', 'приложение'],
    correct: 0,
  },
  {
    title: 'Компонент - это ... ',
    variants: ['приложение', 'функция', 'то, что я не знаю что такое'],
    correct: 1,
  },
  {
    title: 'Что такое JSX?',
    variants: [
      'Это простой HTML',
      'Это функция',
      'Реакт разметка',
    ],
    correct: 2,
  },
];

function Result({ correct }) {
  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>{`Вы отгадали ${correct} ответа из ${questions.length}`}</h2>
      <a href='/projects/quiz'>
        <button>Попробовать снова</button>
      </a>
    </div>
  );
}

function Game({ step, question, onCLickVarian }) {

  let progres = Math.round((step / questions.length) * 100)

  return (
    <>
      <div className="progress">
        <div style={{ width: `${progres}%` }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((el, index) => <li
          key={el}
          onClick={() => onCLickVarian(index)}
        >
          {el}
        </li>)}
      </ul>
    </>
  );
}

export function Quiz() {
  const [step, setStep] = useState(0)
  const [correct, setCorrect] = useState(0)
  const question = questions[step]

  const onCLickVarian = (index) => {
    setStep(step + 1)
    if (index === question.correct) {
      setCorrect(correct + 1)
    }
  }
  return (
    <div className="Quiz-body">
      <div className="Quiz">
        {
          step !== questions.length
            ? <Game step={step} question={question} onCLickVarian={onCLickVarian} />
            : <Result correct={correct} />
        }

      </div>
    </div>
  );
}
