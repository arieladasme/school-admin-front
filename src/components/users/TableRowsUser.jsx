import { TableCell, TableRow, IconButton } from '@mui/material'
import { Delete as DeleteIcon, Edit as EditIcon } from '@mui/icons-material'

export const TableRowsUser = ({ handleEditButtonClick, handleDeleteButtonClick, user }) => {
  const { id, name, email } = user

  return (
    <TableRow>
      <TableCell>{id}</TableCell>
      <TableCell>{name}</TableCell>
      <TableCell>{email}</TableCell>
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
