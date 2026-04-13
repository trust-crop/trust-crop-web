'use client'

import { type ReactNode } from 'react'
import { ThemeProvider, type ColorMode } from '@primer/react-brand'

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
  return <ThemeProvider colorMode={colorMode}>{children}</ThemeProvider>
}
