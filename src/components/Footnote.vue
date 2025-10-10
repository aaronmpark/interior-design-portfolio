<template>
  <footer class="footnote">
    <div class="footnote-container">
      <div class="contact-form">
        <h3>GET IN TOUCH</h3>
        <form @submit.prevent="submitForm">
          <label for="name">Name:</label>
          <input type="text" id="name" v-model="form.name" required />

          <label for="email">Email:</label>
          <input type="email" id="email" v-model="form.email" required />

          <label for="message">Description:</label>
          <textarea id="message" v-model="form.message" required></textarea>

          <button type="submit">Contact Now</button>
        </form>
      </div>
      <div class="contact-info">
        <h3>CONTACT</h3>
        <p><a href="mailto:example@email.com">Email example@email.com</a></p>
        <p><a href="tel:+1234567890">Phone: +1 (234) 567-890</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FootNote',
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    }
  }
};
</script>

<style scoped>
.footnote {
  background-color: #333;
  color: white;
  padding: 2rem;
}

.footnote-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}

.contact-form {
  max-width: 500px;
  flex: 1;
}

.contact-form h3 {
  margin-bottom: 1rem;
}

.contact-form label {
  display: block;
  margin: 0.5rem 0 0.2rem;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ffffff;
  border-radius: 4px;
}

.contact-form button {
  background-color: #132388;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #0097a7;
}

.contact-info {
  flex: 1;
  max-width: 300px;
  text-align: right;
}
.contact-info h3 {
  margin-bottom: 1rem;
}

.contact-info p {
  margin: 0 0 1rem;
}

.contact-info a {
  color: inherit; 
  text-decoration: none; 
}
</style>