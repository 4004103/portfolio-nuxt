<template>
  <v-layout wrap row>
    <!-- s: resume -->
    <v-flex
      xs12
      border
      class="section resume mx-height d-flex align-center justify-center"
    >
      <v-col class="content_wrap content_page1 d-flex row">
        <h2>이력서 및 경력기술서</h2>
        <v-col class="d-flex col-12 flex-column profile_wrap">
          <h3 class="mt-0 mb-10">프로필</h3>
          <dl class="d-flex mb-10" v-for="text in profile" :key="text.title">
            <dt class="title">{{ text.title }}</dt>
            <dd class="content">{{ text.content }}</dd>
          </dl>
        </v-col>
        <v-col class="d-flex col-12 flex-column career_wrap mt-12">
          <h3 class="mt-0 mb-10">경력</h3>
          <dl
            class="d-flex flex-column mb-10"
            v-for="text in career"
            :key="text.title"
          >
            <dt class="title">{{ text.title }}</dt>
            <dd class="content ml-4">
              <small class="d-flex gray--text">{{ text.term }}</small>
              {{ text.content }}
            </dd>
          </dl>
        </v-col>
        <v-col class="d-flex col-12 flex-column mt-12">
          <h3 class="mt-0 mb-10">학력</h3>
          <dl class="d-flex flex-column mb-10">
            <dt class="career_title">동서울대학교 항공서비스</dt>
            <dd class="career_content">
              <small class="d-flex gray--text">2011년 3월 ~ 2013년 2월</small>
            </dd>
          </dl>
        </v-col>
        <v-col class="d-flex col-12 flex-column mt-12">
          <h3 class="mt-0 mb-10">전문 기술</h3>
          <p class="mb-6">전문 분야와 기술, 개발할 때 사용하는 도구입니다.</p>
          <ul>
            <li>웹 표준, 브라우저 호환성, 반응형 웹, 웹 접근성, SEO</li>
            <li>Vue, Nuxt</li>
            <li>HTML5</li>
            <li>CSS3, Sass</li>
            <li>Bootstrap, Vuetify, Material, FontAwesome</li>
            <li>npm</li>
            <li>Git, Chrome DevTools</li>
          </ul>
        </v-col>
        <v-col class="d-flex col-12 flex-column mt-12">
          <h3 class="mt-0 mb-10">협업</h3>
          <p class="mb-6">
            프로젝트 목표를 제대로 이해하고 기획 및 디자인을 존중하며 여러
            직군과 협업합니다.
          </p>
          <ul>
            <li>Slack, Email</li>
            <li>프로젝트 및 이슈 관리: Google Drive, GitHub, Trello</li>
            <li>디자인: Zeplin, Photoshop</li>
          </ul>
        </v-col>
        <v-col class="d-flex col-12 flex-column project_wrap mt-12">
          <h3 class="mt-0 mb-10">프로젝트</h3>
          <dl
            class="d-flex flex-column mb-12"
            v-for="text in project"
            :key="text.title"
          >
            <dt class="title">{{ text.title }}</dt>
            <dd class="content">
              <small class="d-flex gray--text">{{ text.term }}</small>
              {{ text.content }}<br />
              {{ text.content2 }}
              <a :href="text.src" target="_blank" class="d-flex">{{
                text.src
              }}</a>
            </dd>
          </dl>
        </v-col>
      </v-col>
    </v-flex>
    <!-- e: resume -->
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    profile: [
      {
        title: "이름",
        content: "조수아",
      },
      {
        title: "연락처",
        content: "010-4004-1006",
      },
      {
        title: "이메일",
        content: "4004103@gmail.com",
      },
      {
        title: "홈페이지",
        content: "https://4004103.github.io/portfolio-nuxt/",
      },
    ],
    career: [
      {
        title: "오퍼니티 개발팀 퍼블리싱 ",
        term: "2019년 12월 ~ 2020년 6월",
        content:
          "고객이 원하는 방을 설정하면 중개사가 알맞는 매물을 제안해주는 구방 프로젝트에서 퍼블리싱을 담당했습니다.",
      },
      {
        title: "푸른아이티 개발팀 퍼블리싱 ",
        term: "2017년 12월 ~ 2019년 10월",
        content:
          "웹 에이전시에서 퍼블리싱을 담당했습니다. 맞춤형 홈페이지 퍼블리싱과 유지보수, 사내 기본 솔루션 유지보수를 진행했습니다.",
      },
    ],
    project: [
      {
        title: "조수아 포트폴리오",
        term: "2020년 10월 ~ 2020년 11월",
        content: "저의 포트폴리오 사이트입니다.",
        content2:
          "Vue, Nuxt 사용 / Vuetify 컴포넌트 사용 / Sass 사용 / Material icon 사용 / 크로스브라우징.",
        src: "https://4004103.github.io/portfolio-nuxt/",
      },
      {
        title: "구방 - 중개사가 직접 찾아주는 매물",
        term: "2020년 1월 ~ 2020년 6월",
        content:
          "고객이 원하는 방을 설정하면 중개사가 알맞는 매물을 제안하는 구방에서 퍼블리싱을 담당했습니다. ",
        content2:
          "Vue, Nuxt 사용 / Vuetify 컴포넌트 사용 / Sass 사용 / 관리자 페이지 퍼블리싱 / Material icon 사용 / 크로스브라우징.",
        src: "https://9bang.kr/home",
      },
      {
        title: "재단법인 동천 10주년 기념 웹사이트",
        term: "제작기간: 2달",
        content:
          "Bootstrap을 사용해 반응형으로 작업했습니다. Jquery 라이브러리를 사용해 동적인 웹사이트를 만들었습니다. ",
        content2:
          "원 페이지 퍼블리싱 / Bootstrap / FontAwesome 사용 / 모바일 퍼스트 / 크로스브라우징.",
        src: "https://4004103.github.io/d10th/",
      },
      {
        title: "자이브솔루션즈 홈페이지 & 쇼핑몰",
        term: "제작기간: 3달",
        content:
          "그누보드 기반으로 기업의 웹사이트와 온라인 쇼핑몰 작업을 진행했습니다. ",
        content2: "bxSlider 라이브러리 사용 / FontAwesome 사용.",
        src: "https://jiveus.com/",
      },
      {
        title: "Superbook Korea",
        term: "제작기간: 2달",
        content: "그누보드 기반으로 맞춤형 홈페이지를 작업했습니다. ",
        src: "https://www.superbookkorea.org/index.php",
      },
      {
        title: "Good News World",
        term: "제작기간: 2달",
        content: "그누보드 기반으로 맞춤형 홈페이지를 작업했습니다. ",
        src: "https://gnworld.org/",
      },
      {
        title: "BF World",
        term: "제작기간: 2달",
        content: "그누보드 기반으로 맞춤형 홈페이지를 작업했습니다. ",
        src: "http://www.bfworld.org/",
      },
      {
        title: "한국장애인연맹(웹 접근성)",
        term: "제작기간: 2달",
        content:
          "그누보드 기반으로 맞춤형 홈페이지를 작업했습니다. 장애인의 사용성을 위하여 웹 접근성과 웹 표준 가이드를 준수하여 마크업 했습니다. 웹 접근성 마크를 획득했습니다.",
        src: "https://dpikorea.org/",
      },
      {
        title: "창원시사화적경제지원센터(웹 접근성)",
        term: "제작기간: 2달",
        content:
          "그누보드 기반으로 맞춤형 홈페이지를 작업했습니다. 장애인의 사용성을 위하여 웹 접근성과 웹 표준 가이드를 준수하여 마크업 했습니다. 웹 접근성 마크를 획득했습니다.",
        src: "https://cwsec.or.kr/",
      },
    ],
  }),
};
</script>

<style lang="scss">
h3 {
  color: #5994c7;
}
// 프로필
.profile_wrap .title {
  font-weight: bold;
  min-width: 80px;
}

// 커리어
.career_wrap {
  .title {
    font-size: 1.2em;
  }
  .content {
    line-height: 1.5;
  }
}

// 프로젝트
.project_wrap {
  .title {
    font-size: 1.2em;
    font-weight: bold;
  }
  .content {
    line-height: 1.5;
    color: #636466;
    a {
      color: #5994c7;
      font-size: 0.825em;
    }
  }
}
@media (max-width: 599px) {
}
</style>
