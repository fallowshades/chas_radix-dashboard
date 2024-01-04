import { nanoid } from 'nanoid'
import NavLinks from './nestedComponents/NavLinks'
import { Flex } from '@radix-ui/themes'
import * as Tabs from '@radix-ui/react-tabs'
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
    <Tabs.Root className="TabsRoot" defaultValue="tab1">
      <Tabs.List className="TabsList" size="1" aria-label="tabs in header">
        {links.map((link) => {
          return (
            <Tabs.Trigger className="TabsTrigger" key={link.id} value={link.id}>
              {link.text}
            </Tabs.Trigger>
          )
        })}
      </Tabs.List>
    </Tabs.Root>
  )
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
