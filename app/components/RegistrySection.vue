<template>
  <section class="fade-in" id="registry">
    <div class="section-label">The Nursery</div>
    <h2 class="section-title">Gift Registry</h2>
    <div class="registry-wrap">
      <p class="registry-note">
        Suzanne and John have curated a registry of everything the little one should need.
        Your presence is the greatest gift but if you'd like to give more, their registry is on Babylist.
      </p>
      <a href="https://my.babylist.com/suzanne-runyard" target="_blank" rel="noopener" class="btn">
        View Registry
      </a>
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
</style>
