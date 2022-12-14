

import React from 'react'
const data = [
    {class: "CSCI 313", professor: "Waxman", link:"Review"},
    {class: "CSCI 211", professor: "Kenneth", link:"Review"},
    {class: "CSCI 212", professor: "John", link:"Review"},
    {class: "CSCI 340", professor: "Ryba", link:"Review"},
]

const Table = () => {
  return (
    <div className="table">
      <table>
        <tr>
          <th>Class</th>
          <th>Professor</th>
          <th>Link</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.class}</td>
              <td>{val.professor}</td>
              <a href = "/waxman">
              <td>{val.link}</td>
              </a>
          
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default Table
