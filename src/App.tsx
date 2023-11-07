import './App.css'
import Quiz from './component/wenda'

function App() {


  const questions = [
    {
      type: "single",
      question: "以下哪个选项不是 JavaScript 的数据类型？",
      options: ["a. String", "b. Boolean", "c. Array", "d. Function"],
      answer: "c",
      score: 1
    },
    {
      type: "multiple",
      question: "以下哪些选项是 CSS 预处理器？（可多选）",
      options: ["a. Sass", "b. Less", "c. Stylus", "d. Java"],
      answer: ["a", "b", "c"],
      score: 1
    },
    {
      type: "trueFalse",
      question: "HTML 是一种编程语言。（请选择正确或错误）",
      options: ["正确", "错误"],
      answer: "false",
      score: 1
    },
    // 第四道题目
    {
      type: "single",
      question: "以下哪个选项是 JavaScript 的数据类型？",
      options: ["a. Number", "b. Object", "c. Null", "d. Undefined"],
      answer: "a",
      score: 1
    },
    // 第五道题目
    {
      type: "multiple",
      question: "以下哪些选项是前端框架？（可多选）",
      options: ["a. React", "b. Vue", "c. Angular", "d. Python"],
      answer: ["a", "b", "c"],
      score: 1
    },
    {
      type: "single",
      question: "以下哪个选项是 JavaScript 的比较运算符？",
      options: ["a. +", "b. =", "c. ===", "d. /"],
      answer: "c",
      score: 1
    },
    {
      type: "multiple",
      question: "以下哪些选项是常见的前端编程语言？（可多选）",
      options: ["a. JavaScript", "b. HTML", "c. CSS", "d. Python"],
      answer: ["a", "b", "c"],
      score: 1
    },
    {
      type: "trueFalse",
      question: "React 是一个前端框架。（请选择正确或错误）",
      options: ["正确", "错误"],
      answer: "true",
      score: 1
    },
    {
      type: "single",
      question: "以下哪个选项不是 JavaScript 的数据类型？",
      options: ["a. String", "b. Boolean", "c. Array", "d. Function"],
      answer: "c",
      score: 1
    },
    {
      type: "single",
      question: "以下哪个选项不是 JavaScript 的数据类型？",
      options: ["a. String", "b. Boolean", "c. Array", "d. Function"],
      answer: "c",
      score: 1
    },
    {
      type: "single",
      question: "以下哪个选项不是 JavaScript 的数据类型？",
      options: ["a. String", "b. Boolean", "c. Array", "d. Function"],
      answer: "c",
      score: 1
    },
    {
      type: "single",
      question: "以下哪个选项不是 JavaScript 的数据类型？",
      options: ["a. String", "b. Boolean", "c. Array", "d. Function"],
      answer: "c",
      score: 1
    },
  ];

  return (
    <>
      <Quiz questions={questions}></Quiz>
    </>
  )
}

export default App
