import { Button } from '../../Button'

export interface IPaginationItemProps {
  isActive?: boolean
  number: number
  onPageChange: (page: number) => void
}

export const PaginationItem = ({
  isActive,
  number,
  onPageChange,
}: IPaginationItemProps) => {
  return (
    <>
      <Button
        variation="primaryOutline"
        active={isActive}
        onClick={() => onPageChange(number)}
      >
        {number}
      </Button>
    </>
  )
}
