import React from "react";
import { Card } from "../../Components";
import styled from "styled-components";
import { CardTable } from "../../Components";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { convertObjectToList } from "../../Helpers";
import { useState } from "react";
import { Form, Button, FormControl, Col, Row } from "react-bootstrap";
import useFirebaseActions from "../../redux/useFirebaseActions";

const Comments = () => {
  const { id: idInParams } = useParams();

  const comments = useSelector((state) => state.tickets[idInParams].comments);
  const sortedByMostRecentComments = convertObjectToList(comments).reverse();

  
  const headings = ["Commenter", "Message", "Created"];
  const rows = sortedByMostRecentComments.map((row) => [
    row.submitter,
    row.comment,
    row.created,
  ]);
  
  return (
    <Card
      title="Comments"
      description="Comments left on this ticket"
      style={{ height: "auto" }}
    >
      <CardTable headings={headings} rows={rows} />
      <CommentInput />
    </Card>
  );
};

const CommentInput = (props) => {
  const [value, setValue] = useState("");

  const { id: idInParams } = useParams();
  const dispatch = useDispatch();
  const { addTicketComment } = useFirebaseActions();

  const handleChange = (event) => {};

  const handleSubmit = () => {
    dispatch(addTicketComment(idInParams, value));
    setValue("");
  };

  return (
    <WrapperInput>
      <Form>
        <Form.Group>
          <Form.Label>Add a comment</Form.Label>
          <Row noGutters>
            <Col xs={9}>
              <Form.Control
                value={value}
                onChange={(event) => setValue(event.target.value)}
                className="text-muted"
              />
            </Col>

            <Col xs="auto" className="m-auto">
              <Button
                variant="success"
                size="sm"
                onClick={() => handleSubmit()}
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form.Group>
      </Form>
    </WrapperInput>
  );
};

const WrapperInput = styled.div`
  width: 100%;
`;

export default Comments;
