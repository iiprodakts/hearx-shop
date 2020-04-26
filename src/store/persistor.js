
export const persistState = (state,withTime=false)=>{




    let serializedState = JSON.stringify(state)
    if(withTime){

        // localStorage.removeItem('hearxTimer')
        let expiry = localStorage.getItem('hearxTimer')
        if(expiry) return localStorage.setItem('hearxState',serializedState)
        expiry = (new Date().getTime() + 1000 * 60 * 60 * 1)
        localStorage.setItem('hearxState',serializedState)
        localStorage.setItem('hearxTimer',expiry)

    }else{

        localStorage.setItem('hearxState',serializedState)

    }
   

} 

export const loadStateFromStorage = ()=>{


    let serializedState =  localStorage.getItem('hearxState')
    let expiry = localStorage.getItem('hearxTimer') 
    // localStorage.removeItem('hearxTimer')
   

    if(!expiry){

        if(!serializedState) return {}
        return JSON.parse(serializedState)
    }else{

        console.log('THE EXPIRY IS DEFINED')
        console.log(expiry)
        let now = new Date().getTime() 
        console.log(now)
        if(now > expiry) {

            localStorage.removeItem('hearxState')
            localStorage.removeItem('hearxTimer')
            return {}
        }
        if(!serializedState) return {}
        return JSON.parse(serializedState)
    }
    
    
    

} 
