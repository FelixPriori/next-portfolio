import styles from './credits.module.scss'

export default function Credits() {
	return (
		<div>
			<p>
				Credit:{' '}
				<a
					className={styles.creditsLink}
					href="https://www.flaticon.com/free-icons/feedback"
					title="feedback icons"
					rel="noreferrer noopener"
					target="_blank"
				>
					Feedback icons created by itim2101 - Flaticon
				</a>
			</p>
		</div>
	)
}
