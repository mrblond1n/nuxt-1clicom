<template>
  <v-layout column>
    <section class="section">
      <app-section-header :section_info="$store.state.manager.top_section" />
    </section>
    <section
      v-for="(section, i) in $store.state.manager.list_sections"
      :key="i + 10"
      class="section"
    >
      <app-section :page="`m${i + 2}`" :section="section" />
    </section>
    <section class="section">
      <app-section-possible page="mp" :section="$store.state.manager.possible_section" />
    </section>
    <section class="section">
      <app-table page="mt" :table_data="$store.state.tables.manager_how_much" />
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
  background: rgb(131, 176, 185);
  color: white;
}
</style>