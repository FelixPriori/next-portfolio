'use client'
import React from 'react'
import styles from './contactForm.module.scss'
import { useForm } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Button, ButtonVariant } from '../_components'

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm()

	const onSubmit = () => {}

	return (
		<form
			onSubmit={e => handleSubmit(onSubmit)(e)}
			name="contact-form"
			method="post"
			data-netlify="true"
			netlify-honeypot="bot-field"
		>
			<input type="hidden" name="contact-form" value="contact" />

			<div className={styles.formInputWrapper}>
				<label className={styles.label} id="name-lbl" htmlFor="contact-name">
					Name
				</label>
				<input
					className={styles.input}
					id="contact-name"
					aria-labelledby="name-lbl"
					type="text"
					placeholder="Your name"
					autoComplete="on"
					{...register('name', { required: 'Name is required' })}
				/>
				{errors?.name && (
					<ErrorMessage
						errors={errors}
						name="name"
						render={({ message }) => <p>{message}</p>}
					/>
				)}
			</div>

			<div className={styles.formInputWrapper}>
				<label className={styles.label} id="email-lbl" htmlFor="contact-email">
					Email
				</label>
				<input
					className={styles.input}
					id="contact-email"
					aria-labelledby="email-lbl"
					type="email"
					placeholder="example@example.ca"
					autoComplete="on"
					{...register('email', { required: 'Email is required' })}
				/>
				{errors?.email && (
					<ErrorMessage
						errors={errors}
						name="email"
						render={({ message }) => <p>{message}</p>}
					/>
				)}
			</div>

			<div className={styles.formInputWrapper}>
				<label
					className={styles.label}
					id="message-lbl"
					htmlFor="contact-message"
				>
					Message
				</label>
				<textarea
					className={styles.textArea}
					aria-labelledby="message-lbl"
					id="contact-message"
					placeholder="Type your message here..."
					rows={6}
					maxLength={500}
					{...register('message', { required: 'Message is required' })}
				/>
				{errors?.message && (
					<ErrorMessage
						errors={errors}
						name="message"
						render={({ message }) => <p>{message}</p>}
					/>
				)}
			</div>

			<div className={styles.buttonWrapper}>
				<Button variant={ButtonVariant.SUBMIT} type="submit">
					Send
				</Button>
			</div>
		</form>
	)
}
