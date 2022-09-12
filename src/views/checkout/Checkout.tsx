import cls from "./Checkout.module.scss"
import TermsDelivery from "../../components/checkout/terms-delivery/TermsDelivery";
import Order from "../../components/checkout/order/Order";

const Checkout = () => {
    return (
        <div className={cls.checkout}>
            <div className={cls.row}>
                <TermsDelivery />
                <Order />
            </div>
            <div className={cls.row}>
                <h2>2</h2>
            </div>
        </div>
    )
}

export default Checkout;
