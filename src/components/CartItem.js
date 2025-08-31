import { useCart } from "../context/CartContext";
import Button from "./Button";

const CartItem = ({ item }) => {
  const { removeFromCart, updateQuantity } = useCart();

  return (
    <div className="flex justify-between items-center border-b py-2">
      <div>
        <h3 className="font-bold">{item.name}</h3>
        <p>
          ${item.price} x {item.quantity}
        </p>
      </div>
      <div className="flex items-center space-x-2">
        <Button onClick={() => updateQuantity(item._id, item.quantity - 1)}>
          -
        </Button>
        <span>{item.quantity}</span>
        <Button onClick={() => updateQuantity(item._id, item.quantity + 1)}>
          +
        </Button>
        <Button onClick={() => removeFromCart(item._id)} className="bg-red-500">
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItem;
