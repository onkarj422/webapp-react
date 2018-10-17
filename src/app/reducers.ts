const initState = {
    tabItems: [
        { label: 'HOME', content: 'Hello Home', value: ["/home", "/"], component: '<span>Home</span>' },
        { label: 'GALLERY', content: 'Hello Gallery', value: "/gallery", component: '<span>Gallery</span>' },
        { label: 'ABOUT US', content: 'Hello About', value: "/about", component: '<span>About</span>' },
        { label: 'CONTACT', content: 'Hello Contact', value: "/contact", component: '<span>Contact</span>' },
    ],
    appBar: {
        class: 'big'
    }
}

const appReducers = (state: any = initState, action: any) => {
    switch(action.type) {
        case 'ON_CHANGE_TAB' : {
            function checkCurrentTab(value: any) {
                let i = 0;
                state.tabItems.map((item: any, index: any) => {
                    if (item.value == value) {
                        i = index;
                    }
                });
                return (i > 0) ? 'small' : 'big';
            }
            var _state = Object.assign({}, state);
            _state.appBar.class = checkCurrentTab(action.payload.value);
            return _state;
        }
        default:
            return state;
    }
}

export default appReducers;