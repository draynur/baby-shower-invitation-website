<template>
  <footer>
    <div class="footer-script">with love ♡</div>
    <div class="footer-grid">
      <div class="footer-col">
        <h4>Hosted By</h4>
        <p>Shelly Riech<br>&amp; Meghan DeLoriea</p>
      </div>
      <div class="footer-col">
        <h4>RSVP Deadline</h4>
        <p><span class="deadline-date">June 1, 2026</span></p>
      </div>
    </div>
    <p class="footer-small">Site by John</p>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background: var(--sage-dark);
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
  padding: 52px 24px;
}

.footer-script {
  font-family: 'Dancing Script', cursive;
  font-size: 32px;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 24px;
}

.footer-grid {
  display: flex;
  justify-content: center;
  gap: 60px;
  flex-wrap: wrap;
  margin-bottom: 32px;

  @media (max-width: 640px) {
    gap: 32px;
  }
}

.footer-col {
  h4 {
    font-size: 11px;
    letter-spacing: 3px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 10px;
  }

  p,
  a {
    font-family: 'Cormorant Garamond', serif;
    font-size: 18px;
    font-style: italic;
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    line-height: 1.7;
  }

  a:hover {
    color: var(--rose-light);
  }
}

.deadline-date {
  font-style: normal;
  font-weight: 600;
  color: var(--rose-light);
  font-size: 20px;
  letter-spacing: 0.5px;
}

.footer-small {
  font-size: 12px;
  letter-spacing: 1px;
  color: rgba(255, 255, 255, 0.35);
  margin-top: 20px;
}
</style>
