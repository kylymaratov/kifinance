import { useThemeContext } from '@/contexts/ThemeContext'

import { DarkTheme, DefaultTheme } from '@react-navigation/native'
import { themeColors } from '@/utils/themeColors'

export const useAppTheme = () => {
  const { isDark } = useThemeContext()
  const appTheme = isDark
    ? {
        ...DarkTheme,
        colors: {
          ...DarkTheme.colors,
          background: themeColors.screen.dark,
          card: themeColors.card.dark,
          text: themeColors.text.dark,
          border: themeColors.border.dark,
        },
        dark: true,
      }
    : {
        ...DefaultTheme,
        colors: {
          ...DefaultTheme.colors,
          background: themeColors.screen.light,
          card: themeColors.card.light,
          text: themeColors.text.light,
          border: themeColors.border.light,
        },
        dark: false,
      }
  return { appTheme }
}
