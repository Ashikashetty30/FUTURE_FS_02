import { useContext } from 'react'
import { Link } from 'react-router-dom'
import Layout from '../../Components/Layout'
import { ShoppingCartContext } from '../../Context'
import OrdersCard from '../../Components/OrdersCard'

function MyOrders() {
  const context = useContext(ShoppingCartContext)

  return (
    <Layout>
      {/* Page Header */}
      <div className="flex items-center justify-center relative w-full mb-6 mt-4">
        <h1 className="font-semibold text-3xl text-gray-800 border-b-2 border-indigo-500 pb-2">
          My Orders
        </h1>
      </div>

      {/* Orders List */}
      <div className="flex flex-col gap-4 items-center">
        {context.order.map((order, index) => (
          <Link 
            key={index} 
            to={`/my-orders/${index}`} 
            className="w-full max-w-md transform hover:scale-[1.02] transition-transform"
          >
            <OrdersCard
              totalPrice={order.totalPrice}
              totalProducts={order.totalProducts}
            />
          </Link>
        ))}
      </div>
    </Layout>
  )
}

export default MyOrders
