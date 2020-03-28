export default () => ({
  home_how_much: {
    class: "home_table_how_much",
    title: "сколько это стоит ?",
    header: [
      {
        cells: [
          { text: "" },
          { text: "Лик:Эксперт" },
          { text: "Лик:Бизнес" },
          { text: "Лик:Менеджер" },
          { text: "Лик:Контрагент" }
        ]
      }
    ],
    body: [
      {
        title: {
          text: "Основное рабочее место / год"
        },
        cells: [
          {
            text: "44 000",
            icon: "currency-rub"
          },
          {
            text: "35 000",
            icon: "currency-rub"
          },
          {
            text: "26 000",
            icon: "currency-rub"
          },
          {
            text: "17 000",
            icon: "currency-rub"
          }
        ]
      },
      {
        title: {
          text: "5 Дополнительных рабочих мест"
        },
        cells: [
          {
            icon: "minus"
          },
          {
            text: "14 000",
            icon: "currency-rub",
            subtext: "(2800 руб / 1 раб. место)"
          },
          {
            icon: "minus"
          },
          {
            text: "10 000",
            icon: "currency-rub",
            subtext: "(2000 руб / 1 раб. место)"
          }
        ]
      },
      {
        title: {
          text: "10 Дополнительных рабочих мест"
        },
        cells: [
          {
            icon: "minus"
          },
          {
            text: "21 000",
            icon: "currency-rub",
            subtext: "(2100 руб / 1 раб. место)"
          },
          {
            icon: "minus"
          },
          {
            text: "15 000",
            icon: "currency-rub",
            subtext: "(1500 руб / 1 раб. место)"
          }
        ]
      }
    ],
    footer: [
      {
        cells: [
          { text: "" },
          { text: "Заказать" },
          { text: "Заказать" },
          { text: "Заказать" },
          { text: "Заказать" }
        ]
      }
    ]
  },
  expert_how_much: {
    class: "expert_how_much",
    title: "Сколько это стоит?",
    header: [{ cells: [{ text: "Рабочее место" }] }],
    body: [{ cells: [{ text: "44 000", icon: "currency-rub" }] }],
    footer: [{ cells: [{ text: "Заказать" }] }],
    description: {
      pay_info_html:
        "При оплате картами Visa | Mastercard | МИР - <span style='color: red; font-weight: bold;'>СКИДКА 10%</span>",
      src: "online_pay.png",
      text:
        "* Дополнительные лицензии могут использоваться только при наличии действующей лицензии на основное рабочее место. Срок действия дополнительных лицензий равен оставшемуся сроку действия основного рабочего места, в случае их неодновременной покупки."
    }
  },
  expert_1c_how_much: {
    class: "expert_1c_how_much",
    title: "Сколько это стоит?",
    header: [{ cells: [{ text: "Рабочее место" }] }],
    body: [{ cells: [{ text: "35 000", icon: "currency-rub" }] }],
    footer: [{ cells: [{ text: "Заказать" }] }],
    description: {
      text:
        "* Дополнительные лицензии могут использоваться только при наличии действующей лицензии на основное рабочее место. Срок действия дополнительных лицензий равен оставшемуся сроку действия основного рабочего места, в случае их неодновременной покупки."
    }
  },
  business_how_much: {
    class: "business_how_much",
    title: "Сколько это стоит?",
    header: [
      {
        cells: [
          { text: "основное Рабочее место" },
          { text: "5 дополнительных рабочих мест" },
          { text: "10 дополнительных рабочих мест" }
        ]
      }
    ],
    body: [
      {
        cells: [
          { text: "35 000", icon: "currency-rub" },
          { text: "14 000", icon: "currency-rub" },
          { text: "21 000", icon: "currency-rub" }
        ]
      }
    ],
    footer: [
      {
        cells: [
          { text: "заказать" },
          { text: "заказать" },
          { text: "заказать" }
        ]
      }
    ],
    description: {
      text:
        "* Дополнительные лицензии могут использоваться только при наличии действующей лицензии на основное рабочее место. Срок действия дополнительных лицензий равен оставшемуся сроку действия основного рабочего места, в случае их неодновременной покупки."
    }
  },
  manager_how_much: {
    class: "manager_how_much",
    title: "Сколько это стоит?",
    header: [{ cells: [{ text: "Рабочее место" }] }],
    body: [{ cells: [{ text: "26 000", icon: "currency-rub" }] }],
    footer: [{ cells: [{ text: "Заказать" }] }]
  },
  kontr_how_much: {
    class: "kontr_how_much",
    title: "Сколько это стоит?",
    header: [
      {
        cells: [
          { text: "основное Рабочее место" },
          { text: "5 дополнительных рабочих мест" },
          { text: "10 дополнительных рабочих мест" }
        ]
      }
    ],
    body: [
      {
        cells: [
          { text: "17 000", icon: "currency-rub" },
          {
            text: "10 000",
            icon: "currency-rub",
            subtext: "(2000 руб / 1 раб. место)"
          },
          {
            text: "15 000",
            icon: "currency-rub",
            subtext: "(1500 руб / 1 раб. место)"
          }
        ]
      }
    ],
    footer: [
      {
        cells: [
          { text: "заказать" },
          { text: "заказать" },
          { text: "заказать" }
        ]
      }
    ],
    description: {
      pay_info_html:
        "При оплате картами Visa | Mastercard | МИР - <span style='color: #fb8c00; font-weight: bold;'>СКИДКА 10%</span>",
      src: "online_pay.png",
      text:
        "* Дополнительные лицензии могут использоваться только при наличии действующей лицензии на основное рабочее место. Срок действия дополнительных лицензий равен оставшемуся сроку действия основного рабочего места, в случае их неодновременной покупки."
    }
  },
  services: {
    class: "services",
    title: "Что умеют наши продукты",
    body: [
      {
        title: {
          text: "Подбор клиентов по параметрам (более 25 фильтров)"
        },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "check-circle" }
        ]
      },
      {
        title: { text: "Новый Комплексный отчет" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Новый Отчет ПДО (проверка на налоговые риски)" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: {
          text: "Выписка из ЕГРН (единый государственный реестр недвижимости)"
        },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Выписка из ЕГРН с ЭЦП" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Выписки ЕГРЮЛ и ЕГРИП" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: {
          text: "Выписки ЕГРЮЛ и ЕГРИП с ЭЦП и с историей ранних выписок"
        },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Объекты недвижимости" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Мониторинг" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Арбитражная практика" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Тендеры" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: {
          text: "Исполнительные производства с историей оконченных производств"
        },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Численность персонала" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Лицензии" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Проверки государственных органов" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Внешнеэкономическая деятельность" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Биография и фото руководителей крупных компаний" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Краткое резюме компании" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Сведения о собственниках" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: {
          text: "Учрежденные юридические лица, предшественники, преемники"
        },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Бухгалтерская отчетность" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Основные экономические показатели" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Бизнес-коэффициенты" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Филиалы и представительства" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "История изменений по ФНС и ГМЦ Росстата" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Выгрузка данных EXCEL, PDF, CSV" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Информация о залогах" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Информация о Лизинге" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Информация о сертификатах" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Информация о декларациях" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Информация об управляемых компаниях" },
        cells: [
          { icon: "check-circle" },
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Информация о расходах, сборах и отчислениях" },
        cells: [
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Банковские реквизиты организаций" },
        cells: [
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Проверка квартиры" },
        cells: [
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      },
      {
        title: { text: "Проверка паспорта" },
        cells: [
          { icon: "check-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" },
          { icon: "close-circle" }
        ]
      }
    ],
    header: [
      {
        cells: [
          { text: "" },
          { text: "Лик:эксперт" },
          { text: "лик:эксперт для 1с" },
          { text: "лик:бизнес" },
          { text: "лик:менеджер" }
        ]
      },
      {
        cells: [
          { text: "" },
          { text: "web" },
          { text: "1c" },
          { text: "1c/windows" },
          { text: "windows" }
        ]
      }
    ],
    footer: [
      {
        cells: [
          {},
          { text: "Попробовать" },
          { text: "Попробовать" },
          { text: "Попробовать" },
          { text: "Попробовать" }
        ]
      }
    ]
  }
});
