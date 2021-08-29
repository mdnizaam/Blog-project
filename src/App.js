import { Typography, Container, Box } from '@material-ui/core';
import { default as React } from 'react';
import Editor from './Editor';
import Home from './Home'
 
function App() {
  return (
    <React.Fragment>
      <Container
        style={{ backgroundColor: '#d4ecff', minHeight: "100vh" }}
        maxWidth="xl">
        <Box p={3}>
          <Box>
            <Typography variant="h6" component="span">
              EditorJS With React
        </Typography>
          </Box>
          <Box
            mt={3}
            style={{
              backgroundColor: '#ffffff',
              border: '1px solid #cccccc'
            }}>
            <Editor />
            <Home/>
          </Box>

        
        </Box>
      </Container>

      

      {/* <div className="container-fluid bg-warning h-50">
        <div className="row">
          <div className="col-lg-6 bg-success">
            <Editor/>
          </div>
        </div>
      </div> */}


      
    </React.Fragment>
  );
}
 
export default App;