import * as React from "react";
import MatText from '../custom-components/text/text';
import MatAppBar from '../custom-components/appbar/appbar';
import * as m from '../custom-components/materialui/materialui-components';
import { Route, Link, withRouter } from "react-router-dom";
import { RouteComponentProps } from 'react-router';
import { AppContainer } from '../containers/app-container';
import { ViewContainer } from '../containers/view-container';

export type AppConfig = RouteComponentProps<any> & { text: string };

export const App = withRouter(
    class App extends React.Component<AppConfig, any> {

        constructor(props: AppConfig) {
            super(props);
            this.state = {
                appBar: {
                    class: 'big'
                }
            };
            this.tabItems.map((item, index) => {
                if (item.value == this.props.location.pathname) {
                    this.state = {
                        appBar: {
                            class: (index > 0) ? 'small' : 'big'
                        }
                    }
                }
            });
        }

        tabItems = [
            { label: 'HOME', content: 'Hello Home', value: ["/home", "/"], component: <span>Home</span> },
            { label: 'GALLERY', content: 'Hello Gallery', value: "/gallery", component: <span>Gallery</span> },
            { label: 'ABOUT US', content: 'Hello About', value: "/about", component: <span>About</span> },
            { label: 'CONTACT', content: 'Hello Contact', value: "/contact", component: <span>Contact</span> },
        ];

        onChangeTab = (event: any, value: any) => {
            this.setState((state: any) => {
                return {
                    appBar: {
                        class: this.checkCurrentTab(value)
                    }
                };
            });
        };

        checkCurrentTab(value: any) {
            let i = 0;
            this.tabItems.filter((item, index) => {
                if (item.value == value) {
                    i = index;
                }
            });
            return (i > 0) ? 'small' : 'big';
        }

        checkForTabIndex(index: any) {
            if (index > 0) {
                this.setState({
                    appBar: {
                        class: 'small'
                    }
                });
            }
            return index;
        }

        getPath(to: any) {
            if (Array.isArray(to)) {
                return '/home'
            } else {
                return to;
            }
        }

        getHomePath(path: any) {
            if (path == '/' || path == '') {
                return '/home';
            } else {
                return path;
            }
        }

        render() {
            const { text } = this.props;
            return (
                <AppContainer>
                    <MatAppBar position="static" color="primary" className={['app-bar', this.state.appBar.class].join(' ')}>
                        <MatText className="app-bar-title" color="inherit" variant="display3" align="left" weight="lighter" opacity={0.8}>{text}</MatText>
                        <m.Tabs
                            classes={{ root: 'tab-bar', flexContainer: 'tabs-flex-container' }}
                            value={this.getHomePath(this.props.location.pathname)}
                            onChange={this.onChangeTab}
                            indicatorColor="secondary"
                            textColor="inherit"
                            scrollable
                            scrollButtons="off"
                        >
                            {this.tabItems.map((item, index) => {
                                //@ts-ignore
                                return <m.Tab classes={{ selected: 'tab-selected', root: 'tab-buttons' }} key={index} label={item.label} component={Link} to={this.getPath(item.value)} value={this.getPath(item.value)}/>
                            })}
                        </m.Tabs>
                    </MatAppBar>
                    {this.tabItems.map((item, index) => {
                        if (Array.isArray(item.value)) {
                            return item.value.map((value, i) => {
                                let c = <Route exact key={index} value={value} path={value} component={() => (<ViewContainer key={index}>{item.component}</ViewContainer>)}></Route>
                                index = index+1;
                                return c;
                            })
                        } else {
                            return <Route key={index} value={item.value} path={item.value} component={() => (<ViewContainer key={index}>{item.component}</ViewContainer>)}></Route>
                        }
                    })}
                </AppContainer>
            );
        }
    }
)