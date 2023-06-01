import Crd from './Card'
import { Grid } from '@mantine/core'

export default function Cards() {
    return (
        <Grid
            grow
            style={{
                padding: 10
            }}>
            <Grid.Col span={4}>
                <Crd />
            </Grid.Col>
            <Grid.Col span={4}>
                <Crd />
            </Grid.Col>
            <Grid.Col span={4}>
                <Crd />
            </Grid.Col>
            <Grid.Col span={4}>
                <Crd />
            </Grid.Col>
            <Grid.Col span={4}>
                <Crd />
            </Grid.Col>
        </Grid>
    )
}
