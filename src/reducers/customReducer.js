const initialState = {
    custom: {}
}
const customData = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CUSTOM_DATA":
            const { schema,
                videos,
                accessibility,
                presentation,
                translation,
                estimate,
                contentHours,
                translations,
                totalCost,
                baseContentCost,
                baseContentPer, } = action.payload;
            return {
                ...state,
                custom:
                {
                    schema: schema,
                    videos: videos,
                    accessibility: accessibility,
                    presentation: presentation,
                    translation: translation,
                    estimate: estimate,
                    contentHours: contentHours,
                    translations: translations,
                    totalCost: totalCost,
                    baseContentCost: baseContentCost,
                    baseContentPer: baseContentPer,
                }
            }
        default: return state;
    }
}

export default customData;