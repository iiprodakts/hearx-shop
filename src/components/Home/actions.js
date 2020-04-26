
import * as types from './types'


export const addItemToCart = (id,isFirtItem=false)=>{
   
    
    return (dispatch)=>{

       
          let delay = 0

          if(isFirtItem){
            dispatch({type: types.CART_ADD_DELAY,payload: {ID: id,addState: true}})
            delay = 5000
          }

        
        setTimeout((id)=>{
            
            dispatch({type: types.ADD_TO_CART,payload: id})

        },delay,id)
    }

}

export const removeItemFromCart = (id,numItems,qty)=>{
   
    console.log('THE REMOVE ITEM FROM CART')
    console.log(id)

    
    

    return (dispatch)=>{

        // dispatch({type: types.CART_DELETE_DELAY,payload: {ID: id,addState: true}}) 

          const numLeftInCart = qty - numItems 
          let delay = 0

          if(numLeftInCart <= 0){
            dispatch({type: types.CART_ADD_DELAY,payload: {ID: id,addState: true}})
            delay = 5000
          }

        
          setTimeout((id)=>{
            
            dispatch({type: types.REMOVE_FROM_CART,payload: {id: id,numItems: numItems}})

        },delay,id)
    }

}



