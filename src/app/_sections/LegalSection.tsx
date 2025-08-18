import { Icon, MadeWith } from '@/app/_components'
import styles from './sections.module.scss'
import layoutStyles from '../layout.module.scss'

export default function LegalSection() {
	return (
		<div className={styles.legalWrapper}>
			<div className={layoutStyles.main}>
				<div className={styles.legalContents}>
					<MadeWith
						preText="Check out the"
						icon={Icon.GITHUB}
						linkText="source code"
						linkHref="https://github.com/FelixPriori/next-portfolio"
						postText="on GitHub"
					/>
					<MadeWith
						preText="Made with"
						icon={Icon.NEXT}
						linkText="Next.js"
						linkHref="https://nextjs.org/"
					/>
					<MadeWith
						preText="Hosted on"
						icon={Icon.VERCEL}
						linkText="Vercel"
						linkHref="https://vercel.com/f"
					/>
					<MadeWith preText="Felix Rioux Sabourin 2025" icon={Icon.COPYRIGHT} />
				</div>
			</div>
		</div>
	)
}
