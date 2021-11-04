import React from "react";
import Button from "../buttons";
import StyledTextBlock from '../block/textBlock'
import StyledLi from "../block/styled_li";
import URL_ from "../../constants";

class EditAirplain extends React.Component {
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
        if (!this.state.inp_fil && !this.state.outp_fil) {
            this.setState({ inp_fil: true });
        } else if (this.state.inp_fil && !this.state.outp_fi) {
            fetch(URL_+"editAirplain/" + this.state.id + "?name=" + this.state.name + "&info=" + this.state.info + "&airline=" + this.state.airline + "&total_flight_count=" + this.state.total_flight_count)
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
            this.setState({ inp_fil: false , outp_fil: true});
        } else {
            this.setState({ inp_fil: false , outp_fil: false});
        }
    }
    render() {



        const { error, isLoaded, item, i, disp_status, inp_fil, outp_fil, } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <Button onClick={this.clickMe.bind(this)}>Edit airplain</Button>
                {inp_fil ? <form onSubmit={this.clickMe.bind(this)} >
                    <label style={{ display: 'flex', flexDirection: 'column' }}>
                        id:
                        <textarea value={this.state.id} onChange={this.handleIdChange.bind(this)} />
                        name:
                        <textarea value={this.state.name} onChange={this.handleNameChange.bind(this)} />
                        airline:
                        <textarea value={this.state.airline} onChange={this.handleAirlineChange.bind(this)} />
                        total flight count:
                        <textarea value={this.state.total_flight_count} onChange={this.handleTotalFlightCountChange.bind(this)} />
                        info:
                        <textarea value={this.state.info} onChange={this.handleInfoChange.bind(this)} />
                    </label>
                </form> : null}
                {(outp_fil && item)? <StyledTextBlock>
                    {console.log(disp_status)}
                    {isLoaded}
                    <StyledLi>
                        id: {item.id}<br />
                        name: {item.name}<br />
                        airline: {item.airline}<br />
                        total flight count: {item.total_flight_count}<br />
                        info: {item.info}<br />
                    </StyledLi>
                </StyledTextBlock> : null}

            </div>
        );
    }
}

export default EditAirplain;