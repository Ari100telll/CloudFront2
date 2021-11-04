import React from "react";
import Button from "../buttons";
import StyledTextBlock from '../block/textBlock'
import StyledLi from "../block/styled_li";
import URL_ from "../../constants";

class CreateAirplain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            error: null,
            isLoaded: false,
            item: {},
        };
    }
    handleIdChange(event) {
        this.setState({ id: event.target.value });
    }
    handleNameChange(event) {
        this.setState({ name: event.target.value });
    }

    handleAirlineChange(event) {
        this.setState({ airline: event.target.value });
    }

    handleTotalFlightCountChange(event) {
        this.setState({ total_flight_count: event.target.value });
    }

    handleInfoChange(event) {
        this.setState({ info: event.target.value });
    }

    clickMe() {
        if (this.state.disp_status == true) {
            fetch(URL_+"addAirplain?name=" + this.state.name + "&info=" + this.state.info + "&airline=" + this.state.airline + "&total_flight_count=" + this.state.total_flight_count,
            {
               method: 'POST',
           })
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
                        this.setState({
                            disp_status: false,
                            isLoaded: true,
                            console,
                            item: result
                        });
                    },
                    (error) => {
                        this.setState({
                            item: null,
                            isLoaded: true,
                            error
                        });
                    }
                );
        };

        this.setState({ disp_status: !this.state.disp_status });
    }
    render() {
        const { error, isLoaded, item, i, disp_status } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <Button onClick={this.clickMe.bind(this)}>Create airplain</Button>
                {disp_status? <form onSubmit={this.clickMe.bind(this)} >
                    <label style={{ display: 'flex', flexDirection: 'column' }}>
                        name:
                        <textarea value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                        airline:
                        <textarea value={this.state.airline} onChange={this.handleAirlineChange.bind(this)} />
                        total flight count:
                        <textarea value={this.state.total_flight_count} onChange={this.handleTotalFlightCountChange.bind(this)} />
                        info:
                        <textarea value={this.state.info} onChange={this.handleInfoChange.bind(this)} />
                    </label>
                </form>: null}

            </div>
        );
    }
}


export default CreateAirplain;