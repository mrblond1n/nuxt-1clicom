<template>
  <v-layout column>
    <section class="section">
      <app-section-header :section_info="$store.state.expert.top_section_expert_1c" />
    </section>
    <section
      v-for="(section, i) in $store.state.expert.list_sections"
      :key="i + 10"
      class="section"
    >
      <app-section :page="`c${i + 2}`" :section="section"></app-section>
    </section>
    <section class="section">
      <app-table page="ct" :table_data="$store.state.tables.expert_1c_how_much"></app-table>
    </section>
  </v-layout>
</template>

<script>
import appSectionHeader from "@/components/section/Top";
import appSection from "@/components/section/Content";
import appTable from "@/components/mist/Table";

import set_section_id from "@/library/set_section_id";

export default {
  components: {
    appSectionHeader,
    appSection,
    appTable
  },
  computed: {
    getExpertSections() {
      return this.$store.getters.getExpertSections;
    },
    getExpert1cHowMuchTable() {
      return this.$store.getters.getExpert1cHowMuchTable;
    }
  },
  mounted() {
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
  background: rgb(0, 137, 123);
  color: white;
}
</style>
