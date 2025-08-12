import styles from './socials.module.scss'
import SvgIcon, { Icon } from '../SvgIcon/SvgIcon'

const socials = [
	{
		link: 'https://www.linkedin.com/in/felix-rioux-sabourin/',
		label: "Opens Felix's LinkedIn profile",
		icon: Icon.LINKEDIN,
	},
	{
		link: 'https://github.com/FelixPriori/',
		label: "Opens FelixPriori's Github",
		icon: Icon.GITHUB,
	},
	{
		link: 'https://bsky.app/profile/felixpriori.dev',
		label: 'Opens @felixpriori.dev on Bluesky',
		icon: Icon.BLUESKY,
	},
]

export default function Socials() {
	return (
		<ul className={styles.list}>
			{socials.map(social => (
				<li key={social.link} className={styles.listItem}>
					<a
						className={styles.iconLink}
						href={social.link}
						target="_blank"
						rel="noreferrer noopener"
						title={social.label}
					>
						<SvgIcon icon={social.icon} />
					</a>
				</li>
			))}
		</ul>
	)
}
