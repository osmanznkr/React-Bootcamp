import axios from 'axios';
import React, { useEffect, useState } from 'react'

function Example() {

    const [data, setdata] = useState([])

     useEffect(() => {
    loadData();
    
  }, [])

  const loadData = () => {
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(res => {
      setdata(res.data)
    })
  }

   const [data2, setdata2] = useState([])

     useEffect(() => {
    loadData2();
    
  }, [])

  const loadData2 = () => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(res => {
      setdata2(res.data)
    })
  }



   return (
    <>
      <div style={{display: 'flex', flexDirection: 'column', gap: 50}}>
        <select style={{width: 200}}>
          {data.map((item) => (
            <option>{item.username}</option>
          ))}
        </select>

            <table>
                    <thead>
                        <tr>
                            <th>User Id</th>
                            <th>Id</th>
                            <th>Title</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data2.map((item) => {
                                return (
                                     <tr >
                                        <td>{item.userId}</td>
                                        <td>{item.id}</td>
                                        <td>{item.title}</td>
                                        <td>{item.body}</td>
                                     </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

      </div>
    </>
  );
}

export default Example;