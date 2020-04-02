<template>
  <v-layout column>
    <section class="section">
      <app-section-header :section_info="$store.state.expert.top_section_expert" />
    </section>
    <section
      v-for="(section, i) in $store.state.expert.list_sections"
      :key="i + 10"
      class="section"
    >
      <app-section :section="section" :page="`e${i + 2}`"></app-section>
    </section>
    <section class="section">
      <app-table :table_data="$store.state.tables.expert_how_much" page="et"></app-table>
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
  background: rgb(228, 177, 98);
  color: white;
}
</style>
