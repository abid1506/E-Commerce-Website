import { removeItemWish} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'
import { RiDeleteBin7Line } from "react-icons/ri";

export default function WishlistItem({id, thumbnail, title, price}) {

  const dispatch = useDispatch()
  
  return (
   <>
  
    <div className='wishlistItem '> 

      <div className='wishlistWrap mb-3 '>

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

              <div className='ms-5'> 
                <button className='btn btn-sm' 
                onClick={() => dispatch(removeItemWish(id))}> <RiDeleteBin7Line /> Delete </button> 
              </div>

            </div>
            
          </div>

        </div>

      </div>

    </div>
   
   </>
  )
}
