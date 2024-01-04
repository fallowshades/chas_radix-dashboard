import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Flex, Card, Heading, Box } from '@radix-ui/themes'
import { HiMiniChevronUpDown } from 'react-icons/hi2'
import { CiSearch } from 'react-icons/ci'
import { IoIosAddCircleOutline } from 'react-icons/io'
const DropDownMenu = () => {
  return (
    <div>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Flex>
            <span className="relative flex-shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5">
              <img
                className="aspect-square h-5 w-5 grayscale"
                alt="Alicia Koch"
                src="https://images.unsplash.com/photo-1703328742708-d547eed7a0f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              />
            </span>
            Alice Koch
            <HiMiniChevronUpDown />
          </Flex>
        </DropdownMenu.Trigger>
        <DropdownMenu.Content variant="solid" className="z-50 bg-white">
          <Card className="m-4">
            <DropdownMenu.Item>
              <Flex>
                {' '}
                <CiSearch />
                <Box>
                  <input type="text" placeholder="search..." />
                </Box>
              </Flex>
            </DropdownMenu.Item>
            <DropdownMenu.Separator color="indigo" size="4" />
            <DropdownMenu.Item>
              <Heading as="h2">Personal Account</Heading>
            </DropdownMenu.Item>
            <DropdownMenu.Item shortcut="⌘ D">
              <Flex>
                {' '}
                <span className="relative flex-shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5">
                  <img
                    className="aspect-square h-5 w-5 grayscale"
                    alt="Alicia Koch"
                    src="https://images.unsplash.com/photo-1703328742708-d547eed7a0f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </span>
                Alice Koch
              </Flex>
            </DropdownMenu.Item>
            <DropdownMenu.Separator />
            <DropdownMenu.Item shortcut="⌘ N">
              {' '}
              <Heading as="h2">Teams</Heading>
            </DropdownMenu.Item>

            <DropdownMenu.Separator />
            <DropdownMenu.Item>
              <Flex>
                <span className="relative flex-shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5">
                  <img
                    className="aspect-square h-5 w-5 grayscale"
                    alt="Alicia Koch"
                    src="https://images.unsplash.com/photo-1703328742708-d547eed7a0f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </span>
                Acme inc.
              </Flex>
            </DropdownMenu.Item>
            <DropdownMenu.Item>
              <Flex>
                <span className="relative flex-shrink-0 overflow-hidden rounded-full mr-2 h-5 w-5">
                  <img
                    className="aspect-square h-5 w-5 grayscale"
                    alt="Alicia Koch"
                    src="https://images.unsplash.com/photo-1703328742708-d547eed7a0f1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />
                </span>
                Monster Inc.
              </Flex>
            </DropdownMenu.Item>
            <DropdownMenu.Separator color="indigo" size="4" />
            <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
              <Flex>
                <IoIosAddCircleOutline />
                Create teams
              </Flex>
            </DropdownMenu.Item>
          </Card>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
export default DropDownMenu
