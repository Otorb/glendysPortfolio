import { useAuth } from '../../firebase/ContextFirebase/ContextFirebase';
import Notify from './Notificacion';

const MainNotification = () => {
  const {
    alert: { location },
  } = useAuth();
  return location === 'main' && <Notify />; 
};

export default MainNotification;