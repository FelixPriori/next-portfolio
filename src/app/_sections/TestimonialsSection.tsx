import { TestimonialFeature } from '@/app/_components'
import { testimonialData } from '@/app/_data'
import styles from './sections.module.scss'

export default function TestimonialsSection() {
	return (
		<section id="testimonials" className={`${styles.sectionWrapper} section`}>
			<div className={styles.subtitleWraper}>
				<h2 className={styles.subtitle}>Testimonials</h2>
			</div>
			<div className={styles.testimonialsWrapper}>
				{testimonialData.map(testimonial => (
					<TestimonialFeature key={testimonial.personName} {...testimonial} />
				))}
			</div>
		</section>
	)
}
