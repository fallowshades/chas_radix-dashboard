import { nanoid } from 'nanoid'
import NavLinks from './nestedComponents/NavLinks'
import { Flex, Box, Button } from '@radix-ui/themes'
import * as Tabs from '@radix-ui/react-tabs'
import PopoverInHero from './nestedComponents/PopoverInHero'
const Hero = () => {
  const links = [
    { id: nanoid(), text: 'Overview' },
    { id: nanoid(), text: 'Analytics' },
    ,
    { id: nanoid(), text: 'Reports' },
    ,
    { id: nanoid(), text: 'Notifications' },
  ]

  if (links.length === 0) {
    return <div>No link to the dark web</div>
  }

  return (
    <Flex justify="between" className="p-4">
      <Flex direction="column" className="gap-4">
        <h2 className="tracking-tight font-bold text-3xl">Dashboard</h2>

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

      <Flex gap="4">
        <PopoverInHero />
        <Box>
          <button className=" bg-black text-white h-inherit rounded-md p-2">
            Download
          </button>
        </Box>
      </Flex>
    </Flex>
  )
}
export default Hero
