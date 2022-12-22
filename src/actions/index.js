
export const setRecommendedLevel = (data) => {
    return {
        type: "SET_LEVEL",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const setDetailsData = (contentSlideData, videosTableData, accessibilityAddonsData, presentationAddonsData, translationAddonsData, translationEstimate, allEstimatedCost) => {
    return {
        type: "SET_DETAILS_DATA",
        payload: {
            contentSlideData: contentSlideData,
            videosTableData: videosTableData,
            accessibilityAddonsData: accessibilityAddonsData,
            presentationAddonsData: presentationAddonsData,
            translationAddonsData: translationAddonsData,
            translationEstimate: translationEstimate,
            allEstimatedCost: allEstimatedCost
        }
    }
}
