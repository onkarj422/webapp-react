export const appState = {
    title: 'React Web App',
    tabItems: [
        { label: 'HOME' },
        { label: 'GALLERY' },
        { label: 'ABOUT' },
        { label: 'CONTACT' },
    ],
    menuItems: [
        { label: 'Account', action: '' },
        { label: 'Orders', action: '' },
        { label: 'Cart', action: '' },
        { label: 'Sign In', action: 'GO_TO_LOGIN' }
    ],
    routes: [
        { label: 'HOME', value: ['/', '/home'], component: 'HomeComponent' },
        { label: 'GALLERY', value: '/gallery', component: 'GalleryComponent' },
        { label: 'ABOUT', value: '/about', component: 'AboutComponent' },
        { label: 'CONTACT', value: '/contact', component: 'ContactComponent' },
        { label: 'LOGIN', value: '/login', component: 'LoginComponent' },
        { label: 'REGISTER', value: '/register', component: 'RegisterComponent' }
    ]
}

export const authState = {
    auth: false,
    user: undefined
}
