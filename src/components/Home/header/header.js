
import React,{Component} from 'react' 
import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import Search from '@material-ui/icons/Search'

const styles = {
    root: {
     
      
      fontSize: 21,
      opacity: '.7'
      
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };




class Header extends Component{
    
    
    render(){

        const {classes,shop} = this.props 
        const {cart} = shop 
        const len = cart.length || 0 
        console.log('THE LEN')
        console.log(len)

        return(

            <div  className="hearx__header">

                
               <section className="hearx__header--brand">

                   <img src="/img/hearxm.png" className="hearx__header--brand__logo" />
                   <div className="hearx__header--brand__text">
                       <span className="hearx__header--brand__text--title">Shop</span>
                       <span className="hearx__header--brand__text--bar hearx__header--brand__text--bar-tp"></span>
                       <span className="hearx__header--brand__text--bar hearx__header--brand__text--bar-bt" ></span>
                   </div>
               </section>

               <section className="hearx__header--shop">

                   <ul className="hearx__header--shop__list">
                       <li className="hearx__header--shop__list--item">
                           
                            <span className="d-inline-block">
                                <Icon>
                                <AddShoppingCart className={classes.root} />
                                </Icon>
                           </span>

                           <span className="d-inline-block hearx__header--shop__list--item-cart-count">
                                {len}
                           </span>
                       </li>
                       <li className="hearx__header--shop__list--item">
                           <Icon >
                               <Search className={classes.root} />
                           </Icon>
                       </li>
                   </ul>

               </section>

               <strong className="clearfix" />
               
            </div>
        )
    }

}


export default withStyles(styles)(Header)