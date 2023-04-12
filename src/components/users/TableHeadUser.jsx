import { TableCell, TableHead, TableRow } from '@mui/material'

export const TableHeadUser = () => {
  return (
    <TableHead>
      <TableRow>
        <TableCell>RUT</TableCell>
        <TableCell>Nombre</TableCell>
        <TableCell>Email</TableCell>
        <TableCell>Rol</TableCell>
        <TableCell>Acciones</TableCell>
      </TableRow>
    </TableHead>
  )
}
