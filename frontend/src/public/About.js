
function About() {
  return (
    <div className="about-page">

      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-overlay">
          <h1>About Preeti Matching Center</h1>
          <p>
            Where elegance meets craftsmanship.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="about-content">

        <div className="about-card">
          <h2>Our Story</h2>
          <p>
            Welcome to <strong>Preeti Matching Center</strong>, your trusted
            fashion boutique for premium ladies wear and custom tailoring.
            We specialize in elegant designs, luxurious fabrics, and perfect fitting.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Vision</h2>
          <p>
            From daily wear to festive collections, we design outfits that
            celebrate confidence and individuality. Our goal is to make
            every woman feel graceful, stylish, and empowered.
          </p>
        </div>

        <div className="about-card">
          <h2>Our Commitment</h2>
          <p>
            We combine personalized tailoring with modern trends to deliver
            fashion that truly reflects your personality.
          </p>

          <h3 className="about-quote">
            “Where style meets perfect fitting.”
          </h3>
        </div>

      </section>

    </div>
  );
}

export default About;