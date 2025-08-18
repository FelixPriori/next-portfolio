import { SourceCode, Credits, Icon, SvgIcon } from '../_components'
import styles from './sections.module.scss'
import layoutStyles from '../layout.module.scss'

export default function LegalSectioin() {
	return (
		<div className={styles.legalWrapper}>
			<div className={layoutStyles.main}>
				<div className={styles.legalContents}>
					<p>&#169; Felix Rioux Sabourin 2025</p>
					<SourceCode />
					<p className={styles.madeWith}>
						<SvgIcon icon={Icon.NEXT} />
						Made with{' '}
						<a href="https://nextjs.org/" target="_blank" rel="noreferrer">
							Next.js
						</a>
					</p>
					<p className={styles.madeWith}>
						<SvgIcon icon={Icon.VERCEL} />
						Deployed on{' '}
						<a href="https://vercel.com/f" target="_blank" rel="noreferrer">
							Vercel
						</a>
					</p>
					<Credits />
				</div>
			</div>
		</div>
	)
}
