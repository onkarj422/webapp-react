import { appState } from '../states';

const appReducers = (state: any = appState, action: any) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default appReducers;