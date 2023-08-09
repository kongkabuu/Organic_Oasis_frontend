
import { LoadingButton } from '@mui/lab';
import { Avatar, Box, Container, Grid, TextField, Typography } from '@mui/material';
import { useState, useContext } from 'react';
//import { AuthContext } from '../context';
import { FormikProvider, useFormik } from 'formik';
const Profile = () => {
  //const { user } = useContext(AuthContext);
  const user={
    firstname: "Sandra",
    lastname:"Phoebe",
    phonenumber: "0710200602",
    email:"sandra@gmail.com",
    location:"suncity",
    password: "",
    password_confirmation: ""
  }
  const [isEditing, setIsEditing] = useState(false);
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      firstname: user?.firstname ? user.firstname : '',
      lastname: user?.lastname ? user.lastname : '',
      username: user?.username ? user.username : '',
      phonenumber: user?.phonenumber ? user.phonenumber : '',
      location: user?.location ? user.location : '',
      email: user?.email ? user.email : '',
      password: user?.password ? user.password : '',
      password_confirmation: user?.password_confirmation ? user.password_confirmation:'',
    },
    onSubmit: async (values) => {
      console.log(values);
      setIsEditing(false);
      try {
        const response = await fetch(`https://tuneflow-gpsc.onrender.com/users/${user.id}`, {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
        if (response.ok) {
          // Update the user information on the frontend if needed
          // ...
          setIsEditing(false);
          console.log('Profile updated successfully!');
        } else {
          console.log('Failed to update profile.');
        }
      } catch (error) {
        console.log('Error:', error);
      }
    },
  });
  const handleEditProfileClick = () => {
    setIsEditing(true);
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          marginBottom:18,
          display: 'flex',
          bgcolor: 'white',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: '#19c048', width: '6rem', height: '6rem'  }}>
          {/* <LockOutlinedIcon /> */}
        </Avatar>
        <Typography component="h1" variant="h5">
          {user?.username}
        </Typography>
        <Typography component="p" variant="body1">
          {user?.firstname} {user?.lastname}
        </Typography>
        <Typography component="p" variant="body1">
          {user?.bio}
        </Typography>
        <FormikProvider value={formik}>
          <Box
            component="form"
            noValidate
            onSubmit={formik.handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstname"
                  required
                  fullWidth
                  id="firstname"
                  label="First Name"
                  value={formik.values.firstname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.firstname && Boolean(formik.errors.firstname)
                  }
                  helperText={formik.touched.firstname && formik.errors.firstname}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="family-name"
                  value={formik.values.lastname}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={
                    formik.touched.lastname && Boolean(formik.errors.lastname)
                  }
                  helperText={formik.touched.lastname && formik.errors.lastname}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="phonenumber"
                  label="Phonenumber"
                  name="phonenumber"
                  value={formik.values.phonenumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.phonenumber && Boolean(formik.errors.phonenumber)}
                  helperText={formik.touched.phonenumber && formik.errors.phonenumber}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  value={formik.values.location}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.location && Boolean(formik.errors.location)}
                  helperText={formik.touched.location && formik.errors.location}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password"
                  label="Paswword"
                  name="pasword"
                  autoComplete="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                  disabled={!isEditing}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="password_confirmation"
                  label="Password Confirmation"
                  name="password_confirmation"
                  autoComplete="password_confirmation"
                  value={formik.values.password_confirmation}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  error={formik.touched.email && Boolean(formik.errors.password_confirmation)}
                  helperText={formik.touched.email && formik.errors.password_confirmation}
                  disabled={!isEditing}
                />
              </Grid>
            </Grid>
            {!isEditing && (
              <LoadingButton
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,backgroundColor: '#15B76C','&:hover': {
                    backgroundColor: '#05E086',
                  }}}
                onClick={handleEditProfileClick}
              >
                Edit Profile
              </LoadingButton>
            )}
            {isEditing && (
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 ,backgroundColor: '#15B76C','&:hover': {
                    backgroundColor: '#05E086',
                  }}}
              >
                Update
              </LoadingButton>
            )}
          </Box>
        </FormikProvider>
      </Box>
    </Container>
  );
};
export default Profile;