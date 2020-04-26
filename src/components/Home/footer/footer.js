
import React,{Component} from 'react' 




class Footer extends Component{
    
    
    render(){

       

        return(

            <div  className="hearx__footer">

               <section className="hearx__footer--brand">

                   <img src="/img/hearxmw.png" className="hearx__footer--brand__logo" />
                   <span className="hearx__footer--brand__text">©Copyright 2020 Hearx.</span>
                   
               </section>

               <section className="hearx__footer--shop">

                   <div className="hearx__footer--shop__social">

                       <section className="hearx__footer--shop__social-i-container">

                            <span className="hearx__footer--shop__social-i">
                                <img src="/img/social/facebook.png" />
                            </span>
                            <span className="hearx__footer--shop__social-i">
                                <img src="/img/social/twitter.png" />
                            </span>
                            <span className="hearx__footer--shop__social-i">
                                <img src="/img/social/instagram.png" />
                            </span>

                       </section>
                       

                   </div>

                   <ul className="hearx__footer--shop__list">

                    <li className="hearx__footer--shop__list--item">
                            Privacy
                        </li>
                        <li className="hearx__footer--shop__list--item">
                            Terms
                        </li>
                        <li className="hearx__footer--shop__list--item">
                            Faqs
                        </li>

                   </ul>

                   <strong className="clearfix" />

               </section>

               <strong className="clearfix" />
               
            </div>
        )
    }

}


export default Footer