import {configureStore} from '@reduxjs/toolkit'
import sliceReducer from '../slices/slices'

const store=configureStore({
    reducer:{
        userLogInfo:sliceReducer
    }
})

export default store