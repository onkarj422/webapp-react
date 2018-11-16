export interface MenuState {
    anchorEl: any
}

const menuState: MenuState = {
    anchorEl: null
}

const menuReducer = (state: any = menuState, action: any) => {
    switch(action.type) {
        case 'HANDLE_CLICK': {
            var _state = Object.assign({}, state);
            _state.anchorEl = action.payload.event.currentTarget;
            return _state;
        }
        case 'HANDLE_CLOSE': {
            var _state = Object.assign({}, state);
            _state.anchorEl = null;
            return _state;
        }
        default : {
            return state;
        }
    }
}

export default menuReducer;