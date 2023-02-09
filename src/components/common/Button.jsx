import React from 'react'
import '../../assets/text-style.css'
export default function Button({ css, content, onClick }) {
  return (
    <button className={css} onClick={onClick}>
      {content}
    </button>
  )
}
