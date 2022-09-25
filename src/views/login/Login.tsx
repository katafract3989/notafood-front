import cls from "./Login.module.scss"
import CustomInput from "../../components/ui/custom-input/CustomInput";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import AuthService from "../../common/services/auth/AuthService"
const Login = () => {
    const navigate = useNavigate();
    const authService = new AuthService;
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const auth = async () => {
        const token = await authService.login({login, password});
        if(token) {
            navigate('/')
        }
    }

    return (
        <div className={cls.login}>
            <div className={cls['login-form']}>
                <div className={cls['login-form__row']}>
                    <CustomInput label='Auth' onInput={(value: string) => setLogin(value)}/>
                </div>
                <div className={cls['login-form__row']}>
                    <CustomInput type='password' label='Password' onInput={(value: string) => setPassword(value)}/>
                </div>
                <div className={cls['login-form__row']}>
                    <button onClick={() => auth()}> Auth</button>
                </div>

            </div>
        </div>
    )
}

export default Login;
