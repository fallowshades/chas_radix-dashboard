import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Flex } from '@radix-ui/themes'
import { HiMiniChevronUpDown } from 'react-icons/hi2'
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
        <DropdownMenu.Content>
          <DropdownMenu.Item shortcut="⌘ E">Edit</DropdownMenu.Item>
          <DropdownMenu.Item shortcut="⌘ D">Duplicate</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ N">Archive</DropdownMenu.Item>

          <DropdownMenu.Sub>
            <DropdownMenu.SubTrigger>More</DropdownMenu.SubTrigger>
            <DropdownMenu.SubContent>
              <DropdownMenu.Item>Move to project…</DropdownMenu.Item>
              <DropdownMenu.Item>Move to folder…</DropdownMenu.Item>

              <DropdownMenu.Separator />
              <DropdownMenu.Item>Advanced options…</DropdownMenu.Item>
            </DropdownMenu.SubContent>
          </DropdownMenu.Sub>

          <DropdownMenu.Separator />
          <DropdownMenu.Item>Share</DropdownMenu.Item>
          <DropdownMenu.Item>Add to favorites</DropdownMenu.Item>
          <DropdownMenu.Separator />
          <DropdownMenu.Item shortcut="⌘ ⌫" color="red">
            Delete
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </div>
  )
}
export default DropDownMenu
