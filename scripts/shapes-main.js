const shapesData = [
    // NOTE: You will need to add the corresponding images to your images folder.
    {id: 'Line', word: 'Line', image: 'images/shape_line.png', color: '#3F51B5'},
    {id: 'Triangle', word: 'Triangle', image: 'images/shape_triangle.png', color: '#FFC107'},
    {id: 'Cross', word: 'Cross', image: 'images/shape_cross.png', color: '#F44336'},
    {id: 'Plus', word: 'Plus', image: 'images/shape_plus.png', color: '#4CAF50'},
    {id: 'Square', word: 'Square', image: 'images/shape_square.png', color: '#03A9F4'},
    {id: 'Rectangle', word: 'Rectangle', image: 'images/shape_rectangle.png', color: '#9C27B0'},
    {id: 'Pentagon', word: 'Pentagon', image: 'images/shape_pentagon.png', color: '#FF9800'},
    {id: 'Hexagon', word: 'Hexagon', image: 'images/shape_hexagon.png', color: '#E91E63'}
];

// Initialize Shapes grid
// We use 'displayType: "image"' to show the shape image directly on the card.
createGrid(shapesData, 'shapes-container', { lang: 'en-US', displayType: 'image' });