const { mockRequest, mockResponse } = require('jest-mock-req-res');
const createError = require('http-errors');

const categoryController = require('./category.controller');
const categoryService = require('./category.service');

jest.mock('./category.service');

describe("Categories controller", () => {
    const mockData = [{
        "id": 1,
        "name": "Accounting services",
        "description": "Accounting and Financial related services"
    }, {
        "id": 2,
        "name": "Audit services",
        "description": "Audit and Year-end related services, Annual reports"
    }, {
        "id": 3,
        "name": "Tax related services",
        "description": "Tax calculation, submission, self-revision"
    }, {
        "id": 4,
        "name": "Legal services",
        "description": "Legal advisory & representation at court"
    }, {
        "id": 5,
        "name": "Project management",
        "description": "Applying for domestic & EU funds"
    }];

    let response;
    const nextFunction = jest.fn();

    beforeEach(() => {
        categoryService.__setMockData(mockData);
        response = mockResponse();
    });

    test("find one with valid id", () => {
        const CATEGORY_ID = 1;

        const request = mockRequest({
            params: {
                id: CATEGORY_ID
            }
        });

        return categoryController.findOne(request, response, nextFunction)
            .then( () => {
                expect(categoryService.findOne).toBeCalledWith(ITEM_ID);
                expect(response.json).toBeCalledWith(
                    mockData.find(p => p.id === ITEM_ID)
                );                
            })
    });
});