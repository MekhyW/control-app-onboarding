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
            type: 'image',
            src: import('./assets/img/classified.webp'),
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
            src: import('./assets/img/expressions.webp'),
          },
          shape: 'stacked',
          pagination: 'count',
          title: '_s2.title',
          description: "_s2.description",
          button: '_s2.button',
        },

        // playing music
        {
          media: {
            type: 'video',
            src: import('./assets/videos/musicplayer.mp4'),
            poster: import('./assets/img/musicplayer.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          title: '_s3.title',
          description: "_s3.description",
          button: '_s3.button',
        },

        // sound effects
        {
          media: {
            type: 'video',
            src: import('./assets/videos/soundboard.mp4'),
            poster: import('./assets/img/soundboard.webp'),
          },
          shape: 'stacked',
          pagination: 'count',
          title: '_s4.title',
          description: "_s4.description",
          button: '_s4.button',
        },

        // voice changer
        {
          media: {
            type: 'video',
            src: import('./assets/videos/voice.mp4'),
            poster: import('./assets/img/voice.webp'),
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
            type: 'video',
            src: import('./assets/videos/lights.mp4'),
            poster: import('./assets/img/lights.webp'),
          },
          shape: 'stacked',
          pagination: 'count',
          title: '_s6.title',
          description: "_s6.description",
          button: '_s6.button',
        },

        // assistant (cookiebot)
        {
          media: {
            type: 'image',
            src: import('./assets/img/assistant.webp'),
          },
          shape: 'stacked',
          pagination: 'count',
          textAlign: 'center',
          title: '_s7.title',
          description: "_s7.description",
          button: '_s7.button',
        },

        // app installation
        {
          media: {
            type: 'image',
            src: import('./assets/img/app.webp'),
          },
          shape: 'rounded',
          pagination: 'count',
          list: [
            '_s8step1',
            '_s8step2',
            '_s8step3',
          ],
          title: '_s8.title',
          description: "_s8.description",
          button: '_s8.button',
        },
      ],
    },
  ],
});
