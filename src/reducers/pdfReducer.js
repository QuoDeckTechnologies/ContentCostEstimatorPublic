const initialState = {
    pdfData: {}
}
const pdf = (state = initialState, action) => {
    switch (action.type) {
        case "SET_PDF":
            const { data } = action.payload;
            return {
                ...state,
                pdfData:
                {
                    data: data
                }
            }
        default: return state;
    }
}

export default pdf;