<template>
  <div class="wrapper">
    <div class="social-logi">
      <button>Google</button>
      <button>FaceBook</button>
    </div>
    <div>
      <input v-model="email" type="email" />
    </div>
    <div>
      <input v-model="password" type="password" />
    </div>
    <div><button @click="login(email, password)">Login</button></div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import { LOGIN, actionPath } from "~/constant/action/auth";
export default {
  name: "LoginPage",
  meta: {
    auth: false,
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    ...mapActions({
      login: actionPath(LOGIN),
    }),
  },
};
</script>
