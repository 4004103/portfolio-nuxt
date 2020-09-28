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
      class="section profile bg-color1 mx-height d-flex justify-center align-center"
    >
      <div class="content_wrap content_page1">
        <h2>What is Lorem Ipsum?</h2>
        <div class="d-flex">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </v-flex>
    <!-- e: profile -->

    <!-- s: what -->
    <v-flex
      xs12
      border
      class="section unknown1 bg-color2 mx-height d-flex justify-center align-center"
    >
      <div class="content_wrap">
        <h2>SKILL</h2>
        <div class="d-flex">
          content
        </div>
      </div>
    </v-flex>
    <!-- e: what -->

    <!-- s: what -->
    <v-flex
      xs12
      border
      class="section unknown2 bg-color3 mx-height d-flex justify-center align-center"
    >
      <div class="content_wrap">
        <h2>HEAD</h2>
        <div class="d-flex">
          content
        </div>
      </div>
    </v-flex>
    <!-- e: what -->

    <v-flex xs12 class="section portfolio d-flex justify-center align-center">
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="colors[i]" height="100%">
            <v-row class="fill-height" align="center" justify="center">
              <div class="display-3">{{ slide }} Slide</div>
            </v-row>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
    <v-flex>
      <v-bottom-navigation v-model="bottomNav">
        <v-btn value="recent">
          <span>Recent</span>
          <v-icon>mdi-history</v-icon>
          <v-slot>djfksjdfljsdfkdjfkds</v-slot>
        </v-btn>

        <v-btn value="favorites">
          <span>Favorites</span>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn value="nearby">
          <span>Nearby</span>
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </v-bottom-navigation>
    </v-flex>
  </v-layout>
</template>
<script lang="ts">
import { Action } from "vuex-class";
import { Component, Vue } from "vue-property-decorator";
// import Counter from '~/components/Counter.vue';

@Component({
  // components: {
  //   Counter,
  // },
  data() {
    // (지금은)메소드. 단독으로 있을때는 펑션, 클래스 안에 있거나 객체 안에 있으면 메소드라고 부름
    return {
      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
      bottomNav: "recent",
    };
  },
})
export default class Home extends Vue {
  @Action("counter/add") addToCounter: any;
  counter = 0;
  submit() {}
}
</script>
