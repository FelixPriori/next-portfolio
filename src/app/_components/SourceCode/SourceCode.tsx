import { Icon, SvgIcon } from '../SvgIcon'
import styles from './sourceCode.module.scss'

export default function SourceCode() {
	return (
		<a
			className={styles.sourceCodeLink}
			href="https://github.com/FelixPriori/next-portfolio"
			target="_blank"
			rel="noreferrer"
		>
			Source Code
			<SvgIcon icon={Icon.GITHUB} />
		</a>
	)
}
