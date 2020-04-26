
import React,{Component} from 'react' 
import Card from '../Card/card'

import Icon from '@material-ui/core/Icon';
import { withStyles } from '@material-ui/core/styles'




const styles = {
    root: {
     
      
      fontSize: 25,
      opacity: '.7'
      
    },
    dropDownList: {

        width: 500
    },
    iconhover:{
        '&:hover':{

            content: ""
        }
    }
  };




class Products extends Component{
    
    constructor(props){

        super(props)
        this.state ={
            isFilterActive: false,
            filterID: '',
           
            
        }
    }
    
    openCloseFilters = (filterid,e)=>{

        console.log('OPEN CLOSE GETS A CALL')
        console.log(filterid)
        const {isFilterActive} = this.state 
        let filterKey = ''
        if(isFilterActive === false) filterKey = filterid
        this.setState({...this.state,isFilterActive: !isFilterActive,filterID: filterKey})
    }

    compareFunc = (property)=>{

        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
           
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    priceFilter = (filterType)=>{

        const {shop} = this.props 
        const {products} = shop 
        let asc = filterType === 'high' ? true : false 
        asc ? products.sort(this.compareFunc('price')) : products.sort(this.compareFunc('price')).reverse()

        // let sortedProducts = products.sort(this.compareFunc('price'))

        // console.log('THE PRODUCTS')
        // console.log(products)
        // console.log('THE FILTERED')
        // console.log(sortedProducts) 
        this.forceUpdate()

    }

    nameFilter = (filterType)=>{

        const {shop} = this.props 
        const {products} = shop 
        let asc = filterType === 'high' ? true : false 
        asc ? products.sort(this.compareFunc('name')) : products.sort(this.compareFunc('name')).reverse()

        // let sortedProducts = products.sort(this.compareFunc('price'))

        // console.log('THE PRODUCTS')
        // console.log(products)
        // console.log('THE FILTERED')
        // console.log(sortedProducts) 
        this.forceUpdate()

    }

    filterProducts = (filter,filterType)=>{

        console.log('THE FILTER GETS A CLICK AND IT RUNS')
        console.log(filter)
        filter === 'price' ? this.priceFilter(filterType) : this.nameFilter(filterType)

    }

   
    render(){

        console.log('THE PRODUCTS')
        console.log(this.props)
        const {shop,actions} = this.props
        const {products} = shop 
        const {state,openCloseFilters,filterProducts} = this
        const {isFilterActive,filterID} = state 
        // const isSetFilterID = filterID === 'price' ? true : false 
        // console.log('the filter render state')
        // console.log(filterID) 
        // console.log(filterID === 'price')
        // console.log(isSetFilterID)

        return(

            <div  className="hearx__products">

                <h2 className="hearx__products--title">Hearx-shop collections</h2>
                <div className="hearx__products--filter">
                    <h2 className="hearx__products--filter-title">Sort By</h2>
                    <section className="hearx__products--filter-i" onClick={openCloseFilters.bind(this,'price')}>
                        Price

                        {
                            isFilterActive && filterID === 'price'
                                ?  <div className="hearx__products--filter-i-dropdown">
                                        <ul>
            
                                            <li className="hearx__products--filter-i-dropdown-i" onClick={filterProducts.bind(this,'price','high')}>High to low</li>
                                            <li className="hearx__products--filter-i-dropdown-i" onClick={filterProducts.bind(this,'price','low')}>Low to high</li>
            
                                        </ul>
                                        
                                    </div>
                                : null
                        }
                       
                    </section>
                    <section className="hearx__products--filter-i" onClick={openCloseFilters.bind(this,'name')}>
                        Item Name
                        {
                            isFilterActive && filterID === 'name'
                                ?  <div className="hearx__products--filter-i-dropdown">
                                        <ul>
            
                                            <li className="hearx__products--filter-i-dropdown-i" onClick={filterProducts.bind(this,'name','high')}>A-Z</li>
                                            <li className="hearx__products--filter-i-dropdown-i" onClick={filterProducts.bind(this,'name','low')}>Z-A</li>
            
                                        </ul>
                                        
                                    </div>
                                : null
                        }
                    </section>
                </div>
                
                   
                    
                

                {

                products.map((prod,i)=>{

                    
                        return <Card key={i} actions={actions} shop={shop}   product={prod} />
                    

                })

                }

        
                <strong className="clearfix" />
                
         </div>
        )
    }

}


export default withStyles(styles)(Products)