import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "store"
import { IROLE, ROLE } from "store/user/constants";

interface IProps {
  allowedRoles : IROLE[] | null
}

export const PrivateRoute = (props : IProps) => {
  const user = useSelector((state : RootState) => state.user);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if(!user || !user.id)  //Checking for user in general
      navigate('/login', { state : {from : location.pathname}}); 
      
    if(props.allowedRoles && props.allowedRoles?.length>0 && (!user.role || !props.allowedRoles.includes(user.role)))  //*Checking for specific role
      navigate('/login', { state : {from : location.pathname}});  

  
  }, [user])
  
  return(
    <>
    </>
  )
}