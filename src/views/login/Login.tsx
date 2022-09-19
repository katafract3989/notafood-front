import cls from "./Login.module.scss"
import CustomInput from "../../components/ui/custom-input/CustomInput";
import {useState} from "react";
import Api from "../../common/api/axios";
import {useNavigate} from "react-router-dom";
import {useActions} from "../../hooks/useActions";

const Login = () => {
    const navigate = useNavigate()
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const {pushNotification, setAuth} = useActions()
    const auth = () => {
        Api.postRequest('/auth/login', {
            username: login,
            password: password
        }).then(r => {
            if(r.access_token) {
                localStorage.setItem('access_token', r.access_token)
                pushNotification({
                    title: 'Добро пожаловать',
                    text: `Вы успешно авторизировались`,
                    isRead: false,
                    isShow: true,
                })
                setAuth(true)
                navigate('/')
            }

        }).catch(() => {
            pushNotification({
                title: 'Ошибка авторизации',
                text: `Неправильный логин или пароль`,
                isRead: false,
                isShow: true,
            })
        })
    }

    return (
        <div className={cls.login}>
            <div className={cls['login-form']}>
                <div className={cls['login-form__row']}>
                    <CustomInput label='Login' onInput={(value: string) => setLogin(value)}/>
                </div>
                <div className={cls['login-form__row']}>
                    <CustomInput type='password' label='Password' onInput={(value: string) => setPassword(value)}/>
                </div>

                <div className={cls['login-form__row']}>
                    <button onClick={() => auth()}> Login</button>
                </div>

            </div>
        </div>
    )
}

export default Login;
