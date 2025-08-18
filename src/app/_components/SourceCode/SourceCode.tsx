import { Icon, SvgIcon } from '../SvgIcon'
import styles from './sourceCode.module.scss'

export default function SourceCode() {
	return (
		<p className={styles.sourceCode}>
			<SvgIcon icon={Icon.GITHUB} />
			Check out the
			<a
				className={styles.sourceCodeLink}
				href="https://github.com/FelixPriori/next-portfolio"
				target="_blank"
				rel="noreferrer"
			>
				Source Code
			</a>
			on GitHub
		</p>
	)
}
