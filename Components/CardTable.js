import React from "react";
import { Table as UnstyledTable } from "react-bootstrap";
import styled from "styled-components";
import { NavLink as Link } from "react-bootstrap";

const CardTable = ({ headings = [], rows = [["No data available"]] }) => {
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
          {rows.map((row=[], index) => (
            <tr key={`table-row-${index}`}>
              {row.map((item = "", index) =>
                typeof item === "string" ? (
                  <td key={`table-row-item-${index}`}>{item}</td>
                ) : (
                  <td key={`table-row-item-${index}`}>
                    {item}
                  </td>
                )
              )}
            </tr>
          ))}
        </Body>
        <Footer>Showing 1 to 3 of 3 entries | previous 1 next</Footer>
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;
const Table = styled(UnstyledTable)`
  user-select: none;

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

const Footer = styled.tfoot`
  min-height: 40px;
`;

export default CardTable;
