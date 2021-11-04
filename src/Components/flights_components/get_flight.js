import React from "react";
import Button from "../buttons";
import StyledTextBlock from '../block/textBlock'
import StyledLi from "../block/styled_li";
import URL_ from "../../constants";

class GetFlight extends React.Component {
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

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    clickMe() {
        if (!this.state.inp_fil && !this.state.outp_fil) {
            this.setState({ inp_fil: true });
        } else if (this.state.inp_fil && !this.state.outp_fi) {
            fetch(URL_ + "getFlight/" + this.state.value).then(res => res.json())
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
        const { error, isLoaded, item, i, outp_fil, inp_fil } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <Button onClick={this.clickMe.bind(this)}>get flight</Button>
                {inp_fil ? <form onSubmit={this.clickMe.bind(this)}>
                    <label>
                        id:
                        <textarea value={this.state.value} onChange={this.handleChange.bind(this)} /></label>
                </form> : null}

                {(outp_fil && item) ? <StyledTextBlock>
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

export default GetFlight;