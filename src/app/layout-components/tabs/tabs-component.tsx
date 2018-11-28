import * as React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { routerActions } from '../../app-router/router.actions';

export type TabsConfig = React.HTMLAttributes<any> & {
    tabItems: Array<any>;
    routes: Array<any>;
    dense?: 'true' | 'false';
}

export class TabsComponent extends React.Component<TabsConfig, any> {
    constructor(props: TabsConfig) {
        super(props);
    }

    static defaultProps = {
        dense: 'true'
    }

    render() {
        const { tabItems, routes, dense, style } = this.props;
        return (
            <div style={Object.assign(style, tabButtonsContainerStyle)}>
                {
                    routes.map((route, i) => {
                        return tabItems.map((item, index) => {
                            if (route.label == item.label) {
                                return (
                                    <Link key={index} style={linkStyle} to={routerActions.getPath(route.value)}>
                                        <Button size={(dense) ? 'small':'medium'} key={index} color="secondary">
                                            {item.label}
                                        </Button>
                                    </Link>
                                )
                            }
                        })
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
    //gridColumnGap: '1px',
    justifyContent: 'center',
    height: '60px',
    alignItems: 'center'
}

const linkStyle = {
    textDecoration: 'none'
}