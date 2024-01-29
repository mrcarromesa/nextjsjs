import type { Config } from 'tailwindcss'

export const themeColors: Config['theme'] = {
  colors: {
    primary: {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(13, 110, 253)',
      'border-color': 'rgb(13, 110, 253)',
    },
    secondary: {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(108, 117, 125)',
      'border-color': 'rgb(108, 117, 125)',
    },
    success: {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(25, 135, 84)',
      'border-color': 'rgb(25, 135, 84)',
    },
    danger: {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(220, 53, 69)',
      'border-color': 'rgb(220, 53, 69)',
    },
    warning: {
      color: 'rgb(0, 0, 0)',
      background: 'rgb(255, 193, 7)',
      'border-color': 'rgb(255, 193, 7)',
    },
    info: {
      color: 'rgb(0, 0, 0)',
      background: 'rgb(13, 202, 240)',
      'border-color': 'rgb(13, 202, 240)',
    },
    light: {
      color: 'rgb(0, 0, 0)',
      background: 'rgb(248, 249, 250)',
      'border-color': 'rgb(248, 249, 250)',
    },
    dark: {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(33, 37, 41)',
      'border-color': 'rgb(33, 37, 41)',
    },
    link: {
      color: 'rgb(13, 110, 253)',
      background: 'transparent',
      'border-color': 'transparent',
    },

    'primary-hover': {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(11, 94, 215)',
      'border-color': 'rgb(10, 88, 202)',
    },
    'secondary-hover': {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(92, 99, 106)',
      'border-color': 'rgb(86, 94, 100)',
    },
    'success-hover': {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(21, 115, 71)',
      'border-color': 'rgb(20, 108, 67)',
    },
    'danger-hover': {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(187, 45, 59)',
      'border-color': 'rgb(176, 42, 55)',
    },
    'warning-hover': {
      color: 'rgb(0, 0, 0)',
      background: 'rgb(255, 202, 44)',
      'border-color': 'rgb(255, 199, 32)',
    },
    'info-hover': {
      color: 'rgb(0, 0, 0)',
      background: 'rgb(49, 210, 242)',
      'border-color': 'rgb(37, 207, 242)',
    },
    'light-hover': {
      color: 'rgb(0, 0, 0)',
      background: 'rgb(211, 212, 213)',
      'border-color': 'rgb(198, 199, 200)',
    },
    'dark-hover': {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(66, 70, 73)',
      'border-color': 'rgb(55, 59, 62)',
    },
    'link-hover': {
      color: 'rgb(10, 88, 202)',
      background: 'transparent',
      'border-color': 'transparent',
    },

    'primary-active': {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(10, 88, 202)',
      'border-color': 'rgb(10, 88, 202)',
    },
    'secondary-active': {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(86, 94, 100)',
      'border-color': 'rgb(86, 94, 100)',
    },
    'success-active': {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(20, 108, 67)',
      'border-color': 'rgb(20, 108, 67)',
    },
    'danger-active': {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(176, 42, 55)',
      'border-color': 'rgb(176, 42, 55)',
    },
    'warning-active': {
      color: 'rgb(0, 0, 0)',
      background: 'rgb(255, 205, 57)',
      'border-color': 'rgb(255, 199, 32)',
    },
    'info-active': {
      color: 'rgb(0, 0, 0)',
      background: 'rgb(61, 213, 243)',
      'border-color': 'rgb(37, 207, 242)',
    },
    'light-active': {
      color: 'rgb(0, 0, 0)',
      background: 'rgb(198, 199, 200)',
      'border-color': 'rgb(186, 187, 188)',
    },
    'dark-active': {
      color: 'rgb(255, 255, 255)',
      background: 'rgb(77, 81, 84)',
      'border-color': 'rgb(55, 59, 62)',
    },
    'link-active': {
      color: 'rgb(10, 88, 202)',
      background: 'transparent',
      'border-color': 'transparent',
    },

    'primary-light': {
      color: 'rgb(5, 44, 101)',
      background: 'rgb(207, 226, 255)',
      'border-color': 'rgb(158, 197, 254)',
    },
    'secondary-light': {
      color: 'rgb(43, 47, 50)',
      background: 'rgb(226, 227, 229)',
      'border-color': 'rgb(196, 200, 203)',
    },
    'success-light': {
      color: 'rgb(10, 54, 34)',
      background: 'rgb(209, 231, 221)',
      'border-color': 'rgb(163, 207, 187)',
    },
    'danger-light': {
      color: 'rgb(88, 21, 28)',
      background: 'rgb(248, 215, 218)',
      'border-color': 'rgb(241, 174, 181)',
    },
    'warning-light': {
      color: 'rgb(102, 77, 3)',
      background: 'rgb(255, 243, 205)',
      'border-color': 'rgb(255, 230, 156)',
    },
    'info-light': {
      color: 'rgb(5, 81, 96)',
      background: 'rgb(207, 244, 252)',
      'border-color': 'rgb(158, 234, 249)',
    },
    'light-light': {
      color: 'rgb(73, 80, 87)',
      background: 'rgb(252, 252, 253)',
      'border-color': 'rgb(233, 236, 239)',
    },
    'dark-light': {
      color: 'rgb(73, 80, 87)',
      background: 'rgb(206, 212, 218)',
      'border-color': 'rgb(173, 181, 189)',
    },

    'primary-light-hover': {
      color: 'rgb(5, 78, 114)',
      background: 'rgb(207, 245, 255)',
      'border-color': 'rgb(158, 232, 254)',
    },

    'secondary-light-hover': {
      color: 'rgb(54, 60, 63)',
      background: 'rgb(202, 203, 206)',
      'border-color': 'rgb(156, 163, 168)',
    },

    'success-light-hover': {
      color: 'rgb(10, 54, 20)',
      background: 'rgb(196, 232, 216)',
      'border-color': 'rgb(108, 167, 141)',
    },

    'danger-light-hover': {
      color: 'rgb(88, 21, 51)',
      background: 'rgb(248, 215, 248)',
      'border-color': 'rgb(241, 174, 215)',
    },

    'warning-light-hover': {
      color: 'rgb(102, 57, 3)',
      background: 'rgb(231, 219, 200)',
      'border-color': 'rgb(207, 185, 119)',
    },

    'info-light-hover': {
      color: 'rgb(18, 105, 122)',
      background: 'rgb(135, 179, 188)',
      'border-color': 'rgb(112, 185, 199)',
    },

    'light-light-hover': {
      color: 'rgb(108, 108, 108)',
      background: 'rgb(197, 197, 231)',
      'border-color': 'rgb(141, 167, 193)',
    },

    'dark-light-hover': {
      color: 'rgb(51, 57, 62)',
      background: 'rgb(190, 193, 197)',
      'border-color': 'rgb(121, 131, 141)',
    },

    'primary-dark': {
      color: 'rgb(110, 168, 254)',
      background: 'rgb(3, 22, 51)',
      'border-color': 'rgb(8, 66, 152)',
    },
    'secondary-dark': {
      color: 'rgb(167, 172, 177)',
      background: 'rgb(22, 23, 25)',
      'border-color': 'rgb(65, 70, 75)',
    },
    'success-dark': {
      color: 'rgb(117, 183, 152)',
      background: 'rgb(5, 27, 17)',
      'border-color': 'rgb(15, 81, 50)',
    },
    'danger-dark': {
      color: 'rgb(234, 134, 143)',
      background: 'rgb(44, 11, 14)',
      'border-color': 'rgb(132, 32, 41)',
    },
    'warning-dark': {
      color: 'rgb(255, 218, 106)',
      background: 'rgb(51, 39, 1)',
      'border-color': 'rgb(153, 116, 4)',
    },
    'info-dark': {
      color: 'rgb(110, 223, 246)',
      background: 'rgb(3, 40, 48)',
      'border-color': 'rgb(8, 121, 144)',
    },
    'light-dark': {
      color: 'rgb(248, 249, 250)',
      background: 'rgb(52, 58, 64)',
      'border-color': 'rgb(73, 80, 87)',
    },
    'dark-dark': {
      color: 'rgb(222, 226, 230)',
      background: 'rgb(26, 29, 32)',
      'border-color': 'rgb(52, 58, 64)',
    },

    'primary-dark-hover': {
      color: 'rgb(79, 146, 247)',
      background: 'rgb(1, 27, 65)',
      'border-color': 'rgb(0, 50, 124)',
    },

    'secondary-dark-hover': {
      color: 'rgb(138, 143, 148)',
      background: 'rgb(28, 30, 34)',
      'border-color': 'rgb(77, 79, 82)',
    },

    'success-dark-hover': {
      color: 'rgb(87, 150, 121)',
      background: 'rgb(15, 58, 38)',
      'border-color': 'rgb(42, 130, 89)',
    },

    'danger-dark-hover': {
      color: 'rgb(200, 91, 101)',
      background: 'rgb(90, 22, 28)',
      'border-color': 'rgb(163, 24, 35)',
    },

    'warning-dark-hover': {
      color: 'rgb(202, 171, 76)',
      background: 'rgb(104, 81, 5)',
      'border-color': 'rgb(175, 138, 26)',
    },

    'info-dark-hover': {
      color: 'rgb(69, 173, 194)',
      background: 'rgb(12, 112, 135)',
      'border-color': 'rgb(15, 154, 182)',
    },

    'light-dark-hover': {
      color: 'rgb(177, 182, 187)',
      background: 'rgb(88, 96, 104)',
      'border-color': 'rgb(84, 101, 119)',
    },

    'dark-dark-hover': {
      color: 'rgb(129, 132, 136)',
      background: 'rgb(77, 83, 89)',
      'border-color': 'rgb(96, 108, 120)',
    },
  },
}
