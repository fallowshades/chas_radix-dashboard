import List from './nestedComponents/List'
import Charts from './nestedComponents/Charts'
import { Grid } from '@radix-ui/themes'

const DataVisualization = () => {
  return (
    <>
      <Grid columns="2">
        <Charts />
        <List />
      </Grid>
    </>
  )
}
export default DataVisualization
