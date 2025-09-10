import z from 'zod'

export const contactSchema = z.object({
	email: z.email(),
	name: z.string().min(1),
	message: z.string().min(1),
	botcheck: z.boolean(),
})

export type ContactType = z.infer<typeof contactSchema>
