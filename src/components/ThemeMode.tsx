'use client';

import classNames from 'classnames';
import React, { useState, useEffect, useCallback } from 'react';

type Theme = 'light' | 'dark' | null;

interface ThemeModeProps {
  className?: string;
}

export default function ThemeMode({ className }: ThemeModeProps) {
  const [theme, setTheme] = useState<Theme>(null);
  const [osThemePreferenceIsDark, setOsThemePreferenceIsDark] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as Theme;
    setTheme(storedTheme);
    setOsThemePreferenceIsDark(
      window.matchMedia('(prefers-color-scheme: dark)').matches,
    );
  }, []);

  const selectedTheme = useCallback(() => {
    if (theme) {
      return theme;
    } else if (osThemePreferenceIsDark) {
      return 'dark';
    } else {
      return 'light';
    }
  }, [theme, osThemePreferenceIsDark]);

  useEffect(() => {
    if (theme !== null) {
      // Only run after initial client-side render
      const currentTheme = selectedTheme();
      document.body.setAttribute('data-theme', currentTheme);
      localStorage.setItem('theme', currentTheme);
    }
  }, [selectedTheme, theme]);

  const handleChange = () => {
    const toggle = theme === 'light' ? 'dark' : 'light';
    setTheme(toggle);
  };
  const classes = classNames(
    className,
    'relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 focus:outline-hidden',
  );
  return (
    <button type='button' className={classes}>
      <span className='absolute -inset-1.5' />
      <span className='sr-only'>Theme Mode</span>
      <label className='swap swap-rotate'>
        <input
          type='checkbox'
          checked={selectedTheme() === 'light'}
          className='theme-controller'
          onChange={handleChange}
        />

        <svg
          className='swap-on size-6 h-10 w-10 fill-current'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
        >
          <path d='M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z' />
        </svg>

        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='swap-off size-6 h-10 w-10 fill-current'
        >
          <path
            fillRule='evenodd'
            d='M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z'
            clipRule='evenodd'
          />
        </svg>
      </label>
    </button>
  );
}
