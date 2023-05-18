import React from 'react';
import styles from './index.module.scss';

function TextMarquee() {
	return (
		<div className={styles.container}>
			<div className={styles.marquee}>
				<h5>"The only way to do great work is to love what you do." - Steve Jobs</h5>
				<h5>
					"Your work is going to fill a large part of your life, and the only way to be truly
					satisfied is to do what you believe is great work." - Steve Jobs
				</h5>
				<h5>"Quality is not an act, it is a habit." - Aristotle</h5>
				<h5>"The best way to predict the future is to create it." - Peter Drucker</h5>
				<h5>"Simplicity is the ultimate sophistication." - Leonardo da Vinci</h5>
				<h5>"Good design is good business." - Thomas J. Watson Jr.</h5>
				<h5>
					"Success is not final, failure is not fatal: it is the courage to continue that counts." -
					Winston Churchill
				</h5>
				<h5>
					"Do what you do so well that they will want to see it again and bring their friends." -
					Walt Disney
				</h5>
				<h5>
					"Success is not the key to happiness. Happiness is the key to success. If you love what
					you do, you will be successful." - Albert Schweitzer
				</h5>
				<h5>
					"The greatest danger for most of us is not that our aim is too high and we miss it, but
					that it is too low and we reach it." - Michelangelo
				</h5>
				<h5>"Success is not just about making money. It's about making a difference." - Unknown</h5>
				<h5>
					"The future belongs to those who believe in the beauty of their dreams." - Eleanor
					Roosevelt
				</h5>
			</div>
		</div>
	);
}

export default TextMarquee;
