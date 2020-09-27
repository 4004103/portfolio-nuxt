<template>
  <v-app>
    <!-- // 사이드메뉴
    <v-navigation-drawer
      v-model="sideNavigationActive"
      app
      color="primary"
      left
      absolute
      dark
    >
      <v-list
        dense
        nav
        class="py-0"
      >
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Application</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->

    <v-app-bar app hide-on-scroll>
      <v-btn>
        home
      </v-btn>
      <v-toolbar-title>조수아 포트폴리오</v-toolbar-title>
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <v-card class="mx-auto">
          <v-card>
            <nuxt />
          </v-card>
        </v-card>
        <!-- If using vue-router -->
      </v-container>
    </v-content>

    <v-footer app>
      <!-- -->
    </v-footer>
    <v-snackbar v-model="countHasBeenUpdated" :timeout="3000" bottom right>
      count has been changed
    </v-snackbar>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue, Watch, } from 'vue-property-decorator';
// import { Getter, } from 'vuex-class';

@Component({
  data () {
    return {
      /* 사이드메뉴
      sideNavigationActive: true,
      items: [
        { title: 'Dashboard', icon: 'dashboard', },
        { title: 'Photos', icon: 'photo', },
        { title: 'About', icon: 'check_circle', },
      ],
      */
    };
  },
})
export default class Home extends Vue {
  // @Getter('counter/getCount') getCount: any
  @Watch('getCount') onCountChange (val: Number, oldVal: Number) {
    this.countHasBeenUpdated = val !== oldVal;
  }

  countHasBeenUpdated = false;
}
</script>
