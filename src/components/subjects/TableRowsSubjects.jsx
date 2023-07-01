import { TableCell, TableRow } from '@mui/material'

export const TableRowsSubjects = ({ subject }) => {
  const { code, name } = subject

  return (
    <TableRow>
      <TableCell>{code}</TableCell>

      <TableCell>{name}</TableCell>
      {/*  <TableCell>
        <IconButton aria-label="edit" onClick={() => handleEditButtonClick(code)}>
          <EditIcon />
        </IconButton>
        <IconButton aria-label="delete" onClick={() => handleDeleteButtonClick(code)}>
          <DeleteIcon />
        </IconButton>
      </TableCell> */}
    </TableRow>
  )
}
