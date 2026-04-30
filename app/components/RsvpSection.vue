<template>
  <section class="fade-in" id="rsvp">
    <div class="section-label">You're Invited</div>
    <h2 class="section-title">RSVP</h2>
    <p class="rsvp-note">This is a ladies & children only celebration — we can't wait to gather with the women in Suzanne's life.</p>

    <div class="rsvp-wrap">

      <form v-if="!submitted" @submit.prevent="handleSubmit">
        <div class="form-row">
          <div class="form-group">
            <label for="fname">First Name</label>
            <input v-model="form.fname" type="text" id="fname" name="fname" required placeholder="Jane">
          </div>
          <div class="form-group">
            <label for="lname">Last Name</label>
            <input v-model="form.lname" type="text" id="lname" name="lname" required placeholder="Smith">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="form.email" type="email" id="email" name="email" placeholder="jane@email.com">
          </div>
          <div class="form-group">
            <label for="phone">Phone (optional)</label>
            <input v-model="form.phone" type="tel" id="phone" name="phone" placeholder="(555) 000-0000">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group full">
            <label>Will you be attending?</label>
            <div class="radio-row">
              <label>
                <input v-model="form.attending" type="radio" name="attending" value="yes" required>
                ✓ &nbsp;Joyfully accepts
              </label>
              <label>
                <input v-model="form.attending" type="radio" name="attending" value="no">
                ✗ &nbsp;Regretfully declines
              </label>
            </div>
          </div>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label for="guests">Number of Guests</label>
            <select v-model="form.guests" id="guests" name="guests">
              <option value="1">Just me</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4+</option>
            </select>
          </div>
          <div class="form-group">
            <label for="dietary">Dietary needs (optional)</label>
            <input v-model="form.dietary" type="text" id="dietary" name="dietary" placeholder="Vegetarian, gluten-free…">
          </div>
        </div>
        <div class="form-row">
          <div class="form-group full">
            <label for="note">Leave a note for Suzanne (optional)</label>
            <textarea v-model="form.note" id="note" name="note" placeholder="A sweet message…"></textarea>
          </div>
        </div>
        <div class="form-center">
          <button type="submit" class="btn">Send RSVP</button>
          <p class="rsvp-deadline">Please RSVP by<strong>June 1, 2025</strong></p>
          <p class="rsvp-confirm-note">If you're joining us, you'll receive an email confirmation with the gift registry included.</p>
        </div>
      </form>

      <div v-else class="rsvp-success">
        <div class="script">Thank you!</div>
        <p>We can't wait to celebrate with you.<br>See you June 14th!</p>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const submitted = ref(false)

const form = reactive({
  fname: '',
  lname: '',
  email: '',
  phone: '',
  attending: '',
  guests: '1',
  dietary: '',
  note: ''
})

function handleSubmit() {
  submitted.value = true
}
</script>

<style lang="scss" scoped>
.rsvp-note {
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 19px;
  color: var(--text-light);
  margin-bottom: 32px;
  line-height: 1.6;
}

.rsvp-wrap {
  background: #fff;
  border-radius: 4px;
  padding: 48px;
  box-shadow: 0 4px 32px rgba(120, 100, 80, 0.07);
  border: 1px solid rgba(168, 194, 153, 0.3);

  @media (max-width: 640px) {
    padding: 28px 20px;
  }
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 20px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;

  &.full {
    grid-column: 1 / -1;
  }
}

label {
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-light);
}

input,
select,
textarea {
  border: none;
  border-bottom: 1.5px solid rgba(168, 194, 153, 0.6);
  background: transparent;
  padding: 10px 2px;
  font-family: 'Jost', sans-serif;
  font-size: 16px;
  font-weight: 300;
  color: var(--text);
  outline: none;
  transition: border-color 0.2s;
  width: 100%;

  &:focus {
    border-color: var(--sage);
  }
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.radio-row {
  display: flex;
  gap: 24px;
  margin-top: 4px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    letter-spacing: 1px;
    text-transform: none;
    cursor: pointer;
    color: var(--text);
  }
}

input[type='radio'] {
  width: 16px;
  height: 16px;
  accent-color: var(--sage);
  border: none;
  border-bottom: none;
  padding: 0;
}

.form-center {
  text-align: center;
}

.rsvp-deadline {
  text-align: center;
  font-size: 12px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--text-light);
  margin-top: 20px;

  strong {
    display: block;
    font-family: 'Cormorant Garamond', serif;
    font-size: 26px;
    font-weight: 600;
    font-style: italic;
    letter-spacing: 0.5px;
    text-transform: none;
    color: var(--rose);
    margin-top: 6px;
  }
}

.rsvp-confirm-note {
  text-align: center;
  font-family: 'Cormorant Garamond', serif;
  font-style: italic;
  font-size: 17px;
  color: var(--text-light);
  margin-top: 12px;
  max-width: 360px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.rsvp-success {
  text-align: center;
  padding: 40px 0;

  .script {
    font-family: 'Dancing Script', cursive;
    font-size: 52px;
    color: var(--sage);
  }

  p {
    font-family: 'Cormorant Garamond', serif;
    font-size: 20px;
    color: var(--text-light);
    font-style: italic;
    margin-top: 12px;
  }
}
</style>
