import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";


const Cart = () => {

    const cartItems = useSelector((store) => store.cart.cartItems);

    const dispatch = useDispatch();

    const removeCartItems = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold">Cart</h1>
            {
                cartItems.length > 0 && <button 
                        className="p-2 m-2 bg-black text-white rounded-lg" 
                        type="button"
                        onClick={removeCartItems}
                        >
                            Clear Cart
                        </button>
            }
            {
                !cartItems.length && <h1>Your cart is empty!!</h1>
            }
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart;