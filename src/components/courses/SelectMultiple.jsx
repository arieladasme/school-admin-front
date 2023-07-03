import { useState } from 'react'
import { Box, MenuItem, Select, OutlinedInput, Chip, InputLabel } from '@mui/material'
import { useTheme } from '@mui/material/styles'

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8

export const SelectMultiple = ({ students, handleFormValueChange }) => {
  const theme = useTheme()
  const [personName, setPersonName] = useState([])

  const handleChange = event => {
    const {
      target: { value },
    } = event
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
    handleFormValueChange(event)
  }

  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  }

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    }
  }

  return (
    <>
      <InputLabel id="students-label">Estudiantes</InputLabel>
      <Select
        labelId="students-label"
        id="studentsSelected"
        name="students"
        multiple
        value={personName}
        onChange={handleChange}
        input={<OutlinedInput id="select-multiple-chip" label="Estudiantes" />}
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
            style={getStyles(student.name, personName, theme)}
          >
            {student.name}
          </MenuItem>
        ))}
      </Select>
    </>
  )
}
