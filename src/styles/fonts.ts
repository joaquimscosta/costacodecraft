import localFont from 'next/font/local';

const justSans = localFont({
  src: '../assets/fonts/JUST Sans Variable.ttf',
  variable: '--font-just-sans',
});

const montblanc = localFont({
  src: '../assets/fonts/Montblanc.ttf',
  variable: '--font-montblanc',
});

const roketto = localFont({
  src: '../assets/fonts/Roketto.ttf',
  variable: '--font-roketto',
});

const guester = localFont({
  src: '../assets/fonts/Guester.ttf',
  variable: '--font-guester',
});

export { justSans, montblanc, roketto, guester };
