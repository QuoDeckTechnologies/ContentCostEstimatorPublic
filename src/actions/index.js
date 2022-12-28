
export const setRecommendedLevel = (data) => {
    return {
        type: "SET_LEVEL",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
export const setPdf = (data) => {
    return {
        type: "SET_PDF",
        payload: {
            data: data
        }
    }
}
export const setCustomData = (schema,
    videos,
    accessibility,
    presentation,
    translation,
    estimate,
    contentHours,
    translations,
    totalCost,
    baseContentCost,
    baseContentPer) => {
    return {
        type: "SET_CUSTOM_DATA",
        payload: {
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
