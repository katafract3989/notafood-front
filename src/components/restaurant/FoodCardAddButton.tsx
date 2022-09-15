import cls from "./FoodCardAddButton.module.scss";
import {useActions} from "../../hooks/useActions";
import {CartProduct, Product} from "../../types/Restaurant";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import SpinButton from "../../components/ui/spin-button/SpinButton";

const FoodCardAddButton = (props: {
    card: Product
}) => {

    const {addProduct, increaseQuantity, reduceQuantity, recalculationFinalPrice} = useActions()
    const orderProduct = useTypedSelector(state => state.cartReducer.cart.find(item => item.id === props.card.id));

    const addProductInCart = () => {
        addProduct(props.card)
        recalculationFinalPrice()
    }
    const increaseQuantityInProduct = () => {
        increaseQuantity(props.card.id)
        recalculationFinalPrice()
    }
    const reduceQuantityInProduct = () => {
        reduceQuantity(props.card.id)
        recalculationFinalPrice()
    }


    const ProductButton = () => {
        if(orderProduct?.quantity) {
            return <SpinButton onIncrease={() => increaseQuantityInProduct()} onReduce={() => reduceQuantityInProduct()} count={orderProduct.quantity} />
        } else {
            return <button className={cls['card-button']} onClick={() => addProductInCart()}>+ Добавить</button>
        }
    }

    return (
        <ProductButton />
    )
}

export default FoodCardAddButton;
