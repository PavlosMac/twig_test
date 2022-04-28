
class ChunkArray {
    /* initi new shallow array, use keys from param as value to compose Array
    throw exceptions if wrong params are passed to constructor*/
    constructor(contents, arrSize) {
        if(arrSize === 0) {
            throw 'array group size cannot be zero'
        };
        if(typeof contents !== 'number' || contents < arrSize) {
            throw 'contents must be a number and greater than sub array size'
        }
        this.arr = Array.from(Array(contents).keys());
        this.numOfArr = arrSize;
    }
    /* divide the target array by target group number, roud up the value to get division value using Math.ceil
    use division value as new array length ( such that remaining elements can result ), 
    use slice operator and increment i by multiplying with size to keep grouped arrays of equal size 
    slice will return final elements less than size*/
    getEqualChunkedElements() {
        const subArraySize = Math.ceil(this.arr.length / this.numOfArr);
        return Array.from({ length: Math.ceil(this.arr.length / subArraySize) }, (_, i) =>
        this.arr.slice(i * subArraySize, i * subArraySize + subArraySize)
      );
    }
}

var chunked = new ChunkArray(7, 3);

console.log(chunked.getEqualChunkedElements());



