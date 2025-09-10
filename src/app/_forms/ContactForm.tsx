'use client'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { zodResolver } from '@hookform/resolvers/zod'
import { getErrorMessage } from '@/app/_utils/errors'
import { Button, ButtonVariant, ErrorParagraph } from '@/app/_components'
import { contactSchema, ContactType } from './schema'
import styles from './contactForm.module.scss'
import { DictionaryType } from '@/dictionaries'

export default function ContactForm({
	contactForm,
}: {
	contactForm: DictionaryType['contactSection']['contactForm']
}) {
	const [success, setSuccess] = useState(false)
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(contactSchema),
	})

	async function onSubmit(data: ContactType) {
		try {
			const response = await fetch('https://api.web3forms.com/submit', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					Accept: 'application/json',
				},
				body: JSON.stringify({
					...data,
					access_key: '8cdc44ee-a103-4a04-b5d3-834b14c34f51', // this is public
				}),
			})
			const result = await response.json()
			if (result.success) {
				setSuccess(true)
			}
		} catch (error) {
			console.error(getErrorMessage(error))
		}
	}

	if (success) {
		return (
			<div className={styles.success}>
				<svg
					width="50"
					height="50"
					className="text-green-300"
					viewBox="0 0 100 100"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M26.6666 50L46.6666 66.6667L73.3333 33.3333M50 96.6667C43.8716 96.6667 37.8033 95.4596 32.1414 93.1144C26.4796 90.7692 21.3351 87.3317 17.0017 82.9983C12.6683 78.6649 9.23082 73.5204 6.8856 67.8586C4.54038 62.1967 3.33331 56.1283 3.33331 50C3.33331 43.8716 4.54038 37.8033 6.8856 32.1414C9.23082 26.4796 12.6683 21.3351 17.0017 17.0017C21.3351 12.6683 26.4796 9.23084 32.1414 6.88562C37.8033 4.5404 43.8716 3.33333 50 3.33333C62.3767 3.33333 74.2466 8.24998 82.9983 17.0017C91.75 25.7534 96.6666 37.6232 96.6666 50C96.6666 62.3768 91.75 74.2466 82.9983 82.9983C74.2466 91.75 62.3767 96.6667 50 96.6667Z"
						stroke="currentColor"
						strokeWidth="3"
					/>
				</svg>
				<p className={styles.successMessage}>{contactForm.successMessageOne}</p>
				<p>{contactForm.successMessageTwo}</p>
			</div>
		)
	}

	return (
		<form onSubmit={e => handleSubmit(onSubmit)(e)}>
			<input
				type="checkbox"
				className={styles.hidden}
				{...register('botcheck')}
			/>
			<div className={styles.formInputWrapper}>
				<label className={styles.label} id="name-lbl" htmlFor="contact-name">
					{contactForm.name}{' '}
					<span className={styles.required}>({contactForm.required})</span>
				</label>
				<input
					required
					className={`${styles.input} ${errors.name ? styles.error : ''}`}
					id="contact-name"
					aria-labelledby="name-lbl"
					type="text"
					placeholder={contactForm.namePlaceholder}
					autoComplete="on"
					{...register('name')}
				/>
				{errors?.name && (
					<ErrorMessage
						errors={errors}
						name="name"
						render={() => (
							<ErrorParagraph>{contactForm.nameError}</ErrorParagraph>
						)}
					/>
				)}
			</div>

			<div className={styles.formInputWrapper}>
				<label className={styles.label} id="email-lbl" htmlFor="contact-email">
					{contactForm.email}{' '}
					<span className={styles.required}>({contactForm.required})</span>
				</label>
				<input
					required
					className={`${styles.input} ${errors.email ? styles.error : ''}`}
					id="contact-email"
					aria-labelledby="email-lbl"
					type="email"
					placeholder={contactForm.emailPlaceholder}
					autoComplete="on"
					{...register('email')}
				/>
				{errors?.email && (
					<ErrorMessage
						errors={errors}
						name="email"
						render={() => (
							<ErrorParagraph>{contactForm.emailError}</ErrorParagraph>
						)}
					/>
				)}
			</div>

			<div className={styles.formInputWrapper}>
				<label
					className={styles.label}
					id="message-lbl"
					htmlFor="contact-message"
				>
					{contactForm.message}{' '}
					<span className={styles.required}>({contactForm.required})</span>
				</label>
				<textarea
					required
					className={`${styles.textArea} ${errors.message ? styles.error : ''}`}
					aria-labelledby="message-lbl"
					id="contact-message"
					placeholder={contactForm.messagePlaceholder}
					rows={6}
					maxLength={500}
					{...register('message')}
				/>
				{errors?.message && (
					<ErrorMessage
						errors={errors}
						name="message"
						render={() => (
							<ErrorParagraph>{contactForm.messageError}</ErrorParagraph>
						)}
					/>
				)}
			</div>

			<div className={styles.buttonWrapper}>
				<Button variant={ButtonVariant.SUBMIT} type="submit">
					{contactForm.send}
				</Button>
			</div>
		</form>
	)
}
