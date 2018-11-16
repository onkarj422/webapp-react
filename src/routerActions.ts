const getPath = (to) => {
    if (Array.isArray(to)) {
        return '/home'
    } else {
        return to;
    }
}

const getHomePath = (path) => {
    if (path == '/' || path == '') {
        return '/home';
    } else {
        return path;
    }
}

export const routerActions = {
    getPath: getPath,
    getHomePath: getHomePath
}
