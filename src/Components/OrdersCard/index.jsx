import PropTypes from 'prop-types';
import { CalendarDays, ShoppingBag } from 'lucide-react'; // Optional icons

function OrdersCard({ totalPrice, totalProducts }) {
  return (
    <div className="w-full bg-white shadow-lg rounded-xl p-4 flex items-center justify-between hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col gap-1">
        <span className="text-gray-500 text-sm flex items-center gap-1">
          <CalendarDays size={16} />
          Order Date: <strong>{new Date().toLocaleDateString()}</strong>
        </span>
        <span className="text-gray-700 font-medium flex items-center gap-1">
          <ShoppingBag size={16} />
          Total Products: <strong>{totalProducts}</strong>
        </span>
      </div>

      <div className="text-indigo-600 font-bold text-lg">
        ${totalPrice}
      </div>
    </div>
  );
}

OrdersCard.propTypes = {
  totalPrice: PropTypes.number.isRequired,
  totalProducts: PropTypes.number.isRequired,
};

export default OrdersCard;
