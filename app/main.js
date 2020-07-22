import Vue from "nativescript-vue";
import App from "./components/App";
import VueDevtools from "nativescript-vue-devtools";
import firebase from "nativescript-plugin-firebase";

import BottomNavigationBar from "nativescript-material-bottomnavigationbar/vue";

Vue.use(BottomNavigationBar);

if (TNS_ENV !== "production") {
  Vue.use(VueDevtools);
}
import store from "./store";

// Prints Vue logs when --env.production is *NOT* set while building
Vue.config.silent = TNS_ENV === "production";

firebase.init({
  onAuthStateChanged: function(data) {
    // optional but useful to immediately re-logon the user when they re-visit your app
    if (data) store.commit("SET_USER", data.user ? data.user : null);
  },
});

new Vue({
  store,
  render: (h) => h("frame", [h(App)]),
}).$start();
