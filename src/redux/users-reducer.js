const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';


let initialState = {
    users: [
        {

            "name": "Artem Fadeev",

            "id": 1,

            "uniqueUrlName": null,

            "photos": {

                "small": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3H7OnUZVJxDoT8MD-OH72jq_gjW3tF_89elhXgHsnRT2M0Cb",

                "large": null

            },

            "status": null,

            "followed": true

        },
    ]
};

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            };


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userID) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            };

        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            };

        default:
            return state;
    }

};


export let followAC = (userId) => ({type: FOLLOW, userId: userId});
export let unfollowAC = (userId) => ({type: UNFOLLOW, userId: userId});
export let setUsersAC = (users) => ({type: SET_USERS, users: users});

export default usersReducer;