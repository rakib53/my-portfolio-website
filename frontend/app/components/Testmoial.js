import TestmonialSlider from "./TestmonialSlider";

export default function MyTestimonial() {
  return (
    <section className="sectionMargin" id="testmonials">
      <div className="container">
        <h2 className="sectionTitle">Feedback Corner</h2>
        <p className="sectionDesc">
          Hear from satisfied clients about their experiences with my work.
        </p>
        <TestmonialSlider />
      </div>
    </section>
  );
}
