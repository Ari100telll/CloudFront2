import React from "react";
import Button from "../buttons";
import StyledTextBlock from '../block/textBlock'
import StyledLi from "../block/styled_li";
import URL_ from "../../constants";

class GetAllAirplains extends React.Component {
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
        fetch(URL_+"getallAirplain")
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

                <Button onClick={this.clickMe.bind(this)}>get all airplains</Button>

                {(disp_status && items) ? <StyledTextBlock>
                    {console.log(disp_status)}
                    {isLoaded}
                    {items.map(item => (
                        <StyledLi>
                            id: {item.id}<br />
                            name: {item.name}<br />
                            airline: {item.airline}<br />
                            total flight count: {item.total_flight_count}<br />
                            info: {item.info}<br />
                        </StyledLi>
                    ))}

                </StyledTextBlock> : null}

            </div>
        );
    }
}

export default GetAllAirplains;