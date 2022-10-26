export const pendingCallback = (store) => {
    store.loading = true;
}

export const rejectedCallback = (store, {payload}) => {
    store.loading = false;
    store.error = payload;
}