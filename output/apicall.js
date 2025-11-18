"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function apiCallHandling() {
    const result = await fetch("https://jsonplaceholder.typicode.com/todos/3");
    const data = await result.json();
    // console.log(data);
    return data;
}
apiCallHandling().then((data) => {
    console.log(data);
});
