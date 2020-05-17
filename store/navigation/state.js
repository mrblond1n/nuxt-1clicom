export default () => ({
  navigation_lists: [
    {
      name: "home",
      title: "ЗАО ЛИК",
      subtitle: "Экспертные онлайн-сервисы",
      list: [
        { title: "ли: эксперт", path: "/expert" },
        { title: "лик: эксперт 1с", path: "/expert_1c" },
        { title: "лик: бизнес", path: "/business" },
        { title: "лик: менеджер", path: "/manager" },
        { title: "о нашей компании", path: "/about" },
        { title: "партнерский раздел", path: "/partner_page" }
      ]
    },
    {
      name: "expert",
      title: "ЛИК:Эксперт",
      subtitle: "Cервис для проверки и поиска клиентов",
      list: [
        { title: "Поиск и карточка" },
        { title: "Аффилированность" },
        { title: "Арбитражная практика" },
        { title: "Отчеты и выписки" },
        { title: "Финансовая отчетность" },
        { title: "Тендеры и закупки" },
        { title: "Мониторинг и анализ" },
        { title: "Формирование базы" },
        { title: "Варианты и цены" }
      ]
    },
    {
      name: "expert_1c",
      title: "ЛИК:Эксперт 1C",
      subtitle: "Cервис для проверки и поиска клиентов",
      list: [
        { title: "Поиск и карточка" },
        { title: "Аффилированность" },
        { title: "Арбитражная практика" },
        { title: "Отчеты и выписки" },
        { title: "Финансовая отчетность" },
        { title: "Тендеры и закупки" },
        { title: "Мониторинг и анализ" },
        { title: "Формирование базы" },
        { title: "Варианты и цены" }
      ]
    },
    {
      name: "business",
      title: "ЛИК:БИЗНЕС",
      subtitle: "Сервис для поиска и проверки контрагентов",
      list: [
        { title: "Платформы и решения" },
        { title: "Информация о компании" },
        { title: "Оценка рисков" },
        { title: "Формирование базы" },
        { title: "Бух. отчетность" },
        { title: "Возможности" },
        { title: "Варианты и цены" }
      ]
    },
    {
      name: "manager",
      title: "ЛИК:МЕНЕДЖЕР",
      subtitle: "Сервис для формирования клиентской базы",
      list: [
        { title: "Контакты" },
        { title: "Формирование базы" },
        { title: "Контактная информация" },
        { title: "Возможности" },
        { title: "Варианты и цены" }
      ]
    },
    {
      name: "about",
      title: "О нас",
      list: [{ title: "О проекте" }, { title: "Информация" }]
    },
    {
      name: "partners",
      title: "Зао лик",
      subtitle: "для партнеров",
      list: [
        { title: "схемы сотрутдничества" },
        { title: "Контакты для связи" },
        { title: "Личный кабинет", id: "point_entry" }
      ]
    },
    {
      name: "lc_partners",
      title: "Зао лик",
      subtitle: "для партнеров",
      list: [
        { title: "Заказать доступ" },
        { title: "Новости" },
        { title: "Преимущества" },
        { title: "Документы" },
        { title: "Обучение" },
        { title: "Рекламные материалы" },
        { title: "сервисы лик" },
        { title: "контакты" },
        { title: "Администрирование", root: true },
        { title: "выход", id: "point_exit" }
      ]
    }
  ],
  current_navigation_list: {
    title: "",
    name: "",
    list: []
  }
});
