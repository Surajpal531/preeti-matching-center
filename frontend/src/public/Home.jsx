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
                href="https://wa.me/919329557469"
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
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/8/335204762/HD/NY/MZ/195146203/ladies-designer-suits.jpg" alt="" />
            <h3>Designer Suits</h3>
          </div>

          <div className="featured-card">
            <img src="https://thedesigncart.com/cdn/shop/files/img-6022_compressed_1080x.jpg?v=1691556990" alt="" />
            <h3>Embroided Banarsi Silk</h3>
          </div>

          <div className="featured-card">
            <img src="https://t4.ftcdn.net/jpg/01/62/28/09/360_F_162280951_WPnIPojcyNu7IkHNNieEEWwGvXDDNSlj.jpg" alt="" />
            <h3>Plain Cotton</h3>
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