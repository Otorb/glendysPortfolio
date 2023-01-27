import React, { useContext, useState, useEffect } from "react"
import { auth, projectFirestore } from "../config";

const AuthContext = React.createContext()


export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(5)
  const [loading, setLoading] = useState(true)

  

  function signup(email, password, cred) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
  }

  function logout() {
    return auth.signOut()
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {

      try {
        console.log("USEEEEEEEEEEEEER",user)
        projectFirestore.doc(`users/${user.email}`).get()
        .then(data => {
            console.log("data", data)
            
            const credentials = {
                email: data.data().email,
                password: data.data().password,
                createdAt: data.data().createdAt,
                bio: data.data().bio,
                handle: data.data().handle
            }

            setCurrentUser({
                ...user,
                ...credentials
            })
        })
      } catch {
        setCurrentUser(user)
          
      }

      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    loading
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && (currentUser != 5) && children}
    </AuthContext.Provider>
  )
}

/* import React, { useContext, useState, useEffect } from "react"
import {auth, db } from '../config'
import { Google } from "@mui/icons-material";
import {auth} from '../ContextFirebase/ContextFirebase'
import {
    Button,
    DialogActions,
  } from "@mui/material";


const AuthContext = React.createContext()

export function useAuth( modal,
  setModal,
  loginWithGoogle,
  setAlert,
 ) {
  return useContext(AuthContext)
}


  function AutConfig({ children }) {

    
  const {
    modal,
    setModal,
    loginWithGoogle,
    setAlert,
   
  } = auth();

  const handleGoogleLogin = async () => {
    try {
      await loginWithGoogle();
      setModal({ ...modal, isOpen: false });
    } catch (error) {
      setAlert({
        isAlert: true,
        severity: "error",
        message: error.message,
        timeout: 5000,
        location: "modal",
      });
      console.log(error);
    }
  };
  





  return (
    <>
   
    <DialogActions sx={{ justifyContent: "center", py: "24px" }}>
      <Button
        variant="outlined"
        startIcon={<Google />}
        onClick={handleGoogleLogin}
      >
         Google
      </Button>
    </DialogActions>
  </>
  )
}

export default AutConfig */