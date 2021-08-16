const orderService = jest.mock('./order.service');

let mockData;

orderService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

orderService.__setMockData = data => mockData = data;

module.exports = orderService;
