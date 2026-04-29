<template>
  <section class="fade-in" id="registry">
    <div class="section-label">Gift Registry</div>
    <h2 class="section-title">Baby's Wish List</h2>
    <div class="registry-block">
      <p>
        Suzanne and her little one are registered on Babylist —<br>
        a place to find everything baby needs, from any store.
      </p>
      <a href="https://my.babylist.com/suzanne-runyard" target="_blank" rel="noopener" class="btn btn-rose">
        View Registry on Babylist
      </a>
      <p class="registry-note">
        Your presence is the greatest gift. Registry is provided for those who wish to celebrate with a little something extra.
      </p>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.registry-block {
  background: var(--rose-pale);
  border-radius: 4px;
  padding: 60px 40px;
  text-align: center;
  border: 1px solid rgba(196, 132, 122, 0.2);

  p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    font-style: italic;
    color: var(--text-light);
    max-width: 440px;
    margin: 0 auto 28px;
    line-height: 1.6;
  }

  .registry-note {
    margin-top: 20px;
    font-size: 14px;
    color: var(--text-light);
  }
}
</style>
