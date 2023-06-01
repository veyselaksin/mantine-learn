import './App.css'
import { Button, Paper, Text, Loader, MantineProvider, ColorSchemeProvider } from '@mantine/core'
import { useHotkeys } from '@mantine/hooks'
import Cards from './Components/Cards'
import LightDarkToggle from './Components/LightDarkButton'
import { useEffect, useState } from 'react'

function App() {
    const [colorScheme, setColorScheme] = useState('dark')

    useEffect(() => {
        let theme = localStorage.getItem('theme')
        if (theme !== null) {
            setColorScheme(theme)
        }
    }, [])

    const toggleColor = value => {
        return value || (colorScheme === 'dark' ? 'light' : 'dark')
    }

    const toggleColorScheme = value => {
        setColorScheme(toggleColor(value))
        localStorage.setItem('theme', toggleColor(value))
    }

    useHotkeys([['mod+J', () => toggleColorScheme()]])
    return (
        <div className='App'>
            <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
                <MantineProvider theme={{ colorScheme }}>
                    <Paper padding='md' radius={0} style={{ minHeight: '100vh' }}>
                        <LightDarkToggle style={{ margin: 10 }} />
                        <Cards />
                    </Paper>
                </MantineProvider>
            </ColorSchemeProvider>
        </div>
    )
}

export default App
