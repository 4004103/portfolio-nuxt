<template>
  <v-layout wrap row>
    <v-flex xs12>
      <h1 class="hidden">
        조수아 포트폴리오
      </h1>
    </v-flex>
    <!-- // counter
    <v-flex xs12>
      <Counter />
    </v-flex>
    <v-flex xs12>
      <v-form>
        <v-text-field
          v-model="counter"
          label="add to counter"
          required
        />
      </v-form>
      <v-btn
        block
        color="primary"
        @click="submit"
      >
        add to counter
      </v-btn>
    </v-flex> -->

    <!-- s: main page image -->
    <v-flex
      xs12
      border
      class="section profile mx-height d-flex justify-center align-center"
    >
      <div class="content_page_main d-flex align-center">
        <div class="greeting d-flex">
          안녕하세요, 조수아입니다.
        </div>
      </div>
    </v-flex>
    <!-- e: main page image -->

    <!-- s: profile -->
    <v-flex
      xs12
      border
      class="section profile bg-color1 mx-height d-flex justify-center align-center  pa-6"
    >
      <div class="content_wrap content_page1">
        <h2>안녕하세요!</h2>
        <div class="d-flex">
          3년차 퍼블리셔 조수아입니다. 시맨틱 마크업, 웹 접근성, 크로스
          브라우징.. 프론트엔드에 많은 관심을 가지고 개발자가 되기 위해 달려가고
          있는 중입니다!
        </div>
      </div>
    </v-flex>
    <!-- e: profile -->

    <!-- s: what -->
    <v-flex
      xs12
      border
      class="section skill_wrap bg-color2 mx-height d-flex justify-center align-center pa-6"
    >
      <div class="content_wrap">
        <h2>skill</h2>
        <div class="d-flex justify-end">
          <div>ff</div>
          <div class="d-flex justify-end">
            <span class="html"></span>
          </div>
        </div>
      </div>
    </v-flex>
    <!-- e: what -->

    <!-- s: what -->
    <v-flex
      xs12
      border
      class="section portfolio_wrap bg-color3 mx-height d-flex justify-center align-center pa-6"
    >
      <div class="content_wrap">
        <h2>portfolio</h2>
        <div class="d-flex flex-wrap">
          <v-card
            class="mx-auto col-sm-5 col-xs-12"
            color="grey lighten-4"
            max-width="600"
            v-for="(item, i) in items"
            :key="i"
          >
            <v-img :aspect-ratio="16 / 9" :src="item.src"> </v-img>
            <v-card-text class="pt-6" style="position: relative;">
              <v-btn
                absolute
                color="orange"
                class="white--text"
                fab
                large
                right
                top
                :href="item.href"
              >
                <v-icon>reply</v-icon>
              </v-btn>
              <div
                class="font-weight-light grey--text title mb-2"
                v-text="item.grayTitle"
              ></div>
              <h3
                class="display-1 font-weight-light orange--text mb-2"
                v-text="item.orangeTitle"
              ></h3>
              <div
                class="font-weight-light title mb-2"
                v-text="item.text"
              ></div>
              <div class="demo_btn">
                <v-btn
                  class="ma-2"
                  outlined
                  color="red darken-3"
                  :href="item.mainDemo"
                  >Main Demo</v-btn
                >
                <v-btn
                  class="ma-2"
                  outlined
                  color="blue darken-4"
                  :href="item.subDemo"
                  >sub Demo</v-btn
                >
              </div>
            </v-card-text>
          </v-card>
        </div>
      </div>
    </v-flex>
    <!-- e: what -->

    <v-flex>
      <v-bottom-navigation v-model="bottomNav">
        <v-btn value="recent">
          <span>Recent</span>
          <v-icon>history</v-icon>
        </v-btn>

        <v-btn value="favorites">
          <span>Favorites</span>
          <v-icon>heart</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Nearby</span>
          <v-icon>map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    colors: [
      "brown lighten-5",
      "brown lighten-4",
      "brown lighten-3",
      "brown lighten-2",
      "brown lighten-1",
    ],
    bottomNav: "recent",
    items: [
      {
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        href: "https://4004103.github.io/d10th/",
        grayTitle: "Foster the People",
        orangeTitle: "동천 10th",
        text: "ajkdfadjfkajdlfjadkfd",
        mainDemo: "https://4004103.github.io/d10th/",
        subDemo: "https://4004103.github.io/d10th/index_today.html",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        href: "https://4004103.github.io/jive/",
        grayTitle: "ㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇㅇ",
        orangeTitle: "Jive Solutions",
        text: "ㅉㅉㅉㅉㅉㅉㅈ",
        mainDemo: "https://4004103.github.io/jive/",
        subDemo: "https://4004103.github.io/jive/sub01.html",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        href: "https://4004103.github.io/jive/",
        grayTitle: "3",
        orangeTitle: "ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
        text: "ㅉㅉㅉㅉㅉㅉㅈ",
        mainDemo: "",
        subDemo: "",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        href: "https://4004103.github.io/jive/",
        grayTitle: "4",
        orangeTitle: "ㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹㄹ",
        text: "ㅉㅉㅉㅉㅉㅉㅈ",
        mainDemo: "",
        subDemo: "",
      },
    ],
  }),
};
</script>
