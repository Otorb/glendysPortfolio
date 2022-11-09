import { Google } from "@mui/icons-material";
import {
  Button,
  DialogActions,
} from "@mui/material";
import { useAuth } from "../../../firebase/ContextFirebase/ContextFirebase";


const Login = () => {
 

  
  const {
    modal,
    setModal,
    loginWithGoogle,
    setAlert,
   
  } = useAuth();


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
  );
};

export default Login;
