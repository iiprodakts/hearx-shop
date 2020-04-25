
import React, {Component} from 'react' 
import { bindActionCreators } from 'redux'
import {connect} from 'react-redux'
import * as actions from './actions'

import Header from './header/header'
// import Search from './search/search'
// import Identity from './identity/identity'
// import Jobseeker from './jobseeker/jobseeker'
// import Jobdash from './jobdash/jobdash'
// import Top from './top/top'
// import Employer from './employer/employer'
// import Candidate from './candidate/candidate'




class Home extends Component{


    constructor(props){

        super(props)
    }

   

    render(){
        // console.log('THE LOCATION STATE SHAPE')
        // console.log(this.props.state.pathname)

        return(

             <article className="grid-row">

                <div className="home">

                    <div className="mg-bottom-fd-hg">

                        
                        <Header />
                     
                        <strong className="clearfix" />
                       
                       
                    </div>
                    {/* <div>
                        <Identity />
                    </div>

                    <div>
                        <Jobseeker />
                    </div>
                    <div>
                        <Jobdash />
                    </div> */}
                    

                </div>
                
             </article>
        )
    }




}

const mapStateToProps = (state)=>{

    return{
        state:{
            ...state.router
        }
    }
}

const mapDispachToProps = (dispatch)=>{

    return {

        actions: bindActionCreators({...actions},dispatch)
    }
}

export default connect(mapStateToProps,mapDispachToProps)(Home)