import React from 'react'
import { Add } from '@mui/icons-material';
import { Fab, Input } from '@mui/material';
import { useRef } from 'react';
import { useAuth } from '../../../firebase/ContextFirebase/ContextFirebase'
import Login from '../user/Login'

function Form({ setFiles }) {
    const { currentUser, setModal } = useAuth();
  const fileRef = useRef();
  console.log(currentUser, "currentUser")

  const handleClick = () => {
    if (!currentUser) {
      return setModal({ isOpen: true, title: 'Login', content: <Login /> });
    }

    fileRef.current.click();
  };

  const handleChange = (e) => {
    setFiles([...e.target.files]);
    fileRef.current.value = null;
  };
  return (
    <form>

   {/* {currentUser.email   === "glendys.bolivar14@gmail.com" ? */}
   {currentUser ? <div>
    <Input
    type="file"
    inputProps={{ multiple: true }}
    sx={{ display: 'none' }}
    inputRef={fileRef}
    onChange={handleChange}
  />
  <Fab color="primary" aria-label="add" onClick={handleClick}>
    <Add fontSize="large" />
  </Fab>
  </div>:
  null

   }   
    </form>
  )
}

export default Form