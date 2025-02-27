import TestimonialSlider from "./TestimonialSlider";

export default function MyTestimonial() {
  return (
    <section className="section-margin !px-4 sm:px-0" id="testimonials">
      <div className="container">
        <h2 className="section-title">Feedback Corner</h2>
        <p className="section-description">
          Hear from satisfied clients about their experiences with my work.
        </p>
        <TestimonialSlider />
      </div>
    </section>
  );
}
