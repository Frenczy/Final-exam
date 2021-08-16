const categoryService = jest.mock('./category.service');

let mockData;

categoryService.findOne = jest.fn( id => Promise.resolve(
    mockData.find( p => p.id === id) ) 
);

categoryService.__setMockData = data => mockData = data;

module.exports = categoryService;
