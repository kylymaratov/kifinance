import { vars } from 'nativewind'

export const themes = {
  light: vars({
    '--color-primary-default': '#3a5e96',
    '--color-primary-light': '#5bd1e7',
    '--color-secondary-default': '#9b6cca',
    '--color-secondary-light': '#dfbeff',
    '--color-tertiary-default': '#ff88bd',
    '--color-tertiary-light': '#ffc2e6',
    '--color-accent-default': '#f9c04a',
    '--color-accent-light': '#ffeea9',
    '--color-grey-default': '#979797',
    '--color-slate-default': '#38383a',
    '--color-dark-default': '#1f355b',
    '--color-light-default': '#FCFDFD',
    '--color-overlay': 'rgba(0, 0, 0, .05)',
  }),
  dark: vars({
    '--color-primary-default': '#3a5e96',
    '--color-primary-light': '#5bd1e7',
    '--color-secondary-default': '#9b6cca',
    '--color-secondary-light': '#dfbeff',
    '--color-tertiary-default': '#ff88bd',
    '--color-tertiary-light': '#ffc2e6',
    '--color-accent-default': '#f9c04a',
    '--color-accent-light': '#ffeea9',
    '--color-grey-default': '#979797',
    '--color-slate-default': '#38383a',
    '--color-dark-default': '#1f355b',
    '--color-light-default': '#1E1E1E',
    '--color-overlay': 'rgba(255, 255, 255, .05)',
  }),
} as const

export const themeColors = {
  screen: {
    light: '#ffffff',
    dark: '#131314',
  },
  card: {
    light: '#f5f5f5',
    dark: '#1e1f20',
  },
  border: {
    light: '#e5e5e5',
    dark: '#2a2b2c',
  },
  text: {
    light: '#000000',
    dark: '#ffffff',
  },
} as const
