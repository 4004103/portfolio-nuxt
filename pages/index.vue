<template>
  <v-layout wrap row>
    <v-flex xs12>
      <h1 class="hidden">
        조수아 포트폴리오
      </h1>
    </v-flex>

    <!-- s: main page image -->
    <v-flex
      xs12
      border
      class="section main_img d-flex align-center flex-column"
    >
      <div class="content_page_main d-flex align-center justify-center">
        <div class="col-12 greeting d-flex flex-column justify-center">
          <h2>SU A&nbsp;<span class="white--text">JO</span></h2>
          <div class="info_text white--text mb-sm-12 mb-6">
            Welcome to my portfolio site.
          </div>
          <div class="skill_text white--text d-flex flex-column">
            <span>Publisher</span>
            <span>1991</span>
            <span>Bicycle Riding</span>
            <span>Active</span>
          </div>
        </div>
      </div>
    </v-flex>
    <!-- e: main page image -->

    <!-- s: profile -->
    <v-flex
      xs12
      border
      class="section profile mx-height d-flex align-center justify-center"
    >
      <v-col
        class="content_wrap content_page1 d-flex justify-sm-space-between row"
      >
        <v-col
          class="d-flex col-12 col-sm-9 flex-column justify-sm-space-between"
        >
          <h2>profile</h2>
          <div>
            영원히 무한한 같이, 그들을 같이 주며, 인생을 교향악이다. 웅대한
            이상은 얼마나 말이다. 사는가 황금시대의 위하여, 칼이다. 이상의
            곳으로 듣기만 것은 얼음과 오아이스도 얼음 어디 것이다. 착목한는
            가치를 끓는 원대하고, 황금시대다. 열락의 물방아 풍부하게 보이는
            뜨거운지라, 위하여서.
            <br />
            이성은 온갖 그들에게 생명을 풍부하게 아름답고 때에, 청춘의 것이다.
            가장 듣기만 인생을 사막이다. 이상은 능히 꾸며 굳세게 청춘을 눈이
            모래뿐일 있는가? 만물은 생생하며, 불어 과실이 몸이 이상의 사랑의
            교향악이다. 봄바람을 사라지지 수 부패뿐이다. 피고, 우리의 품었기
            풍부하게 더운지라 용감하고 운다. 찾아다녀도, 피고, 대고, 뛰노는 우는
            영락과 싹이 것이다.
          </div>
        </v-col>
        <v-col
          class="grey lighten-3 pa-4 pa-sm-6 d-flex col-12 col-sm-3 col-offset-1 flex-column justify-sm-space-between right-side_box"
        >
          <span class="lie_text mb-6">Hello ! </span>
        </v-col>
      </v-col>
    </v-flex>
    <!-- e: profile -->

    <!-- s: skill -->
    <v-flex
      xs12
      border
      class="section skill_wrap mx-height d-flex justify-center align-center"
    >
      <div
        class="content_wrap content_page2 d-flex justify-sm-space-between row"
      >
        <v-col class="col-sm-9 col-xs-12">
          <v-img
            max-width="100%"
            src="https://images.unsplash.com/photo-1598120719213-fd32e04101da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            class="me"
          ></v-img>
          <h2>skill</h2>
        </v-col>
        <v-col class="d-flex col-12 col-sm-3 flex-column skill_text">
          <h3>제가 자신 있는 일은요,</h3>
          <v-list-item two-line class="flex-column skill_list">
            <v-list-item-content
              v-for="text in test"
              :key="text.title"
              clas="align-start"
            >
              <v-list-item-title v-text="text.title"></v-list-item-title>
              <v-list-item-subtitle v-text="text.second"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </div>
    </v-flex>
    <!-- e: skill -->

    <!-- s: portfolio -->
    <v-flex
      xs12
      border
      class="section portfolio_wrap mx-height d-flex justify-center align-center"
    >
      <div
        class="content_wrap content_page3 d-flex justify-sm-space-between row"
      >
        <h2 class="d-flex">portfolio</h2>

        <v-col class="d-flex flex-wrap col-xs-12 col-sm-8 mb-12">
          <v-card>
            <v-img
              max-width="100%"
              src="https://w7.pngwing.com/pngs/978/906/png-transparent-silver-imac-illustration-macbook-pro-imac-apple-computer-desktop-pc-template-angle-electronics.png"
            ></v-img>
          </v-card>
        </v-col>
        <v-col class="col-xs-12 col-sm-4">
          <h3>Recent Work</h3>
        </v-col>

        <v-col class="col-xs-12 col-sm-3">
          <span class="lie_text mb-6">Click!</span>
          <p>클릭하면 작업물을 더 자세히 볼 수 있습니다!</p>
        </v-col>
        <v-col class="d-flex flex-wrap col-xs-12 col-sm-9">
          <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
            <v-card class="realtive version1">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400px"
              >
                <v-card-title class="pb-0" v-text="card.title"></v-card-title>
                <v-card-actions>
                  <v-btn color="white" text :href="card.mainDemo">
                    main demo
                  </v-btn>

                  <v-btn color="white" text :href="card.subDemo">
                    sub demo
                  </v-btn>
                  <v-btn
                    absolute
                    color="blue-grey darken-3 github_icon"
                    class="white--text"
                    fab
                    medium
                    :href="card.github"
                  >
                  </v-btn>
                </v-card-actions>
              </v-img>
            </v-card>
          </v-col>
        </v-col>
      </div>
    </v-flex>
    <!-- e: portfolio -->

    <!-- s: contact -->
    <v-flex
      xs12
      border
      class="section contact mx-height d-flex align-center justify-center"
    >
      <v-col
        class="content_wrap content_page4 d-flex justify-sm-space-between row"
      >
        <v-col class="d-flex col-12 flex-column justify-sm-space-between">
          <h2>함께 일할 퍼블리셔를 찾고 계신가요?</h2>
          <p>그게 바로 접니다</p>
          <v-btn href="">이력서</v-btn>
        </v-col>
      </v-col>
    </v-flex>
    <!-- e: contact -->
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    test: [
      {
        title: "시맨틱 마크업",
        second: "html",
      },
      {
        title: "css",
        second: "css",
      },
      {
        title: "javascript",
        second: "공부!",
      },
      {
        title: "협업",
        second: "제플린, 깃",
      },
    ],
    cards: [
      {
        title: "동천 10th",
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        github: "https://github.com/4004103/d10th/tree/develop",
        mainDemo: "https://4004103.github.io/d10th/",
        subDemo: "https://4004103.github.io/d10th/index_today.html",
        flex: 12,
      },
      {
        title: "Jive Solutions",
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        github: "https://github.com/4004103/jive/tree/develop",
        mainDemo: "https://4004103.github.io/jive/",
        subDemo: "https://4004103.github.io/jive/sub01.html",
        flex: 6,
      },
      {
        title: "한국다양성연구소",
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        github: "https://github.com/4004103/diversity/tree/develop",
        mainDemo: "https://4004103.github.io/diversity/",
        subDemo: "https://4004103.github.io/diversity/sub01.html",
        flex: 6,
      },
      {
        title: "SuperBook Korea",
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        github: "https://github.com/4004103/superbook/tree/develop",
        mainDemo: "https://4004103.github.io/superbook/",
        subDemo: "https://4004103.github.io/superbook/sub01.html",
        flex: 12,
      },
      {
        title: "Good News",
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        github: "https://github.com/4004103/goodnews/tree/develop",
        mainDemo: "https://4004103.github.io/goodnews/",
        subDemo: "https://4004103.github.io/goodnews/sub01.html",
        flex: 6,
      },
      {
        title: "한국장애인연맹",
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        github: "https://github.com/4004103/dpi/tree/develop",
        mainDemo: "https://4004103.github.io/dpi/",
        subDemo: "https://4004103.github.io/dpi/sub01.html",
        flex: 6,
      },
      {
        title: "BF World",
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        github: "https://github.com/4004103/bfworld/tree/develop",
        mainDemo: "https://4004103.github.io/bfworld/",
        subDemo: "https://4004103.github.io/bfworld/sub01.html",
        flex: 12,
      },
      {
        title: "창원시사회적경제지원센터",
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        github: "https://github.com/4004103/cwsec/tree/develop",
        mainDemo: "https://4004103.github.io/cwsec/",
        subDemo: "https://4004103.github.io/cwsec/sub01.html",
        flex: 6,
      },
      {
        title: "비비시스터즈 워킹투어",
        src: "https://cdn.vuetifyjs.com/images/cards/kitchen.png",
        github: "https://github.com/4004103/bbsisters/tree/develop",
        mainDemo: "https://4004103.github.io/bbsisters/",
        subDemo: "https://4004103.github.io/bbsisters/sub01.html",
        flex: 6,
      },
    ],
  }),
};
</script>
