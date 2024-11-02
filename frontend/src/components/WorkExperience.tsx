import Container from "./Container";

const WorkExperience = () => {
  return (
    <section className="w-full section-margin">
      <Container>
        <h2 className="section-title">Experiences</h2>
        <p className="section-description">
          3+ years delivering impactful projects with diverse tech expertise.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-primaryCardBG p-6 rounded-2xl text-center">
            <h3 className="font-inter text-xl font-semibold text-text-color">
              18+
            </h3>
            <p className="text-text-color2 font-inter font-medium">Clients</p>
          </div>
          <div className="bg-primaryCardBG p-6 rounded-2xl text-center">
            <h3 className="font-inter text-xl font-semibold text-text-color">
              34+
            </h3>
            <p className="text-text-color2 font-inter font-medium">Projects</p>
          </div>
          <div className="bg-primaryCardBG p-6 rounded-2xl text-center">
            <h3 className="font-inter text-xl font-semibold text-text-color">
              16
            </h3>
            <p className="text-text-color2 font-inter font-medium">Awards</p>
          </div>
          <div className="bg-primaryCardBG p-6 rounded-2xl text-center">
            <h3 className="font-inter text-xl font-semibold text-text-color">
              03
            </h3>
            <p className="text-text-color2 font-inter font-medium">
              Years of Experiences
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default WorkExperience;
