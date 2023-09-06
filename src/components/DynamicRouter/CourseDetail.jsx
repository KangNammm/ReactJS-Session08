import React from 'react'
import { useParams } from 'react-router-dom'

export default function CourseDetail() {
    // useParams là 1 hook được cung cấp bởi react-router-dom => lấy param trên url
    const param = useParams();
    console.log(param);
  return (
      <div>
          <h1>Khóa học có id là: {param.id}</h1>
    </div>
  )
}
