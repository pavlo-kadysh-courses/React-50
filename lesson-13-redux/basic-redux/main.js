const reducer = (state = [], action) => {
    console.log("reducer", state, action);
    if (action.type === "ADD_USER") {
        return [...state, action.payload];
    }
    return state;
}

const store = Redux.createStore(reducer);


store.dispatch({type: "ADD_USER", payload: "john"});
store.dispatch({type: "NOT_VALID", payload: "john"});
// module 1
store.subscribe(() => {
    console.log("module 1 subscribe", store.getState());
})



// module 2
// store.dispatch({type: "ADD_USER", payload: "jack"});

// // module 3


const list = document.querySelector(".list");
const addUserBtn = document.querySelector(".addUser");
const userInput = document.querySelector(".userInput");

store.subscribe(() => {
    list.innerHTML = "";
    userInput.value = "";
    store.getState().forEach((user) => {
        const li = document.createElement("li");
        li.textContent = user;
        list.appendChild(li);
    })
})

addUserBtn.addEventListener("click", () => {
    store.dispatch({type: "ADD_USER", payload: userInput.value});
})