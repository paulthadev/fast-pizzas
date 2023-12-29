import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import {
  decreaseItemQuantity,
  getQuantitybyId,
  increaseItemQuantity,
} from "./cartSlice";

function UpdateItemQuantity({ pizzaId }) {
  const dispatch = useDispatch();
  const currentQuantity = useSelector(getQuantitybyId(pizzaId));

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-1 md:gap-2">
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
      <span className="text-sm font-semibold">{currentQuantity}</span>
      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
