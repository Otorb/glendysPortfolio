import React, { useState }  from 'react'
import Form from './Form'
import ProgressList from './progressList/ProgressList'

function Subir({user}) {
    const [files, setFiles] = useState([]);
    console.log(user,"user")
  return (
    <div>
      <Form setFiles={setFiles} />
      <ProgressList files={files} />
    </div>
  )
}

export default Subir