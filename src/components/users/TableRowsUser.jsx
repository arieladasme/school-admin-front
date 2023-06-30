import { TableCell, TableRow, IconButton } from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material'

export const TableRowsUser = ({ handleEditButtonClick, handleDeleteButtonClick, user }) => {
  const { id, rut, name, middleName, lastName, secondLastName, email, role } = user

  return (
    <TableRow>
      <TableCell>{rut}</TableCell>
      <TableCell>
        {name} {middleName} {lastName} {secondLastName}
      </TableCell>
      <TableCell>{email}</TableCell>
      <TableCell>{role}</TableCell>
      <TableCell>
        <IconButton aria-label="edit" onClick={() => handleEditButtonClick(id)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => handleDeleteButtonClick(id)}>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  )
}
