import React from "react";
import Button from "../buttons";
import StyledTextBlock from '../block/textBlock'
import StyledLi from "../block/styled_li";
import URL_ from "../../constants";

class DeleteFlight extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
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
        if (this.state.disp_status == true) {
            fetch(URL_ + "deleteFlight/" + this.state.value)
                .then(res => {
                    res.json(); this.setState({
                        statuscode: res.status
                    });
                })
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
        }
        this.setState({ disp_status: !this.state.disp_status });
    }
    render() {
        const { error, isLoaded, item, i, disp_status, statuscode } = this.state;
        return (
            <div style={{ display: 'flex', flexDirection: 'column' }}>

                <Button onClick={this.clickMe.bind(this)}>delete flight</Button>
                {disp_status ? <form onSubmit={this.clickMe.bind(this)}>
                    <label>
                        id:
                        <textarea value={this.state.value} onChange={this.handleChange.bind(this)} /></label>
                </form> : null}


            </div>
        );
    }
}

export default DeleteFlight;