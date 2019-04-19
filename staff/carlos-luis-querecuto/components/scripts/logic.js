'use strict';

var logic = {
    register: function (name, surname, email, password) {
        if (typeof name !== 'string') {
            var error = TypeError(name + ' is not a valid name');
            error.code = 2;
            throw error;
        }
        if (typeof surname !== 'string') {
            var error = TypeError(surname + ' is not a valid surname');
            error.code = 3;
            throw error;
        }
        if (typeof email !== 'string') {
            var error = TypeError(email + ' is not a valid email');
            error.code = 4;
            throw error;
        }
        if (typeof password !== 'string') {
            var error = TypeError(password + ' is not a valid password');
            error.code = 5;
            throw error;
        }
        // TODO add more validations

        // TODO verify user does not exists already, otherwise error 'user already exists'

        users.push({
            name: name,
            surname: surname,
            email: email,
            password: password
        });
    },

    login: function (email, password) {
        // TODO validate input data

        var user = users.find(function(user) { return user.email === email });

        if (!user) {
            var error = Error('wrong credentials')

            error.code = 1;

            throw error;
        };

        if (user.password === password) {
            this.__userEmail__ = email;
            this.__accessTime__ = Date.now();
        } else {
            var error = Error('wrong credentials')

            error.code = 1;

            throw error;
        };
    },

    searchDucks: function (query, callback) {
        // TODO validate inputs
        if (typeof query === 'undefined') throw TypeError(query +' its not a valid query')
        if (typeof callback === 'undefined') throw TypeError(callback   +' its not a valid callback')
        var xhr = new XMLHttpRequest;

        xhr.open('GET', 'https://duckling-api.herokuapp.com/api/search?q=' + query);

        xhr.addEventListener('load', function () {
            callback(JSON.parse(this.responseText));
        });

        xhr.send();
    },

    retrieveUser: function (email) {
        // TODO validate input

        var user = users.find(function (user) { return user.email === email });

        if (!user) {
            var error = Error('user not found with email ' + email)

            error.code = 2;

            throw error;
        }

        return {
            name: user.name,
            surname: user.surname,
            email: user.email
        };
    },

    retrieveDucklingDetail: function(id, callback) {
        // TODO validate inputs
        if (typeof id === 'undefined') throw TypeError(id +' its not a valid id')
        if (typeof callback === 'undefined') throw TypeError(callback   +' its not a valid callback')

        var xhr = new XMLHttpRequest;

        xhr.open('GET', 'https://duckling-api.herokuapp.com/api/ducks/' + id);

        xhr.addEventListener('load', function () {
            callback(JSON.parse(this.responseText));
        });

        xhr.send();
    }
}
