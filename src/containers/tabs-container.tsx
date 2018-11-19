import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { routerActions } from '../routerActions';
import { withTheme } from '@material-ui/core';

export interface TabsConfig {
    tabItems: Array<any>
}

export class TabsContainer extends React.Component<TabsConfig, any> {
    constructor(props: TabsConfig) {
        super(props);
    }

    render() {
        const { tabItems } = this.props;
        return (
            <div style={tabButtonsContainerStyle}>
                {
                    tabItems.map((item, index) => {
                        return (
                            <Button style={buttonStyle} key={index} color="secondary">
                                <Link style={linkStyle} to={routerActions.getPath(item.value)}>{item.label}</Link>
                            </Button>
                        )
                    })
                }
            </div>
        );
    }
}

const tabButtonsContainerStyle = {
    display: 'grid',
    gridAutoFlow: 'column',
    gridAutoColumns: 'max-content',
    gridColumnGap: '10px',
    justifyContent: 'center',
    height: '60px',
    alignItems: 'center'
}

const buttonStyle = {
    height: '40px'
}

const linkStyle = {
    textDecoration: 'none',
    color: '#FEEEAC'
}