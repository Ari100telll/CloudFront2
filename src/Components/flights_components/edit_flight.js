import React from "react";
import Button from "../buttons";
import StyledTextBlock from '../block/textBlock'
import StyledLi from "../block/styled_li";
import URL_ from "../../constants";

class EditFlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: "not-started",
            inp_fil: false,
            outp_fil: false,
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

    handleAirIdChange(event) {
        this.setState({ air_id: event.target.value });
    }

    clickMe() {
        if (!this.state.inp_fil && !this.state.outp_fil) {
            this.setState({ inp_fil: true });
        } else if (this.state.inp_fil && !this.state.outp_fi) {
            fetch(URL_ + "editFlight/" + this.state.id + "?airport_start=" + this.state.name + "&status=" + this.state.info + "&airport_end=" + this.state.airline + "&airplane_speed=" + this.state.total_flight_count + "&airplane_id=" + this.state.air_id)
                .then(res => res.json())
                .then(
                    (result) => {
                        console.log(result);
                        this.setState({
                            disp_status: true,
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
            this.setState({ inp_fil: false, outp_fil: true });
        } else {
            this.setState({ inp_fil: false, outp_fil: false });
        }
    }
    render() {



        const { error, isLoaded, item, i, disp_status, inp_fil, outp_fil, } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <Button onClick={this.clickMe.bind(this)}>Edit flight</Button>
                {inp_fil ? <form onSubmit={this.clickMe.bind(this)} >
                    <label style={{ display: 'flex', flexDirection: 'column' }}>
                        id:
                        <textarea value={this.state.id} onChange={this.handleIdChange.bind(this)} />
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
                {(outp_fil && item) ? <StyledTextBlock>
                    {console.log(disp_status)}
                    {isLoaded}
                    <StyledLi>
                        id: {item.id}<br />
                        airport_start: {item.airport_start}<br />
                        airport_end: {item.airport_end}<br />
                        airplane_speed: {item.airplane_speed}<br />
                        status: {item.status}<br />
                        airplane_id: {item.airplane_id}<br />
                    </StyledLi>
                </StyledTextBlock> : null}

            </div>
        );
    }
}

export default EditFlight;