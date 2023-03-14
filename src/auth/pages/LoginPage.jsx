import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, Typography, TextField, Alert, Button, Link } from '@mui/material'
import { Google } from '@mui/icons-material'
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from '../../hooks'
import { checkAuth, startGoogleSignIn } from '../../store/auth'

export const LoginPage = () => {
  // obtengo datos del store
  const { status, errorMessage } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const { email, password, onInputChange } = useForm({
    email: '',
    password: '',
  })

  // memorizo status
  const isAuthenticating = useMemo(() => status === 'checking', [status])

  const onSubmit = e => {
    e.preventDefault()
    dispatch(checkAuth(email, password))
  }

  const onGoogleSignIn = () => {
    dispatch(startGoogleSignIn())
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
          Login
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
            <Grid container display={!!false ? '' : 'none'} sx={{ mt: 1 }}>
              <Grid item xs={12}>
                <Alert severity="error">error</Alert>
              </Grid>
            </Grid>
            <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
              <Grid item xs={12} sm={6}>
                <Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>
                  Login
                </Button>
              </Grid>
              <Grid item xs={12} sm={6}>
                <Button
                  disabled={isAuthenticating}
                  variant="contained"
                  fullWidth
                  onClick={onGoogleSignIn}
                >
                  <Google />
                  <Typography sx={{ ml: 1 }}>Google</Typography>
                </Button>
              </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="end">
              <Link component={RouterLink} color="inherit" to="/auth/register">
                Crear una cuenta
              </Link>
            </Grid>
          </Grid>
        </form>
      </Grid>
    </Grid>
  )
}
