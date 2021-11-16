import axios from "axios";

import { All_PRODUCTS_REQUEST,
    All_PRODUCTS_SUCCESS, 
    All_PRODUCTS_FAIL,
    CLEAR_ERRORS 

} from '../constants/productConstants'

export const getProducts = () => async (dispatch) => {
    try {

        dispatch({ type: All_PRODUCTS_REQUEST })

        const { data } = await axios.get(`/api/v1/products `)

        dispatch ({ 
            type: All_PRODUCTS_SUCCESS,
            payload: data
        })
        
    } catch (error) {
        dispatch({
            type: All_PRODUCTS_FAIL,
            payload: error.response.data.message
        })
    }
}

// clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ 
        type: CLEAR_ERRORS
    })
}
