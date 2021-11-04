import React from "react";
import Button from "../buttons";
import StyledTextBlock from '../block/textBlock'
import StyledLi from "../block/styled_li";
import URL_ from "../../constants";

class CreateFlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: "not-started",
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
        alert(event.target.value);
        this.setState({ info: event.target.value });
    }

    handleAirIdChange(event) {
        this.setState({ air_id: event.target.value });
    }

    clickMe() {
        if (this.state.disp_status == true) {
            fetch(URL_ + "addFlight?airport_start=" + this.state.name + "&status=" + this.state.info + "&airport_end=" + this.state.airline + "&airplane_speed=" + this.state.total_flight_count + "&airplane_id=" + this.state.air_id,
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

                <Button onClick={this.clickMe.bind(this)}>Create flight</Button>
                {disp_status ? <form onSubmit={this.clickMe.bind(this)} >
                    <label style={{ display: 'flex', flexDirection: 'column' }}>
                        airport_start:
                        <textarea value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                        airport_end:
                        <textarea value={this.state.airline} onChange={this.handleAirlineChange.bind(this)} />
                        airplane_speed:
                        <textarea value={this.state.total_flight_count} onChange={this.handleTotalFlightCountChange.bind(this)} />
                        status:
                        <select value={this.state.info} defaultValue="not-started" onChange={this.handleInfoChange.bind(this)}>
                            <option value="not-started">NOT_STARTED</option>
                            <option value="in-progress">IN_PROGRESS</option>
                            <option value="ended">ENDED</option>
                        </select>
                        airplane_id:
                        <textarea value={this.state.air_id} onChange={this.handleAirIdChange.bind(this)} />
                    </label>
                </form> : null}

            </div>
        );
    }
}


export default CreateFlight;