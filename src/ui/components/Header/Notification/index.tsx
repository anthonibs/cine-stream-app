import { useState } from 'react';

import { IoNotificationsOffOutline, IoNotificationsOutline } from 'react-icons/io5';

import * as S from './styles';

const Notification = () => {
	const [isNotificationActive, setIsNotificationActive] = useState(false);

	function toggleNotification() {
		setIsNotificationActive((prevState) => !prevState);
	}

	return (
		<S.NotificationButton onClick={toggleNotification}>
			{!isNotificationActive ? (
				<IoNotificationsOutline className='icons-configuration' />
			) : (
				<IoNotificationsOffOutline className='icons-configuration' />
			)}

			<S.Amount className={!isNotificationActive ? 'active' : ''}>1</S.Amount>
		</S.NotificationButton>
	);
};

export default Notification;
