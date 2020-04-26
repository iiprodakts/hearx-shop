
import React,{Component} from 'react' 
import CartForm from './cartform'


class Card extends Component{
    
    handleAddItemToCart = (itemID,isFirst=false,e)=>{

        console.log(itemID)
        const {actions} = this.props 
        const {addItemToCart} = actions
        e.preventDefault()

        addItemToCart(itemID,isFirst)




    }
    
    isItemInCart = (id)=>{

        const {shop,actions} = this.props 
        const {cart,isAddingProduct,productID} = shop
        const {handleAddItemToCart} = this 
        let markUp = null


        const isInCart = cart.find(cartIt=>id === cartIt.id) 
        const qty = isInCart ? isInCart.qty : 0

        isInCart 
            ? markUp = isAddingProduct && id === productID ? <section disabled={isAddingProduct} className="hearx__products--card__product-add-cart" onClick={(e)=>handleAddItemToCart(id,e)}>Loading</section> : <CartForm itemID={id} qty={qty} actions={actions} addItemToCart={handleAddItemToCart.bind(this)} />
            : markUp = <section disabled={isAddingProduct} className="hearx__products--card__product-add-cart" onClick={(e)=>handleAddItemToCart(id,true,e)}>{isAddingProduct && id === productID ? 'Loading' : 'Add To Cart'}</section> 

        return markUp



    }



    render(){

        const {product,shop} = this.props 
        const {isItemInCart} = this
        const {id} = product

        // console.log('THE PRODUCTID')
        // console.log(productID) 
        // console.log(id)
        

        return(

            <div  className="hearx__products--card">

                <figure className="hearx__products--card__image">
                    <img src={product.image} />
                </figure>
                <div className="hearx__products--content">
                    <section className="hearx__products--card__product-name">{product.name}</section> 
                    <section className="hearx__products--card__product-price">R {product.price}</section> 
                    {/* {

                    }
                    <section disabled={isAddingProduct} className="hearx__products--card__product-add-cart" onClick={(e)=>handleAddItemToCart(product.id,e)}>{isAddingProduct && id === productID ? 'Loading' : 'Add To Cart'}</section> 
                    <CartForm /> */}
                    {isItemInCart(id)}
                </div>
                


            </div>
        )
    }

}


export default Card