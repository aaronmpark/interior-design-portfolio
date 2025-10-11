<template>
    <div class="contact">
        <Navbar />
        <div class="contact-container">
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
                <p><a href="mailto:example@email.com">Email: example@email.com</a></p>
                <p><a href="tel:+1234567890">Phone: +1 (234) 567-890</a></p>
            </div>
            <div class="questions">
                <h3>QUESTIONS?</h3>
                <p>Feel free to reach out with any questions or inquiries.</p>
            </div>
        </div>
    </div> 
</template>

<script>
import Navbar from './Navbar.vue';

export default {
  name: 'DefaultContact',
  components: {
    Navbar
  },
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
.contact {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;
  background: linear-gradient(135deg, #1C1C1C, #333);
  color: white;
  padding: 2rem;
  box-sizing: border-box;
}

.contact-container {
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
  color: rgb(175, 173, 173);
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

.contact-bottom {
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 2rem;
  padding-bottom: 0;
  color: rgb(175, 173, 173);
  width: 100%;
  box-sizing: border-box;
}
</style>