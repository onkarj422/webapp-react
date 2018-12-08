import * as React from 'react';
import GridLayoutAuto from '../../../components/layout/grid/GridLayout';
import { Button } from '@material-ui/core';

interface SocialLoginConfig {

}

class SocialLogin extends React.Component<SocialLoginConfig, any> {

    render() {
        return (
            <GridLayoutAuto flow="column" gap="10px">
                <Button variant="contained">
                    <img style={{ marginRight: '8px' }} height="24" width="24" src="https://img.icons8.com/color/50/000000/google-logo.png"></img>
                    <span>GOOGLE SIGN IN</span>
                </Button>
                <Button variant="contained" style={{ background: '#3B5897', color: 'white' }}>
                    <img style={{ marginRight: '8px' }} height="24" width="24" src="https://img.icons8.com/material/50/ffffff/facebook-f.png"></img>
                    <span>FACEBOOK SIGN IN</span>
                </Button>
            </GridLayoutAuto>
        )
    }
}

export default SocialLogin;
