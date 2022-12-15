const initialState = {
    dataProp: {}
}
const dataProportions = (state = initialState, action) => {
    switch (action.type) {
        case "SET_DETAILS_DATA":
            const { id, contentSlideData,
                videosTableData,
                accessibilityAddonsData, presentationAddonsData,
                translationAddonsData, level } = action.payload;
            return {
                ...state,
                dataProp:
                {
                    id: id,
                    level: level,
                    contentSlideData: contentSlideData,
                    videosTableData: videosTableData,
                    accessibilityAddonsData: accessibilityAddonsData,
                    presentationAddonsData: presentationAddonsData,
                    translationAddonsData: translationAddonsData,
                }

            }
        default: return state;
    }
}

export default dataProportions;
