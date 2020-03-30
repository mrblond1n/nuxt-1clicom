<template>
  <v-card>
    <v-card-title class="headline">{{new_info.date}}</v-card-title>
    <v-img
      class="white--text align-end"
      :src="require('@/static/images/partner_news/' + new_info.src)"
    ></v-img>
    <v-card-text>
      <ul>
        <li v-for="(info, i) in new_info.more_info" :key="i">
          - {{info.text}}
          <div v-if="info.description">{{info.description}}</div>
          <ul v-if="info.links">
            <li v-for="(link, i) in info.links" :key="i">
              {{link.info}}
              <a :href="link.link">{{link.text ? link.text : link.link}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    new_info: {
      type: Object,
      default: () => {}
    }
  }
};
</script>