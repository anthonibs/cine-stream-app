import { useState } from 'react';

import { IoNotificationsOffOutline, IoNotificationsOutline } from 'react-icons/io5';

import * as S from './styles';

const Notification = () => {
	const [isNotificationActive, setIsNotificationActive] = useState(false);

	function toggleNotification() {
		setIsNotificationActive((prevState) => !prevState);
	}

	const notificacao = 3;

	return (
		<S.NotificationButton onClick={toggleNotification}>
			{!isNotificationActive ? (
				<IoNotificationsOutline className='icons-configuration' />
			) : (
				<IoNotificationsOffOutline className='icons-configuration' />
			)}

			{notificacao > 0 && (
				<S.Amount className={!isNotificationActive ? 'active' : ''}>{notificacao}</S.Amount>
			)}
		</S.NotificationButton>
	);
};

export default Notification;
