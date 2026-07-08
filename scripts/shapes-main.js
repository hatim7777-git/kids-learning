const shapesData = [
    // NOTE: You will need to add the corresponding images to your images folder.
    // Basic shapes first
    {id: 'Circle', word: 'Circle', image: 'images/shape_circle.png', color: '#E91E63'},
    {id: 'Square', word: 'Square', image: 'images/shape_square.png', color: '#03A9F4'},
    {id: 'Triangle', word: 'Triangle', image: 'images/shape_triangle.png', color: '#FFC107'},
    {id: 'Rectangle', word: 'Rectangle', image: 'images/shape_rectangle.png', color: '#9C27B0'},
    {id: 'Oval', word: 'Oval', image: 'images/shape_oval.png', color: '#673AB7'},
    {id: 'Star', word: 'Star', image: 'images/shape_star.png', color: '#FFEB3B'},
    {id: 'Heart', word: 'Heart', image: 'images/shape_heart.png', color: '#F44336'},
    {id: 'Diamond', word: 'Diamond', image: 'images/shape_diamond.png', color: '#00BCD4'},
    {id: 'Line', word: 'Line', image: 'images/shape_line.png', color: '#3F51B5'},
    {id: 'Cross', word: 'Cross', image: 'images/shape_cross.png', color: '#F44336'},
    {id: 'Plus', word: 'Plus', image: 'images/shape_plus.png', color: '#4CAF50'},
    {id: 'Pentagon', word: 'Pentagon', image: 'images/shape_pentagon.png', color: '#FF9800'},
    {id: 'Hexagon', word: 'Hexagon', image: 'images/shape_hexagon.png', color: '#795548'}
];

// Initialize Shapes grid
// We use 'displayType: "image"' to show the shape image directly on the card.
createGrid(shapesData, 'shapes-container', { lang: 'en-US', displayType: 'image' });