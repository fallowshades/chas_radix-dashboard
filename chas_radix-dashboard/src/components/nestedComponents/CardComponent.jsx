import { Card, Flex, Box, Text, Strong } from '@radix-ui/themes'
const CardComponent = ({ title, amount, info }) => {
  return (
    <Card className="">
      <Flex gap="3" align="center">
        <Box>
          <div>
            <Text>{title}</Text>
          </div>
          <div>
            <Text>
              <Strong>{amount}</Strong>
            </Text>
          </div>
          <div>
            <Text>{info}</Text>
          </div>
        </Box>
      </Flex>
    </Card>
  )
}
export default CardComponent
