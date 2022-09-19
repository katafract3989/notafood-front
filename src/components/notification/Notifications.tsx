import cls from "./Notifications.module.scss"
import Notification from "./Notification";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {useEffect, useState} from "react";
import {Notif} from "@/types/Notification";

const Notifications = () => {

    const {notifications} = useTypedSelector(state => state.notificationReducer)
    const [notificationsSideBar, setNotifications] = useState([] as Notif[])

    useEffect(() => {
        setNotifications(notifications)
    }, [notifications])

    const notificationsList = notificationsSideBar.map((notification: Notif) => <Notification key={notification.id} notification={notification}/>)

    return (
        <div className={cls['notifications']}>
            {notificationsList}
        </div>
    )
}

export default Notifications;
