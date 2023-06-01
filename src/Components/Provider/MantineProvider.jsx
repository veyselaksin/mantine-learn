import { MantineProvider } from '@mantine/core'

export default function ManProvider() {
    return (
        <MantineProvider
            theme={{
                fontFamily: 'Fira Code',
                colorScheme: 'dark',
                fontSizes: { md: 12 },
                colors: {
                    blue: ['#7950f2', '#364fc7', '#234567', '#5c4f7c', '#ae3ec9', '#12b886', '#fd7e14', '#f03e3e', '#f03e3e', '#f03e3e']
                },
                loader: 'bars'
            }}
            styles={{
                Button: theme => ({
                    root: {
                        backgroundColor: theme.colors.blue[6]
                    }
                })
            }}>
            <Paper>
                <Text>This is text</Text>
            </Paper>
            <Button>Hello Mantine!</Button>
            <Loader />
        </MantineProvider>
    )
}
