import React from 'react'
import ImagesList from './Galery/imageList/ImagesList';
import Nav from './Galery/Nav';
import Upload from './Galery/subir/Subir';
import { Container } from '@mui/material';
import AuthContext from '../firebase/ContextFirebase/ContextFirebase';
import Modal from './Galery/Modal';
import MainNotification from './Galery/Notificaciones';
import Loading from './Galery2/Loading';
import Verification from './Galery/user/Verification';

function BlogComponent() {
  
  return (
    <Container maxWidth="lg" sx={{ textAlign: 'center', mt: '3rem' }}>
    <AuthContext>
      <Loading />
      <Modal />
      <Verification />
      <MainNotification />
      <Nav />
      <Upload />
      <ImagesList />
    </AuthContext>
  </Container>
  );
}

export default BlogComponent;
