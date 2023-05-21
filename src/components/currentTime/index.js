import { useState, useEffect } from 'react';
import styles from './index.module.scss';

function CurrentTime() {
	const [time, setTime] = useState('');
	const [meridiem, setMerdiem] = useState('AM');

	useEffect(() => {
		calcTime();
		const timer = setInterval(calcTime, 1000);
		return function cleanUp() {
			clearInterval(timer);
		};
	}, []);

	function calcTime() {
		var d = new Date();
		var utc = d.getTime() + d.getTimezoneOffset() * 60000;
		var nd = new Date(utc + 3600000 * '+5.5');

		let hours = '';

		if (nd.getHours() > 12) {
			hours = nd.getHours() - 12;
			setMerdiem('PM');
		} else {
			hours = nd.getHours() === 0 ? 12 : nd.getHours();
			setMerdiem('AM');
		}

		const minutes = nd.getMinutes();

		const CurrentTime = formatTime(hours) + ':' + formatTime(minutes);

		setTime(CurrentTime);

		function formatTime(time) {
			if (time < 10) {
				return '0' + time;
			} else {
				return time;
			}
		}
	}

	return (
		<div className={styles.container}>
			<p className={styles.timeText}>{time}</p>
			<p className={styles.subText}>{meridiem}&nbsp;here.</p>
		</div>
	);
}

export default CurrentTime;
