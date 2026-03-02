function Contact() {
  return (
    <div className="contact-page">

      <div className="contact-header">
        <h1>Visit Our Shop</h1>
        <p>We would love to style you beautifully.</p>
      </div>

      <div className="contact-content">

        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card">
            <h3>📍 Address</h3>
            <p>
              Preeti Matching Center<br/>
              Lala Gali, Jaora<br/>
              Madhya Pradesh
            </p>
          </div>

          <div className="info-card">
            <h3>📞 Phone</h3>
            <p>+91 93295 57469</p>
          </div>

          <div className="info-card">
            <h3>💬 WhatsApp</h3>
            <a
              href="https://wa.me/919329557469"
              target="_blank"
              rel="noreferrer"
              className="primary-btn"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Google Map */}
        <div className="map-container">
          <iframe
            title="shop-location"
            src="https://www.google.com/maps?q=Preeti Matching Center Jaora Madhya Pradesh&output=embed"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

      </div>

    </div>
  );
}

export default Contact;