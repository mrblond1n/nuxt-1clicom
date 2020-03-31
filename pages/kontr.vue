<template>
  <v-layout column>
    <section class="section kontr">
      <app-section-header :section_info="$store.state.kontr.top_section" />
    </section>
    <section
      v-for="(section, i) in $store.state.kontr.list_sections"
      :key="i + 10"
      class="section kontr"
    >
      <app-section :page="`k${i + 2}`" :section="section"></app-section>
    </section>
    <section class="section kontr">
      <app-section-possible page="kp" :section="$store.state.kontr.possible_section"></app-section-possible>
    </section>
    <section class="section kontr">
      <app-table page="kt" :table_data="$store.state.tables.kontr_how_much"></app-table>
    </section>
  </v-layout>
</template>

<script>
import appSectionHeader from "~/components/section/Top";
import appSection from "~/components/section/Content";
import appSectionPossible from "~/components/section/Possible";
import appTable from "~/components/mist/Table";

import set_section_id from "~/library/set_section_id";

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
    getKontragentSections() {
      return this.$store.getters.getKontragentSections;
    },
    getKontrHowMuchTable() {
      return this.$store.getters.getKontrHowMuchTable;
    },
    getKontrSectionPossible() {
      return this.$store.getters.getKontrSectionPossible;
    }
  },
  mounted() {
    set_section_id(this);
  }
};
</script>

<style scoped>
.section.kontr:first-child {
  padding-top: 100px;
}

.section.kontr {
  background: #fff;
  color: black;
}

.section.kontr:nth-child(odd) {
  background: rgb(211, 86, 87);
  color: white;
}
</style>
