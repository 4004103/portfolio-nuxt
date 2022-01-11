<template>
  <v-layout wrap row>
    <v-flex xs12>
      <h1 class="hidden">조수아 포트폴리오</h1>
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
      class="section profile mx-height d-flex align-center justify-center ma-0"
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
          class="pa-sm-6 d-flex col-12 col-sm-3 flex-column justify-sm-space-between right-side_box"
        >
          <v-col class="grey lighten-3 pa-4">
            <v-col>
              <span class="lie_text">Hello ! </span>
            </v-col>
          </v-col>
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
        class="content_wrap content_page2 d-flex justify-sm-space-between flex-wrap"
      >
        <v-col class="col-sm-7 col-xs-12">
          <v-img src="./images/profile-img.jpeg" class="me"></v-img>
          <h2>skill</h2>
        </v-col>
        <v-col class="d-flex col-12 col-sm-5 flex-column skill_text">
          <h3 class="mb-4">제가 잘 하는 일은,</h3>
          <v-list-item two-line class="flex-column skill_list pa-0">
            <v-list-item-content
              v-for="text in skill"
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
          <v-col
            class="d-flex flex-wrap justify-center col-xs-12 col-sm-8 mb-0 mb-sm-12"
          >
            <v-card elevation="0">
              <nuxt-link to="../9bang">
                <v-img max-width="300px" src="./images/9bang_frame.png"></v-img>
              </nuxt-link>
            </v-card>
          </v-col>
          <v-col class="col-xs-12 col-sm-4 mb-12 mb-sm-0">
            <h3 class="mb-4">Recent Work</h3>
            <p>
              최근 작업물인 구방 입니다.<br />
              <br />
              고객이 원하는 방의 조건을 입력하면 중개사가 적합한 매물을
              추천해주는 서비스 입니다.<br />
              <br />
              퍼블리싱을 담당하였습니다.<br />
              <br />
              클릭하면 좀 더 자세한 내용을 볼 수 있어요!<br />
            </p>
          </v-col>
        </div>

        <div class="d-flex justify-sm-space-between flex-xs-column row">
          <v-col class="col-xs-12 col-sm-3">
            <span class="lie_text mb-6">Click!</span>
            <p class="my-6">Demo 버튼을 클릭하면 더 자세히 볼 수 있어요😃</p>
            <p>그누보드를 기반으로 한 작업물입니다.</p>
          </v-col>
          <v-col class="d-flex flex-wrap col-12 col-sm-9 pa-0">
            <v-col
              v-for="card in cards"
              :key="card.title"
              class="col-12 col-sm-6"
            >
              <v-card class="realtive version1 col-xs-12">
                <v-img
                  :src="card.src"
                  class="white--text align-end"
                  gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                  height="400px"
                ></v-img>
                <v-divider></v-divider>
                <v-card-title
                  class="justify-center justify-sm-start"
                  v-text="card.title"
                ></v-card-title>
                <v-card-text min-height="300px">
                  <p v-text="card.textcontent"></p>
                  <p class="mb-0">퍼블리싱: 100%</p>
                </v-card-text>
                <v-card-actions
                  class="d-flex justify-center justify-sm-start row ma-0 pa-4 pt-0"
                >
                  <v-btn
                    color="gray"
                    small
                    :href="card.mainDemo"
                    elevation="2"
                    outlined
                    target="_blank"
                  >
                    main demo
                  </v-btn>

                  <v-btn
                    color="gray"
                    small
                    :href="card.subDemo"
                    elevation="2"
                    outlined
                    target="_blank"
                  >
                    sub demo
                  </v-btn>
                  <v-btn
                    absolute
                    class="github_icon pa-2"
                    color="white"
                    fab
                    outlined
                    medium
                    :href="card.github"
                  >
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-col>
          </v-col>
        </div>
      </div>
    </v-flex>
    <!-- e: portfolio -->

    <!-- s: FAQ -->
    <v-flex
      xs12
      border
      class="section faq_wrap mx-height d-flex justify-center align-center"
    >
      <div
        class="content_wrap content_page4 d-flex justify-sm-space-between flex-column"
      >
        <h2 class="d-flex col-12 pa-0">FAQ</h2>
        <div class="d-flex justify-sm-space-between row">
          <v-col class="d-flex flex-wrap justify-center col-12 mb-0 mb-sm-12">
            <v-expansion-panels class="faq_panel_wrap">
              <v-expansion-panel>
                <v-expansion-panel-header
                  expand-icon="expand_less"
                  class="faq_panel_header"
                >
                  자신에 대해 자유롭게 표현해 주세요.
                </v-expansion-panel-header>
                <v-expansion-panel-content class="faq_panel_content">
                  안녕하십니까. 우주에서 긍정의 힘을 끌어오는 조수아입니다.😊
                  저는 최근 vue.js를 이용해 진행한 구방이라는 프로젝트에서
                  vuetify를 이용한 퍼블리싱을 담당했습니다. 이 과정에서
                  디자이너와 개발자와의 소통이 가장 중요하다는걸 배울 수
                  있었습니다. 매일 데일리 미팅을 진행 했었는데 이를 통해
                  혼자서는 해결하기 어려웠던 부분을 논의하면서 해결방안을 찾을
                  수 있었습니다. 또 상의가 필요한 부분이나 조율이 필요한 부분을
                  함께 생각하고 결정함으로써 시간을 절약하고 새로운 해결방안을
                  모색하는 등 많은 부분을 현명하게 처리해 나갈 수 있었습니다.
                  협업으로 시간을 단축해서 기술적인 부분이 더 발전된 서비스를
                  하고 싶습니다.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header
                  expand-icon="expand_less"
                  class="faq_panel_header"
                >
                  기술 경향을 파악하고 업무 역량을 강화하기 위한 본인의 학습
                  방법을 설명해주세요.
                </v-expansion-panel-header>
                <v-expansion-panel-content class="faq_panel_content">
                  사용하는 라이브러리, 배우고 싶은 라이브러리 등을 검색해보고
                  공식문서를 읽어보고, SNS나 오픈카톡방에 참여해 기술 경향을
                  파악합니다. 현재 참여한 오픈카톡방은 유익한 정보 공유가
                  활발하고 질문했을때 답변해주시는 능력자분들이 많으셔서 학습에
                  많은 도움이 됩니다. Youtube에서 동영상을 찾아보고 유료강의를
                  수강하기도 하며, 막히는 부분이 있으면 질문 하거나 Stack
                  Overflow 이용해 찾아보고 있습니다. 무엇보다 제 것으로 만드는게
                  중요하다고 생각합니다.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header
                  expand-icon="expand_less"
                  class="faq_panel_header"
                >
                  지난 프로젝트들의 아쉬운 점이 있었다면 무엇이고, 개선 방안은
                  무엇일까요?
                </v-expansion-panel-header>
                <v-expansion-panel-content class="faq_panel_content">
                  처음부터 투입되지 못한 프로젝트들이 아쉽습니다. 흔하게 말하는
                  것 중 하나가 남의 코드가 가장 어렵다는 것입니다. 저는 CSS를
                  유지보수 할 때 이런 어려움이 있었는데, 아무런 주석도 없고
                  설명도 없어서 파악하는데 시간이 오래걸렸던 경험이 있습니다.
                  이러한 부분을 개선하기 위해 저만의 룰을 정해서 전달사항등
                  CSS파일만 보더라도 파악이 빠르게 되는 주석들을 달아놓고
                  있습니다. 또, 프로젝트를 구성할 때 환경설정을 직접하고 배우지
                  않는다면, 다음에 같은 환경으로 개발을 진행하고 싶을 때
                  프로젝트를 시작하기 힘든 부분이 있었습니다. 그래서
                  토이프로젝트 등을 통해서 사용법에 익숙해지도록 하고 있습니다.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <v-expansion-panel>
                <v-expansion-panel-header
                  expand-icon="expand_less"
                  class="faq_panel_header"
                >
                  지금까지의 업무 경험에서 어떤 경험이 가장 가치가 있는지
                  이야기해주세요.
                </v-expansion-panel-header>
                <v-expansion-panel-content class="faq_panel_content">
                  새로운 걸 공부하고 그것을 상용에 오픈할 때마다 가치가 있다고
                  느낍니다. 최근에 vue와 nuxt를 사용하여 서비스를
                  오픈하였습니다. vue의 vuerify를 처음 사용하는 것이었어서
                  최대한 깔끔하게 퍼블리싱하고 싶은 욕심에 매일 데일리 미팅을
                  하며 개발자들과 상의도 많이 하고 열심히 테스트를 했습니다.
                  새로운 구조와 해왔던 것과 다른 사용법에 어렵기도 하였지만
                  해왔던 프로젝트보다 규모가 컸음에도 불구하고 이슈가 적게
                  나왔습니다.
                </v-expansion-panel-content>
              </v-expansion-panel>
              <!-- <v-expansion-panel>
                <v-expansion-panel-header
                  expand-icon="expand_less"
                  class="faq_panel_header"
                >
                  본인이 성공적으로 수행한 프로젝트의 성공요인이 무엇인지,
                  어려움을 극복하기 위해 어떤 방법을 사용했는지 이야기해주세요.
                </v-expansion-panel-header>
                <v-expansion-panel-content class="faq_panel_content">
                  최근에 구방이라는 프로젝트를 진행하며 의사소통이 정말
                  중요하다고 느꼈습니다. 혼자 개발하는 것이 아닌만큼 작업을
                  진행하는 모든 개발자와 디자이너가 소통을 해야하고 서로
                  엇갈리는 부분이 있다면 최선책을 찾는것이 중요했습니다. 어떤
                  문제가 생겼을때 다같이 상의하고 의논하며 가장 좋은 방향을 찾아
                  적용하는 것이 많은 시간소비를 줄여주었다고 생각합니다.
                </v-expansion-panel-content>
              </v-expansion-panel> -->
              <v-expansion-panel>
                <v-expansion-panel-header
                  expand-icon="expand_less"
                  class="faq_panel_header"
                >
                  입사 후 계획이 어떻게 되나요?
                </v-expansion-panel-header>
                <v-expansion-panel-content class="faq_panel_content">
                  입사 후 소통이 원활하여 일을 잘 해내는 사람이 되고 싶습니다.
                  여러 직군이 함께 진행하는 프로젝트인 만큼 협업이 중요하다고
                  생각합니다. 팀원들의 의견을 수용하고 받아들이며 제가 부족한
                  부분은 채워나가는 사람이 되고싶습니다. 제가 성장하는것이
                  회사의 성장에도 많은 도움이 된다고 생각하며 모두가 함께 일하기
                  좋은 사람이 되는것이 현재 제 목표입니다. 또 개발의 경계가
                  희미한 만큼 퍼블리싱 업무를 뛰어넘어 프론트엔드까지 역량을
                  키우는것도 목표로 삼고 있습니다. [ 최후의 승리는 출발선에서의
                  비약이 아니라 결승점까지의 끈기와 노력이다. ] 라는 좌우명으로
                  저의 목표 결승점까지 포기하지않고 노력하겠습니다.
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-col>
        </div>
      </div>
    </v-flex>
    <!-- e: FAQ -->

    <!-- s: contact -->
    <v-flex
      xs12
      border
      class="section contact mx-height d-flex align-center justify-center"
    >
      <v-col class="content_wrap content_page4 d-flex align-center row">
        <v-col class="d-flex col-12 flex-column justify-center align-center">
          <h2>함께 일할 퍼블리셔를 찾고 계신가요?</h2>
          <v-list-item class="flex-column mb-6">
            <v-list-item-content v-for="list in publist" :key="list.title">
              <v-list-item-title
                ><v-icon class="black--text mr-4" size="16px">check</v-icon
                >{{ list }}</v-list-item-title
              >
            </v-list-item-content>
          </v-list-item>
          <nuxt-link to="../resume">
            <v-btn outlined width="200">이력서</v-btn>
          </nuxt-link>
        </v-col>
      </v-col>
    </v-flex>
    <!-- e: contact -->
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    skill: [
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
        textcontent:
          "10주년 기념 원페이지 사이트 입니다. 동적 효과를 위해 Jquery 라이브러리를 사용했습니다.",
        mainDemo: "https://4004103.github.io/d10th/",
        subDemo: "https://4004103.github.io/d10th/index_today.html",
      },
      {
        title: "Jive Solutions",
        src: "./images/jive.png",
        github: "https://github.com/4004103/jive/tree/develop",
        textcontent:
          "기업의 홈페이지로 그누보드를 기반으로 쇼핑몰까지 함께 작업하였습니다.",
        mainDemo: "https://4004103.github.io/jive/",
        subDemo: "https://4004103.github.io/jive/sub01.html",
      },
      {
        title: "한국다양성연구소",
        src: "./images/diversity.png",
        github: "https://github.com/4004103/diversity/tree/develop",
        textcontent: "그누보드 기반으로 커스텀 작업 하였습니다.",
        mainDemo: "https://4004103.github.io/diversity/",
        subDemo: "https://4004103.github.io/diversity/sub01.html",
      },
      {
        title: "SuperBook Korea",
        src: "./images/superbook.png",
        github: "https://github.com/4004103/superbook/tree/develop",
        textcontent: "그누보드 기반으로 커스텀 작업 하였습니다.",
        mainDemo: "https://4004103.github.io/superbook/",
        subDemo: "https://4004103.github.io/superbook/sub01.html",
      },
      {
        title: "Good News",
        src: "./images/goodnews.png",
        github: "https://github.com/4004103/goodnews/tree/develop",
        textcontent: "그누보드 기반으로 커스텀 작업 하였습니다.",
        mainDemo: "https://4004103.github.io/goodnews/",
        subDemo: "https://4004103.github.io/goodnews/sub01.html",
      },
      {
        title: "BF World",
        src: "./images/bfworld.png",
        github: "https://github.com/4004103/bfworld/tree/develop",
        textcontent: "그누보드 기반으로 커스텀 작업 하였습니다.",
        mainDemo: "https://4004103.github.io/bfworld/",
        subDemo: "https://4004103.github.io/bfworld/sub01.html",
      },
      {
        title: "한국장애인연맹",
        src: "./images/dpi.png",
        github: "https://github.com/4004103/dpi/tree/develop",
        textcontent:
          "장애인의 사용성을 위하여 웹 접근성과 웹 표준을 준수하여 마크업하였습니다.",
        mainDemo: "https://4004103.github.io/dpi/",
        subDemo: "https://4004103.github.io/dpi/sub01.html",
      },
      {
        title: "창원시사회적경제지원센터",
        src: "./images/cwsec.png",
        github: "https://github.com/4004103/cwsec/tree/develop",
        textcontent:
          "장애인의 사용성을 위하여 웹 접근성과 웹 표준을 준수하여 마크업하였습니다.",
        mainDemo: "https://4004103.github.io/cwsec/",
        subDemo: "https://4004103.github.io/cwsec/sub01.html",
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
