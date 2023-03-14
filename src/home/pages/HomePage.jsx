import { HomeLayout } from '../layout/HomeLayout'
import { Typography } from '@mui/material'
import { NothingSelectedView } from '../view/NothingSelectedView'

export const HomePage = () => {
  return (
    <HomeLayout>
      <Typography>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse porro excepturi voluptatum
        molestiae. Eius minima enim expedita, voluptates repellendus rerum tempora voluptate ut quae
        consequatur incidunt nam quia vitae saepe!
      </Typography>
      <NothingSelectedView />
      {/* NoteView */}
    </HomeLayout>
  )
}
