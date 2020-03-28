<template>
  <!-- <v-parallax
    :src="require('@/assets/images/home/footer_bg.png')"
    style="width: 100%; height: auto; min-height: 500px"
  >-->
  <v-container>
    <v-layout column style="min-height: 500px" class="pt-5">
      <v-layout justify-center>
        <v-icon color="white">mdi-star</v-icon>
        <v-icon color="white" class="star">mdi-star mdi-36px</v-icon>
        <v-icon color="white">mdi-star</v-icon>
      </v-layout>
      <v-layout justify-center wrap row>
        <v-layout column class="footer__row-item ma-3">
          <h4 class="display-1">ЗАО "ЛИК"</h4>
          <div
            class="caption"
          >Является ведущим разработчиком онлайн-сервисов. Данные, полученные из онлайн-сервисов, являются данными из открытых источников с соблюдением норм 149 и 152 ФЗ</div>
        </v-layout>
        <v-layout column class="footer__row-item ma-3">
          <h4 class="display-1">Как заказать</h4>
          <ul>
            <router-link
              @click.native="changeNavList('/shop_location')"
              tag="li"
              to="/shop_location"
              class="caption"
            >
              <span>Где купить</span>
            </router-link>
            <router-link
              @click.native="changeNavList('/dogovor')"
              tag="li"
              to="/dogovor"
              class="caption"
            >
              <span>Договор</span>
            </router-link>
          </ul>
        </v-layout>
        <v-layout column class="footer__row-item ma-3">
          <h4 class="display-1">нужна помощь?</h4>
          <ul>
            <router-link @click.native="changeNavList('/asks')" tag="li" to="/asks" class="caption">
              <span>Вопросы</span>
            </router-link>
            <router-link @click.native="changeNavList('/docs')" tag="li" to="/docs" class="caption">
              <span>Документация</span>
            </router-link>
            <router-link
              @click.native="changeNavList('/school')"
              tag="li"
              to="/school"
              class="caption"
            >
              <span>Видео уроки</span>
            </router-link>
          </ul>
        </v-layout>
        <v-layout column class="footer__row-item ma-3">
          <h4 class="display-1">контакты</h4>
          <ul>
            <li class="caption">г. Москва. Измайловское шоссе, д. 44</li>
            <li class="caption">
              Горячая линия :
              <a href="tel:+78005004018">8 800 500-40-18</a>
              <br />E-mail :
              <a href="mailto:inf@1clicom.ru">inf@1clicom.ru</a>
            </li>
            <li class="caption">
              Техподдержка :
              <a href="tel:+78005004018">8 800 500-40-18 доб. 112</a>
              <br />E-mail :
              <a href="mailto:support@1clicom.ru">support@1clicom.ru</a>
            </li>
          </ul>
          <v-layout justify-space-around class="social_list my-2">
            <a href="https://vk.com/lik_b2b" target="_blank">
              <v-icon large>mdi-vk</v-icon>
            </a>
            <a href="https://www.youtube.com/channel/UCYf8c5jNfdLjg1wFUZYby9Q" target="_blank">
              <v-icon large>mdi-youtube</v-icon>
            </a>
            <a
              href="https://www.facebook.com/pages/%D0%97%D0%90%D0%9E-%D0%9B%D0%98%D0%9A/1766844823545448"
              target="_blank"
            >
              <v-icon large>mdi-facebook</v-icon>
            </a>
          </v-layout>
        </v-layout>
      </v-layout>
      <v-layout
        justify-center
        align-end
        class="text-center caption"
      >2013-2020 © ЗАО "ЛИК" Все права защищены.</v-layout>
    </v-layout>
  </v-container>
  <!-- </v-parallax> -->
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    changeNavList(router_name) {
      this.$store.dispatch("setCurrentNavList", router_name).then(() => {
        this.$vuetify.goTo(0, { duration: 0 });
      });
    }
  }
};
</script>

<style scoped lang="scss">
.social_list a {
  text-decoration: none;
  i {
    color: rgba(255, 255, 255, 0.5);
    transition: 0.4s;
  }
  &:hover i {
    color: white;
  }
}
.v-application ul {
  padding-left: 0;
}

.display-1 {
  border-bottom: 2px dotted rgba(255, 255, 255, 0.5);
}
ul li {
  margin-top: 10px;
  border-bottom: 2px dotted rgba(255, 255, 255, 0.2);
  padding: 5px;
  transition: 0.4s;
  a {
    color: white;
    font-weight: bold;
  }
}

li:hover {
  cursor: pointer;
  border-bottom-color: white;
}
.star {
  transform: translateY(-10px);
}

.footer__row-item {
  width: 20%;
  min-width: 120px;
}
</style>