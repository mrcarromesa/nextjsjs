import { generatePagesArray } from './utils/index'
import { Ellipsis } from './Ellipsis'
import { PaginationItem } from './PaginationItem'
import { ButtonGroup, Props as ButtonGroupProps } from '../Button/Group'
import { Button } from '../Button'

export interface IPaginationProps {
  totalCountOfItems: number
  registersPerPage: number
  currentPage: number
  onPageChange: (page: number) => void
  size?: ButtonGroupProps['size']
}

const siblingsCount = 2

export const Pagination = ({
  totalCountOfItems,
  onPageChange,
  currentPage,
  registersPerPage,
  size,
}: IPaginationProps) => {
  const lastPage = Math.ceil(totalCountOfItems / registersPerPage)

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : []

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : []

  return (
    <ButtonGroup size={size}>
      <Button
        variation="primaryOutline"
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </Button>
      {currentPage > 1 + siblingsCount && (
        <>
          <PaginationItem number={1} onPageChange={onPageChange} />
          {currentPage > 2 + siblingsCount && <Ellipsis />}
        </>
      )}
      {previousPages.length > 0 &&
        previousPages.map((page) => (
          <PaginationItem
            key={page}
            onPageChange={onPageChange}
            number={page}
          />
        ))}
      <PaginationItem
        isActive
        onPageChange={onPageChange}
        number={currentPage}
      />
      {nextPages.length > 0 &&
        nextPages.map((page) => (
          <PaginationItem
            key={page}
            number={page}
            onPageChange={onPageChange}
          />
        ))}
      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && <Ellipsis />}
          <PaginationItem number={lastPage} onPageChange={onPageChange} />
        </>
      )}
      <Button
        variation="primaryOutline"
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </Button>
    </ButtonGroup>
  )
}
