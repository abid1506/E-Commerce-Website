import {useSelector} from 'react-redux'

function Total() {

  const cart = useSelector((state) => state.cart)

  const getTotal = () => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach(item => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
    })
    return {totalPrice, totalQuantity}
  }
 
  return (
      <div>
        <p className='subTotal'>
        Subtotal <span>${getTotal().totalPrice}</span>
        </p>

        <button className='btn btn-primary'> Proceed to Buy 
        ({getTotal().totalQuantity} items) 
           </button>

      </div>

  )
}

export default Total