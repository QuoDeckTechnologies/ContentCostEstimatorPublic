const initialState = {
    list: {}
}
const recommendedLevel = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LEVEL":
            const { id, data } = action.payload;
            return {
                ...state,
                list:
                {
                    id: id,
                    data: data
                }

            }
        default: return state;
    }
}

export default recommendedLevel;