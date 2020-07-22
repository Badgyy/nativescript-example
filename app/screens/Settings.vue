<template>
  <Frame>
    <Page>
      <ActionBar flat>
        <NavigationButton text="Go back" android.systemIcon="ic_menu_back" @tap="goBack" />
        <Label text="Einstellungen" />
      </ActionBar>
      <Label text="HellO" />
    </Page>
  </Frame>
</template>
<script>
export default {
  methods: {
    goBack() {
      this.$modal.close();
    }
  }
};
</script>