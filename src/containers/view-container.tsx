import * as React from "react";
import MatText from '../custom-components/text/text';

export class ViewContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="view-container">
                <MatText className variant="body1" color="inherit" align="justify" weight="lighter">{this.props.children}</MatText>
            </div>
        )
    }
}