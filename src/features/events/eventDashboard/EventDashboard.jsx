import React, { useState } from 'react';
import { Grid } from 'semantic-ui-react';
import EventForm from '../eventForm/EventForm';
import EventList from './EventList';
import { sampleData } from '../../../app/api/sampleData';

const EventDashboard = ({ formOpen, setFormOpen }) => {
	const [events, setEvents] = useState(sampleData);
	const [event, setEvent] = useState(null);

	const handleCreateEvent = (event) => {
		setEvents([...events, event]);
	};

	const selectedEvent = (event) => {
		setEvent(event);
    };
    
    const updateEvent = (eventUp) => {
        const e = events.map(event => {
            if(event.id === eventUp.id) {
                return {
                    ...eventUp
                }
            }
            return event;
        })
        setEvents(e)
        setEvent(null);
        formOpen(false);
    }

    const handleDeleteEvent = eventId => {
        setEvents(events.filter(event => eventId !== event.id))
    }

	return (
		<Grid>
			<Grid.Column width={10}>
				<EventList
					events={events}
					setFormOpen={setFormOpen}
                    selectedEvent={selectedEvent}
                    deleteEvent={handleDeleteEvent}
				/>
			</Grid.Column>
			<Grid.Column width={6}>
				{formOpen && (
					<EventForm
						setFormOpen={setFormOpen}
						setEvents={setEvents}
						createEvent={handleCreateEvent}
                        event={event}
                        selectedEvent={selectedEvent}
                        key={event ? event.id : null}
                        updateEvent={updateEvent}
					/>
				)}
			</Grid.Column>
		</Grid>
	);
};

export default EventDashboard;
