<template>
  <div @click="performLogin">LOGIN</div>
  <div v-if="isAuthenticated" @click="performLogout">LOGOUT</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  name: "LoginView",
  methods: {
    performLogin() {
      try {
        this.$store.dispatch("login", {
          email: "javonte.boyle@example.org",
          password: "password",
        });
        this.loginError = "";
      } catch (error) {
        this.loginError = error.message;
      }
    },

    performLogout() {
      this.$store.dispatch("logout");
      this.$router.push("about");
    },
  },
};
</script>
<style scoped></style>
