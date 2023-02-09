import React from 'react'
import '../../assets/text-style.css'
export default function Button({ css, content }) {
  return <button className={css}>{content}</button>
}
