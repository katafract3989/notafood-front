import cls from "./Notification.module.scss"
import {Notif} from "@/types/Notification";

type NotificationProps = {
    notification: Notif
}

const Notification = (props: NotificationProps) => {

    return (
        <div className={cls['notification']}>
            <span>{props.notification.id}</span>
            <h3 className={cls['notification__title']}>{props.notification.title}</h3>
            <p className={cls['notification__text']}>{props.notification.text}</p>
        </div>
    )
}

export default Notification;
