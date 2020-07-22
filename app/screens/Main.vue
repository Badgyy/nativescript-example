<template>
  <Page actionBarHidden="true">
    <BottomNavigation>
      <TabStrip>
        <TabStripItem>
          <Label text="Home"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label text="Browsee"></Label>
        </TabStripItem>
        <TabStripItem>
          <Label text="Search"></Label>
        </TabStripItem>
      </TabStrip>

      <TabContentItem>
        <Frame id="homeTabFrame">
          <Overview />
        </Frame>
      </TabContentItem>

      <TabContentItem>
        <Label text="Hello" />
      </TabContentItem>

      <TabContentItem>
        <Label text="huhu" />
      </TabContentItem>
    </BottomNavigation>
  </Page>
</template>

<script>
import * as frameModule from "@nativescript/core/ui/frame";
import { EventData } from "@nativescript/core/ui/core/view";
import firebase from "nativescript-plugin-firebase";
import Vue from "vue";
import Overview from "./Overview";
import Settings from "./Settings";

import {
  BottomNavigationBar,
  TabPressedEventData,
  TabReselectedEventData,
  TabSelectedEventData,
} from "nativescript-material-bottomnavigationbar";

export default {
  components: { Overview },
  data() {
    return {
      visibility: 1,
      currentTab: 0,
    };
  },
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
  watch: {
    currentTab(val) {
      alert(val);
    },
  },
  methods: {
    openSettings() {
      this.$showModal(Settings, { fullscreen: true });
    },
    onBottomNavigationTabSelected(args) {
      this.currentTab = args.newIndex;
    },
    signOut() {
      firebase.logout();
    },
  },
};
</script>
<style>
TabStrip {
  font-size: 12;
}

TabStripItem,
TabContentItem .h1 {
  color: #ffffff;
}

TabStripItem:active {
  color: #000000;
}

TabStripItem.first {
  background-color: #ac92eb;
}

TabStripItem.first:active,
TabContentItem.first {
  background-color: #6d00f1;
}

TabStripItem.second {
  background-color: #4fc1e8;
}

TabStripItem.second:active,
TabContentItem.second {
  background-color: #007efe;
}

TabStripItem.third {
  background-color: #a0d568;
}

TabStripItem.third:active,
TabContentItem.third {
  background-color: #00bb00;
}

TabStripItem.fourth {
  background-color: #ffce54;
}

TabStripItem.fourth:active,
TabContentItem.fourth {
  background-color: #fef601;
}

TabStripItem.fifth {
  background-color: #ed5564;
}

TabStripItem.fifth:active,
TabContentItem.fifth {
  background-color: #dd0000;
}
</style>
