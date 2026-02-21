function Home() {
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-overlay">
          <div className="hero-content">
            <h1>Elegance in Every Stitch</h1>
            <p>
              Designer Dresses • Custom Stitching • Premium Fabrics
            </p>

            <div className="hero-buttons">
              <a href="/products" className="primary-btn">
                Explore Collection
              </a>

              <a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="secondary-btn"
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>


      {/* FEATURED COLLECTION */}
      <section className="featured-section">
        <h2>Featured Collection</h2>

        <div className="featured-grid">
          <div className="featured-card">
            <img src="https://images.pexels.com/photos/932401/pexels-photo-932401.jpeg" alt="" />
            <h3>Designer Suits</h3>
          </div>

          <div className="featured-card">
            <img src="https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg" alt="" />
            <h3>Party Gowns</h3>
          </div>

          <div className="featured-card">
            <img src="https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg" alt="" />
            <h3>Silk Sarees</h3>
          </div>
        </div>
      </section>


      {/* WHY CHOOSE US */}
      <section className="why-section">
        <h2>Why Choose Us</h2>

        <div className="why-grid">
          <div className="why-card">
            <h3>✨ Custom Stitching</h3>
            <p>Perfect fitting tailored to your measurements.</p>
          </div>

          <div className="why-card">
            <h3>🧵 Premium Fabrics</h3>
            <p>High-quality textiles & designer materials.</p>
          </div>

          <div className="why-card">
            <h3>💖 Trusted Boutique</h3>
            <p>Serving Jaora with elegance & trust.</p>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;