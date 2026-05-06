<template>
  <section id="directions">
    <div class="section-label">Getting Here</div>
    <h2 class="section-title">Directions &amp; Venue</h2>
    <div class="directions-grid">
      <div class="map-embed">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48818.13811384528!2d-88.28364129463476!3d40.11702534293577!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880cd775073eaaa9%3A0xcd9c7d2e931ed2a2!2sAnalog%20Wine%20Library!5e0!3m2!1sen!2sus!4v1777438755741!5m2!1sen!2sus"
          width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div class="directions-info">
        <h3>Analog Wine Library</h3>
        <p>
          129 N Race Street<br>
          Urbana, IL 61801
        </p>
        <p class="directions-note">
          The venue is located in Downtown Urbana.
          Parking is available at the venue and on nearby streets.
        </p>
        <div class="link-group">
          <a href="https://maps.google.com/?q=Analog+Wine+Library+129+N+Race+St+Urbana+IL" target="_blank"
            rel="noopener">
            Open in Google Maps →
          </a>
          <a href="https://maps.apple/p/_uKQSXxahI243p" target="_blank" rel="noopener" class="apple-maps-link"
            v-if="$device.isIos">
            Open in Apple Maps →
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.link-group {
  display: flex;
  flex-direction: column;
  gap: 1.25em;
  margin-top: 20px;
  width: fit-content;

  * {
    width: fit-content;
  }
}

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
    font-size: 17px;
    line-height: 1.8;
    color: var(--text-light);
    margin-bottom: 20px;
  }

  .directions-note {
    font-size: 15px;
  }

  a {
    color: var(--sage-dark);
    font-size: 13px;
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
