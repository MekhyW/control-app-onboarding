import { defineConfig } from '@tok/generation';

export default defineConfig({
  theme: 'dark',
  locale: {
    fallback: 'en',
    'pt-br': import('./locales/pt.json'),
    'pt': import('./locales/pt.json'),
    'en': import('./locales/en.json'),
  },
  pages: [
    {
      slides: [
        // welcome
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_hello.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: '_s1.title',
          description: "_s1.description",
          button: '_s1.button',
        },

        // expressions
        {
          media: {
            type: 'image',
            src: import('./assets/img/durov.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: '_s2.title',
          description: "_s2.description",
          button: '_s2.button',
        },

        // playing music
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_love.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          title: '_s3.title',
          description: "_s3.description",
          button: '_s3.button',
        },

        // sound effects
        {
          extends: 'form', // note, it's important to extend from 'form' here
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_spy.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          form: [
            {
              id: 'text_from_form',
              placeholder: 'Text input',
              type: 'text',
            },
            {
              id: 'number_from_form',
              placeholder: 'Number input',
              type: 'number',
            },
            {
              id: 'checkbox_from_form',
              placeholder: 'Checkbox',
              type: 'checkbox',
            },
          ],
          title: '_s4.title',
          description: "_s4.description",
          button: '_s4.button',
        },

        // voice changer
        {
          media: {
            type: 'video',
            src: import('./assets/videos/spongebob.mp4'),
            poster: import('./assets/img/spongebob_poster.webp'),
            style: 'aspect-ratio: 400/287', // here we manually set video aspect-ratio (default is 16:9)
          },
          shape: 'rounded',
          pagination: 'count',
          title: '_s5.title',
          description: "_s5.description",
          button: '_s5.button',
        },

        // lights
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_juggling.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          list: [
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/guide.svg'),
                size: 30,
              },
              text: 'Some cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/track.svg'),
                size: 30,
              },
              text: 'Some very cool feature',
            },
            {
              media: {
                type: 'icon',
                src: import('./assets/icons/time.svg'),
                size: 30,
              },
              text: 'Some extremely cool feature',
            },
          ],
          title: '_s6.title',
          description: "_s6.description",
          button: '_s6.button',
        },

        // assistant (cookiebot)
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_xray.tgs'),
            size: 250,
          },
          shape: 'square',
          pagination: 'count',
          textAlign: 'center',
          list: [
            '<b>CSS styles</b>: extend primary colors from Telegram or set yours',
            'Button text and actions (look down)',
            'Use our carefully crafted <b>presets</b> or easily create your own',
          ],
          title: '_s7.title',
          description: "_s7.description",
          button: '_s7.button',
        },

        // app installation
        {
          media: {
            type: 'sticker',
            src: import('./assets/stickers/duck_cool.tgs'),
            size: 150,
          },
          shape: 'square',
          pagination: 'count',
          list: [
            'One-click 0$ <b>deploy</b> on GitHub Pages',
            'Language and currency localization',
            'Buttons with <b>haptic</b> feedback',
            'Content pre-loading for high speed',
            '<b>Low-code</b> approach to building onboardings',
            'Many examples/presets',
            "And many more... (see <a href='https://github.com/Easterok/telegram-onboarding-kit' target='_blank'>GitHub</a>)",
          ],
          title: '_s8.title',
          description: "_s8.description",
          button: '_s8.button',
        },

        // fake terms
        {
          extends: 'paywall',
          title: '_s9.title',
          description: '_s9.description',
          links: [
            {
              text: 'Link 1',
              href: 'https://google.com'
            },
            {
              text: 'Link 2',
              href: 'https://google.com'
            }
          ],
          mainButtonText: '_s9.button',
        },
      ],
    },
  ],
});
