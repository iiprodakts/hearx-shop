
import React, {Component} from 'react' 
import FormControl from '../upcoming/formcontrol'







class Preorder extends  Component{


    constructor(props){

        super(props)

        // const {compData} = this.props 
        // const {mainEmail= {},altEmail={}} = compData 
        // const mainAlertMail = mainEmail.alertEmail || '' 
        // const altAlertMail = altEmail.alertEmail || ''
        this.state = {
            form : {
                    
                    
                    cartItem:{
                        
                        control: 'input',
                        isActive: false,
                        value:'',
                        validation: {
                            isRequiredFormat:{
                                isNumeric: true
                            },
                            isPlaceholder: true
                             
                        },
                        isValid: false,
                        isTouched: false,
                        validationMessage: '',
                        config: {
                            
                            name: "cartItem",
                            type: 'text',
                            disabled: true
                           
                            
                        }
                        
                    }
                
            },
            notifMessage: ''

        };
    }

    
    updator = (upControl)=>{
        
        console.log('THE UPDATE CONTROL')
        console.log(upControl)
        let newForm ={...this.state.form} 
        let updateControl = {...newForm[upControl.id]}
        updateControl.value = upControl.e.target.value 


        if(updateControl.isActive === false) updateControl.isActive = true

    
        
        if(!(updateControl.validation.isPlaceholder && updateControl.value.trim() === '')){

            if(upControl.blur){
            
                let validData = this.controlValidate(updateControl) 
                
                updateControl.isValid = validData[0] 
                updateControl.validationMessage = validData[1]

                if(!updateControl.isValid){

                    for(let k in newForm){ 


                        if(newForm[k].config.disabled === false && k.trim() !== upControl.id.trim()){
                            newForm[k].config.disabled = true
                        }
                    }
                }else{

                    for(let k in newForm){ 

                        if(newForm[k].config.disabled === true){
                            newForm[k].config.disabled = false
                        }
                    }

                }
                
            }

        }
    
        updateControl.touched = upControl.blur
        newForm[upControl.id] = updateControl
        
        this.setState({
            form: newForm
            
        })


    } 

    controlValidate = (validateControl)=>{
        
        let validData = [true,''] 
        
        if(validateControl.validation.isRequired){ 
        
            let valid = validateControl.value.trim() !== ''
            let message = ''
            if(!valid){
                message = `${validateControl.config.name} is a required field `
            }
    
            validData = !valid ? [valid,message] : validData 
            return validData
            
        }
        if(validateControl.validation.isRequiredFormat){
            
            let value =  validateControl.value.trim() 
            let specialCharactersRegex = '[`!@#$%^&*()_+\-=\[\]]{};:"\\|,.<>\/?~]'
            let charsArray = Array.from(specialCharactersRegex)
                charsArray.push("'")
            let containsSpecialCars = charsArray.some((v)=>value.indexOf(v) > 0)
            let pieces = value.split(/\W+/) 
            let emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            console.log('SPECIAL CHARACTER TEST')
            console.log(charsArray)
            console.log(containsSpecialCars)
            console.log(value)
            console.log(specialCharactersRegex)
            let isRequiredFormat =  validateControl.validation.isRequiredFormat 
            if(isRequiredFormat.specialCharacters && containsSpecialCars === true ) return [false,`special characters are not allowed as username`]
            if(value.length < isRequiredFormat.minLetters ) return [false,`${validateControl.config.name} should be atleast ${isRequiredFormat.minLetters} letters long`]
            if(pieces.length < isRequiredFormat.minPieces ) return [false,`${validateControl.config.name} should be atleast ${isRequiredFormat.minPieces} words`] 
            if(pieces.length > isRequiredFormat.maxPieces ) return [false,`${validateControl.config.name} should be atmost ${isRequiredFormat.maxPieces} words`]
            if(isRequiredFormat.isEmail && emailRegex.test(value) !== true) return [false,`${validateControl.config.name} should be a valid email`]
            if(isRequiredFormat.isNumeric && !(parseInt(value) instanceof Number) ) return [false,`${validateControl.config.name} should be an integer number`]
        
                
        
        }

        
        return validData
        
    }

    handleRemoveItemFromCart(itemID,numItems,qty,e){

        const {actions} = this.props 
        const {removeItemFromCart} = actions
        e.preventDefault()
        removeItemFromCart(itemID,numItems,qty)
        
    }

    submitForm = (e)=>{
                    
        e.preventDefault() 
        
      
        let submittData = {} 
        let formIsValid = true 
        let {form} = this.state 
        
        
        for(let k in form){
            
            console.log('THE SUBMIT CONTROL')
            console.log(form[k])
            if(form[k].isActive === true){

                if(form[k].validation && form[k].validation.isRequired){

                    if(form[k].isValid === false){

                
                        formIsValid = false 

                        // notify({message:'Filled form data must be valid',type: 'warn',className: 'notify-warn'})
                        break


                    }else{

                        if(k !== 'password' || form[k].value.trim() !== '' ){

                        
                            submittData[k] = form[k].value
                        }
                        
                    }

                }else if(form[k].value.trim() !== ''){

                    if(form[k].isValid === false){
                        formIsValid = false 
                        break
                    }else{

                        submittData[k] = form[k].value

                    }
                
                }
            }
        
        
        } 


    
        
        

    }



    render(){

           const {form} = this.state 
           const {addItemToCart,itemID,qty} = this.props 
           console.log('THE QUANTITY')
           console.log(qty)
          

        return(

                  

                    <form className="hearx__cart--form">
                        


                        <span className="hearx__cart--form-action-btn" onClick={(e)=>addItemToCart(itemID,false,e)}>
                           +
                        </span>

                        <div className="hearx__cart--form-input-container">

                            <FormControl 

                                styles={{child:'hearx__cart--form-input-container-input',error: ''}}
                                id = 'cartItem'
                                controlData={this.state.form.cartItem}
                                change={(control)=>this.updator(control)} 
                                placeHolder={qty}
                                

                            />
                                
                        </div>

                           
                    

                        <span className="hearx__cart--form-action-btn" onClick={(e)=>this.handleRemoveItemFromCart(itemID,1,qty,e)}>
                           -
                        </span>

                       
                        
                    </form>
               

             
             
           
        )
    }




}

export default Preorder