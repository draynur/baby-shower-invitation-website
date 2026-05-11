<script setup>
import flowerBackdrop from '../assets/pretty-flowers.svg';
</script>
<template>
  <div class="hero">
    <div class="fig-frame">

      <flower-backdrop class="fig-backdrop" />

      <div class="hero-arch">
        <div class="hero-heart">♡</div>
        <div class="hero-script">baby</div>
        <div class="hero-subtitle">in bloom</div>
        <div class="hero-divider"></div>
        <div class="hero-join">Join us for a baby shower honoring</div>
        <div class="hero-name">Suzanne Runyard</div>
        <div class="hero-meta">
          <strong>Sunday, June 14, 2026</strong><br>
          1:00 — 3:00 PM
        </div>
      </div>

    </div>

    <div class="scroll-hint">
      <span class="scroll-hint-label">scroll to rsvp</span>
      <svg class="scroll-hint-arrow" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 5v14M5 13l7 7 7-7" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 48px 20px 60px;
  background: var(--cream);
  overflow: hidden;
}

// Width matches the SVG's native 657px so the backdrop fills the frame edge-to-edge.
.fig-frame {
  position: relative;
  width: 567px;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 100%;
    max-width: 445px;
  }

  @media (max-width: 500px) {
    width: 100%;
    max-width: 305px;
  }
}

.fig-backdrop {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 0;
  pointer-events: none;
  display: block;
}

// Arch sits in front of the backdrop. margin-top pushes it down enough for
// botanical flower tops to be visible above the arch's rounded edge.
.hero-arch {
  position: relative;
  z-index: 4;
  margin: 80px auto 0;
  background: var(--sage);
  border-radius: 260px 260px 0 0;
  width: 406px;
  padding: 56px 52px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 40px rgba(96, 123, 86, 0.8);

  @media (max-width: 700px) {
    width: 80%;
    padding: 36px 28px 40px;
    margin-top: 48px;
  }
}

.hero-heart {
  font-size: 18px;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 4px;
  letter-spacing: 2px;
}

.hero-script {
  font-family: 'Dancing Script', cursive;
  font-size: 62px;
  color: #fff;
  line-height: 1;
  margin-bottom: 2px;

  @media (max-width: 700px) {
    font-size: 44px;
  }
}

.hero-subtitle {
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
  margin-bottom: 20px;
}

.hero-divider {
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.5);
  margin: 0 auto 18px;
}

.hero-join {
  font-family: 'Jost', sans-serif;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
  text-align: center;
}

.hero-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 34px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 16px;

  @media (max-width: 700px) {
    font-size: 22px;
  }
}

.hero-meta {
  font-size: 13px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  line-height: 2;
  text-align: center;

  strong {
    color: #fff;
    font-weight: 500;
  }
}

.hero-below {
  position: relative;
  z-index: 4;
  margin-top: 24px;
  padding-bottom: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
}

.hero-venue-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 18px;
  font-style: italic;
  color: var(--text-light);
}

.hero-venue-addr {
  font-size: 13px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-light);
}

.scroll-hint {
  position: absolute;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;
  z-index: 4;
  animation: scroll-bounce 2s ease-in-out infinite;
}

.scroll-hint-label {
  font-family: 'Jost', sans-serif;
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--sage);
  opacity: 0.8;
}

.scroll-hint-arrow {
  width: 20px;
  height: 20px;
  color: var(--sage);
  opacity: 0.7;
}

@keyframes scroll-bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(6px); }
}
</style>
