import cls from "./Notifications.module.scss"
import Notification from "./Notification";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect} from "react";

const Notifications = () => {

    const {notifications} = useTypedSelector(state => state.notificationReducer)
    useEffect(() => {
    }, [
        notifications
    ])

    const notificationsList = notifications.map((notification, index) => <Notification key={index} notification={notification}/>)

    return (
        <div className={cls['notifications']}>
            {notificationsList}
        </div>
    )
}

export default Notifications;
