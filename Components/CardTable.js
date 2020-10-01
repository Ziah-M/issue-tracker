import React, { useState } from "react";
import { Table as UnstyledTable, Button } from "react-bootstrap";
import styled from "styled-components";
import { NavLink as Link } from "react-bootstrap";
import _ from "lodash";

// HELPER FUNCTION FOR SORTING ROWS BY PROPERTY ON A ROW
const sort = (rows = [[]], index = 0, reverse = false) => {
  let sorted = _.sortBy(rows, (row) => row[index]);

  if (reverse) {
    sorted = sorted.reverse();
  }

  return sorted;
};

const CardTable = ({ headings = [], rows = [["No data available"]] }) => {
  // --- PAGINATION ---
  const [page, setPage] = useState(1);
  const resultsPerPage = 10;
  const rangeStart = 1 + (page - 1) * resultsPerPage;
  const rangeEnd = Math.min(page * resultsPerPage, rows.length);
  const totalPages = 1 + parseInt((rangeEnd - 1) / 10);

  // --- SORTING ---
  const [sortColumnIndex, setSortColumnIndex] = useState(0);
  const [isReversed, setIsReversed] = useState(false);

  const sortedRows = sort(rows, sortColumnIndex, isReversed);
  console.log("SORTED ROWS: ", sortedRows);

  const handleChangeSortColumn = (index) => {
    if (index === sortColumnIndex) {
      setIsReversed(!isReversed);
    }

    if (index !== sortColumnIndex) {
      setSortColumnIndex(index);
      setIsReversed(false);
    }
  };

  return (
    <Wrapper>
      <Table striped size="sm">
        <Header>
          <Tr>Entries &amp; Search</Tr>
          <Headings>
            {headings.map((heading, index) => (
              <td
                key={`heading-table-${index}`}
                onClick={() => handleChangeSortColumn(index)}
              >
                {heading}
              </td>
            ))}
          </Headings>
        </Header>
        <Body>
          {sortedRows.map(
            (row = [], index) =>
              index < rangeEnd && (
                <Tr key={`table-row-${index}`}>
                  {row.map((item = "", index) =>
                    typeof item === "string" ? (
                      <td key={`table-row-item-${index}`}>{item}</td>
                    ) : (
                      <td key={`table-row-item-${index}`}>{item}</td>
                    )
                  )}
                </Tr>
              )
          )}
        </Body>
      </Table>
      <Footer>
        {`Showing ${rangeStart} to ${rangeEnd} of ${rows.length} entries`}{" "}
        <Pages>
          <Button
            variant="link"
            size="sm"
            onClick={() => {
              if (page > 1) {
                setPage(page - 1);
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
                setPage(page + 1);
              }
            }}
          >
            Next
          </Button>
        </Pages>
      </Footer>
    </Wrapper>
  );
};

const getPageButtons = (totalPages, setPage) => {
  let i;
  let jsx = [];
  for (i = 0; i < totalPages; i++) {
    let pageNumber = i + 1;
    jsx = [
      ...jsx,
      <Button
        size="sm"
        variant="light"
        style={{ margin: "0 5px" }}
        onClick={() => setPage(pageNumber)}
      >
        {pageNumber}
      </Button>,
    ];
  }
  return jsx;
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Table = styled(UnstyledTable)`
  user-select: none;
  width: 100%;
  font-size: 11px;
`;

const Header = styled.thead`
  min-height: 60px;
  width: 100%;
`;

const Headings = styled.tr`
  font-weight: 700;
  width: 100%;
`;

const Body = styled.tbody`
  min-height: 80px;
  width: 100%;
`;

const Footer = styled.div`
  min-height: 40px;
  font-size: 11px;
  width: 100%;
  max-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Pages = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;

const Tr = styled.tr`
  width: 100%;
`;

export default CardTable;
