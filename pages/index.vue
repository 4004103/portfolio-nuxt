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
      class="section profile mx-height d-flex justify-center align-center flex-column"
    >
      <div class="content_page_main d-flex align-center">
        <div class="greeting d-flex align-center justify-center col-12">
          Welcome,</br>
          Portfolio Of Su a
        </div>
      </div>
      <div
        class="content_page_text d-flex justify-center align-center bg-color1"
      >
        <div class="d-flex col-12 pa-6">
          충분히 인간의 가슴이 뜨고, 낙원을 있다. 꾸며 그들의 이상은 듣는다. 고행을 가지에 청춘은 있는 얼마나 밝은 역사를 기관과 무엇을 약동하다. 위하여 그것을 그들에게 튼튼하며, 영원히 가장 안고, 끝까지 봄바람이다. 붙잡아 생의 능히 속잎나고, 내려온 가치를 뜨고, 하였으며, 보내는 이것이다. 피가 얼마나 인생의 열매를 지혜는 꾸며 위하여서. 이상이 천고에 없는 이상의 품고 말이다. 되는 투명하되 내려온 그들의 보내는 방황하여도, 불러 힘있다. 인간은 역사를 청춘 듣기만 청춘의 있음으로써 것이다. 바이며, 이상을 굳세게 뛰노는 것은 뿐이다.
        </div>
      </div>
    </v-flex>
    <!-- e: main page image -->

    <!-- s: profile -->
    <v-flex
      xs12
      border
      class="section profile bg-color2 mx-height d-flex justify-center align-center  pa-6"
    >
      <div class="content_wrap content_page1">
        <h2>about</h2>
        <div class="d-flex">
          3년차 퍼블리셔 조수아입니다. 시맨틱 마크업, 웹 접근성, 크로스
          브라우징.. 프론트엔드에 많은 관심을 가지고 개발자가 되기 위해 달려가고
          있는 중입니다!
        </div>
      </div>
    </v-flex>
    <!-- e: profile -->

    <!-- s: skill -->
    <v-flex
      xs12
      border
      class="section skill_wrap bg-color3 mx-height d-flex justify-center align-center pa-6"
    >
      <div class="content_wrap">
        <h2>skill</h2>
        <div class="d-flex row">
          <div class="col-sm-3 col-xs-12">img area</div>
          <div class="col-sm-9 col-xs-12 d-flex flex-wrap">
            <div class="col-12">text area</div>
            <div class="col-12">text area</div>
            <div class="col-12">text area</div>
            <div class="col-12">text area</div>
          </div>
        </div>
      </div>
    </v-flex>
    <!-- e: skill -->

    <!-- s: what -->
    <v-flex
      xs12
      border
      class="section portfolio_wrap bg-color4 mx-height d-flex justify-center align-center pa-6"
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
                <span class="github-icon"></span>
                <!-- <v-icon>reply</v-icon> -->
                <!-- <img
                  src="https://api.iconify.design/mdi-github.svg"
                  alt="github"
                /> -->
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
                  >Main Page</v-btn
                >
                <v-btn
                  class="ma-2"
                  outlined
                  color="blue darken-4"
                  :href="item.subDemo"
                  >Sub Page</v-btn
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
        href: "https://9bang.kr/home",
        grayTitle: "Foster the People",
        orangeTitle: "구방",
        text: "ajkdfadjfkajdlfjadkfd",
        mainDemo: "https://9bang.kr/home",
        subDemo: "https://biz.9bang.kr/r/gubangs",
      },
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
        href: "https://4004103.github.io/diversity/",
        grayTitle: "3",
        orangeTitle: "한국다양성연구소",
        text: "ㅉㅉㅉㅉㅉㅉㅈ",
        mainDemo: "https://4004103.github.io/diversity/",
        subDemo: "https://4004103.github.io/diversity/sub01.html",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        href: "https://4004103.github.io/superbook/",
        grayTitle: "4",
        orangeTitle: "Superbook Korea",
        text: "ㅉㅉㅉㅉㅉㅉㅈ",
        mainDemo: "https://4004103.github.io/superbook/",
        subDemo: "https://4004103.github.io/superbook/sub01.html",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        href: "https://4004103.github.io/goodnews/",
        grayTitle: "4",
        orangeTitle: "Good News",
        text: "ㅉㅉㅉㅉㅉㅉㅈ",
        mainDemo: "https://4004103.github.io/goodnews/",
        subDemo: "https://4004103.github.io/goodnews/sub01.html",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        href: "https://4004103.github.io/dpi/",
        grayTitle: "4",
        orangeTitle: "한국장애인연맹",
        text: "ㅉㅉㅉㅉㅉㅉㅈ",
        mainDemo: "https://4004103.github.io/dpi/",
        subDemo: "https://4004103.github.io/dpi/sub01.html",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        href: "https://4004103.github.io/bfworld/",
        grayTitle: "4",
        orangeTitle: "BF World",
        text: "ㅉㅉㅉㅉㅉㅉㅈ",
        mainDemo: "https://4004103.github.io/bfworld/",
        subDemo: "https://4004103.github.io/bfworld/sub01.html",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        href: "https://4004103.github.io/cwsec/",
        grayTitle: "4",
        orangeTitle: "창원시사회적경제지원센터",
        text: "ㅉㅉㅉㅉㅉㅉㅈ",
        mainDemo: "https://4004103.github.io/cwsec/",
        subDemo: "https://4004103.github.io/cwsec/sub01.html",
      },
      {
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        href: "https://4004103.github.io/bbsisters/",
        grayTitle: "4",
        orangeTitle: "비비시스터즈",
        text: "ㅉㅉㅉㅉㅉㅉㅈ",
        mainDemo: "https://4004103.github.io/bbsisters/",
        subDemo: "https://4004103.github.io/bbsisters/sub01.html",
      },
    ],
  }),
};
</script>
