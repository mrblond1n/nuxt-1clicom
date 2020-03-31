<template>
  <v-layout column>
    <section class="section">
      <app-section-header :section_info="$store.state.business.top_section" />
    </section>
    <section
      v-for="(section, i) in $store.state.business.list_sections"
      class="section"
      :key="i + 10"
    >
      <app-section :page="`b${i + 2}`" :section="section"></app-section>
    </section>
    <section class="section">
      <app-section-possible page="bp" :section="$store.state.business.possible_section"></app-section-possible>
    </section>
    <section class="section">
      <app-table page="bt_1" :table_data="$store.state.tables.business_how_much"></app-table>
    </section>
  </v-layout>
</template>

<script>
import appSectionHeader from "~/components/section/Top";
import appSection from "~/components/section/Content";
import appSectionPossible from "~/components/section/Possible";
import appTable from "~/components/mist/Table";

import set_section_id from "@/library/set_section_id";

export default {
  components: {
    appSectionHeader,
    appSection,
    appTable,
    appSectionPossible
  },
  data() {
    return {
      show: false
    };
  },
  computed: {
    getBusinessSections() {
      return this.$store.getters.getBusinessSections;
    },
    getBusinessHowMuchTable() {
      return this.$store.getters.getBusinessHowMuchTable;
    },
    getBusinessSectionPossible() {
      return this.$store.getters.getBusinessSectionPossible;
    }
  },
  mounted() {
    console.log(this.$store.state.tables);
    set_section_id(this);
  }
};
</script>

<style scoped>
.section:first-child {
  padding-top: 100px;
}

.section {
  background: #fff;
  color: black;
}

.section:nth-child(odd) {
  background: rgb(100, 181, 136);
  color: white;
}
</style>
