import TestmonialSlider from "./TestmonialSlider";

export default function MyTestimonial() {
  return (
    <section className="section-margin" id="testmonials">
      <div className="container">
        <h2 className="section-title">Feedback Corner</h2>
        <p className="section-description">
          Hear from satisfied clients about their experiences with my work.
        </p>
        <TestmonialSlider />
      </div>
    </section>
  );
}
