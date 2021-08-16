const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const orderController = require('./order.controller');
const orderService = require('./order.service');

jest.mock('./order.service');

describe("Order controller", () => {
    const mockData = [{
        "id": 1,
        "customerID": 2087,
        "catID": 3,
        "productID": 7,
        "quantity": 3,
        "amount": 450,
        "status": "new"
    }, {
        "id": 2,
        "customerID": 2085,
        "catID": 1,
        "productID": 54,
        "quantity": 2,
        "amount": 160,
        "status": "ordered"
    }, {
        "id": 3,
        "customerID": 2075,
        "catID": 3,
        "productID": 4,
        "quantity": 1,
        "amount": 120,
        "status": "delivered"
    }, {
        "id": 4,
        "customerID": 2021,
        "catID": 2,
        "productID": 29,
        "quantity": 3,
        "amount": 3000,
        "status": "ordered"
    }, {
        "id": 5,
        "customerID": 2072,
        "catID": 3,
        "productID": 4,
        "quantity": 2,
        "amount": 240,
        "status": "delivered"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        orderService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const ORDER_ID = 1;

        const request = mockRequest({
            params: {
                id: ORDER_ID
            }
        });

        return orderController.findOne(request, response, nextFunction)
            .then( () => {
                expect(orderService.findOne).toBeCalledWith(ORDER_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === ORDER_ID)
                );                
            })
    });
});