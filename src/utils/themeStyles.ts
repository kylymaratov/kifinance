import { useTheme } from '../contexts/ThemeContext'

export function useThemeStyles() {
  const { isDark } = useTheme()

  return {
    screenBackground: {
      backgroundColor: isDark ? '#131314' : 'whitesmoke',
    },
  }
}
