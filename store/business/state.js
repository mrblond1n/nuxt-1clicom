export default () => ({
  list_sections: [
    {
      title: "Полная и актуальная информация по любой Компании и ИП РФ",
      subtitle: "Все данные из официальных источников",
      list: [
        "Регистрационные данные из открытых, официальных источников",
        "Информация о финансовом состоянии компании",
        "Информация о руководителях и соучредителях",
        "Контактные данные из официальных и открытых источников"
      ],
      src: "b_kar_1",
      method: "ltr"
    },
    {
      title: "Оценка налоговых рисков ( Отчет ПДО )",
      subtitle: "Прояви должную осмотрительность",
      list: [
        "Формирование отчета ПДО (Проявление Должной Осмотрительности)",
        "Оценка финансового состояния компании",
        "Оценка руководителя и соучредителей",
        "Возможность заказа выписок ЕГРЮЛ / ЕГРИП, заверенных электронной цифровой подписью ФНС РФ",
        "Возможность формирования комплексного отчета и его выгрузки в формате PDF или EXEL"
      ],
      src: "b_ris_1",
      method: "rtl"
    },
    {
      title: "Формирование клиентской базы",
      subtitle: "используя следующие основные критерии отбора:",
      list: [
        "По местоположению компаний (ОКАТО)",
        "По виду деятельности компаний (ОКВЭД)",
        "По финансовым показателям компаний",
        "С телефонами и/или e-mail компаний",
        "По периоду регистрации компаний",
        "По организационно-правовой форме"
      ],
      src: "renderClientBase",
      method: "ltr"
    },
    {
      title: "БУХГАЛТЕРСКАЯ ОТЧЕТНОСЬ и бизнес-коэффициенты",
      subtitle: "Все финансовые показатели",
      list: [
        "Полная бухгалтерская отчетность контрагентов с 2005 года",
        "Бизнес-коэффициенты, позволяющие оценить множество финансовых аспектов бизнеса"
      ],
      src: "finance",
      method: "rtl"
    }
  ],
  top_section: {
    titles: [
      {
        main:
          "ЛИК:БИЗНЕС - Хотите <span>ЗНАТЬ</span> ВСЁ <span>О КОНТРАГЕНТАХ</span>?",
        sub: "Сервис для поиска и проверки контрагентов",
        page: 0
      },
      {
        main:
          "ЛИК:БИЗНЕС - Хотите <span>ЗНАТЬ</span> ВСЁ <span>О КОНТРАГЕНТАХ</span>?",
        sub: "Сервис для поиска и проверки контрагентов",
        page: 1
      }
    ],
    info: [
      {
        list: [
          { text: "Проявление должной осмотрительности" },
          { text: "Информация о руководителях и собственниках" },
          { text: "Регулярное обновление из более чем 27 источников" },
          { text: "Построение списков по 30 параметрам" },
          { text: "Контактные данные из официальных и открытых источников" }
        ],
        button: "Попробуйте сейчас бесплатно",
        page: 0
      },
      {
        list: [
          { text: "Быстрая регистрация контрагентов в справочнике 1С" },
          { text: "Проявление должной осмотрительности" },
          { text: "Получение выписки из ЕГРЮЛ, заверенной ЭЦП" },
          { text: "Построение списков по 30 параметрам" },
          {
            text: "Контактные данные из государственных и открытых источников"
          }
        ],
        button: "Попробуйте сейчас бесплатно",
        page: 1
      }
    ],
    image: [
      {
        src: "m_win_spis",
        page: 0
      },
      {
        src: "m_1c_spis",
        page: 1
      }
    ],
    descriptions: [
      {
        text:
          "ЛИК:БИЗНЕС – онлайн-сервис, созданный для оценки налоговых рисков, проверки контрагентов, получения полной и исчерпывающей информации о любой компании и ИП РФ, а так же для формирования списка целевых клиентов с актуальными контактными данными по различным критериям и фильтрам",
        page: 0
      },
      {
        text:
          "ЛИК:ЭКСПЕРТ – онлайн-сервис, созданный для проверки контрагентов и оценки налоговых рисков, получения полной и исчерпывающей информации о любой компании и ИП в РФ, а также для формирования баз данных потенциальных клиентов с актуальными контактными данными по различным критериям и фильтрам (по дате регистрации, наличию/отсутствию хозяйственной деятельности, виду деятельности, территориальному признаку, финансовым показателям, форме собственности и другим).",
        page: 1
      }
    ],
    toggle_names: [
      {
        text: "windows",
        page: 0
      },
      {
        text: "1c",
        page: 1
      }
    ],
    button_group: [
      {
        list: [
          {
            text: "Скачать лик:бизнес для ос windows",
            icon: "mdi-microsoft-windows",
            href: "https://1clicom.ru/soft/releases/lic_business_win_2.4.0.zip",
            download: true
          },
          {
            text: "Руководство пользователя для ЛИК:БИЗНЕС Windows",
            icon: "mdi-file",
            href: "https://1clicom.ru/instruction/manual_LICbusiness2_win.pdf",
            download: true
          },
          {
            text: "Скачать лик:бизнес для ос windows XP",
            icon: "mdi-microsoft-windows",
            href:
              "https://1clicom.ru/soft/releases/lic_business_win_2.3.7-XP.zip",
            download: true
          }
        ],
        page: 0
      },
      {
        list: [
          {
            text: "Скачать ЛИК:БИЗНЕС для 1C обычное*",
            src: "1c-logo",
            href: "https://1clicom.ru/soft/LicBusinessOP_2_3_4_12.epf",

            download: true
          },
          {
            text: "Скачать ЛИК:БИЗНЕС для 1C управляемое*",
            src: "1c-logo",
            href: "https://1clicom.ru/soft/LicBusinessUP_2_3_4_12.epf",
            download: true
          },
          {
            text: "Руководство пользователя для ЛИК:БИЗНЕС 1c",
            icon: "mdi-file",
            href:
              "https://1clicom.ru/instruction/rukovodstvo_lic_biz-kontr.pdf",
            download: true
          }
        ],
        page: 1,
        description:
          "*работа ПО гарантируется на платформе 1С не ниже версии 8.3.7"
      }
    ],
    description: [
      {
        text:
          "ЛИК:БИЗНЕС – онлайн-сервис, созданный для оценки налоговых рисков, проверки контрагентов, получения полной и исчерпывающей информации о любой компании и ИП РФ, а так же для формирования списка целевых клиентов с актуальными контактными данными по различным критериям и фильтрам",
        page: 0
      },
      {
        text:
          "ЛИК:ЭКСПЕРТ – онлайн-сервис, созданный для проверки контрагентов и оценки налоговых рисков, получения полной и исчерпывающей информации о любой компании и ИП в РФ, а также для формирования баз данных потенциальных клиентов с актуальными контактными данными по различным критериям и фильтрам (по дате регистрации, наличию/отсутствию хозяйственной деятельности, виду деятельности, территориальному признаку, финансовым показателям, форме собственности и другим).",
        page: 1
      }
    ]
  },
  list_headers_buttons: [
    {
      text: "Скачать лик:бизнес для ос windows",
      icon: "mdi-microsoft-windows",
      href: "https://1clicom.ru/soft/releases/lic_business_win_2.4.0.zip",
      download: true
    },
    {
      text: "Скачать ЛИК:БИЗНЕС для 1C обычное*",
      src: "1c-logo",
      href: "https://1clicom.ru/soft/LicBusinessOP_2_3_4_12.epf",

      download: true
    },
    {
      text: "Скачать ЛИК:БИЗНЕС для 1C управляемое*",
      src: "1c-logo",
      href: "https://1clicom.ru/soft/LicBusinessUP_2_3_4_12.epf",
      download: true
    },
    {
      text: "Руководство пользователя для ЛИК:БИЗНЕС Windows",
      icon: "mdi-file",
      href: "https://1clicom.ru/instruction/manual_LICbusiness2_win.pdf",
      download: true
    },
    {
      text: "Руководство пользователя для ЛИК:БИЗНЕС 1c",
      icon: "mdi-file",
      href: "https://1clicom.ru/instruction/rukovodstvo_lic_biz-kontr.pdf",
      download: true
    },
    {
      text: "Скачать лик:бизнес для ос windows XP",
      icon: "mdi-microsoft-windows",
      href: "https://1clicom.ru/soft/releases/lic_business_win_2.3.7-XP.zip",
      download: true
    }
  ],
  possible_section: {
    title: "лик:бизнес даёт вам возможность:",
    list: [
      "Полностью автоматизировать работу менеджеров по продажам, обеспечив менеджеров актуальными и полными данными для построения процесса продаж",
      "Максимально расширить клиентскую базу, увеличить объем продаж, максимально охватить Вашу целевую аудиторию",
      "Обратиться непосредственно к Лицу принимающему решения (ЛПР), повысив этим конверсию коммерческих предложений",
      "Опередить конкурентов, первыми сделав предложение по товарам и услугам недавно созданным компаниям"
    ],
    description:
      "ЛИК: БИЗНЕС содержит информацию о более чем 8,7 млн. индивидуальных предпринимателей и 8.2 млн. юридических лиц (из них 4,8 млн. - действующие юридические лица). В базе данных содержится более 4 млн. контактных данных (телефоны/e-mail/сайт). Данные об имеющихся и о вновь зарегистированных ИП и компаниях регулярно обновляются и актуализируются."
  }
});