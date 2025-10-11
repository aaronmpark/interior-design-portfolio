<template>
  <footer class="footnote">
    <div class="footnote-container">
      <div class="contact-info">
        <h3>CONTACT</h3>
        <p><a href="mailto:example@email.com">Email: example@email.com</a></p>
        <p><a href="tel:+1234567890">Phone: +1 (234) 567-890</a></p>
      </div>
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
        <div class="other">
        <h3>Other</h3>
        <p><a href="/about">About Us</a></p>
        <p><a href="/projects">Projects</a></p>
      </div>
    </div>
    <div class="footer-bottom">
        <a>
           Copyright &copy; 2025 Golden MS LLC All Rights Reserved.
        </a>
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
  background-color: #1C1C1C;
  color: white;
  padding: 2rem;
  overflow-x: hidden; 
}

.footnote-container {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 1500px;
  margin: 0 auto;
  width: 100%; 
  box-sizing: border-box; 
}

.contact-form {
  max-width: 400px;
  flex: 1;
  text-align: left;
}

.contact-form h3 {
  margin-bottom: 1rem;
}

.contact-form label {
  display: block;
  margin: 0.5rem 0 0.2rem;
  color: rgb(175, 173, 173) 

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
  background-color: #ffffff;
  color: black;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
}

.contact-form button:hover {
  background-color: #c4c1c1a8;
}

.contact-info {
  flex: 1;
  max-width: 300px;
  text-align: left;
}
.contact-info h3 {
  margin-bottom: 1rem;
}

.contact-info p {
  margin: 0 0 1rem;
  color: rgb(175, 173, 173) 
}

.contact-info a {
  color: inherit; 
  text-decoration: none; 
}

.other {
    flex: 1;
    max-width: 300px;
    text-align: left;
}
.other p {
  color: rgb(175, 173, 173);
}
.other a {
  text-decoration: none; 
  color: inherit;
}

.other a:hover {
  text-decoration: none; 
  color: inherit; 
}
.footer-logo {
  width: 15px; 
  height: 15px;
  margin-right: 5rem;
}
.footer-bottom {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  padding-bottom: 0;
  color: rgb(175, 173, 173);
  width: 100%; 
  box-sizing: border-box; 
  transform: translateY(165%);
}
</style>