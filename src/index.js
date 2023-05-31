import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

const books = [
  {
    image:
      'https://dkstatics-public.digikala.com/digikala-products/eb896e9c50a4eae5d975f36ee1e275c2a2216a71_1674388725.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    title: 'دختری که به اعماق دریا افتاد',
    author: 'اکسی اوه',
  },
  {
    image:
      'https://dkstatics-public.digikala.com/digikala-products/c46d30392349d878e9e4b56827c2863426078fc8_1658914677.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    title: 'پاستیل های بنفش ',
    author: 'کاترین اپلگیت',
  },
  {
    image:
      'https://dkstatics-public.digikala.com/digikala-products/226c000ba8cc2efba695ec4ce8e6e56e0ba1fb81_1618656069.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    title: 'کتابخانه نیمه شب ',
    author: 'مت هیگ',
  },
  {
    image:
      'https://dkstatics-public.digikala.com/digikala-products/805996.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90',
    title: 'دختری که ماه را نوشید',
    author: 'کلی بارن هیل',
  },
]

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book, i) => {
        return <Book key={i} book={book} />
      })}
    </section>
  )
}

const Book = (props) => {
  const { image, title, author } = props.book
  return (
    <article className="book">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <h4> {author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<BookList />)
