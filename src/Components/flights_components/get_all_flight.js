import React from "react";
import Button from "../buttons";
import StyledTextBlock from '../block/textBlock'
import StyledLi from "../block/styled_li";
import URL_ from "../../constants";

class GetAllFlights extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            disp_status: false,
            error: null,
            isLoaded: false,
            items: []
        };
    }

    clickMe() {
        this.setState({ disp_status: !this.state.disp_status });
        fetch(URL_ + "getallFlight")
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result);
                    this.setState({
                        i: 3,
                        isLoaded: true,
                        console,
                        items: result
                    });
                },
                (error) => {
                    this.setState({
                        items: null,
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, items, i, disp_status } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <Button onClick={this.clickMe.bind(this)}>get all flights</Button>

                {(disp_status && items) ? <StyledTextBlock>
                    {console.log(disp_status)}
                    {isLoaded}
                    {items.map(item => (
                        <StyledLi>
                            id: {item.id}<br />
                            airport_start: {item.airport_start}<br />
                            airport_end: {item.airport_end}<br />
                            airplane_speed: {item.airplane_speed}<br />
                            status: {item.status}<br />
                            airplane_id: {item.airplane_id}<br />
                        </StyledLi>
                    ))}

                </StyledTextBlock> : null}

            </div>
        );
    }
}

export default GetAllFlights;