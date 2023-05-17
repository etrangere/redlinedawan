import './Home.css';
import React from 'react';

export default function Home (){


    const rows = [    ["1", "John", "Doe", "jdoe@example.com", "1234567890"],
    ["2", "Jane", "Doe", "jane@example.com", "0987654321"],
    ["3", "Bob", "Smith", "bsmith@example.com", "5555555555"]
  ];


    return (<>
    

    

 
    <table className='hometable'>
      <thead>
        <tr>
          <th style={{ width: "50px" }}>ID</th>
          <th>Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {rows.map(row => (
          <tr key={row[0]}>
            <td>{row[0]}</td>
            <td>{row[1]}</td>
            <td>{row[2]}</td>
            <td>{row[3]}</td>
            <td>{row[4]}</td>
          </tr>
        ))}
      </tbody>
    </table>
 




    </>)
}