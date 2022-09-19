import cls from "./Notification.module.scss"
import {Notif} from "@/types/Notification";
import {useEffect} from "react";
import {useActions} from "../../hooks/useActions";

type NotificationProps = {
    notification: Notif,
    onClose?: Function,
}

const Notification = (props: NotificationProps) => {

    const {deleteNotification} = useActions()

    useEffect(() => {
        if (props.notification.lifeCircle) {
            setTimeout(() => {
                if (props.notification.id) {
                    deleteNotification(props.notification.id)
                }

            }, props.notification.lifeCircle)
        }
    }, [])


    return (
        <div className={cls['notification']}>
            <h4 className={cls['notification__title']}>{props.notification.title}</h4>
            <p className={cls['notification__text']}>{props.notification.text}</p>
        </div>
    )
}

export default Notification;
