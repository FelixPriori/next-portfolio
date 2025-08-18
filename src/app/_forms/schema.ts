import z from 'zod'

export const contactSchema = z.object({
	email: z.email(),
	name: z.string().min(1, 'Please enter your name!'),
	message: z.string().min(1, 'Please enter a message!'),
	botcheck: z.boolean(),
})

export type ContactType = z.infer<typeof contactSchema>
