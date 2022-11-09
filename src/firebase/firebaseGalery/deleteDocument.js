import React from 'react'
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../config';

function deleteDocument(collectionName, documentId) {
    return deleteDoc(doc(db, collectionName, documentId));
}

export default deleteDocument