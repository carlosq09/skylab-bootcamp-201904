import normalize from '../common/normalize'
import validate from '../common/validate'
import userApi from '../data/user-api'
import Cocktail from '../data/cocktail-api'
import { LogicError } from '../common/errors'


const logic = {

    set __userId__(id) {
        sessionStorage.userId = id
    },

    get __userId__() {
        return normalize.undefinedOrNull(sessionStorage.userId)
    },

    set __userToken__(token) {
        sessionStorage.userToken = token
    },

    get __userToken__() {
        return normalize.undefinedOrNull(sessionStorage.userToken)
    },

    get isUserLoggedIn() {
        return !!(this.__userId__ && this.__userToken__)
    },

    loginUser(email, password) {
        validate.arguments([
            {name: 'email', value: email, type: 'string', notEmpty: true},
            {name: 'password', value: password, type: 'string', notEmpty: true}
        ])

        validate.email(email)
    
        return userApi.authenticate(email, password) 
            .then(response => {
            
                if (response.status === 'OK') {
            
                    const { data: { id, token } } = response
                    
                    this.__userId__ = id
                    this.__userToken__ = token
                } else throw new LogicError(response.error)
            })
    },

    retrieveUser() {

        return userApi.retrieve(this.__userId__, this.__userToken__)
            .then(response => {
                if(response.status === 'OK') {
                    const {data: {username: email, name, favorites, creations}} = response
 
                    return {email, name, favorites, creations}
                } else throw new LogicError(response.error)
            })
    }
}

export default logic