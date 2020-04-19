const fetch = require('node-fetch');

const basePath = 'http://localhost:8000/api/tasks';
let params = {
    method: "GET",
    body: null,//JSON.stringify(data),
    headers: {
    "Content-Type": "application/json"
    },
    credentials: "same-origin"
}

const getAllTasks = async() => {
    let res = await fetch(basePath, params);
    return res.json();
}

const main = async() => {
    const tasks = await getAllTasks();
    const itemList = tasks.map(task => {return {content: task.content, done: false}});
    console.log(itemList);
}

// fetch('http://localhost:8000/api/tasks')
//     .then(res => res.json())
//     .then(json => console.log(json))
main()