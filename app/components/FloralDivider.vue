<template>
  <div class="floral-divider">✿</div>
</template>

<style lang="scss" scoped>
.floral-divider {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  padding: 10px 0;
  color: var(--sage-light);
  font-size: 18px;
  opacity: 0.6;
  max-width: 760px;
  margin: 0 auto;

  &::before,
  &::after {
    content: '';
    flex: 1;
    max-width: 120px;
    height: 1px;
    background: linear-gradient(to right, transparent, var(--sage-light));
  }

  &::after {
    background: linear-gradient(to left, transparent, var(--sage-light));
  }
}
</style>
