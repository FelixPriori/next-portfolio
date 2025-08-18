'use client'
import { useLayoutEffect, useState } from 'react'

export default function useSectionTracker() {
	const [currentSection, setCurrentSection] = useState('intro')
	useLayoutEffect(() => {
		if (window && document) {
			const allElements = document.querySelectorAll('.section')
			const observer = new IntersectionObserver(
				entries => {
					entries.forEach(entry => {
						if (entry.isIntersecting) {
							setCurrentSection(entry.target.id)
						}
					})
				},
				{
					threshold: 0.5,
				},
			)
			allElements.forEach(el => {
				observer.observe(el)
			})
		}
	}, [])
	return currentSection
}
