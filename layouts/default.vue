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

    <v-app-bar
      app
      hide-on-scroll
      color="rgba(255, 255, 255)"
      class="appbar_wrap d-flex justify-center"
    >
      <nuxt-link to="/">
        <span color="black--text">SU A</span><span class="gray--text"> JO</span>
      </nuxt-link>
      <v-toolbar-title class="m_none"
        >안녕하세요, 조수아입니다.</v-toolbar-title
      >
      <!-- -->
    </v-app-bar>

    <!-- Sizes your content based upon application components -->
    <v-content class="user_layout">
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <div class="mx-auto">
          <nuxt />
        </div>
        <!-- If using vue-router -->
      </v-container>
    </v-content>

    <v-footer
      class="user_footer d-flex justify-center"
      width="100%"
      max-width="1000px"
      color="white"
    >
      <v-flex class="row footer_wrap justify-center">
        <v-col class="d-flex flex-column">
          <div class="mb-12 footer_title">
            <span>SU A</span><span class="gray--text"> JO</span>
          </div>
          <small class="gray--text"
            ><a href="https://github.com/4004103">github.com/4004103</a></small
          >
        </v-col>
        <v-col class="d-flex justify-end">
          <a href="tel:010-4004-1006" class="mr-6"><v-icon>call</v-icon></a>
          <a href="e-mail:4004103@naver.com"><v-icon>mail</v-icon></a>
        </v-col>
      </v-flex>
    </v-footer>
  </v-app>
</template>
<script lang="ts">
import { Component, Vue, Watch } from "vue-property-decorator";
// import { Getter, } from 'vuex-class';

@Component({
  data() {
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
  @Watch("getCount") onCountChange(val: Number, oldVal: Number) {
    this.countHasBeenUpdated = val !== oldVal;
  }

  countHasBeenUpdated = false;
}
</script>
