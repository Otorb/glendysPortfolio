import React from 'react'
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { storage } from '../config';

function uploadPhoto(file, filePath) {
    return new Promise(async (resolve, reject) => {
        const storageRef = ref(storage, filePath);
        try {
          await uploadBytes(storageRef, file);
          const url = await getDownloadURL(storageRef);
          resolve(url);
        } catch (error) {
          reject(error);
        }
      });
}

export default uploadPhoto