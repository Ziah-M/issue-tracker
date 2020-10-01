import React, { useState } from "react";
import { Table as UnstyledTable, Button } from "react-bootstrap";
import styled from "styled-components";
import { NavLink as Link } from "react-bootstrap";

const CardTable = ({ headings = [], rows = [["No data available"]] }) => {
  // --- PAGINATION ---
  const [page, setPage] = useState(1);
  const resultsPerPage = 10;
  const rangeStart = 1 + (page - 1) * resultsPerPage;
  const rangeEnd = Math.min(page * resultsPerPage, rows.length);
  const totalPages = 1 + parseInt((rangeEnd - 1) / 10);

  return (
    <Wrapper>
      <Table striped size="sm">
        <Header>
          <tr>Entries &amp; Search</tr>
          <Headings>
            {headings.map((heading, index) => (
              <td key={`heading-table-${index}`}>{heading}</td>
            ))}
          </Headings>
        </Header>
        <Body>
          {rows.map(
            (row = [], index) =>
              index < rangeEnd && (
                <tr key={`table-row-${index}`}>
                  {row.map((item = "", index) =>
                    typeof item === "string" ? (
                      <td key={`table-row-item-${index}`}>{item}</td>
                    ) : (
                      <td key={`table-row-item-${index}`}>{item}</td>
                    )
                  )}
                </tr>
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
`;

const Headings = styled.tr`
  font-weight: 700;
`;

const Body = styled.tbody`
  min-height: 80px;
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

export default CardTable;
