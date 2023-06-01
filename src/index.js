import React from 'react'
import ReactDOM from 'react-dom/client'
import { books } from './Books'
import Book from './Book'
import './index.css'

const BookList = () => {
  return (
    <>
      <h1>digikala best sellers</h1>
      <section className="booklist">
        {/* <EventExamples /> */}
        {books.map((book, i) => {
          return <Book key={i} {...book} number={i} />
        })}
      </section>
    </>
  )
}

// const EventExamples = () => {
//   const handleFormInput = (e) => {
//     console.log(e.target.value)
//   }

//   const handleButtonClick = () => {
//     console.log('handle button click')
//   }

//   const handleFormSubmission = (e) => {
//     e.preventDefault()
//     console.log(e.target)
//   }
//   return (
//     <section>
//       <form onSubmit={handleFormSubmission}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="example"
//           style={{ margin: '1rem 0' }}
//           onChange={handleFormInput}
//         />
//         <button onClick={handleButtonClick}>click me</button>
//         <div>
//           <button type="submit">submit</button>
//         </div>
//       </form>
//     </section>
//   )
// }

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
