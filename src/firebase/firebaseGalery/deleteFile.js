import React from 'react'
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../config';

function deleteFile(filePath) {
    const imageRef = ref(storage, filePath);
    return deleteObject(imageRef);
}

export default deleteFile