import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, TextField, Alert, Button, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import { useAuthStore, useForm } from '../../hooks'

export const LoginPage = () => {
  // obtengo datos del store
  const { status, errorMsg } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const { startLogin } = useAuthStore()
  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  })

  // memorizo status
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = e => {
    e.preventDefault()
    dispatch(startLogin({ email, password }))
  }

  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh', backgroundColor: 'primary.main', padding: 4 }}
    >
      <Grid
        item
        className="box-shadow"
        xs={3}
        sx={{ backgroundColor: 'white', padding: 3, borderRadius: 2 }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Login 123Gks
        </Typography>
        <form onSubmit={onSubmit}>
          <Grid container>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Correo"
                type="email"
                placeholder="correo@crorr.com"
                fullWidth
                name="email"
                value={email}
                onChange={onInputChange}
              />
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <TextField
                label="Contraseña"
                type="password"
                placeholder="contraseña"
                fullWidth
                name="password"
                value={password}
                onChange={onInputChange}
              />
            </Grid>
            <Grid container display={!!errorMsg ? '' : 'none'} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <Alert severity="error">{errorMsg}</Alert>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12}>
                <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/recovery">
                Recuperar contraseña
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
