
import React from 'react'
import Tooltip from './tooltip'

export default function FormControl({controlData,id,change,styles,placeHolder}){
	
  
    const renderError = ()=>{
        
        let errorMessage = null 

        
        
        if(controlData.validation && controlData.isValid === false){
            
            console.log('The form error')
            if(controlData.validationMessage.trim() !== ''){

                let validStyles = controlData.validationStyles ? controlData.validationStyles : null
                let position = validStyles ? validStyles.position ? validStyles.position : 'right' :'right'
             errorMessage = (
              
                <Tooltip message={controlData.validationMessage} position={position} active={true} className={styles.error} /> 
                
                   
              )
            }

              return errorMessage
        }else{

            //  errorMessage = (
            //     <Tooltip message={controlData.validationMessage} position={'right'} active={false} className={styles.error} />
            // )

            return errorMessage

        }
        
       
    }
     const renderControl = ()=>{
 
         let  controlView = null 
         let error = renderError()
         
         switch(controlData.control){
         
             case 'input': 
                 controlView = (
                 
                 <div> 
                 
                     <input 
                     
                        placeholder= {placeHolder || ''}
                         {...controlData.config} 
                         value={controlData.value} 
                         onChange={(e)=>change({e,id,blur:false})} 
                         onBlur={(e)=>change({e,id,blur:true})} 
                         className={styles.child} 
                       
                        

                         />
                         
                        
                    {error ? error : null}
                       

                   
                 
                 </div>
                 
                 )
                 break;
             default:
             controlView = null
         
         
         } 
         
         
         return controlView
     }
 
  
     return (
     
       <div className={styles.parent}>
        
          {renderControl()}
       </div> 
       
       
     )
   
 }
 