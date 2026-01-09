import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useColorScheme } from 'react-native'

type Theme = 'light' | 'dark' | 'system'

interface ThemeContextType {
  theme: Theme
  isDark: boolean
  setTheme: (theme: Theme) => void
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const THEME_STORAGE_KEY = '@kifinance_theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  const systemColorScheme = useColorScheme()
  const [theme, setThemeState] = useState<Theme>('system')
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Load saved theme preference
    AsyncStorage.getItem(THEME_STORAGE_KEY).then((savedTheme) => {
      if (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system') {
        setThemeState(savedTheme as Theme)
      }
    })
  }, [])

  useEffect(() => {
    // Determine if dark mode should be active
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

  const toggleTheme = () => {
    if (theme === 'system') {
      setTheme(systemColorScheme === 'dark' ? 'light' : 'dark')
    } else {
      setTheme(theme === 'dark' ? 'light' : 'dark')
    }
  }

  return (
    <ThemeContext.Provider value={{ theme, isDark, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
