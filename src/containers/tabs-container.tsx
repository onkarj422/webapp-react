import * as React from 'react';
import Button from '@material-ui/core/Button';

export interface TabsConfig {
    tabItems: Array<any>,
    clickCall: Function
}

export class TabsContainer extends React.Component<TabsConfig, any> {
    constructor(props: TabsConfig) {
        super(props);
    }

    render() {
        const { tabItems, clickCall } = this.props;
        return (
            <div style={tabButtonsContainerStyle}>
                {
                    tabItems.map((item, index) => {
                        return <Button key={index} onClick={clickCall(item.value)} color="secondary">item.label</Button>
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
    justifyContent: 'center'
}