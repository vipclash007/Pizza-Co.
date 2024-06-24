import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalCartQuantity= useSelector(getTotalCartQuantity);
  const TotalCartPrice= useSelector(getTotalCartPrice);

  if(!totalCartQuantity) return;

  return (
    <div className="flex items-center justify-between bg-stone-800 px-4 py-4 sm:px-6 text-sm md:text-base uppercase text-stone-200">
      <p className="text-stone-300 space-x-4 sm:space-x-6 font-semibold">
        <span>{totalCartQuantity} pizzas</span>
        <span>{formatCurrency(TotalCartPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
