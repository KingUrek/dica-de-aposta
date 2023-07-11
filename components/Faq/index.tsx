import { getQuestions } from 'lib/api'
import React from 'react'
import Question from './question'

export default async function FAQ() {
  const questions = await getQuestions()
  console.log(questions[0])
  return (
    <div>
      <h2 className='text-20 text-primary-desatured mb-12 tablet:text-28 tablet:mb-20'>Ainda com dúvidas</h2>
      <div>
        {questions.map(question => {
          return <Question key={question.databaseId} {...question}></Question>
        })}
      </div>


    </div>
  )
}
