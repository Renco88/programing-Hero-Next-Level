"use strict";
// JS -ts
Object.defineProperty(exports, "__esModule", { value: true });
// string number boolean undefined null
// let userName1 : string = "John Doe";
const Name = ["John Doe", "Jane Doe", "Alice", "Bob"];
Name.push("Charlie"); // This will cause an error because the tuple type [string] only allows one string element.
function add(num1, num2) {
    return num1 + num2;
}
add(5, 10);
const poorUser = {
    name: "John Doe",
    balance: 0,
    addBalance: (value) => {
        return value;
    }
};
//# sourceMappingURL=primetive.js.map