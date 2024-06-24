import { useDispatch } from "react-redux";
import Button from "../../ui/Button"
import PropTypes from 'prop-types';
import { decItemQuantity, incItemQuantity } from "./cartSlice";

function UpdateItemQuantity({pizzaId, currentQuantity}) {
    const dispatch= useDispatch()

    return (
        <div className="flex items-center gap-2 md:gap-3">
            <Button type="round" onClick={()=> dispatch(decItemQuantity(pizzaId))}>-</Button>
            <span className="text-sm font-medium">{currentQuantity}</span>
            <Button type="round" onClick={()=> dispatch(incItemQuantity(pizzaId))}>+</Button>
        </div>
    )
}

UpdateItemQuantity.propTypes={
  pizzaId: PropTypes.number.isRequired,
  currentQuantity: PropTypes.number.isRequired
}

export default UpdateItemQuantity
