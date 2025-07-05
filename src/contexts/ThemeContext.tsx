import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'light' | 'dark' | 'system';
type ColorScheme = 'default' | 'blue' | 'green' | 'purple' | 'orange' | 'black';

interface ThemeContextType {
  theme: Theme;
  colorScheme: ColorScheme;
  setTheme: (theme: Theme) => void;
  setColorScheme: (scheme: ColorScheme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light');
  const [colorScheme, setColorScheme] = useState<ColorScheme>('default');
  const [isDark, setIsDark] = useState(false);

  // Load saved preferences on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    const savedColorScheme = localStorage.getItem('colorScheme') as ColorScheme | null;
    
    if (savedTheme) {
      setTheme(savedTheme);
    }
    if (savedColorScheme) {
      setColorScheme(savedColorScheme);
    }
  }, []);

  // Handle system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleSystemThemeChange = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        const shouldUseDark = e.matches;
        setIsDark(shouldUseDark);
        applyTheme(shouldUseDark, colorScheme);
      }
    };

    mediaQuery.addEventListener('change', handleSystemThemeChange);
    
    // Set initial system theme if needed
    if (theme === 'system') {
      const shouldUseDark = mediaQuery.matches;
      setIsDark(shouldUseDark);
      applyTheme(shouldUseDark, colorScheme);
    }

    return () => mediaQuery.removeEventListener('change', handleSystemThemeChange);
  }, [theme, colorScheme]);

  // Apply theme when theme or colorScheme changes
  useEffect(() => {
    localStorage.setItem('theme', theme);
    localStorage.setItem('colorScheme', colorScheme);

    let shouldUseDark = false;
    
    if (theme === 'dark') {
      shouldUseDark = true;
    } else if (theme === 'system') {
      shouldUseDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    
    setIsDark(shouldUseDark);
    applyTheme(shouldUseDark, colorScheme);
  }, [theme, colorScheme]);

  const applyTheme = (isDarkMode: boolean, scheme: ColorScheme) => {
    const root = document.documentElement;
    
    // Remove all existing theme and color scheme classes
    root.classList.remove('dark');
    root.classList.remove('scheme-default', 'scheme-blue', 'scheme-green', 'scheme-purple', 'scheme-orange', 'scheme-black');
    
    // Add dark class if needed
    if (isDarkMode) {
      root.classList.add('dark');
    }
    
    // Add color scheme class
    root.classList.add(`scheme-${scheme}`);
  };

  return (
    <ThemeContext.Provider value={{ theme, colorScheme, setTheme, setColorScheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};