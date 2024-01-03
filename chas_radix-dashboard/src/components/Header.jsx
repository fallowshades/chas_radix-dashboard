import { nanoid } from 'nanoid'
import NavLinks from './nestedComponents/NavLinks'
import { Box, Flex } from '@radix-ui/themes'

const Header = () => {
  const links = [
    { id: nanoid(), text: 'Mail' },
    { id: nanoid(), text: 'Dashboard' },
    ,
    { id: nanoid(), text: 'Cards' },
    ,
    { id: nanoid(), text: 'Tasks' },
    ,
    { id: nanoid(), text: 'Playground' },
    ,
    { id: nanoid(), text: 'Forms' },
    ,
    { id: nanoid(), text: 'Music' },
    ,
    { id: nanoid(), text: 'Authentication' },
  ]

  if (links.length === 0) {
    return (
      <>
        <h2>sad life</h2>
      </>
    )
  }
  return (
    <>
      <header>
        <Flex gap="3">
          {links.map((link) => {
            return (
              <Box key={link.id}>
                <NavLinks {...link} />
              </Box>
            )
          })}
        </Flex>
      </header>
    </>
  )
}
export default Header
