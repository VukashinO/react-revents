import React from 'react';
import { Grid } from 'semantic-ui-react';
import EventDetailedChat from './EventDetailedChat';
import EventDetailedHeader from './EventDetailedHeader';
import EventDetailedInfo from './EventDetailedInfo';
import EventDetailedSideBar from './EventDetailSideBar';

export default function EventDetailedPage() {
	return (
		<Grid>
			<Grid.Column width={10}>
                <EventDetailedHeader />
                <EventDetailedInfo />
                <EventDetailedChat />
            </Grid.Column>
			<Grid.Column width={6}>
                <EventDetailedSideBar />
            </Grid.Column>
		</Grid>
	);
}