import React from 'react';
import AccessKeyCollector from './access-key-collector';
import Modal from './modal';

type ServicesComponent = React.FunctionComponent;

/**
 * A place to group together all your services.
 */
const Services: ServicesComponent = () => {
	return (
		<>
			<Modal />
			<AccessKeyCollector />
		</>
	);
};

export default Services;
