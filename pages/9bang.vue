<template>
  <v-layout wrap row>
    <!-- s: 9bang -->
    <v-flex
      xs12
      border
      class="section 9bang mx-height d-flex align-center justify-center"
    >
      <v-col class="content_wrap content_page1 d-flex row">
        <v-col class="d-flex col-12 flex-column">
          <h2>9bang</h2>
          <p>
            고객이 원하는 방의 조건을 설정해 등록하면 중개사가 적합한 매물을
            제안하는 시스템.
          </p>
          <small class="mb-2">
            담당업무: Publishing (100%)<br />
            개발언어: Nuxt.js, Vue.js, Scss<br />
            링크: https://9bang.kr/home</small
          >

          <v-btn
            href="https://9bang.kr"
            small
            outlined
            class="mb-6"
            max-width="200px"
            target="_blank"
          >
            바로가기
          </v-btn>
          <p class="mb-10">
            Vue.js를 기반으로 Vuetify를 사용했습니다.<br />
            하나의 저장소에서 개발자들과 함께 작업하며 Git을 다루는 방법을
            배웠고<br />
            풀 반응형으로 어떤 디바이스에서 접속해도 사용자가 정보를 얻는데
            어려움이 없도록 했습니다.
          </p>

          <v-divider class="mb-10"></v-divider>
          <v-card class="mb-10">
            <v-img src="./images/9bang1.jpg"></v-img>
          </v-card>
          <v-card class="mb-10">
            <v-img src="./images/9bang2.jpg"></v-img>
          </v-card>
          <v-card class="mb-10">
            <v-img src="./images/9bang3.jpg"></v-img>
          </v-card>
          <v-card>
            <v-img src="./images/9bang4.jpg"></v-img>
          </v-card>
        </v-col>
      </v-col>
    </v-flex>
    <!-- e: 9bang -->
  </v-layout>
</template>

<script>
export default {
  data: () => ({}),
};
</script>

<style lang="scss">
@media (max-width: 599px) {
  .user_layout .content_wrap {
    padding-top: 2em !important;
    padding-bottom: 2em !important;
  }
}
</style>
