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
            안녕하세요! 3년차 웹 퍼블리셔 조수아입니다.<br />
            쉽고 깔끔한 코드를 표현하는 걸 좋아합니다.<br />
            <br />
            탄탄한 코드와 유지보수를 위한 컴포넌트 단위의 마크업에 관심이
            많습니다.<br />
            <br />
            사용자의 입장에서 한번 더 생각하고 더 나은 방향을 위해
            고민합니다.<br />
            <br />
            브라우저 위에 그려지는것들이 재미있고 완성된 작업물을 보는 것이
            뿌듯합니다.<br />
            <br />
            차후 프론트엔드로 전향하는 것이 현재 저의 목표입니다.<br />
            목표를 위해 하루하루 꾸준함을 잃지 않으려 노력합니다.<br />
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
        <v-col class="col-sm-7 col-xs-12">
          <v-img src="./images/profile-img.jpeg" class="me"></v-img>
          <h2>skill</h2>
        </v-col>
        <v-col class="d-flex col-12 col-sm-5 flex-column skill_text">
          <h3 class="mb-8">제가 잘 하는 일은,</h3>
          <v-list-item two-line class="flex-column skill_list pa-0">
            <v-list-item-content
              v-for="text in test"
              :key="text.title"
              clas=""
              width="100%"
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
        class="content_wrap content_page3 d-flex justify-sm-space-between flex-column"
      >
        <h2 class="d-flex col-12 pa-0">portfolio</h2>
        <div class="d-flex justify-sm-space-between row">
          <v-col class="d-flex flex-wrap col-xs-12 col-sm-8 mb-0 mb-sm-12">
            <v-card>
              <v-img
                max-width="100%"
                src="https://w7.pngwing.com/pngs/978/906/png-transparent-silver-imac-illustration-macbook-pro-imac-apple-computer-desktop-pc-template-angle-electronics.png"
              ></v-img>
            </v-card>
          </v-col>
          <v-col class="col-xs-12 col-sm-4 mb-12 mb-sm-0">
            <h3>Recent Work</h3>
          </v-col>
        </div>

        <div class="d-flex justify-sm-space-between flex-xs-column row">
          <v-col class="col-xs-12 col-sm-3">
            <span class="lie_text mb-6">Click!</span>
            <p>버튼을 클릭하면 더 자세히 볼 수 있습니다.</p>
          </v-col>
          <v-col class="d-flex flex-wrap col-xs-12 col-sm-9 pa-0">
            <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
              <v-card class="realtive version1 col-xs-12">
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="400px"
                >
                  <v-card-title
                    class="pb-0 justify-center justify-sm-start"
                    v-text="card.title"
                  ></v-card-title>
                  <v-card-actions class="d-flex flex-column flex-sm-row">
                    <v-btn
                      color="white"
                      small
                      :href="card.mainDemo"
                      elevation="2"
                      class="mb-2 mb-sm-0"
                      outlined
                    >
                      main demo
                    </v-btn>

                    <v-btn
                      color="white"
                      small
                      :href="card.subDemo"
                      elevation="2"
                      class="ml-0 ml-sm-2"
                      outlined
                    >
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
      </div>
    </v-flex>
    <!-- e: portfolio -->

    <!-- s: contact -->
    <v-flex
      xs12
      border
      class="section contact mx-height d-flex align-center justify-center"
    >
      <v-col class="content_wrap content_page4 d-flex align-center row">
        <v-col
          class="d-flex col-12 flex-column justify-center align-center pa-0"
        >
          <h2>함께 일할 퍼블리셔를 찾고 계신가요?</h2>
          <v-list-item v-for="list in publist" :key="list.title">
            <v-list-item-content>
              <v-list-item-title
                ><v-icon class="black--text mr-4" size="16px">check</v-icon
                >{{ list }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <v-btn href="" outlined width="200">이력서</v-btn>
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
        title: "Markup",
        second: "웹 표준을 준수하며 꼼꼼한 시멘틱 마크업을 합니다.",
      },
      {
        title: "Development",
        second: "웹 퍼블리싱을 이해하고 잘 다룹니다.",
      },
      {
        title: "Skill",
        second: "Git, Zeplin, Sass등 협업을 위한 지식을 배우고 적용합니다.",
      },
      {
        title: "Co-work",
        second:
          "개발자, 디자이너와 함께 일하며 원활한 협업을 위해 노력합니다. ",
      },
    ],
    cards: [
      {
        title: "동천 10th",
        src: "./images/d10th.png",
        github: "https://github.com/4004103/d10th/tree/develop",
        mainDemo: "https://4004103.github.io/d10th/",
        subDemo: "https://4004103.github.io/d10th/index_today.html",
        flex: 12,
      },
      {
        title: "Jive Solutions",
        src: "./images/jive.png",
        github: "https://github.com/4004103/jive/tree/develop",
        mainDemo: "https://4004103.github.io/jive/",
        subDemo: "https://4004103.github.io/jive/sub01.html",
        flex: 6,
      },
      {
        title: "한국다양성연구소",
        src: "./images/diversity.png",
        github: "https://github.com/4004103/diversity/tree/develop",
        mainDemo: "https://4004103.github.io/diversity/",
        subDemo: "https://4004103.github.io/diversity/sub01.html",
        flex: 6,
      },
      {
        title: "SuperBook Korea",
        src: "./images/superbook.png",
        github: "https://github.com/4004103/superbook/tree/develop",
        mainDemo: "https://4004103.github.io/superbook/",
        subDemo: "https://4004103.github.io/superbook/sub01.html",
        flex: 12,
      },
      {
        title: "Good News",
        src: "./images/goodnews.png",
        github: "https://github.com/4004103/goodnews/tree/develop",
        mainDemo: "https://4004103.github.io/goodnews/",
        subDemo: "https://4004103.github.io/goodnews/sub01.html",
        flex: 6,
      },
      {
        title: "한국장애인연맹",
        src: "./images/dpi.png",
        github: "https://github.com/4004103/dpi/tree/develop",
        mainDemo: "https://4004103.github.io/dpi/",
        subDemo: "https://4004103.github.io/dpi/sub01.html",
        flex: 6,
      },
      {
        title: "BF World",
        src: "./images/bfworld.png",
        github: "https://github.com/4004103/bfworld/tree/develop",
        mainDemo: "https://4004103.github.io/bfworld/",
        subDemo: "https://4004103.github.io/bfworld/sub01.html",
        flex: 12,
      },
      {
        title: "창원시사회적경제지원센터",
        src: "./images/cwsec.png",
        github: "https://github.com/4004103/cwsec/tree/develop",
        mainDemo: "https://4004103.github.io/cwsec/",
        subDemo: "https://4004103.github.io/cwsec/sub01.html",
        flex: 6,
      },
      {
        title: "비비시스터즈 워킹투어",
        src: "./images/bbsisters.png",
        github: "https://github.com/4004103/bbsisters/tree/develop",
        mainDemo: "https://4004103.github.io/bbsisters/",
        subDemo: "https://4004103.github.io/bbsisters/sub01.html",
        flex: 6,
      },
    ],
    publist: [
      "경험을 갖춘 퍼블리셔",
      "책임감있고 성실한 사람",
      "성장하며 시너지를 발휘하는 팀원",
    ],
  }),
};
</script>
