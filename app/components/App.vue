<template>
  <Page actionBarHidden="true"></Page>
</template>

<script>
import SignInPage from "../screens/SignInPage";
import Main from "../screens/Main";
import firebase from "nativescript-plugin-firebase";
import navigate from "../router";

export default {
  components: { Main, SignInPage },
  mounted() {
    try {
      const listener = {
        onAuthStateChanged: data => {
          if (data.loggedIn) navigate(this, Main, {});
          else navigate(this, SignInPage, {});
        }
      };

      firebase.addAuthStateListener(listener);
    } catch (e) {
      console.log(firebase);
      console.log(e);
      alert(e);
    }
  }
};
</script>

<style scoped>
ActionBar {
  background-color: #53ba82;
  color: #ffffff;
}

.message {
  vertical-align: center;
  text-align: center;
  font-size: 20;
  color: #333333;
}
</style>
