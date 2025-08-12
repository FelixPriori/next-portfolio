import TestimonialFeature from '../_components/TestimonialFeature/TestimonialFeature'
import styles from './sections.module.scss'
import { testimonialData } from './testimonialsData'
export default function TestimonialsSection() {
	return (
		<section id="testimonials" className={styles.sectionWrapper}>
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
