import * as React from 'react';

type DefaultProps = {
    flow: 'row' | 'column',
    gap: string,
    justify?: 'center' | 'start'
    | 'end' | 'flex-start'
    | 'flex-end' | 'left'
    | 'right' | 'space-between'
    | 'space-around' | 'space-evenly'
    | 'stretch' | 'safe center'
    | 'unsafe center' | 'inherit'
    | 'initial' | 'unset',
    align?: 'normal' | 'stretch' | 'center' | 'start'
    | 'end' | 'flex-start' | 'flex-end' | 'self-start'
    | 'self-end' | 'baseline' | 'first baseline' | 'last baseline'
    | 'safe center' | 'unsafe center' | 'inherit' | 'initial'
    | 'unset'
}

type GridConfig = {
    flow?: 'row' | 'column',
    gap?: string,
    justify?: 'center' | 'start'
    | 'end' | 'flex-start'
    | 'flex-end' | 'left'
    | 'right' | 'space-between'
    | 'space-around' | 'space-evenly'
    | 'stretch' | 'safe center'
    | 'unsafe center' | 'inherit'
    | 'initial' | 'unset',
    children? : any
} & Partial<DefaultProps> & React.HTMLAttributes<HTMLDivElement>;

class GridLayoutAuto extends React.Component<GridConfig, any> {

    static defaultProps: DefaultProps = {
        flow: 'column',
        gap: '5px',
        justify: 'center',
        align: 'center'
    }

    constructor(props: GridConfig) {
        super(props);
        this.state = {

        }
    }

    gridStyle = {
        display: 'grid',
        gridAutoFlow: this.props.flow,
        gridRowGap: this.props.gap,
        gridColumnGap: this.props.gap,
        justifyContent: this.props.justify,
        alignItems: this.props.align
    }

    render() {
        return (
            <div style={this.gridStyle}>{this.props.children}</div>
        )
    }
}

export default GridLayoutAuto;