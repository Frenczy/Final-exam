const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const customerController = require('./customer.controller');
const customerService = require('./customer.service');

jest.mock('./customer.service');

describe("Customer controller", () => {
    const mockData = [{
        "id": 1,
        "firstName": "Sidney",
        "lastName": "Sweeney",
        "email": "sidney@gmail.com",
        "address": {
          "zip": 55125,
          "country": "Washington",
          "city": "Sterling",
          "street": "44, Gain Court",
          "notes": "Consequat aute occaecat proident aute Lorem ad officia ullamco duis exercitation voluptate fugiat ullamco."
        },
        "active": false
    }, {
        "id": 2,
        "firstName": "Catherine",
        "lastName": "Missal",
        "email": "smcfadyen0@livejournal.com",
        "address": {
          "zip": 55124,
          "country": "Burundi",
          "city": "Sterling",
          "street": "44, Gain Court",
          "notes": "Consequat aute occaecat proident aute Lorem ad officia ullamco duis exercitation voluptate fugiat ullamco."
        },
        "active": false
    }, {
        "id": 3,
        "firstName": "Monica",
        "lastName": "Bellucci",
        "email": "pstaveley1@stumbleupon.com",
        "address": {
          "zip": 45276,
          "country": "Tonga",
          "city": "Cherokee",
          "street": "85, Suydam Place",
          "notes": "Ad dolore consequat qui dolore pariatur quis adipisicing aliquip aliquip non aute officia."
        },
        "active": true
    }, {
        "id": 4,
        "firstName": "Michael",
        "lastName": "Doven",
        "email": "eburdus2@eepurl.com",
        "address": {
          "zip": 49291,
          "country": "Angola",
          "city": "Loretto",
          "street": "70, Regent Place",
          "notes": "Proident incididunt in laboris enim nostrud aliquip."
        },
        "active": true
    }, {
        "id": 5,
        "firstName": "Jasmine",
        "lastName": "Reate",
        "email": "bsherrard3@va.gov",
        "address": {
          "zip": 32085,
          "country": "Anguilla",
          "city": "Trail",
          "street": "96, Wolcott Street",
          "notes": "Ea laboris eu esse dolore adipisicing irure dolore."
        },
        "active": false
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        customerService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const CUSTOMER_ID = 1;

        const request = mockRequest({
            params: {
                id: CUSTOMER_ID
            }
        });

        return customerController.findOne(request, response, nextFunction)
            .then( () => {
                expect(customerService.findOne).toBeCalledWith(CUSTOMER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === CUSTOMER_ID)
                );                
            })
    });
});