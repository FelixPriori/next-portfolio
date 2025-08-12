import { ReactNode } from 'react'
import styles from './paragraph.module.scss'

export function Paragraph({ children }: { children: ReactNode }) {
	return <p className={styles.paragraph}>{children}</p>
}

export function Mark({ children }: { children: ReactNode }) {
	return <mark className={styles.mark}>{children}</mark>
}
