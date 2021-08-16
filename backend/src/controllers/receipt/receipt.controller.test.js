const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const receiptController = require('./receipt.controller');
const receiptService = require('./receipt.service');

jest.mock('./receipt.service');

describe("Receipt controller", () => {
    const mockData = [{
        "id": 50001,
        "orderID": 10048,
        "amount": 150,
        "status": "new"
    }, {
        "id": 50002,
        "orderID": 10029,
        "amount": 360,
        "status": "issued"
    }, {
        "id": 50003,
        "orderID": 10032,
        "amount": 1500,
        "status": "new"
    }, {
        "id": 50004,
        "orderID": 10089,
        "amount": 8000,
        "status": "paid"
    }, {
        "id": 50005,
        "orderID": 10095,
        "amount": 160,
        "status": "issued"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        receiptService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const RECEIPT_ID = 1;

        const request = mockRequest({
            params: {
                id: RECEIPT_ID
            }
        });

        return receiptController.findOne(request, response, nextFunction)
            .then( () => {
                expect(receiptService.findOne).toBeCalledWith(RECEIPT_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === RECEIPT_ID)
                );                
            })
    });
});