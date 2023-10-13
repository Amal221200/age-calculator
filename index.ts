// class IterableClass {
//     private data: Array<any>;
//     private index: number;
//     constructor(data: Array<any>) {
//         this.data = data;
//         this.index = 0;
//     }

//     // Implement the Symbol.iterator method to return an iterator object
//     [Symbol.iterator]() {
//         return {
//             // Implement the next method of the iterator
//             next: () => {
//                 if (this.index < this.data.length) {
//                     return {
//                         value: this.data[this.index++],
//                         done: false
//                     };
//                 } else {
//                     this.index = 0
//                     return {
//                         done: true
//                     };
//                 }
//             }
//         };
//     }
// }

// // Example usage
// const iterableObject = new IterableClass([1, 2, 3, 4, 5].slice(0, 2));

// console.log(iterableObject[Symbol.iterator]().next(), iterableObject[Symbol.iterator]().next(), iterableObject[Symbol.iterator]().next(), iterableObject[Symbol.iterator]().next());


class IndexedIterable {
    private data: Array<any>;
    // private index: number;
    constructor(data) {
        this.data = data;
    }

    getByIndex(index: number) {
        if (0 <= index && index <= this.data.length) {
            return this.data[index]
        }

        return null
    }

    // Implement the iterable protocol
    [Symbol.iterator]() {
        let index = 0;

        // The next method returns an iterator result
        return {
            next: () => {
                if (index < this.data.length) {
                    // Return the current value and move to the next index
                    return { value: this.data[index++], done: false };
                } else {
                    // Iteration is complete
                    return { done: true };
                }
            }
        };
    }
}

// Example usage
const iterable = new IndexedIterable([1, 2, 3, 4, 5]);

// console.log(iterable[0]);

// for (const value of iterable) {
//     console.log(value);
// }
// for (const value of iterable) {
//     console.log(value);
// }

console.log(iterable.getByIndex(2));
