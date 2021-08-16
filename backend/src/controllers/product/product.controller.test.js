const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const productController = require('./product.controller');
const productService = require('./product.service');

jest.mock('./product.service');

describe("Product controller", () => {
    const mockData = [{
        "id": 1,
        "name": "Accounting Services ( < 20 invoices / month) ",
        "catID": 1,
        "description": "Posting all incoming / outgoing invoices, cash management",
        "price": 300,
        "UOM": "Month",
        "active": true
    }, {
        "id": 2,
        "name": "Auditing Services ( Revenue < 10,000 EUR / year) ",
        "catID": 2,
        "description": "Compiling & Auditing Year-end report",
        "price": 400,
        "UOM": "Year",
        "active": true
    }, {
        "id": 3,
        "name": "Petty-cash management",
        "catID": 1,
        "description": "Recording incoming / outgoing cash movements",
        "price": 100,
        "UOM": "Month",
        "active": true
    }, {
        "id": 4,
        "name": "VAT return submission",
        "catID": 3,
        "description": "Monthly VAT return submission to Tax Authorities",
        "price": 120,
        "UOM": "Month",
        "active": true
    }, {
        "id": 5,
        "name": "Corporate Income Tax return submission",
        "catID": 3,
        "description": "CIT calculation &  submission to Tax Authorities",
        "price": 500,
        "UOM": "Quarter",
        "active": true
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        productService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const PRODUCT_ID = 1;

        const request = mockRequest({
            params: {
                id: PRODUCT_ID
            }
        });

        return productController.findOne(request, response, nextFunction)
            .then( () => {
                expect(productService.findOne).toBeCalledWith(PRODUCT_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === PRODUCT_ID)
                );                
            })
    });
});