
import React,{Component} from 'react' 



class Hero extends Component{
    
    
    render(){

        

        return(

            <div  className="hearx__hero">

                <section className="hearx__hero--header">

                    
                    <div className="hearx__hero--header__message">
                        <span className="hearx__hero--header__message--text-1">Ideal hearing kit.</span>
                        <span className="hearx__hero--header__message--text-2">
                            Made to last<small className="hearx__hero--header__message--text-2-dot">.</small>
                        </span>
                        <span className="hearx__hero--header__message--text-3" >
                            Made to help<small className="hearx__hero--header__message--text-3-dot">.</small>
                        </span>
                    </div>
                </section>

                <section className="hearx__hero--content">

                    <div className="hearx__hero--content__arrived">
                        <figure className="hearx__hero--content__arrived--fig">

                            <img src="/img/hero-arrived.jpg" />

                        </figure>
                        
                    </div>

                    <button className="hearx__hero--content__btn">Shop</button>

                </section>

                <strong className="clearfix" />
                
         </div>
        )
    }

}


export default Hero