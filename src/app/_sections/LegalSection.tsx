import { Icon, MadeWith } from '@/app/_components'
import styles from './sections.module.scss'
import layoutStyles from '../layout.module.scss'
import { DictionaryType } from '@/dictionaries'

export default function LegalSection({
	legalSection,
}: {
	legalSection: DictionaryType['legalSection']
}) {
	return (
		<div className={styles.legalWrapper}>
			<div className={layoutStyles.main}>
				<div className={styles.legalContents}>
					<MadeWith
						preText={legalSection.github.preText}
						icon={Icon.GITHUB}
						linkText={legalSection.github.linkText}
						linkHref="https://github.com/FelixPriori/next-portfolio"
						postText={legalSection.github.postText}
					/>
					<MadeWith
						preText={legalSection.madeWith.preText}
						icon={Icon.NEXT}
						linkText={legalSection.madeWith.linkText}
						linkHref="https://nextjs.org/"
					/>
					<MadeWith
						preText={legalSection.hostedOn.preText}
						icon={Icon.VERCEL}
						linkText="Vercel"
						linkHref={legalSection.hostedOn.linkText}
					/>
					<MadeWith
						preText={legalSection.copyright.preText}
						icon={Icon.COPYRIGHT}
					/>
				</div>
			</div>
		</div>
	)
}
