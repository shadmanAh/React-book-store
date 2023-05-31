import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const image =
    'https://dkstatics-public.digikala.com/digikala-products/eb896e9c50a4eae5d975f36ee1e275c2a2216a71_1674388725.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90'
  const title = 'دختری که به اعماق دریا افتاد'
  const author = 'اکسی اوه'
  return (
    <article className="book">
      <img src={image} />
      <h2>{title}</h2>
      <h4> {author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
