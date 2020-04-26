
import * as types from './types'
import * as props from './props'


const addItem = (state,prop)=>{

    
    const {cart,products} = state 
    let {total} = state
    

    const product = products.find(prod=> prod.id === prop.payload)
    const isProductInCart = cart.find(prod=>prod.id === prop.payload)

    if(isProductInCart){

        isProductInCart.qty += 1
        total += isProductInCart.price
        return{
            ...state,
            total: total,
            isAddingProduct: false
        }

    }else{

        product.qty = 1
        total += product.price

        return {
            ...state,
            cart: [...cart,product],
            total: total,
            isAddingProduct: false
        }

    } 


    
   
}

const removeItem = (state,prop)=>{

    
    const {cart} = state 
    let {total} = state 
    

    // const product = products.find(prod=> prod.id === prop.payload)
    const isProductInCart = cart.find(prod=>prod.id === prop.payload.id)

    if(isProductInCart){

        if(prop.payload.numItems === 0){

            let itemIndex = cart.findIndex(prod=>prod.id === prop.payload.id)
            let newCart = [...cart] 
            total -= (isProductInCart.price * isProductInCart.qty)
            newCart.splice(itemIndex,1) 


            return{
                ...state,
                cart: [...newCart],
                total: total,
                isAddingProduct: false
               
               
            }





        }else{

            isProductInCart.qty -= prop.payload.numItems

            if(isProductInCart.qty === 0){

                let itemIndex = cart.findIndex(prod=>prod.id === prop.payload.id)
                let newCart = [...cart] 
                total -= (isProductInCart.price *  prop.payload.numItems)
                newCart.splice(itemIndex,1) 


                return{
                    ...state,
                    cart: [...newCart],
                    total: total,
                    isAddingProduct: false
                   
                }

            }else{

                total -= (isProductInCart.price * prop.payload.numItems)
                return{
                    ...state,
                    total: total,
                    
                   
                }

            }
            


        }
        

    }else{

        return {
            ...state
        }

    } 


    
   
}


export default (state = props,action)=>{


        switch(action.type){

            case types.ADD_TO_CART:
                return addItem(state,action)
            
            case types.REMOVE_FROM_CART:
                return removeItem(state,action)

            case types.ADD_PRODUCT_QUANTITY:
                return {

                    ...state,
                    isAddingProduct: false
                    
                }

            case types.REMOVE_PRODUCT_QUANTITY:
                return {

                    ...state,
                    isAddingProduct: false
                    
                }
            case types.EMPTY_PRODUCT_CART:
                return {

                    ...state,
                    isAddingProduct: false
                }
            case types.CART_ADD_DELAY:

                // console.log('THE CART DELAY ACTION')
                // console.log(action)
                return {

                    ...state,
                    isAddingProduct: action.payload.addState,
                    productID: action.payload.ID
                    
                }

            case types.CART_DELETE_DELAY:

                // console.log('THE CART DELAY ACTION')
                // console.log(action)
                return {

                    ...state,
                    isAddingProduct: action.payload.addState,
                    productID: action.payload.ID
                    
                }
                    
                
            
        
            default:
                return state
        }

}