import { nanoid } from 'nanoid'
import Card from './nestedComponents/Card'
import { Flex } from '@radix-ui/themes'

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
      <section>
        {' '}
        <Flex gap="3">
          {cardData.map((card) => {
            return <Card key={card.id} {...card} />
          })}
        </Flex>
      </section>
    </>
  )
}

export default Cards
