import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

import { Table, TableBody, TableContainer, Button } from '@mui/material'
import { Add as AddIcon } from '@mui/icons-material'
import { ModalUser, TableHeadUser, TableRowsUser } from './users/'
import { useUsersStore } from '../hooks/useUsersStore'

export const UsersPage = () => {
  const { errMsg } = useSelector(state => state.users)
  const [open, setOpen] = useState(false)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
  })

  const [editingId, setEditingId] = useState(null)
  const { users, getAllUsers, createUser, editUser } = useUsersStore()

  useEffect(() => {
    if (users.length === 0) getAllUsers()
  }, [])

  const handleAddButtonClick = () => {
    setFormValues({
      name: '',
      email: '',
    })
    setEditingId(null)
    setOpen(true)
  }

  const handleEditButtonClick = id => {
    const userToEdit = users.find(user => user.id === id)

    if (userToEdit) {
      setFormValues({
        id: userToEdit.id,
        name: userToEdit.name,
        middleName: userToEdit.middleName,
        lastName: userToEdit.lastName,
        secondLastName: userToEdit.secondLastName,
        email: userToEdit.email,
        rut: userToEdit.rut,
        role: userToEdit.role,
      })

      setEditingId(id)
      setOpen(true)
    }
  }

  const handleDeleteButtonClick = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  const handleFormValueChange = event => {
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    if (!editingId) {
      // convierto rut a entero
      formValues.rut = parseInt(formValues.rut)
      createUser(formValues)
    } else {
      editUser(formValues)
    }
    handleClose()
  }

  const handleClose = () => setOpen(false)

  return (
    <>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="users table">
          <TableHeadUser />
          <TableBody>
            {users.map(user => (
              <TableRowsUser
                key={user.id}
                {...{ handleEditButtonClick, handleDeleteButtonClick, user }}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        onClick={handleAddButtonClick}
      >
        Crear usuario
      </Button>

      <ModalUser
        {...{
          handleClose,
          handleSubmit,
          formValues,
          handleFormValueChange,
          editingId,
          open,
          errMsg,
        }}
      />
    </>
  )
}
