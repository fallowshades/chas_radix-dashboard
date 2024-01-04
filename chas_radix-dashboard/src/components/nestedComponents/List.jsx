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
      img: 'https://ui.shadcn.com/avatars/01.png',
    },
    {
      id: nanoid(),
      name: 'Jackson Lee',
      email: 'jackson.lee@email.com',
      sale: 39,
      img: 'https://ui.shadcn.com/avatars/02.png',
    },
    {
      id: nanoid(),
      name: 'Isabella Nguyen',
      email: 'isabella.nguyen@email.com',
      sale: 299,
      img: 'https://ui.shadcn.com/avatars/03.png',
    },
    {
      id: nanoid(),
      name: 'William Kim',
      email: 'will@email.com',
      sale: 99,
      img: 'https://ui.shadcn.com/avatars/04.png',
    },
    {
      id: nanoid(),
      name: 'Sofia Davis',
      email: 'sofia.davis@email.com',
      sale: 39,
      img: 'https://ui.shadcn.com/avatars/05.png',
    },
  ]

  return (
    <div>
      <div>
        {' '}
        <h2 className="font-bold">Recent Sales</h2>
        <p>You mad 265 sales this month.</p>
      </div>

      {userData.map((user) => {
        return (
          <Box key={user.id}>
            <UsersInList {...user} />
          </Box>
        )
      })}
    </div>
  )
}
export default List
