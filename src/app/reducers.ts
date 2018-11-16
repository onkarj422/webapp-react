const initState = {
    title: 'React Web App',
    tabItems: [
        { label: 'HOME', content: 'Hello Home', value: ["/home", "/"], component: '<span>Home</span>' },
        { label: 'GALLERY', content: 'Hello Gallery', value: "/gallery", component: '<span>Gallery</span>' },
        { label: 'ABOUT US', content: 'Hello About', value: "/about", component: '<span>About</span>' },
        { label: 'CONTACT', content: 'Hello Contact', value: "/contact", component: '<span>Contact</span>' },
    ],
    menuItems: [
        { label: 'Account' },
        { label: 'Orders' },
        { label: 'Cart' },
        { label: 'Sign In' }
    ]
}

const appReducers = (state: any = initState, action: any) => {
    switch(action.type) {
        default:
            return state;
    }
}

export default appReducers;