import { Fragment, ReactNode } from 'react'
import styles from './paragraph.module.scss'

export function Paragraph({ children }: { children: ReactNode }) {
	return <p className={styles.paragraph}>{children}</p>
}

export function Mark({ children }: { children: ReactNode }) {
	return <mark className={styles.mark}>{children}</mark>
}

export function MarkedParagraph({ paragraph }: { paragraph: string }) {
	const splitParagraph = paragraph.split(/\{\{|\}\}/g)
	return (
		<Paragraph>
			{splitParagraph.map((p: string, i: number) => {
				if (i % 2 === 0) {
					return <Fragment key={p}>{p}</Fragment>
				} else {
					return <Mark key={p}>{p}</Mark>
				}
			})}
		</Paragraph>
	)
}
