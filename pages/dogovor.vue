<template>
  <section class="pa-0 content">
    <v-layout>
      <section>
        <v-container>
          <v-layout column justify-center>
            <v-layout align-center justify-space-between>
              <v-layout column align-start>
                <h3 class="display-1">ЛИЦЕНЗИОННЫЙ ДОГОВОР</h3>
                <h4 class="headline">на право использования программы для ЭВМ "ЛИК"</h4>
              </v-layout>
              <div class="headline">г.Москва</div>
            </v-layout>
            <div class="body-2 my-5">
              <p>
                Настоящий Лицензионный договор является офертой ЗАО "ЛИК" ОГРН: 1137746308039, ИНН/КПП:
                7719841799/771901001, адрес: 105187, г.Москва, Измайловское шоссе, д.44, именуемое в
                дальнейшем Лицензиар, Пользователю программы для ЭВМ "ЛИК", именуемому в дальнейшем
                Лицензиат.
              </p>
              <p>
                Под акцептом в целях настоящего Лицензионного договора признается факт оплаты
                вознаграждения по настоящему договору, либо факт начала использования (принятия
                Лицензионного соглашения при запуске) программы для ЭВМ "ЛИК", в зависимости от того,
                какое событие наступит раньше.
              </p>
            </div>
            <ul>
              <li class="my-2" v-for="(item, i) in $store.state.dogovor.list" :key="i">
                <h4 class="text-left subtitle-1">{{item.block_title}}</h4>
                <ul class="text-left my-3">
                  <li v-for="(item, i) in item.main_list" :key="i">
                    <div class="body-2">{{item.title}}</div>
                    <ul v-if="item.under_list">
                      <li v-for="(item, i) in item.under_list" :key="i">
                        <div class="body-2 ml-2">{{item}}</div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>

              <li class="my-2">
                <h4 class="text-left subtitle-1">{{$store.state.dogovor.requisites.title}}</h4>
                <ul class="text-left">
                  <li v-for="(item, i) in $store.state.dogovor.requisites.list" :key="i">
                    <div class="subtitle-2">{{item.title}}</div>
                    <div class="body-2">{{item.ctx}}</div>
                  </li>
                </ul>
              </li>
            </ul>
          </v-layout>
        </v-container>
      </section>
    </v-layout>
  </section>
</template>