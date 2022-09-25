import Api from "../../common/api/axios";
import {store} from "../../store/store";
import {mainActions} from "../../store/mainReducer";
import {User} from "@/types/User";

export default class BaseService {

    protected api = new Api()

    getMe() {
        this.api.getRequest('/me').then(res => {
            store.dispatch(mainActions.setUser(res.data as User))
        })
    }
}
