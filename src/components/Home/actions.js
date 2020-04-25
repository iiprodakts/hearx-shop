
import * as types from './types'

export const test = (entry)=>{

    return{

        type: types.TEST,
        payload: entry
    }

}

