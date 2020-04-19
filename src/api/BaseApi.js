const basePath = 'http://localhost:8000/api/tasks';

export const doRequest = async (path, params) => {
	let mergedParams = {
	    credentials: 'same-origin',
	    ...params
	 }
	return await fetch(basePath+path, mergedParams);
}

export const doRequestWithBody = async(path, method, body) => {
	return await doRequest(path, { 
	    headers: {
	      'content-type': 'application/json'
	    },
	    method, 
	    body: JSON.stringify(body)
	})
}

export const doDeleteRequest = async(path) => {
	return await doRequest(path, { 
	    method: 'delete'
	})
}