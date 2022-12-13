
export const setRecommendedLevel = (data) => {
    return {
        type: "SET_LEVEL",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}
