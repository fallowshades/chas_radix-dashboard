import { Flex } from '@radix-ui/themes'

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2,
})

const UsersInList = ({ name, email, sale, img }) => {
  const formattedSale = formatter.format(sale)
  return (
    <Flex justify="between" className="p-4">
      <Flex gap="4">
        <span class="relative flex shrink-0 overflow-hidden rounded-full h-9 w-9">
          <img class="aspect-square h-full w-full" alt="Avatar" src={img} />
        </span>
        <Flex direction={'column'}>
          <p className="font-bold">{name}</p>
          <p>{email}</p>
        </Flex>
      </Flex>
      <p> +{formattedSale}</p>
    </Flex>
  )
}
export default UsersInList
