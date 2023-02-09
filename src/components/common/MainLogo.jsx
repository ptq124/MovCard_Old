import React from 'react'
import { ReactComponent as IfIWere } from '../../assets/MovCard.svg'
export default function MainLogo({ value, css }) {
  const { width, height } = value
  return <IfIWere width={width} height={height} className={css}></IfIWere>
}
