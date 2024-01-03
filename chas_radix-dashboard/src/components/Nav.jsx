import { nanoid } from 'nanoid'
import NavLinks from './nestedComponents/NavLinks'
import { Flex } from '@radix-ui/themes'
const Nav = () => {
  const links = [
    { id: nanoid(), text: 'Overview' },
    { id: nanoid(), text: 'Customers' },
    ,
    { id: nanoid(), text: 'Products' },
    ,
    { id: nanoid(), text: 'Settings' },
  ]

  if (links.length === 0) {
    return <div>No link to the dark web</div>
  }

  return (
    <Flex justify="between">
      <div>
        <Flex gap="3">
          {links.map((link) => {
            return <NavLinks key={link.id} {...link} />
          })}
        </Flex>
      </div>
      <div>
        <input type="text" placeholder="Search..." />
      </div>
    </Flex>
  )
}
export default Nav
