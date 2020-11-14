import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = () => {
	const [events, setEvents] = useState(sampleData);


    const handleDeleteEvent = eventId => {
        setEvents(events.filter(event => eventId !== event.id))
    }

	return (
		<Grid>
			<Grid.Column width={10}>
				<EventList
					events={events}
                    deleteEvent={handleDeleteEvent}
				/>
			</Grid.Column>
			<Grid.Column width={6}>
                <h2>Event filters</h2>
			</Grid.Column>
		</Grid>
	);
};

export default EventDashboard;
