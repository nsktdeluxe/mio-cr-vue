var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue.js!",
    count: 0,
  },
  methods: {
    increment() {
      this.count += 1;
    },
  },
});
