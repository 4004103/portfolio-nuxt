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
        <v-col class="d-flex col-12 col-sm-9 flex-column justify-sm-space-between">
          <h2>profile</h2>
          <div>
            이상의 열매를 눈이 위하여서, 봄날의 방황하였으며, 청춘 얼마나 것이다. 무엇이 가진 만천하의 그들의 위하여서. 속잎나고, 위하여 아니더면, 구하기 이상을 않는 청춘을 뜨거운지라, 위하여서. 내는 위하여서, 이상, 관현악이며, 심장은 가지에 인간에 지혜는 교향악이다. 그들의 많이 남는 방지하는 이상을 위하여 이상 속에서 것이다.
          </div>
        </v-col>
        <v-col
          class="grey lighten-3 pa-4 pa-sm-6 d-flex col-12 col-sm-3 col-offset-1 flex-column justify-sm-space-between right-side_box"
        >
          <span class="mb-6">Hello ! </span>
          <p>
            안녕하세요,</br>
            웹 퍼블리셔 조수아입니다.
          </p>
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
      <div class="content_wrap content_page2 d-flex justify-sm-space-between row">
        <v-col class="col-sm-9 col-xs-12">            
          <v-img 
            src="https://images.unsplash.com/photo-1598120719213-fd32e04101da?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
            class="me"
          ></v-img>
          <h2>skill</h2>
        </v-col>
        <v-col class="d-flex col-12 col-sm-3 flex-column skill_text">
            <h3>ASDFGHGHGF</h3>
            <div class="">text area</div>
            <div class="">text area</div>
            <div class="">text area</div>
            <div class="">text area</div>
        </v-col>
      </div>
    </v-flex>
    <!-- e: skill -->

    <v-carousel
      v-model="model"
      cycle
      hide-delimiter-background
      class="profile_carousel"
    >
      <v-carousel-item v-for="(slide, i) in slides" :key="i">
        <v-sheet :color="colors[i]" height="100%">
          <v-row class="fill-height" align="center" justify="center">
            <div class="display-3">{{ slide }}</div>
          </v-row>
        </v-sheet>
      </v-carousel-item>
    </v-carousel>

    <!-- s: portfolio -->
    <v-flex
      xs12
      border
      class="section portfolio_wrap mx-height d-flex justify-center align-center"
    >
      <div class="content_wrap content_page3 d-flex justify-sm-space-between row">
        <h2 class="d-flex">portfolio</h2>
        <v-col class="col-xs-12 col-sm-3">dafdadf</v-col>
        <v-col class="d-flex flex-wrap col-xs-12 col-sm-9">
          <v-card>
            최근작업물 구방!
          </v-card>
          <v-col 
            v-for="card in cards"
            :key="card.title"
            :cols="card.flex"
          >
            <v-card class="realtive version1">
              <v-img
                :src="card.src"
                class="white--text align-end"
                gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                height="400px"
              >
                <v-card-title class="pb-0" v-text="card.title"></v-card-title>
                <v-card-actions>
                  <v-btn
                    color="white"
                    text
                    :href="card.mainDemo"
                  >
                    main demo
                  </v-btn>

                  <v-btn
                    color="white"
                    text
                    :href="card.subDemo"
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
    </v-flex>
    <!-- e: portfolio -->

  </v-layout>
</template>

<script>
export default {
  data: () => ({
    model: 0,
    colors: [
      "indigo",
      "warning",
      "pink darken-2",
      "red lighten-1",
      "deep-purple accent-4",
    ],
    slides: ["하나", "둘", "세엣", "넷"],
    bottomNav: "recent",
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
