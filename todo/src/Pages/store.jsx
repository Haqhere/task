import {configureStore} from '@reduxjs/toolkit'
import Todoreducer from './slice'

const store = configureStore({
    reducer:{
        todos:Todoreducer
    }
})

export default store