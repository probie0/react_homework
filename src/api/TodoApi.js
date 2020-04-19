const basePath = 'http://localhost:8000/api/tasks';

const buildParams = (method0, body0="") =>{
    return {
        method: method0,
        headers: {
            "Content-Type": "application/json"
        },
        // credentials: "same-origin",
        body: body0
    };
}

export const getAllTasks = async() => {
    const res = await fetch(basePath);
    console.log(res.json);
    return res.json();
}

export const reqAddTask = async(method0, body0) => {
    const params = buildParams(method0, body0);
    const res = await fetch(basePath, params);
    return res.ok;
}

// export const addTodo = (todo) => {
// 	return doRequestWithBody(TODO_PATH, 'post', todo);
// }

export const reqUpdateTask = async (taskId, body0) => {
    let params = buildParams("PUT", body0);
    const res = await fetch(basePath+"/" + taskId, params);
    return res.ok;
}

export const reqDeleteTask = async (taskId) => {
    let params = buildParams("DELETE")
    const res = await fetch(basePath+"/" + taskId, params);
    return res.ok;
}