const initState = {
    title: 'React Web App',
    tabItems: [
        { label: 'HOME', content: 'Hello Home', value: ["/home", "/"], component: '<span>Home</span>' },
        { label: 'GALLERY', content: 'Hello Gallery', value: "/gallery", component: '<span>Gallery</span>' },
        { label: 'ABOUT US', content: 'Hello About', value: "/about", component: '<span>About</span>' },
        { label: 'CONTACT', content: 'Hello Contact', value: "/contact", component: '<span>Contact</span>' },
    ],
    isFixedAppBar: false,
    appBarClass: 'big',
    menuItems: [
        { label: 'Account' },
        { label: 'Orders' },
        { label: 'Cart' },
        { label: 'Sign In' }
    ]
}

const appReducers = (state: any = initState, action: any) => {
    switch(action.type) {
        case 'ON_CHANGE_TAB': {
            function checkCurrentTab(value: any) {
                let i = 0;
                state.tabItems.map((item: any, index: any) => {
                    if (item.value == value) {
                        i = index;
                    }
                });
                return (i > 0) ? 'small' : 'big';
            }
            let _state = Object.assign({}, state);
            _state.appBarClass = checkCurrentTab(action.payload.value);
            return _state;
        }
        case 'SET_APP_BAR_STATE': {
            let _state = Object.assign({}, state);
            _state[action.payload.property] = action.payload.value;
            return _state;
        }
        case 'SET_STATE': {
            let _state = Object.assign({}, state);
            let stateProp = action.payload.property;
            let value = action.payload.value;
        }
        default:
            return state;
    }
}

export default appReducers;