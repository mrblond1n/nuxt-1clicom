<template>
  <v-container data-aos>
    <v-layout column justify-center align-center>
      <h3 class="display-2 text-center mb-5">{{table_data.title}}</h3>
      <v-simple-table
        :style="style_width()"
        class="section__table my-5"
        :class="table_data.class"
        style="width: 100%"
      >
        <thead>
          <tr v-for="(row, i) in table_data.header" :key="i">
            <th v-for="(cell, i) in row.cells" :key="i" class="title text-center">{{cell.text}}</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(row, i) in table_data.body"
            :key="i"
            v-show="show_all ? true : display_row(i)"
          >
            <td v-if="row.title" class="row_title">{{row.title.text}}</td>
            <td
              v-for="(cell, i) in row.cells"
              :key="i"
              style="font-weight: 500"
              class="text-center"
            >
              {{cell.text}}
              <v-icon style="font-size: 14px;" :color="set_color(cell.icon)">{{`mdi-${cell.icon}`}}</v-icon>
              <br />
              <div style="font-size: 10px">{{cell.subtext}}</div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr v-for="(row, i) in table_data.footer" :key="i">
            <td
              style="border-top: 1px solid rgba(0, 0, 0, .1); padding: 0"
              v-for="(cell, i) in row.cells"
              :key="i"
            >
              <v-btn
                v-if="cell.text != ''"
                @click="modal_window_call(Object.keys(row.cells[0]).length === 0 ? i - 1 : i)"
                text
                style="width: 100%; height: 100%"
                class="title"
              >{{cell.text}}</v-btn>
            </td>
          </tr>
        </tfoot>
      </v-simple-table>
      <v-btn
        v-if="table_data.body.length > 12"
        @click="show_all = !show_all"
        color="warning"
      >{{show_all ? 'Показать меньше': 'Показать больше'}}</v-btn>
      <v-layout column align-center class="my-5 caption" v-if="table_data.description">
        <div
          v-if="table_data.description.pay_info_html"
          v-html="table_data.description.pay_info_html"
        ></div>
        <v-img
          v-if="table_data.description.src"
          class="my-3"
          width="150px"
          :src="require('~/static/images/shops/' + table_data.description.src)"
        />
        <div>{{table_data.description.text}}</div>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    table_data: {
      type: Object,
      default: () => {}
    },
    page: {
      type: String,
      default: () => {}
    }
  },
  data() {
    return {
      show_all: false
    };
  },
  methods: {
    modal_window_call(index) {
      this.$store.dispatch("shared/show_modal", {
        id: `${this.page}_${index + 1}`,
        txt: "Заявка на обратный звонок"
      });
    },
    style_width() {
      if (this.$vuetify.breakpoint.name == "xs") {
        return "width: 300px";
      }
      return "";
    },
    set_color(icon) {
      switch (icon) {
        case "close-circle":
          return "red";
        case "check-circle":
          return "green";
        default:
          return "black";
      }
    },
    display_row(index) {
      if (index <= 12) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>

<style scoped>
.home_table_how_much thead tr th:nth-child(2),
.home_table_how_much tfoot tr td:nth-child(2),
.home_table_how_much tbody tr td:nth-child(2) {
  background: rgba(228, 177, 98, 0.5);
}
.home_table_how_much thead tr th:nth-child(3),
.home_table_how_much tfoot tr td:nth-child(3),
.home_table_how_much tbody tr td:nth-child(3) {
  background: rgba(96, 189, 81, 0.5);
}
.home_table_how_much thead tr th:nth-child(4),
.home_table_how_much tfoot tr td:nth-child(4),
.home_table_how_much tbody tr td:nth-child(4) {
  background: rgba(131, 176, 185, 0.5);
}
.home_table_how_much thead tr th:nth-child(5),
.home_table_how_much tfoot tr td:nth-child(5),
.home_table_how_much tbody tr td:nth-child(5) {
  background: rgba(211, 86, 87, 0.5);
}

.rtl {
  flex-direction: row-reverse;
}
.expert_how_much th,
.expert_how_much td {
  background: rgba(228, 177, 98, 0.5);
}
.expert_1c_how_much th,
.expert_1c_how_much td {
  background: rgba(0, 137, 123, 0.5);
}
.business_how_much th,
.business_how_much td {
  background: rgba(77, 184, 75, 0.5);
}
.manager_how_much th,
.manager_how_much td {
  background: rgba(80, 155, 176, 0.5);
}
.kontr_how_much th,
.kontr_how_much td {
  background: rgba(176, 80, 80, 0.5);
}

.services tbody td:first-child {
  text-align: left;
}

.services thead tr th:nth-child(2),
.services tfoot tr td:nth-child(2),
.services tbody tr td:nth-child(2) {
  background: rgba(228, 177, 98, 0.5);
}
.services thead tr th:nth-child(3),
.services tfoot tr td:nth-child(3),
.services tbody tr td:nth-child(3) {
  background: rgba(244, 164, 96, 0.5);
}
.services thead tr th:nth-child(4),
.services tfoot tr td:nth-child(4),
.services tbody tr td:nth-child(4) {
  background: rgba(96, 189, 81, 0.5);
}
.services thead tr th:nth-child(5),
.services tfoot tr td:nth-child(5),
.services tbody tr td:nth-child(5) {
  background: rgba(131, 176, 185, 0.5);
}
</style>