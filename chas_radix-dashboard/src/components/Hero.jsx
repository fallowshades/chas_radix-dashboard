import { nanoid } from 'nanoid'
import NavLinks from './nestedComponents/NavLinks'
import { Flex } from '@radix-ui/themes'

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
    <Flex justify="between">
      <div>
        <h2>Dashboard</h2>
        <Flex gap="3">
          {links.map((link) => {
            return <NavLinks key={link.id} {...link} />
          })}
        </Flex>
      </div>

      <div>
        <button>Jav 20, 2023 - Feb 09, 2023</button>
        <button>Download</button>
      </div>
    </Flex>
  )
}
export default Hero
