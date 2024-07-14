//welcome to javascript coding
// taking dimensions of a cube and calculating its area,lateral surface area , total surface area and more.
const pi=3.14;
const cube={
    length:15,
    breadth:4,
    height:44,
};
area=6*cube.length*2;
volume=cube.length*3;
lateralsurfacearea=2*((cube.length*cube.breadth)+(cube.breadth*cube.height)+(cube.height*cube.length));
console.log("area of cube =", area);
console.log("volume of cube =",volume);
console.log("lateral surface area of cube =", lateralsurfacearea);
console.log(pi);
