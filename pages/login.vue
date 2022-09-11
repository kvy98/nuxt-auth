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
    <div><button>Login</button></div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {},
};
</script>
