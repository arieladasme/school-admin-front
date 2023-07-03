import { useState } from 'react'
import { Box, MenuItem, Select, OutlinedInput, Chip, InputLabel } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

export const SelectMultiple = ({ students, handleFormValueChange }) => {
  const theme = useTheme()
  const [studentName, setStudentName] = useState([])

  const handleChange = event => {
    const {
      target: { value },
    } = event
    setStudentName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )

    const selectedIds = students
      .filter(student => value.includes(student.name))
      .map(student => student.id)

    handleFormValueChange({ ...event, target: { ...event.target, value: selectedIds } })
  }

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 150,
      },
    },
  }

  const getStyles = (name, studentName, theme) => {
    return {
      fontWeight:
        studentName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    }
  }

  return (
    <>
      <InputLabel id="students-label">Estudiantes</InputLabel>
      <Select
        name="students"
        multiple
        value={studentName}
        onChange={handleChange}
        input={<OutlinedInput label="Estudiantes" />}
        renderValue={selected => (
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
            {selected.map(value => (
              <Chip key={value} label={value} />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {students.map(student => (
          <MenuItem
            key={student.id}
            value={student.name}
            style={getStyles(student.name, studentName, theme)}
          >
            {student.name}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}
