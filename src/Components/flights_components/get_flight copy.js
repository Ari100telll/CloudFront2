import React from "react";
import Button from "../buttons";
import StyledTextBlock from '../block/textBlock'
import StyledLi from "../block/styled_li";
import URL_ from "../../constants";

class GetFlight2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inp_fil: false,
            outp_fil: false,
            value: 0,
            error: null,
            isLoaded: false,
            item: {},
        };
    }

    MINUTE_MS = 2000;
    componentDidMount() {
        fetch(URL_ + "getFlight/7").then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        console,
                        item: result
                    });
                },
                (error) => {
                    this.setState({
                    });
                }
            );
    }
    componentDidUpdate() {
        fetch(URL_ + "getFlight/7").then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        isLoaded: true,
                        console,
                        item: result
                    });
                },
                (error) => {
                    console.log(error);
                    this.setState({
                    });
                }
            );
    }
    render() {
        const { error, isLoaded, item, i, outp_fil, inp_fil } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <StyledTextBlock>
                    <StyledLi>
                        id: {item.id}<br />
                        airport_start: {item.airport_start}<br />
                        airport_end: {item.airport_end}<br />
                        airplane_speed: {item.airplane_speed}<br />
                        status: {item.status}<br />
                        airplane_id: {item.airplane_id}<br />
                    </StyledLi>
                </StyledTextBlock>
            </div>
        );
    }
}

export default GetFlight2;