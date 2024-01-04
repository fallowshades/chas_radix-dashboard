import * as Popover from '@radix-ui/react-popover'
import {
  Button,
  Flex,
  Avatar,
  Box,
  TextArea,
  Checkbox,
  Text,
} from '@radix-ui/themes'
import { VscCalendar } from 'react-icons/vsc'
const PopoverInHero = () => {
  return (
    <div>
      <Popover.Root>
        <Popover.Trigger>
          <Flex>
            <VscCalendar width="16" height="16" />
            Jan 20, 2023 - Feb 09, 2023
          </Flex>
        </Popover.Trigger>
        <Popover.Content style={{ width: 360 }}>
          <Flex gap="3">
            <Avatar
              size="2"
              src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?&w=64&h=64&dpr=2&q=70&crop=focalpoint&fp-x=0.67&fp-y=0.5&fp-z=1.4&fit=crop"
              fallback="A"
              radius="full"
            />
            <Box grow="1">
              <TextArea placeholder="Write a comment…" style={{ height: 80 }} />
              <Flex gap="3" mt="3" justify="between">
                <Flex align="center" gap="2" asChild>
                  <label>Send to group</label>
                </Flex>

                <Popover.Close>Comment</Popover.Close>
              </Flex>
            </Box>
          </Flex>
        </Popover.Content>
      </Popover.Root>
    </div>
  )
}
export default PopoverInHero
