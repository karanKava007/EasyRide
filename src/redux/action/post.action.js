import * as ActionType from '../ActionType';

export const GetData = () => (dispatch) => {
    try {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.GET_METHOD, payload: data }));
    } catch (error) {
        console.log(error);
    }
}

export const addData = (data) => (dispatch) => {
    try {
        fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST", // or 'PUT'
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.ADD_METHOD, payload: data }))
            .catch((error) => { console.error("Error:", error); });
    } catch (error) {


    }
}

export const deleteData = (id) => (dispatch) => {
    try {
        fetch("hhttps://jsonplaceholder.typicode.com/posts/" + id, {
            method: "DELETE",
        })
            .then(dispatch({ type: ActionType.DELETE_METHOD, payload: id }))
    } catch (error) {

    }
}

export const updateData = (data) => (dispatch) => {
    try {
        fetch("https://jsonplaceholder.typicode.com/posts/" + data.id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => dispatch({ type: ActionType.UPDATE_METHOD, payload: data }))
    } catch (error) {

    }
}
