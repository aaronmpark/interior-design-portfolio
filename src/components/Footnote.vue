<template>
  <footer class="footnote">
    <div class="footnote-container">
      <div class="contact-info">
        <h3>CONTACT</h3>
        <p><a href="mailto:mun6040@gmail.com">Email: mun6040@gmail.com</a></p>
        <p><a href="tel:+17033380056">Phone: +1 (703) 338-0056</a></p>
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
        <h3>OTHER</h3>
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
  color: rgb(175, 173, 173);
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 0.5rem 0; 
  margin-bottom: 1rem;
  border: none; 
  border-bottom: 2px solid #FFB606; 
  border-radius: 0; 
  background: transparent; 
  color: white; 
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none; 
  border-bottom: 2px solid #FFD700;
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

@media (max-width: 768px) {
  .footnote-container {
    flex-direction: column; 
    gap: 1.5rem; 
  }

  .contact-info,
  .contact-form,
  .other {
    margin-bottom: 1.5rem; 
  }
}

</style>