import { nanoid } from 'nanoid'
import UsersInList from './UsersInList'
import { Box } from '@radix-ui/themes'
const List = () => {
  const userData = [
    {
      id: nanoid(),
      name: 'Olivia Martin',
      email: 'olivia.martin@email.com',
      sale: 1999,
    },
    {
      id: nanoid(),
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      sale: 39,
    },
    {
      id: nanoid(),
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      sale: 299,
    },
    {
      id: nanoid(),
      name: 'William Kim',
      email: 'will@email.com',
      sale: 99,
    },
    {
      id: nanoid(),
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      sale: 39,
    },
  ]

  return (
    <div>
      <div>
        {' '}
        <h2>Recent Sales</h2>
        <p>You mad 265 sales this month.</p>
      </div>

      {userData.map((user) => {
        return (
          <Box key={user.id}>
            <UsersInList />
          </Box>
        )
      })}
    </div>
  )
}
export default List
