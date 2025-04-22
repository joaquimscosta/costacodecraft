import localFont from 'next/font/local';

const justSans = localFont({
  src: '../assets/fonts/JUST Sans Variable.ttf',
  variable: '--font-just-sans',
});

const montblanc = localFont({
  src: '../assets/fonts/Montblanc.ttf',
  variable: '--font-montblanc',
});

export { justSans, montblanc };
