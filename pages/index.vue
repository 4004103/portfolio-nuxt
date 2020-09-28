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
      class="section skill_wrap bg-color2 mx-height d-flex justify-center align-center"
    >
      <div class="content_wrap">
        <h2>SKILL</h2>
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
      class="section portfolio_wrap bg-color3 mx-height d-flex justify-center align-center"
    >
      <div class="content_wrap">
        <h2>HEAD</h2>
        <div class="d-flex">
          <v-carousel
            cycle
            height="auto"
            hide-delimiter-background
            show-arrows-on-hover
          >
            <v-carousel-item v-for="(slide, i) in slides" :key="i">
              <v-sheet :color="colors[i]" height="100%">
                <v-row class="fill-height" align="center" justify="center">
                  <v-hover v-slot:default="{ hover }">
                    <v-card
                      class="mx-auto"
                      color="grey lighten-4"
                      max-width="600"
                    >
                      <v-img
                        :aspect-ratio="16 / 9"
                        src="https://cdn.vuetifyjs.com/images/cards/kitchen.png"
                      >
                        <v-expand-transition>
                          <div
                            v-if="hover"
                            class="d-flex transition-fast-in-fast-out orange darken-2 v-card--reveal display-3 white--text"
                            style="height: 100%;"
                          >
                            동천 10th
                          </div>
                        </v-expand-transition>
                      </v-img>
                      <v-card-text class="pt-6" style="position: relative;">
                        <v-btn
                          absolute
                          color="orange"
                          class="white--text"
                          fab
                          large
                          right
                          top
                          href="https://4004103.github.io/d10th/"
                        >
                          <v-icon>reply</v-icon>
                        </v-btn>
                        <div class="font-weight-light grey--text title mb-2">
                          For the perfect meal
                        </div>
                        <h3
                          class="display-1 font-weight-light orange--text mb-2"
                        >
                          QW cooking utensils
                        </h3>
                        <div class="font-weight-light title mb-2">
                          Our Vintage kitchen utensils delight any chef.<br />
                          Made of bamboo by hand
                        </div>
                      </v-card-text>
                    </v-card>
                  </v-hover>
                </v-row>
              </v-sheet>
            </v-carousel-item>
          </v-carousel>
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
          <v-icon>history</v-icon>
          <v-slot>djfksjdfljsdfkdjfkds</v-slot>
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
    slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    bottomNav: "recent",
    items: [
      {
        color: "#1F7087",
        src: "https://cdn.vuetifyjs.com/images/cards/foster.jpg",
        title: "Supermodel",
        artist: "Foster the People",
      },
      {
        color: "#952175",
        src: "https://cdn.vuetifyjs.com/images/cards/halcyon.png",
        title: "Halcyon Days",
        artist: "Ellie Goulding",
      },
    ],
  }),
};
</script>
