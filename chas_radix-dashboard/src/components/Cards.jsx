import { nanoid } from 'nanoid'
import CardComponent from './nestedComponents/CardComponent'
import { Grid } from '@radix-ui/themes'

const Cards = () => {
  const cardData = [
    {
      id: nanoid(),
      title: 'Total Revenue',
      amount: 45231.89,
      info: '+20,1% from last month',
    },
    {
      id: nanoid(),
      title: 'Subscriptions',
      amount: 2350,
      info: '+180.1% from last month',
    },
    {
      id: nanoid(),
      title: 'Sales',
      amount: 12234,
      info: '+19% from last month',
    },
    {
      id: nanoid(),
      title: 'Active Now',
      amount: 570,
      info: '+201 from last month',
    },
  ]

  if (cardData.length === 0) {
    return <h2>sad life</h2>
  }

  return (
    <>
      <section className="">
        {' '}
        <Grid gap="3" columns="4">
          {cardData.map((card) => {
            return <CardComponent key={card.id} {...card} />
          })}
        </Grid>
      </section>
    </>
  )
}

export default Cards
