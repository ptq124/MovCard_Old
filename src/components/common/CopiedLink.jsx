import React, { useState } from 'react'
import Copied from './Copied'
import UnCopied from './UnCopied'
export default function CopiedLink() {
  const [isCopied, toggleCopied] = useState(false)
  const [flag, setFlag] = useState(1)
  const handleChange = () => {
    navigator.clipboard.writeText('https://movcard.swygbro.com/')
    setFlag(flag - 1)
    if (flag > 0) {
      toggleCopied(!isCopied)
      setTimeout(() => {
        toggleCopied(isCopied)
        setFlag(1)
      }, 1300)
    }
  }
  return (
    <button onClick={handleChange}>
      {isCopied && <Copied></Copied>}
      {!isCopied && <UnCopied></UnCopied>}
    </button>
  )
}
