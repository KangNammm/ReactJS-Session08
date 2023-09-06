import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function DemoNavigate() {
    // useNavigate là 1 hook được cung cấp bởi react-router-dom
    const navigate = useNavigate();
  return (
      <div>
          {/* dùng để chuyển trang: Contact Page */}
          <button onClick={() => navigate("/contact")}>Go to Contact Page</button>
          {/* sử dụng navigate với history, giống nút tiến lên lùi về ở trang web(
          chỉ sửa mỗi âm thành dương ) */}
          <button onClick={() => navigate(-1)}>Back</button>
          {/* sử dụng navigate với replace = true => ko lưu history */}
          <button onClick={() => navigate("/contact", { replace: true })}>
              Go to Contact Page - Not save History
          </button>
          {/* sử dụng navigate để truyền dữ liệu: 
          + để lấy được dữ liệu (ContactPage) dùng useLocation để nhận data */}
          <button onClick={() => navigate("/contact", { state: { number: 10 } })}>
              Go to Contact with data
          </button>
    </div>
  )
}
