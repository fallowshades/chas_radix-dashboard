import { nanoid } from 'nanoid'
import NavLinks from './nestedComponents/NavLinks'
import { Flex, Card } from '@radix-ui/themes'
import * as Tabs from '@radix-ui/react-tabs'
import DropDownMenu from './nestedComponents/DropDownMenu'
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
    <Flex
      justify={'between'}
      className="border-solid border-2 border-slate-200 m-0 p-4"
    >
      <Flex gap="4">
        <Card>
          {' '}
          <DropDownMenu />
        </Card>
        <Tabs.Root className="TabsRoot" defaultValue="tab1">
          <Tabs.List className="TabsList" size="1" aria-label="tabs in header">
            {links.map((link) => {
              return (
                <Tabs.Trigger
                  className="TabsTrigger"
                  key={link.id}
                  value={link.id}
                >
                  {link.text}
                </Tabs.Trigger>
              )
            })}
          </Tabs.List>
        </Tabs.Root>
      </Flex>

      <Flex>
        <input placeholder="Search..." />
        <span className="relative flex-shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5">
          <img
            className="aspect-square h-5 w-5 grayscale"
            alt="Alicia Koch"
            src="https://images.unsplash.com/photo-1703328742708-d547eed7a0f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </span>
      </Flex>
    </Flex>
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
