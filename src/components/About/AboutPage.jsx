import React from 'react'
import { Outlet } from 'react-router-dom'

export default function AboutPage() {
  // outlet dùng để xác định vị trí hiển thị của component
  return (
    <div>
      <Outlet />
      
    </div>
  )
}
