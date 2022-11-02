// redux
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/auth/auth-operations";
import { isLogin } from "../../redux/auth/auth-selectors";
// react-router
import { Navigate } from "react-router-dom";
// components
import LoginForm from '../../components/LoginForm/LoginForm'

export default function LoginPage() {
  const dispatch = useDispatch();
  // const isUserLogin = useSelector(isLogin);

  const onLogin = (data) => {
    dispatch(login(data));
  }

  // if (isUserLogin) {
  //   return <Navigate to="/my-books" />
  // }
  
  return (
    <div className='container'>
      <h1>Login page</h1>
      <LoginForm onSubmit={onLogin}/>
    </div>
  )
}
