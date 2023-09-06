import React from 'react'
import { useSearchParams } from 'react-router-dom';
export default function Course() {
    const [searchParam, setSearchParam] = useSearchParams();
  return (
    <div>
      <h1>Course table</h1>
      <table style={{ border: "solid" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>React JS</td>
            <td>12000</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ course: "React JS", price: "12000" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Java</td>
            <td>14000</td>
            <td>
              <button
                onClick={() =>
                  setSearchParam({ course: "Java", price: "14000" })
                }
              >
                Detail
              </button>
            </td>
          </tr>
        </tbody>
          </table>
          <h2>Khóa học là: {searchParam.get("course")} - Giá: {searchParam.get("price")}</h2>
    </div>
  );
}
