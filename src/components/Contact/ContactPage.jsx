import React from 'react'
import { useLocation } from 'react-router-dom'

export default function ContactPage() {
  // nhận data được chuyển sang
  const data = useLocation();
  console.log(data);
  return (
    <div>ContactPage
      {/* 
      && => toán tử: if
      ?: => là toán tử 3 ngôi: if else */}
      <p>{data.state && data.state.number}</p>
    </div>

  )
}
