import { routerActions } from '../../app-router/router.actions';

export default {
    'GO_TO_LOGIN': () => {
        routerActions.navigate('/login');
    },
    'DEFAULT': () => {
        return;
    }
}