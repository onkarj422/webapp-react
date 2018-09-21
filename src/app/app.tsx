import * as React from "react";
import MatText from '../custom-components/text/text';
import MatAppBar from '../custom-components/appbar/appbar';
import * as m from '../custom-components/materialui/materialui-components';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

export interface AppConfig { text: string };

export class App extends React.Component<AppConfig, any> {

    constructor(props: AppConfig) {
        super(props);
        this.state = {
            tabValue: 0,
            appBar: {
                class: 'big'
            }
        };
    }

    tabItems = [
        { label: 'HOME', content: 'Hello Home', value: 0 },
        { label: 'GALLERY', content: 'Hello Gallery', value: 1 },
        { label: 'ABOUT US', content: 'Hello About', value: 2 },
        { label: 'CONTACT', content: 'Hello Contact', value: 3 },
    ];

    onChangeTab = (event: any, value: any) => {
        this.setState((state: any) => {
            return {
                tabValue: value,
                appBar: {
                    class: (value > 0) ? 'small' : 'big'
                }
            };
        });
    };

    render() {
        const { text } = this.props;
        const { tabValue } = this.state;
        return (
            <AppContainer>
                <MatAppBar position="static" color="primary" className={['app-bar', this.state.appBar.class].join(' ')}>
                    <MatText className="app-bar-title" color="inherit" variant="display3" align="left" weight="lighter" opacity={0.8}>{text}</MatText>
                    <m.Tabs
                        classes={{root: 'tab-bar', flexContainer: 'tabs-flex-container'}}
                        value={tabValue}
                        onChange={this.onChangeTab}
                        indicatorColor="secondary"
                        textColor="inherit"
                        scrollable
                        scrollButtons="off"
                    >
                        {this.tabItems.map((item, index) => {
                            return <m.Tab classes={{selected: 'tab-selected', root: 'tab-buttons'}} key={index} label={item.label}></m.Tab>
                        })}
                    </m.Tabs>
                </MatAppBar>
                {this.tabItems.map((item, index) => {
                    if (item.value == tabValue) {
                        return <div className="content-container" key={index}>{item.content}</div>
                    }
                })}
            </AppContainer>
        );
    }
};

export class AppContainer extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                <CssBaseline />
                {this.props.children}
            </div>
        )
    }
}