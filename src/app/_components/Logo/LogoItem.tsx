import styles from './logo.module.scss'
import Link from 'next/link'
import { FaReact } from 'react-icons/fa'
import { SiNextdotjs } from 'react-icons/si'
import { SiTypescript } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'
import { FaCss3Alt } from 'react-icons/fa'
import { SiSass } from 'react-icons/si'
import { SiMui } from 'react-icons/si'
import { RiGatsbyFill } from 'react-icons/ri'
import { BiLogoVuejs } from 'react-icons/bi'
import { GrGraphQl } from 'react-icons/gr'
import { SiRedux } from 'react-icons/si'
import { SiStyledcomponents } from 'react-icons/si'
import { FaGitAlt } from 'react-icons/fa6'
import { IoLogoJavascript } from 'react-icons/io5'

export interface LogoItemProps {
	name: string
	logoStyles: string
	href: string
}

export default function LogoItem({ name, logoStyles, href }: LogoItemProps) {
	const renderLogo = () => {
		switch (logoStyles) {
			case 'react':
				return <FaReact />
			case 'next':
				return <SiNextdotjs />
			case 'typescript':
				return <SiTypescript />
			case 'html':
				return <FaHtml5 />
			case 'css':
				return <FaCss3Alt />
			case 'scss':
				return <SiSass />
			case 'materialUi':
				return <SiMui />
			case 'gatsby':
				return <RiGatsbyFill />
			case 'vue':
				return <BiLogoVuejs />
			case 'graphQl':
				return <GrGraphQl />
			case 'redux':
				return <SiRedux />
			case 'styledComponents':
				return <SiStyledcomponents />
			case 'git':
				return <FaGitAlt />
			case 'javascript':
				return <IoLogoJavascript />
		}
	}
	return (
		<Link
			className={styles.linkWrapper}
			href={href}
			rel="noreferrer noopener"
			target="_blank"
		>
			<li className={`${styles.logoItem} ${styles[logoStyles]}`}>
				{renderLogo()}
				{name}
			</li>
		</Link>
	)
}
