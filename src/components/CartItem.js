import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { RiDeleteBin7Line } from "react-icons/ri";

function CartItem({id, thumbnail, title, price, quantity=0}) {
 
  const dispatch = useDispatch()

  return (

<> 

<div className='cartItem '> 

  <div className='cartWrap mb-3 '>

    <div className='row'>
      <div className='col-6'> 
        
        <div className='flexItems'>

          <div> <img style={{width:'150px'}} src={thumbnail} alt='item'/> </div>

          <div className='ps-3'>
            <h5>{title}</h5>
            <p><small>$</small><strong>{price}</strong> </p>           
          </div>

        </div>

      </div>

      <div className='col-8'>

          <div className='flexItems d-flex mb-3'>

              <div><button className='btn btn-sm' onClick={() => dispatch(decrementQuantity(id))}><FaMinus /> </button></div>
              <div className='p-4'> {quantity} </div>
              <div><button className='btn btn-sm' onClick={() => dispatch(incrementQuantity(id))}><FaPlus /> </button> </div>

              <div className='ms-5'> 
                <button className='btn btn-sm' 
                onClick={() => dispatch(removeItem(id))}> <RiDeleteBin7Line /> Delete </button> 
              </div>

          </div>
        
      </div>

    </div>

  </div>

</div>

</>

  )
}

export default CartItem