import { ReactNode } from 'react'
import styles from './errorParagraph.module.scss'

export default function ErrorParagraph({ children }: { children: ReactNode }) {
	return <p className={styles.error}>{children}</p>
}
