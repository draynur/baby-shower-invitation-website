<template>
  <div class="venue-photo-wrap">
    <img class="photo-strip" src="/analog-5 1.png" alt="Analog Wine Library">
    <p class="photo-caption">Analog Wine Library · Urbana, Illinois</p>
  </div>
</template>

<style lang="scss" scoped>
.photo-strip {
  width: 100%;
  height: 420px;
  object-fit: cover;
  display: block;
  filter: brightness(0.96) saturate(0.9);
}

.photo-caption {
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 17px;
  color: var(--text-light);
  padding: 14px 0 0;
  letter-spacing: 1px;
}
</style>
