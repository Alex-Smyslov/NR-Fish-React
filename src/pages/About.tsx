// import '../styles/About.css';/

import SectionTitle from '../components/sectionTitle/SectionTitle';

const Projects = () => {
  return (
    <main className="section">
      <div className="container">
        <main>
          <section className="about section">
            <div className="wrapper">
              <div className="about__content content" id="wrapp">
                <div className="content__wrapper">
                  <SectionTitle text="О нас" />
                </div>
              </div>
            </div>
          </section>

          <section className="section properties">
            <div className="container">
              <SectionTitle text="Преимущества работы с нами" />
            </div>
          </section>

          <section className="faq">
            <div className="container">
              <SectionTitle text="Часто задаваемые вопросы" />
            </div>
          </section>
        </main>
      </div>
    </main>
  );
};

export default Projects;
