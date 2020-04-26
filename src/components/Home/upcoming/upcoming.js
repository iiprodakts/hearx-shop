
import React,{Component} from 'react' 
import Preorder from './preorder'







class Upcoming extends Component{
    
    
    render(){

        const {classes} = this.props

        return(

            <div  className="hearx__upcoming">

                <div className="hearx__upcoming--title">

                    <section className="hearx__upcoming--title-year">Coming This Year</section>
                    <section className="hearx__upcoming--title-container">
                        <span className="hearx__upcoming--title-count-left">Two months</span>
                        <span className="d-inline-block">left</span>
                    </section>

                </div>

                <section className="hearx__upcoming--upcategs">

                    
                    <div className="hearx__upcoming--upcategs__primary">
                        <section className="hearx__upcoming--upcategs__primary--i">
                            <img src="/img/uproduct_1.jpg" className="hearx__upcoming--upcategs__primary--i-img" />
                            <span className="hearx__upcoming--upcategs__primary--i--text-1">Headsets</span>
                        </section>
                        <section className="hearx__upcoming--upcategs__primary--i">
                            <img src="/img/uproduct_2.jpg" className="hearx__upcoming--upcategs__primary--i-img" />
                            <span className="hearx__upcoming--upcategs__primary--i--text-2">Earpieces</span>
                        </section>
                    </div>
                    <div className="hearx__upcoming--upcategs__secondary">
                    <figure className="hearx__upcoming--upcategs__secondary--i">

                        <img src="img/uproduct_3.jpg" />
                        <span className="hearx__upcoming--upcategs__secondary--i-text-1">Kiosky</span>

                    </figure>

                    </div>
                    <strong className="clearfix" />
                </section>

                <section className="hearx__upcoming--content">

                    <span className="hearx__upcoming--content__title-1">
                        Wanna be the first to get it when it comes?
                    </span>
                    <span className="hearx__upcoming--content__title-2">Fill the form below</span>
                    <Preorder />

                </section>

                <strong className="clearfix" />
                
         </div>
        )
    }

}


export default Upcoming