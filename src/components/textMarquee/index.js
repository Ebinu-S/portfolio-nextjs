import React from 'react';
import styles from './index.module.scss';

function TextMarquee() {
	return (
		<div className={styles.container}>
			<div className={styles.marquee}>
				<h5>
					&quot; Design is not just what it looks like and feels like. Design is how it works.
					&quot;
				</h5>
				<h5>&quot; Design is the silent ambassador of your brand. &quot;</h5>
				<h5>&quot; Simplicity is the ultimate sophistication. &quot;</h5>
				<h5>&quot; Design is where science and art break even. &quot;</h5>
				<h5>&quot; Creativity is intelligence having fun. &quot;</h5>
				<h5>
					&quot; Design is not just what you see and feel, but how it functions and improves
					people&apos;s lives. &quot;
				</h5>
				<h5>&quot; Design is the intermediary between information and understanding. &quot;</h5>
				<h5>&quot; The details are not the details. They make the design. &quot;</h5>
				<h5>&quot; Design is the fundamental soul of a human-made creation. &quot;</h5>
			</div>
		</div>
	);
}

export default TextMarquee;
