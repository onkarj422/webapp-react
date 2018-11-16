export const onChangeTab = (event: any, value: any) => ({
    type: 'ON_CHANGE_TAB',
    payload: {
        value: value
    }
});

export const setAppBarState = (property: any, value: any) => ({
    type: 'SET_APP_BAR_STATE',
    payload: {
        property: property,
        value: value
    }
});

export const setState = (property: any, value: any) => ({
    type: 'SET_STATE',
    payload: {
        property: property,
        value: value
    }
});