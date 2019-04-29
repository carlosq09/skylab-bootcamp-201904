import normalize from '../common/normalize'
import validate from '../common/validate'
import userApi from '../data/user-api'
import { LogicError } from '../common/errors'
import cocktailApi from '../data/cocktail-api';


const logic = {



    registerUser(name, email, password) {
        validate.arguments([
            { name: 'name', value: name, type: 'string', notEmpty: true },
            { name: 'email', value: email, type: 'string', notEmpty: true },
            { name: 'password', value: password, type: 'string', notEmpty: true }
        ])

        validate.email(email)

        return userApi.create(email, password, { name })
            .then(response => {
                if (response.status === 'OK') return

                throw new LogicError(response.error)
            })
    },

    logoutUser() {
        sessionStorage.clear()
    },

    retriveFavorites(){

        return userApi.retrieve(this.__userId__,this.__userToken__)
        .then(response => {
            const {status ,data } = response

            if(status === 'OK'){
                const {favorites = [] } = data

                if(favorites.length){
                    const calls = favorites.map(fav => {
                       return cocktailApi.searchById(fav)
                        .then(({drinks}) => {
                            drinks.forEach(drink => {
                                Object.keys(drink).forEach(key => {
                                    if(drink[key] === null  || drink[key].trim() == '') {
                                        delete drink[key]
                                    } 
                                })
                            })
                            return drinks[0]
                        })
                        
                    })
                    return Promise.all(calls)
                
                } else return favorites
            }

            throw new LogicError(response.error)
        })

    }
}

export default logic