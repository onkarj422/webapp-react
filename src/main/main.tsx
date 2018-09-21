import * as React from "react";
import MatText from '../text/text';
import MatAppBar from '../appbar/appbar';
import * as m from '../materialui/materialui-components';
import '../styles.scss';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

export interface MainConfig { text: string };


export const Main = styled(
    class AppBar extends React.Component<MainConfig, any> {

        constructor(props: MainConfig) {
            super(props);
            this.state = {
                tabValue: 0
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
                return { tabValue: value};
            });
        };

        render() {
            const { text } = this.props;
            const { tabValue } = this.state;
            return (
                <div>
                    <MatAppBar position="static" color="primary" height={200} className>
                        <MatText className="app-bar-title" color="inherit" variant="display3" align="left" weight="lighter" opacity={0.8}>{text}</MatText>
                        <m.Tabs
                            classes={{root: 'tab-bar'}}
                            value={tabValue}
                            onChange={this.onChangeTab}
                            indicatorColor="secondary"
                            textColor="inherit"
                            scrollable
                            scrollButtons="off"
                        >
                            {this.tabItems.map((item, index) => {
                                return <m.Tab classes={{selected: 'tab-selected', root: 'tab-button'}} key={index} label={item.label}></m.Tab>
                            })}
                        </m.Tabs>
                    </MatAppBar>
                    {this.tabItems.map((item, index) => {
                        if (item.value == tabValue) {
                            return <div className="content-container" key={index}>{item.content}</div>
                        }
                    })}
                </div>
            );
        }
    }
)`
`;