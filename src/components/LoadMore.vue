<template>
  <v-container fluid>
    <!-- Our Mapped Data -->
    <v-row>
      <v-hover
        v-for="card in this.cardsData.slice(0, this.length)"
        :key="card.id"
        v-slot="{ hover }"
        open-delay="200"
      >
        <v-card
          class="
            pa-xs-4
            ma-10
            d-xl-flex
            align-content-space-around
            flex-wrap
            rounded-lg
          "
          :elevation="hover ? 16 : 2"
          :class="{ 'on-hover': hover }"
          max-width="344"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                <h2>{{ card.headline }}</h2>
              </v-list-item-title>
              <v-list-item-subtitle
                ><p>{{ card.text }}</p></v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>

          <v-card-actions>
            <v-btn
              v-on:click="redirect(card.link)"
              
              depressed
              rounded
              color="primary"
            >
              Link to
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-hover>
    </v-row>
    <v-row>
      <v-btn
        class="pa-xs-4 ma-10"
        v-if="showBtn"
        v-on:click="showMore()"
        outlined
        rounded
        primary
        color="primary"
        text
      >
        Load More
      </v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LoadMore",
  data() {
    return {
      cardsData: [
        {
          id: 1,
          headline: "Headline",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 2,
          headline: "Rottab",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.google.com",
        },
        {
          id: 3,
          headline: "Headline",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 4,
          headline: "Mark",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 5,
          headline: "Markus",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 6,
          headline: "George",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 7,
          headline: "Simone",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 8,
          headline: "Mahmoud",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 9,
          headline: "Headline",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 10,
          headline: "Rottab",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 11,
          headline: "Headline",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 12,
          headline: "Rottab",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 13,
          headline: "HeaASDASDdline",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 14,
          headline: "Rottab",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://www.comwrap.com",
        },
        {
          id: 15,
          headline: "Headline",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://github.com",
        },
        {
          id: 16,
          headline: "Rottab",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://github.com",
        },
        {
          id: 18,
          headline: "Headline",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://github.com",
        },
        {
          id: 17,
          headline: "Rottab",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://github.com",
        },
        {
          id: 20,
          headline: "Headline",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://github.com",
        },
        {
          id: 19,
          headline: "Rottab",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://github.com",
        },
        {
          id: 21,
          headline: "Headline",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://github.com",
        },
        {
          id: 22,
          headline: "Gabish",
          text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit.",
          link: "https://github.com",
        },
      ],
      length: 3,
      showBtn: true,
    };
  },
  methods: {
    showMore() {
      if (this.length >= this.cardsData.length - 6) {
        this.showBtn = false;
        return;
      }
      this.length += 6;
    },
    redirect(link) {
      var win = window.open(link, "_blank");
      if (win) {
        //Browser has allowed it to be opened
        win.focus();
      } else {
        //Browser has blocked it
        alert("Please allow popups for this website");
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.v-card.on-hover.theme--dark
    background-color: rgba(#FFF, 0.8)
>.v-card__text
    color: #000
</style>