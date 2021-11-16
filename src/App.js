import './App.css';

import logo from './logo.svg';
import Button from './Components/buttons';
import StyledBlock from './Components/block/block';

import GetAllAirplains from './Components/airplains_components/get_all_airplains';
import GetAirplain from './Components/airplains_components/get_airplain';
import EditAirplain from './Components/airplains_components/edit_airplain';
import DeleteAirplain from './Components/airplains_components/delete_airplain';
import CreateAirplain from './Components/airplains_components/create_airplain';

import GetAllFlights from './Components/flights_components/get_all_flight';
import GetFlight1 from './Components/flights_components/get_flight';
import GetFlight2 from './Components/flights_components/get_flight copy';
import GetFlight3 from './Components/flights_components/get_flight copy 3';
import GetFlight4 from './Components/flights_components/get_flight copy 2';
import EditFlight from './Components/flights_components/edit_flight';
import DeleteFlight from './Components/flights_components/delete_flight';
import CreateFlight from './Components/flights_components/create_flight';


function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <div>
          <StyledBlock>
            <div>flight 6</div>
            <GetFlight1 style={{ display: 'flex', flexDirection: 'column' }} />
          </StyledBlock>
          <StyledBlock>
            <div>flight 7</div>
            <GetFlight2 style={{ display: 'flex', flexDirection: 'column' }} />
          </StyledBlock>
        </div>
        <br />
        <div>
          <StyledBlock>
            <div>flight 8</div>
            <GetFlight3 style={{ display: 'flex', flexDirection: 'column' }} />
          </StyledBlock>
          <StyledBlock>
            <div>flight 9</div>
            <GetFlight4 style={{ display: 'flex', flexDirection: 'column' }} />
          </StyledBlock>
        </div>
      </header>
    </div>
  );
}

export default App;
