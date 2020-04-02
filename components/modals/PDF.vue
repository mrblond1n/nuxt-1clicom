<template>
  <v-card>
    <!-- {{`@/assets/files/${info.src}`}} -->
    <!-- <v-img :src="require(`@/assets/files/${info.src}`)" /> -->
    <!-- <v-img :src="require('@/assets/images/home/a_buh.png')" /> -->
    <client-only>
      <pdf :src="require(`@/static/files/${info.src}`)" />
    </client-only>
  </v-card>
</template>

<script>
export default {
  props: {
    info: {
      type: Object,
      default: () => {}
    }
  }
};
</script>