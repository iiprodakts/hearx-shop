
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'

import Header from './header/header'
import Hero from './hero/hero'
import Products from './products/products'
import Upcoming from './upcoming/upcoming'
import Footer from './footer/footer'




class Home extends Component{


    constructor(props){

        super(props)
    }

   

    render(){
        // console.log('THE LOCATION STATE SHAPE')
        // console.log(this.props.state.pathname)

        const {shop,actions} = this.props
        // const {products} = shop

        return(

             <article className="hearx">

                  <Header shop={shop} />
                  <Hero />
                  <Products shop={shop} actions={actions} />
                  <Upcoming />
                  <Footer />
                     
                
             </article>
        )
    }




}

const mapStateToProps = (state)=>{

    const {shop} = state
    return{
       shop
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Home)