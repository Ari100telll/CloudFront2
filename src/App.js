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
import GetFlight from './Components/flights_components/get_flight';
import EditFlight from './Components/flights_components/edit_flight';
import DeleteFlight from './Components/flights_components/delete_flight';
import CreateFlight from './Components/flights_components/create_flight';


function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <StyledBlock>

          <div>Airpale</div>

          <GetAllAirplains style={{ display: 'flex', flexDirection: 'column' }} />
          <GetAirplain style={{ display: 'flex', flexDirection: 'column' }} />
          <EditAirplain style={{ display: 'flex', flexDirection: 'column' }} />
          <DeleteAirplain style={{ display: 'flex', flexDirection: 'column' }} />
          <CreateAirplain style={{ display: 'flex', flexDirection: 'column' }} />
          {/* <MyComponent style={{display: 'flex',flexDirection: 'column'}}/>  */}
        </StyledBlock>
        <StyledBlock>
          <div>flight</div>
          <GetAllFlights style={{ display: 'flex', flexDirection: 'column' }} />
          <GetFlight style={{ display: 'flex', flexDirection: 'column' }} />
          <EditFlight style={{ display: 'flex', flexDirection: 'column' }} />
          <DeleteFlight style={{ display: 'flex', flexDirection: 'column' }} />
          <CreateFlight style={{ display: 'flex', flexDirection: 'column' }} />
        </StyledBlock>
      </header>
    </div>
  );
}

export default App;
