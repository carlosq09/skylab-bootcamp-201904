'use strict'

var name = 'Peter';
var surname = 'Seller';
var email = 'peterseller@gmail.com';
var password = '123';

describe('user api', () => {
    // TODO start from here
    describe('user register', () => {
        it('should succeed on correct data to register', (done) => {
            userApi.register('yellow', (data) => {
                expect(data).toBeDefined()
                expect(data instanceof Array).toBeTruthy()
                expect(data.length).toBe(13)

                done()
            })

            // TODO fail cases
        })
    })
})