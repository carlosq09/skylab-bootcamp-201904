'use strict';

describe('logic', function () {
    var name = 'Peter';
    var surname = 'Seller';
    var email = 'peterseller@gmail.com';
    var password = '123';

    beforeEach(function () {
        users.length = 0;
    });

    describe('register', function () {
        it('should succeed on correct data', function () {
            var user = {
                name: name,
                surname: surname,
                email: email,
                password: password
            };

            var currentUsersCount = users.length;

            logic.register(name, surname, email, password);
            console.log(user)
            expect(users.length).toBe(currentUsersCount + 1);

            var lastUser = users[users.length - 1];
            expect(lastUser).toEqual(user);
        });

        it('should fail on undefined name', function () {
            var _error;

            try {
                logic.register(undefined, surname, email, password);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(2);
        });

        it('should fail on undefined surname', function () {
            var _error;

            try {
                logic.register(name, undefined, email, password);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(3);
        });

        it('should fail on undefined email', function () {
            var _error;

            try {
                logic.register(name, surname, undefined, password);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(4);
        });

        it('should fail on undefined password', function () {
            var _error;

            try {
                logic.register(name, surname, email, undefined);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(5);
        });

    });

    describe('login', function () {
        beforeEach(function () {
            users.push({
                name: name,
                surname: surname,
                email: email,
                password: password
            });
        });

        it('should succeed on correct data', function () {
            logic.login(email, password);

            expect(logic.__userEmail__).toBe(email);
            expect(logic.__accessTime__ / 1000).toBeCloseTo(Date.now() / 1000, 1);
        });

        it('should fail on wrong email (unexisting user)', function(){
            // expect(function() {
            //     logic.login('pepitogrillo@gmail.com', password);
            // }).toThrowError(Error, 'wrong credentials');

            var _error;

            try {
                logic.login('pepitogrillo@gmail.com', password);
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(1);
        });

        it('should fail on wrong password (existing user)', function(){
            // expect(function() {
            //     logic.login(email, '456');
            // }).toThrowError(Error, 'wrong credentials');

            var _error;

            try {
                logic.login(email, '456');
            } catch(error) {
                _error = error;
            }

            expect(_error).toBeDefined();
            expect(_error.code).toBe(1);
        });

        // TODO fail cases
    });

    describe('search ducks', function() {
        it('should succeed on correct query', function(done) {
            logic.searchDucks('yellow', function(ducks) {

                expect(ducks).toBeDefined();
                expect(ducks instanceof Array).toBeTruthy();
                expect(ducks.length).toBe(13);

                done();
            });

            // TODO fail cases
        });
        it('should fail on undefined query', function() {
            expect(function(){
                logic.searchDucks(undefined)
            }).toThrowError(TypeError,'undefined its not a valid query')
        })

        it('should fail when callback its not a function', function() {
            expect(function(){
                logic.searchDucks('yellow',undefined)
            }).toThrowError(TypeError,'undefined its not a valid callback')
        })
    });

    describe('search detail ducks', function() {
        it('should fail on undefined id', function() {
            expect(function(){
                logic.retrieveDucklingDetail(undefined)
            }).toThrowError(TypeError,'undefined its not a valid id')
        })

        it('should fail when callback its not a function', function() {
            expect(function(){
                logic.retrieveDucklingDetail('5c3853aebd1bde8520e66e11',undefined)
            }).toThrowError(TypeError,'undefined its not a valid callback')
        })
        
        it('should succeed on correct id item', function(done) {
            logic.retrieveDucklingDetail('5c3853aebd1bde8520e66e11', function(duck) {
                expect(duck).toBeDefined();
                expect(duck instanceof Object).toBeTruthy();
                expect(duck.id).toBe('5c3853aebd1bde8520e66e11');
                
                done();
            });

            // TODO fail cases
        });
    });
});