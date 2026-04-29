<template>
  <section class="fade-in" id="directions">
    <div class="section-label">Getting Here</div>
    <h2 class="section-title">Directions &amp; Venue</h2>
    <div class="directions-grid">
      <div class="map-embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3051.2!2d-88.2073!3d40.1105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd759c88f5e3d%3A0x8dba8caacc4acf7d!2sAnalog%20Wine%20Library!5e0!3m2!1sen!2sus!4v1"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Analog Wine Library map"
        ></iframe>
      </div>
      <div class="directions-info">
        <h3>Analog Wine Library</h3>
        <p>
          129 N Race Street<br>
          Urbana, IL 61801
        </p>
        <p class="directions-note">
          Street parking is available along Race Street and nearby lots. The venue is located in downtown Urbana, just steps from the heart of the neighborhood.
        </p>
        <a href="https://maps.google.com/?q=Analog+Wine+Library+129+N+Race+St+Urbana+IL" target="_blank" rel="noopener">
          Open in Google Maps →
        </a>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.directions-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: start;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.map-embed {
  border-radius: 3px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  iframe {
    width: 100%;
    height: 280px;
    border: none;
    display: block;
  }
}

.directions-info {
  h3 {
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px;
    font-weight: 400;
    margin-bottom: 16px;
    color: var(--text);
  }

  p {
    font-size: 15px;
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: 20px;
  }

  .directions-note {
    font-size: 14px;
  }

  a {
    color: var(--sage-dark);
    font-size: 12px;
    letter-spacing: 2px;
    text-transform: uppercase;
    text-decoration: none;
    border-bottom: 1px solid var(--sage-light);
    padding-bottom: 2px;
    transition: color 0.2s, border-color 0.2s;

    &:hover {
      color: var(--rose);
      border-color: var(--rose);
    }
  }
}
</style>
