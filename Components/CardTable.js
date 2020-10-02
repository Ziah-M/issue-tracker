import React, { useState } from 'react'
import {
  Table as UnstyledTable,
  Button,
  NavLink as Link,
  InputGroup,
  FormControl,
} from 'react-bootstrap'
import styled from 'styled-components'

import _ from 'lodash'
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import uuid from 'uuid'

// HELPER FUNCTION FOR SORTING ROWS BY PROPERTY ON A ROW
const sort = (rows = [[]], index = 0, reverse = false) => {
  let sorted = _.sortBy(rows, (row) => row[index])

  if (reverse) {
    sorted = sorted.reverse()
  }

  return sorted
}

// Searches multiple ROWS to check if any ELEMENT of a ROW includes the QUERY
const localDatatableSearch = (rows = [[]], query = '') => {
  if (query) {
    const filteredRows = rows.filter((row) => {
      const itemsMatchingQuery = row.filter((item = '') =>
        typeof item !== 'string'
          ? false
          : !!item.toUpperCase().includes(query.toUpperCase()),
      )

      return !!itemsMatchingQuery.length
    })
    return filteredRows
  }
  return rows
}

const CardTable = ({ headings = [], rows = [['No data available']] }) => {
  // --- PAGINATION ---
  const [page, setPage] = useState(1)
  const resultsPerPage = 10
  const rangeStart = 1 + (page - 1) * resultsPerPage
  const rangeEnd = Math.min(page * resultsPerPage, rows.length)
  const totalPages = 1 + parseInt((rangeEnd - 1) / 10)

  // --- SORTING ---
  const [sortColumnIndex, setSortColumnIndex] = useState(0)
  const [isReversed, setIsReversed] = useState(false)

  const sortedRows = sort(rows, sortColumnIndex, isReversed)

  const handleChangeSortColumn = (index) => {
    if (index === sortColumnIndex) {
      setIsReversed(!isReversed)
    }

    if (index !== sortColumnIndex) {
      setSortColumnIndex(index)
      setIsReversed(false)
    }
  }

  // --- LOCAL SEARCH ---
  const [query, setQuery] = useState('')

  const onChange = (event) => {
    setQuery(event.target.value)
  }

  const sortedRowsWithSearchFilter = localDatatableSearch(sortedRows, query)

  return (
    <Wrapper>
      <TopSection>
        Entries &amp;{' '}
        <SearchInput size="sm">
          <InputGroup.Prepend>
            <InputGroup.Text>Search:</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl onChange={onChange} value={query} />
        </SearchInput>
      </TopSection>
      <Table striped size="sm">
        <Header>
          <Headings>
            {headings.map((heading, index) => (
              <td
                key={`heading-table-${index}-${uuid()}`}
                onClick={() => handleChangeSortColumn(index)}
              >
                <span>
                  {heading}{' '}
                  {!!heading.replace(/\s/g, '').length && (
                    <FontAwesomeIcon
                      style={{
                        color: index !== sortColumnIndex ? 'gray' : 'green',
                      }}
                      icon={
                        index === sortColumnIndex && isReversed
                          ? faSortUp
                          : faSortDown
                      }
                    />
                  )}
                </span>
              </td>
            ))}
          </Headings>
        </Header>
        <Body>
          {sortedRowsWithSearchFilter.map(
            (row = [], indexRow) =>
              indexRow < rangeEnd && (
                <Tr key={`table-row-${indexRow}`}>
                  {row.map((item = '', indexItem) =>
                    typeof item === 'string' ? (
                      <td
                        key={`table-row-item-${indexRow}-${indexItem}-${uuid()}`}
                      >
                        {item}
                      </td>
                    ) : (
                      <td
                        key={`table-row-item-${indexRow}-${indexItem}-${uuid()}`}
                      >
                        {item}
                      </td>
                    ),
                  )}
                </Tr>
              ),
          )}
        </Body>
      </Table>
      <Footer>
        {`Showing ${rangeStart} to ${rangeEnd} of ${rows.length} entries`}{' '}
        <Pages>
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              if (page > 1) {
                setPage(page - 1)
              }
            }}
          >
            Previous
          </Button>
          {getPageButtons(totalPages, setPage)}
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              if (page < totalPages) {
                setPage(page + 1)
              }
            }}
          >
            Next
          </Button>
        </Pages>
      </Footer>
    </Wrapper>
  )
}

const getPageButtons = (totalPages, setPage) => {
  let i
  let jsx = []
  for (i = 0; i < totalPages; i++) {
    const pageNumber = i + 1
    jsx = [
      ...jsx,
      <Button
        size="sm"
        variant="light"
        style={{ margin: '0 5px' }}
        onClick={() => setPage(pageNumber)}
        key={uuid()}
      >
        {pageNumber}
      </Button>,
    ]
  }
  return jsx
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`
const Table = styled(UnstyledTable)`
  user-select: none;
  width: 100%;
  font-size: 11px;
`

const Header = styled.thead`
  min-height: 60px;
  width: 100%;
`

const Headings = styled.tr`
  font-weight: 700;
  width: 100%;
  white-space: nowrap;
`

const Body = styled.tbody`
  min-height: 80px;
  width: 100%;
`

const Footer = styled.div`
  min-height: 40px;
  font-size: 11px;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Pages = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`

const Tr = styled.tr`
  width: 100%;
`

const TopSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding: 0 20px;
  font-size: 18px;
`

const SearchInput = styled(InputGroup)`
  max-width: 200px;
`

export default CardTable
