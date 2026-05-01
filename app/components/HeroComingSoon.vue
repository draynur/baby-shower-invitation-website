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
        <div class="hero-join">A baby shower honoring</div>
        <div class="hero-name">Suzanne Runyard</div>
        <div class="hero-meta">
          Coming soon&nbsp;.&nbsp;.&nbsp;.
        </div>
      </div>

    </div>
  </div>
</template>

<style lang="scss" scoped>
.hero {
  min-height: 100vh;
  min-height: 100dvh;
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
  width: 530px;
  margin: 0 auto;

  @media (max-width: 700px) {
    width: 100%;
    max-width: 405px;
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
}
</style>
