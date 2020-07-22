<template>
  <Page actionBarHidden="true">
    <ActionBar actionBarHidden="true"></ActionBar>
    <StackLayout>
      <Image src="~/assets/loginillu.jpg" />
      <Button @tap="signInWithGoogle" class="-blue -rounded">
        <FormattedString>
          <Span style="color: black" text="Mit Google anmelden" />
        </FormattedString>
      </Button>
    </StackLayout>
  </Page>
</template>
<script>
const firebaseWebApi = require("nativescript-plugin-firebase/app");
import firebase from "nativescript-plugin-firebase";
import Main from "./Main";

export default {
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  methods: {
    signInWithGoogle() {
      firebase
        .login({
          type: firebase.LoginType.GOOGLE
        })
        .then(
          function(result) {
            this.$navigateTo(Main);
          },
          function(errorMessage) {
            console.log(errorMessage);
            alert(errorMessage);
          }
        );
    }
  }
};
</script>
