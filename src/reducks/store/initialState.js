
const initialState = {
    posts: {
        list: []
    },
    users: {
        username: '',
        email: '',
        token: '',
        token_expires_at: ''
    },
    items: {
        list: []
    },
    carts: {
        list: [],
        subtotal: 0
    },
    order: {
        list: [],
        subtotal: 0
    }
};


export default initialState;
