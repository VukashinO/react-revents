import React from 'react';
import { Route, useLocation } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import EventDetailedPage from '../../features/eventDetailed/EventDetailedPage';

import EventDashboard from '../../features/events/eventDashboard/EventDashboard';
import EventForm from '../../features/events/eventForm/EventForm';
import HomePage from '../../features/home/HomePage';
import NavBar from '../../features/nav/NavBar';
import Sandox from '../../features/sandox/Sandox';

const App = () => {
   const {key} = useLocation();
	return (
		<>
			<Route exact path='/' component={HomePage} />
			<Route
				path={'/(.+)'}
				render={() => (
					<>
						<NavBar />
						<Container className='main'>
							<Route exact path='/events' component={EventDashboard} />
							<Route exact path='/sandox' component={Sandox} />
							<Route path='/events/:id' component={EventDetailedPage} />
							<Route path={['/createEvent', '/manage/:id']} component={EventForm} key={key}/>
						</Container>
					</>
				)}
			/>
		</>
	);
};

export default App;
