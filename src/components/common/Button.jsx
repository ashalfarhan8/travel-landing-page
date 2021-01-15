import React from "react"

export default function Button({ text, bgColor, fontColor }) {
  return (
    <button
      className={`flex items-center jutify-center bg-${bgColor} px-4 py-2 text-${fontColor} font-medium font-global`}
    >
      {text}
    </button>
  )
}
