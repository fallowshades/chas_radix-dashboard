import List from './nestedComponents/List'
import Charts from './nestedComponents/Charts'
import { Grid, Card } from '@radix-ui/themes'

const DataVisualization = () => {
  return (
    <>
      <Grid columns="2" gap="4" className="p-4">
        <Card>
          {' '}
          <Charts />
        </Card>
        <Card>
          {' '}
          <List />
        </Card>
      </Grid>
    </>
  )
}
export default DataVisualization
