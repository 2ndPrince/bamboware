import './App.css';
import { AppBar, Toolbar, Typography, Button, Container, Grid, Card, CardContent, CardMedia } from '@mui/material';
import { Box } from '@mui/system';

function App() {
  return (
      <div>
          {/* Navigation Bar */}
          <AppBar position="static">
              <Toolbar>
                  <Typography variant="h6" sx={{flexGrow: 1}}>
                      My Material-UI Website
                  </Typography>
                  <Button color="inherit">Login</Button>
              </Toolbar>
          </AppBar>

          {/* Hero Section */}
          <Box
              sx={{
                  height: '60vh',
                  backgroundColor: '#1976d2',
                  color: 'white',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  textAlign: 'center',
              }}
          >
              <Typography variant="h2" gutterBottom>
                  Welcome to My Website
              </Typography>
              <Typography variant="h5" gutterBottom>
                  Build amazing experiences with Material-UI
              </Typography>
              <Button variant="contained" color="secondary" size="large">
                  Get Started
              </Button>
          </Box>

          {/* Content Section */}
          <Container sx={{marginTop: 4}}>
              <Typography variant="h4" gutterBottom>
                  Featured Content
              </Typography>
              <Grid container spacing={4}>
                  {/* Card 1 */}
                  <Grid item xs={12} sm={6} md={4}>
                      <Card>
                          <CardMedia
                              component="img"
                              height="140"
                              image="/assets/BAMBOWARE_logo.jpg"
                              alt="Placeholder"
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                  Card Title 1
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                  This is a brief description of the content in card 1. You can add more details here.
                              </Typography>
                          </CardContent>
                      </Card>
                  </Grid>
                  {/* Card 2 */}
                  <Grid item xs={12} sm={6} md={4}>
                      <Card>
                          <CardMedia
                              component="img"
                              height="140"
                              image="/assets/lifestyle.jpeg"
                              alt="Placeholder"
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                  Card Title 2
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                  This is a brief description of the content in card 2. You can add more details here.
                              </Typography>
                          </CardContent>
                      </Card>
                  </Grid>
                  {/* Card 3 */}
                  <Grid item xs={12} sm={6} md={4}>
                      <Card>
                          <CardMedia
                              component="img"
                              height="140"
                              image="/assets/satisfaction.png"
                              alt="Placeholder"
                          />
                          <CardContent>
                              <Typography gutterBottom variant="h5" component="div">
                                  Card Title 3
                              </Typography>
                              <Typography variant="body2" color="text.secondary">
                                  This is a brief description of the content in card 3. You can add more details here.
                              </Typography>
                          </CardContent>
                      </Card>
                  </Grid>
              </Grid>
          </Container>

          {/* Footer */}
          <Box
              sx={{
                  marginTop: 4,
                  padding: 2,
                  backgroundColor: '#1976d2',
                  color: 'white',
                  textAlign: 'center',
              }}
          >
              <Typography variant="body2">
                  © 2025 My Material-UI Website. All rights reserved.
              </Typography>
          </Box>
      </div>
  )
}

export default App
