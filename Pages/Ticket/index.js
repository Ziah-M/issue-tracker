import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router'
import styled from 'styled-components'
import { AddTicketModal, ContentArea } from '../../Components'
import Attachment from './Attachment'
import Comments from './Comments'
import Details from './Details'
import History from './History'

const Ticket = () => {
  const { id } = useParams()
  const ticket = useSelector((store) => store.tickets[id])

  const [showAddTicket, setShowAddTicket] = useState(false)
  const handleCloseAddTicket = () => setShowAddTicket(false)
  const handleShowAddTicket = () => setShowAddTicket(true)

  return (
    <ContentArea>
      {ticket && (
        <Wrapper>
          <Section onClick={() => handleShowAddTicket()}>
            <Details ticket={ticket} />
          </Section>
          <Section>
            <Comments ticket={ticket} />
          </Section>
          <Section>
            <History ticket={ticket} />
          </Section>
          <Section>
            <Attachment ticket={ticket} />
          </Section>
          <Modal>
            <AddTicketModal
              show={showAddTicket}
              handleShow={handleShowAddTicket}
              handleClose={handleCloseAddTicket}
              prefillData={ticket}
              isEdit
            />
          </Modal>
        </Wrapper>
      )}
    </ContentArea>
  )
}

const Section = styled.div`
  width: 50%;
  padding: 10px;
  margin-bottom: 50px;
  height: auto;
  min-height: 50px;
`

const Modal = styled.div`
  /* DISPLAY IF ROUTE HAS /edit */
`

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`

export default Ticket
