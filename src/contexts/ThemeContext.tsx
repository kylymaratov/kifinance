import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react'
import { View, useColorScheme } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { themes } from '@/utils/themeColors'
type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  isDark: boolean
  setTheme: (theme: Theme) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_STORAGE_KEY = '@kifinance_theme'

interface ThemeProviderProps {
  children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const systemColorScheme = useColorScheme()
  const [theme, setThemeState] = useState<Theme>('system')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    AsyncStorage.getItem(THEME_STORAGE_KEY).then((savedTheme) => {
      if (
        savedTheme === 'light' ||
        savedTheme === 'dark' ||
        savedTheme === 'system'
      ) {
        setThemeState(savedTheme as Theme)
      }
    })
  }, [])

  useEffect(() => {
    if (theme === 'system') {
      setIsDark(systemColorScheme === 'dark')
    } else {
      setIsDark(theme === 'dark')
    }
  }, [theme, systemColorScheme])

  const setTheme = async (newTheme: Theme) => {
    setThemeState(newTheme)
    await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme)
  }

  const currentTheme = isDark ? 'dark' : 'light'

  return (
    <ThemeContext.Provider value={{ theme, isDark, setTheme }}>
      <View
        style={themes[currentTheme]}
        className={`flex-1 ${isDark ? 'dark' : ''}`}
      >
        {children}
      </View>
    </ThemeContext.Provider>
  )
}

export function useThemeContext() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useThemeContext must be used within a ThemeProvider')
  }
  return context
}
