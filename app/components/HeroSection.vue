<template>
  <div class="hero">
    <div class="fig-frame">

      <!-- 4 gold coneflower stems -->
      <div class="fig-stems">
        <img v-for="n in 4" :key="n" class="fig-stem" src="/fig-assets/coneflower-stem.svg" alt="">
      </div>

      <!-- Dark green leaf shapes -->
      <img class="fig-leaf fig-leaf-l" src="/fig-assets/Vector.svg" alt="">
      <img class="fig-leaf fig-leaf-r" src="/fig-assets/Vector.svg" alt="">

      <!-- Blush petal clusters -->
      <svg class="fig-petals fig-petals-l" viewBox="0 0 104 106" fill="#E8B5AD" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(52,53)">
          <ellipse v-for="(deg, i) in petalAngles" :key="i"
            rx="9" ry="22"
            :transform="`rotate(${deg})`"
            :opacity="i % 2 === 0 ? 0.9 : 0.85"
          />
          <circle r="10" fill="#C4847A"/>
        </g>
      </svg>
      <svg class="fig-petals fig-petals-r" viewBox="0 0 104 106" fill="#E8B5AD" xmlns="http://www.w3.org/2000/svg">
        <g transform="translate(52,53)">
          <ellipse v-for="(deg, i) in petalAngles" :key="i"
            rx="9" ry="22"
            :transform="`rotate(${deg})`"
            :opacity="i % 2 === 0 ? 0.9 : 0.85"
          />
          <circle r="10" fill="#C4847A"/>
        </g>
      </svg>

      <!-- Arch card -->
      <div class="hero-arch">
        <div class="hero-heart">♡</div>
        <div class="hero-script">baby</div>
        <div class="hero-subtitle">in bloom</div>
        <div class="hero-divider"></div>
        <div class="hero-join">Join us for a baby shower honoring</div>
        <div class="hero-name">Suzanne Runyard</div>
        <div class="hero-meta">
          <strong>Saturday, June 14, 2025</strong><br>
          1:00 — 3:00 PM
        </div>
      </div>

      <div class="hero-below">
        <div class="hero-venue-name">Analog Wine Library</div>
        <div class="hero-venue-addr">129 N Race St · Urbana, IL</div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
const petalAngles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330]
</script>

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

.fig-frame {
  position: relative;
  width: 580px;
  margin: 0 auto;

  @media (max-width: 640px) {
    width: 340px;
  }
}

.fig-stems {
  position: absolute;
  top: 0;
  left: 16px;
  width: 550px;
  height: 416px;
  overflow: hidden;
  display: flex;
  z-index: 0;
  pointer-events: none;

  @media (max-width: 640px) {
    width: 320px;
    left: 10px;
    height: 244px;
  }
}

.fig-stem {
  width: 150px;
  height: 416px;
  flex-shrink: 0;
  filter: var(--f-gold);

  @media (max-width: 640px) {
    width: 88px;
    height: 244px;
  }
}

.fig-leaf {
  position: absolute;
  width: 300px;
  height: 141px;
  top: 340px;
  z-index: 2;
  pointer-events: none;
  opacity: 0.9;

  @media (max-width: 640px) {
    width: 233px;
    height: 110px;
    top: 182px;
  }
}

.fig-leaf-r {
  left: 220px;

  @media (max-width: 640px) {
    left: 105px;
  }
}

.fig-leaf-l {
  left: -60px;
  transform: scaleX(-1);
  transform-origin: 0 50%;
}

.fig-petals {
  position: absolute;
  top: 448px;
  width: 104px;
  height: 106px;
  z-index: 3;
  pointer-events: none;

  @media (max-width: 640px) {
    top: 264px;
    width: 62px;
    height: 62px;
  }
}

.fig-petals-l {
  left: 22px;

  @media (max-width: 640px) {
    left: 14px;
  }
}

.fig-petals-r {
  right: 22px;
  transform: scaleX(-1);
  transform-origin: 50% 50%;

  @media (max-width: 640px) {
    right: 14px;
  }
}

.hero-arch {
  position: relative;
  z-index: 4;
  margin: 42px auto 0;
  background: var(--sage);
  border-radius: 260px 260px 0 0;
  width: 406px;
  padding: 56px 52px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0 8px 40px rgba(78, 110, 68, 0.18);

  @media (max-width: 640px) {
    width: 238px;
    padding: 36px 28px 40px;
    margin-top: 24px;
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

  @media (max-width: 640px) {
    font-size: 44px;
  }
}

.hero-subtitle {
  font-family: 'Jost', sans-serif;
  font-weight: 500;
  font-size: 13px;
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
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.7);
  margin-bottom: 8px;
}

.hero-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 34px;
  font-weight: 500;
  color: #fff;
  letter-spacing: 1px;
  margin-bottom: 16px;

  @media (max-width: 640px) {
    font-size: 22px;
  }
}

.hero-meta {
  font-size: 11px;
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
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-light);
}
</style>
