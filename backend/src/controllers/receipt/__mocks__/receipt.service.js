const receiptService = jest.mock('./receipt.service');

let mockData;

receiptService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

receiptService.__setMockData = data => mockData = data;

module.exports = receiptService;
