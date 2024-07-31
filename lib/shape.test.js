const { Circle, Triangle, Square } = require("./shapes");

// Test suite for parent shapes object
describe('Shapes', () =>{
    // Test for circle class
    describe('Circle', () => {
        it('Render() should return an SVG string with the correct shape color, number of characters, and text color', () => {
            const circle = new Circle("red", "123", "red");
            expect(circle.render()).toEqual(`
        <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">    
        <circle cx="150" cy="100" r="80" fill="red" />
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="red">123</text>
        </svg>
            `
            )
        })
    })
    // Test for triangle class
    describe('Triangle', () => {
        it('Render() should return an SVG string with the correct shape color, number of characters, and text color', () => {
            const triangle = new Triangle("blue", "123", "blue");
            expect(triangle.render()).toEqual(`
          <svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">    
           <polygon points="100,20 180,180 20,180" fill="blue" />
           <text x="100" y="140" font-size="30" text-anchor="middle" fill="blue">123</text>
           </svg>
              `
            )
        })
    })
    // Test for square class
    describe('Square', () => {
        it('Render() should return an SVG string with the correct shape color, number of characters, and text color', () => {
            const square = new Square("black", "123", "black");
            expect(square.render()).toEqual( `
           <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
           <rect x="10" y="10" width="160" height="160" fill="black"/>
           <text x="90" y="100" font-size="40" text-anchor="middle" fill="black">123</text>
           </svg>
              `
            
                )
        })
    })
})