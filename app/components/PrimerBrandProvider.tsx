'use client'

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { ThemeProvider, type ColorMode } from '@primer/react-brand'

type ColorScheme = 'light' | 'dark'

interface ColorSchemeContextValue {
  readonly colorScheme: ColorScheme
  readonly toggleColorScheme: () => void
}

const ColorSchemeContext = createContext<ColorSchemeContextValue | null>(null)

/**
 * Access the active color scheme and a toggle function.
 * Must be used within {@link PrimerBrandProvider}.
 */
export function useColorScheme(): ColorSchemeContextValue {
  const context = useContext(ColorSchemeContext)
  if (!context) {
    throw new Error('useColorScheme must be used within a PrimerBrandProvider')
  }
  return context
}

const STORAGE_KEY = 'trustcrop-color-scheme'

interface PrimerBrandProviderProps {
  readonly children: ReactNode
  readonly colorMode?: ColorMode
}

/**
 * Client-side wrapper for Primer Brand's ThemeProvider.
 *
 * ThemeProvider uses React Context and must live in a Client Component.
 * The colorMode prop accepts "light" | "dark" | "auto".
 *
 * @see https://primer.style/brand/introduction/theming/
 */
export function PrimerBrandProvider({
  children,
  colorMode = 'dark',
}: PrimerBrandProviderProps) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    colorMode === 'light' ? 'light' : 'dark',
  )

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored === 'light' || stored === 'dark') {
      setColorScheme(stored)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, colorScheme)
    document.documentElement.setAttribute('data-color-mode', colorScheme)
  }, [colorScheme])

  const value = useMemo<ColorSchemeContextValue>(
    () => ({
      colorScheme,
      toggleColorScheme: () =>
        setColorScheme((current) => (current === 'dark' ? 'light' : 'dark')),
    }),
    [colorScheme],
  )

  return (
    <ColorSchemeContext.Provider value={value}>
      <ThemeProvider colorMode={colorScheme}>{children}</ThemeProvider>
    </ColorSchemeContext.Provider>
  )
}
