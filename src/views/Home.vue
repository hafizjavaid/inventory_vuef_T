<template>
  <v-app :style="{background: $vuetify.theme.themes.light.backgrounds}">
    <v-container>
      <v-row>
        <v-col cols="12" md="4">
          <v-text-field label="Search Items" prepend-icon="search" color="red" error></v-text-field>
        </v-col>
        <v-spacer></v-spacer>
        <span class="red--text mt-9 mr-10">29 Items</span>
        <v-btn class="mt-7" text>
          <v-icon color="red" class>menu</v-icon>
        </v-btn>
        <v-btn class="mt-7" text>
          <v-icon color="red" class>dashboard</v-icon>
        </v-btn>
      </v-row>
      <v-row>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-height="250" align="center">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="/img1.png" width="150" height="150"></v-img>
              <v-card-text class="red--text">Product Number 1</v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out red v-card-reveal display-3 white--text"
                  style="height:100%"
                >
                  <v-btn outlined color="white">Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="red" class="white--text" fab large left top>
                <h1>1</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-height="250" align="center">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="/img2.png" width="150" height="150"></v-img>
              <v-card-text class="red--text">Product Number 2</v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out red v-card-reveal display-3 white--text"
                  style="height:100%"
                >
                  <v-btn outlined color="white">Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="red" class="white--text" fab large left top>
                <h1>2</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-height="250" align="center">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="/img3.png" width="150" height="150"></v-img>
              <v-card-text class="red--text">Product Number 3</v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out red v-card-reveal display-3 white--text"
                  style="height:100%"
                >
                  <v-btn outlined color="white">Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="red" class="white--text" fab large left top>
                <h1>3</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-height="250" align="center">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="/img4.png" width="150" height="150"></v-img>
              <v-card-text class="red--text">Product Number 4</v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out red v-card-reveal display-3 white--text"
                  style="height:100%"
                >
                  <v-btn outlined color="white">Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="red" class="white--text" fab large left top>
                <h1>4</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-height="250" align="center">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="/img5.png" width="150" height="150"></v-img>
              <v-card-text class="red--text">Product Number 5</v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out red v-card-reveal display-3 white--text"
                  style="height:100%"
                >
                  <v-btn outlined color="white">Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="red" class="white--text" fab large left top>
                <h1>5</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
        <v-col cols="12" md="3" class="mb-4">
          <v-hover v-slot:default="{ hover }">
            <v-card max-width="250" max-height="250" align="center">
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn icon>
                  <v-icon>edit</v-icon>
                </v-btn>
              </v-card-actions>
              <v-img src="/img6.png" width="150" height="150"></v-img>
              <v-card-text class="red--text">Product Number 6</v-card-text>
              <v-expand-transition>
                <div
                  v-if="hover"
                  class="d-flex transition-fast-in-fast-out red v-card-reveal display-3 white--text"
                  style="height:100%"
                >
                  <v-btn outlined color="white">Detail</v-btn>
                </div>
              </v-expand-transition>
              <v-btn absolute color="red" class="white--text" fab large left top>
                <h1>6</h1>
              </v-btn>
            </v-card>
          </v-hover>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    },
  },
};
</script>
<style scoped>
.v-card-reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  opacity: 0.5;
  position: absolute;
  width: 100%;
}
</style>
