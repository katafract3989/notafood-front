import BaseService from "../BaseService";
import {store} from "../../../store/store";
import {notificationActions} from "../../../store/notificationReducer";
import {mainActions} from "../../../store/mainReducer";

type LoginData = {
    login: string,
    password: string,
}

export default class AuthService extends BaseService {

    async login(payload: LoginData) {

        let token = null;

        try {
            let result = await this.api.postRequest('/auth/login', {
                username: payload.login,
                password: payload.password
            });

            token = result.access_token;

            if (token) {
                localStorage.setItem('access_token', token);
                store.dispatch(notificationActions.pushNotification({
                    title: 'Добро пожаловать',
                    text: `Вы успешно авторизировались`,
                    isRead: false,
                    isShow: true,
                }));
                store.dispatch(mainActions.setAuth(true));
            }

            this.getMe();

            return token;

        } catch {
            store.dispatch(notificationActions.pushNotification({
                title: 'Ошибка авторизации',
                text: `Неправильный логин или пароль`,
                isRead: false,
                isShow: true,
            }));
            return token;
        }

    }

    logout() {
        //TODO не реализованно на бэке
        //logout...
    }

}
