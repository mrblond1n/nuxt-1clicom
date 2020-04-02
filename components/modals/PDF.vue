<template>
  <v-card>
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