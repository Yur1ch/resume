// Підключаємо технологію express для back-end сервера
const { template } = require('@babel/core')
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()
//  ___________________________________________________________________

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Ukraine, Kyiv',
}

var footer = {
  social: {
    address: 'Yaroslava Mudrogo Street',
    email: {
      text: 'ivanov@mail.com',
      href: 'mailto:ivanov@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      href: 'https://www.linkedin.com/in/dmytro-test',
      text: 'Linkedin',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/summary', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('summary', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `'Open-minded for new technologies, with 1 years of experience in development.
        Whenever I start work on a new project I learn the domain and try tu understand the idea of the project. Good
        player, every colleage is a friend to me.'`,
      },
      experience: {
        title: 'Other experience',
        text: `'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.'`,
      },
    },

    footer,
  })
})

// ================================================================

// ================================================================

//              ↙ тут вводимо шлях (PATH) до сторінки
router.get('/skills', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('skills', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      hobbies: [
        {
          name: 'Travelling',
          isMain: 'true',
        },
        {
          name: 'Camping',
          isMain: 'true',
        },
        {
          name: 'Fishing',
          isMain: 'false',
        },
      ],
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlbars',
          point: 10,
          isTop: true,
        },
        {
          name: 'VSCode & NPM',
          point: 8,
          isTop: false,
        },
        {
          name: 'Git & Terminal',
          point: 10,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],
      summary: {
        title: 'Summary',
        text: `'Open-minded for new technologies, with 1 years of experience in development.
        Whenever I start work on a new project I learn the domain and try tu understand the idea of the project. Good
        player, every colleage is a friend to me.'`,
      },
      experience: {
        title: 'Other experience',
        text: `'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.'`,
      },
    },

    footer,
  })
})

// --------------------------------------------------------------------------

router.get('/education', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('education', {
    // ↙ сюди вводимо JSON дані

    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      certificates: [
        {
          name: 'Well Done',
          id: 111,
        },
        {
          name: 'Good',
          id: 222,
        },
        {
          name: 'Bad',
          id: 333,
        },
      ],
      educations: [
        {
          name: 'Oxford',
          isEnd: true,
        },
        {
          name: 'Oxford',
          isEnd: false,
        },
        {
          name: 'Oxford',
          isEnd: true,
        },
        {
          name: 'Oxford',
          isEnd: true,
        },
        {
          name: 'Oxford',
          isEnd: false,
        },
      ],
      skills: [
        'HTML',
        'Handlbars',
        'VSCode',
        'Git',
        'Terminal',
        'NPM',
      ],
      summary: {
        title: 'Summary',
        text: `'Open-minded for new technologies, with 1 years of experience in development.
        Whenever I start work on a new project I learn the domain and try tu understand the idea of the project. Good
        player, every colleage is a friend to me.'`,
      },
      experience: {
        title: 'Other experience',
        text: `'Pet project for parsing sport betting data from different platforms ( odds ) and sport statistics (
          tournament position, goals etc), analyzing by simple mathematics models and preparing probability
          for such events like: money line - first win / draw / second win, totals etc.'`,
      },
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  //             ↙ cюди вводимо назву файлу з сontainer
  res.render('work', {
    // ↙ сюди вводимо JSON дані

    layout: 'big',

    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Juniot Fullstack Developer',
          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },
          duration: {
            from: '10.10.2022',
            to: null,
          },
          projectAmount: 3,

          projects: [
            {
              name: 'Resume',

              url: 'https:/resume.com.ua/',

              about: {
                name: 'Airnb competitor. High-load application for searching apartments',
              },
              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML / CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],
              awards: [
                {
                  name: 'Background verification - is a feature that provides users to prove that they are real persons.',
                },
                {
                  name: 'Preparing SEO optimized pages. The automated process of getting data for the app from documents.',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})
// Підключаємо роутер до бек-енду
module.exports = router
