import localFont from '@next/font/local';

export const AvenirNext = localFont({
  src: [
    {
      path: '../public/fonts/AvenirNext/AvenirNextLTPro-Regular.otf',
      weight: '400',
      style:'normal'
    },
    {
      path: '../public/fonts/AvenirNext/AvenirNextLTPro-Bold.otf',
      weight: '700',
      style:'normal'
    },
    {
      path: '../public/fonts/AvenirNext/AvenirNextLTPro-It.otf',
      weight: '400',
      style:'italic'
    }
  ],
  variable: '--font-avenirNext',
});

export const Tittilium = localFont({
  src: [
    {
      path: '../public/fonts/Tittilium/TitilliumWeb-Regular.ttf',
      weight: '400',
      style:'normal'
    },
    {
      path: '../public/fonts/Tittilium/TitilliumWeb-Bold.ttf',
      weight: '700',
      style:'normal'
    },
  ],
  variable: '--font-tittilium',
});