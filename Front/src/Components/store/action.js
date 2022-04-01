export const GET_BOXES = 'GET_BOXES';
export const POST_BOX = "POST_BOX";

/* ---------------------- GET_BOX-------------------------- */
const getBoxesSuccess = (boxes) => {
    return {
        type: GET_BOXES,
        boxes: boxes,
    }
}

export const getBoxes = () => {
    return (dispatch) => {
        return fetch('http://localhost:8082/listboxes')
            .then(response => response.json())
            .then(boxes => dispatch(getBoxesSuccess(boxes)))
    }
}

/* --------------------- POST_BOXES------------------------ */

const postBoxSuccess = (box) => {
    return {
        type: POST_BOX,
        box: box,
    }
};

export const postBox = (box) => {
    return (dispatch) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(box),
        }
        return fetch('http://localhost:8082/addbox', options)
            .then(response => response.json())
            .then(box => dispatch(postBoxSuccess(box)))
    }
}