import { SvgIcon, Icon } from '../SvgIcon'
import styles from './madeWith.module.scss'

interface MadeWithProps {
	icon: Icon
	linkText: string
	linkHref: string
	preText?: string
	postText?: string
}

export default function MadeWith({
	icon,
	linkText,
	linkHref,
	preText,
	postText,
}: MadeWithProps) {
	return (
		<p className={styles.madeWith}>
			<SvgIcon icon={icon} />
			{preText}
			<a href={linkHref} target="_blank" rel="noreferrer">
				{linkText}
			</a>
			{postText}
		</p>
	)
}
