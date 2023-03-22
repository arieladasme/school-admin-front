import { TableCell, TableHead, TableRow } from '@mui/material'

export const TableHeadUser = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>ID</TableCell>
        <TableCell>Name</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Actions</TableCell>
      </TableRow>
    </TableHead>
  )
}
