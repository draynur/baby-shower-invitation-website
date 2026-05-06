<template>
  <section class="fade-in" id="registry">
    <div class="section-label">The Nursery</div>
    <h2 class="section-title">Gift Registry</h2>
    <div class="registry-wrap">
      <p class="registry-note">
        Suzanne and John have been putting together a list of things they'll need for their little girl - check out their registry on Babylist
      </p>
      <a href="https://my.babylist.com/suzanne-runyard" target="_blank" rel="noopener" class="btn">
        View Registry
      </a>
      <p class="registry-note mt-2">One small request - we hope not too hard - please bring a book instead of a card. They'll
        cherish the book, well-loved or brand new, and feel free to sign inside with a message from you!</p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.registry-wrap {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.registry-note {
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 20px;
  color: var(--text-light);
  line-height: 1.7;
  max-width: 520px;
}

.mt-2 {
  margin-top: 32px;
}
</style>
