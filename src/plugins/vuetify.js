import Vue from "vue";
import "@fortawesome/fontawesome-free//css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

import Vuetify from "vuetify/lib";
// import colors from "vuetify/dist/util/colors";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: "md" || "fa",
  },
  //   theme: {
  //     themes: [
  //       (light = {
  //         background: colors.shades.white,
  //       }),
  //       (dark = {
  //         background: colors.shades.black,
  //       }),
  //     ],
  //   },
});
