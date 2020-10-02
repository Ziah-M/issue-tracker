import React from 'react'
import {
  Button as UnstyledButton,
  Form as UnstyledForm,
  NavLink as Link,
} from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import useFirebaseActions from '../../redux/useFirebaseActions'

const EditForm = ({ project }) => {
  const { register, handleSubmit, errors } = useForm()
  const dispatch = useDispatch()
  const { editProject } = useFirebaseActions()

  const users = useSelector((store) => store.users)
  const projects = useSelector((store) => store.projects)

  const onSubmit = (data) => {
    let alteredData = {}
    Object.keys(data).map((key) => {
      if (data[key]) {
        alteredData = { ...alteredData, [key]: data[key] }
      }
    })
    dispatch(editProject(project.uid, alteredData))
  }

  return (
    <Wrapper>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <Label>Project Name</Label>
        <input
          type="text"
          name="projectName"
          ref={register({
            minLength: 6,
            maxLength: 30,
          })}
          placeholder={project.projectName}
          id="projectName"
        />

        <Label>Description</Label>
        <input
          name="description"
          type="text"
          ref={register}
          placeholder={project.description}
          id="description"
        />

        <Footer>
          <Link href="">Back to List</Link>
          <Link href="GOTO MANAGE PROJECT USERS">
            Assign Users To This Project
          </Link>
          <Link href="GOTO TICKET TABLE">Add Tickets To This Project</Link>
          <Button variant="primary" type="submit">
            Update
          </Button>
        </Footer>
      </form>
    </Wrapper>
  )
}

const Label = styled(UnstyledForm.Label)``

const Button = styled(UnstyledButton)``

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

const Footer = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default EditForm
