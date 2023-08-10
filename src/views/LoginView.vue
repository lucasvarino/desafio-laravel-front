<template>
  <div @click="performLogin">TESTE</div>
</template>

<script>
export default {
  name: "LoginView",
  methods: {
    performLogin() {
      try {
        console.log("passando");
        this.$store.dispatch("login", {
          email: "javonte.boyle@example.org",
          password: "password",
        });
        this.loginError = "";
      } catch (error) {
        this.loginError = error.message;
      }
    },
  },
};
</script>
<style scoped></style>
