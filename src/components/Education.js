import React from 'react';
import { Box, Typography, Chip, Container } from '@mui/material';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
const EducationPage = () => {
    function createData(name, calories) {
        return { name, calories };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];
      
  return  (
    <Box component="div" sx={{ p: 2, border: '1px dashed grey',position: 'relative', left: '24%', backgroundColor: '#E4E6EB',width: '935px', height: '1000px' }}>
      <Typography variant="h4" mb={2}>Education</Typography>
      <Typography variant="body1" >
        Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia
         Consequat Duis Enim Velit Molit. Lorem Ipsum
      </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>University</TableCell>
            <TableCell align="right">Calories</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    </Box>
    // <Box component="div" style={{ position: 'absolute', left: '25%', backgroundColor: '#E4E6EB',width: '970px', height: '1000px' }}>
    //   <Box sx={{ maxWidth: 800, margin: 'auto', padding: '20px' }}>
    //     <Typography variant="h4" gutterBottom align='center'>
    //       Education
    //     </Typography>
    //     <Typography variant="body1" gutterBottom>
    //       Amet Minim Mollit Non Deserunt Ullamco Est Sit Aliqua Dolor Do Amet Sint. Velit Officia
    //       Consequat Duis Enim Velit Molit. Lorem Ipsum
    //     </Typography>

    //     <Box mt={4} style={{ backgroundColor: 'white' }}>
    //       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
    //         <Typography variant="h6">University Of Toronto</Typography>
    //         <Typography variant="h6">Certificate Of Web Training</Typography>
    //       </Box>
    //       <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
    //         <Box>
    //           <Typography variant="subtitle1">Student</Typography>
    //           <Chip label="Jan 2018 - Dec 2022" variant="outlined" color='success' />
    //         </Box>
    //         <Box maxWidth={500}>
    //           <Typography variant="body1">
    //             Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus
    //             Nunc, Egestas Id Amet Porttitor. Pulvinar Quisque Sed Amet, Nulla Nunc. Eleifrend
    //             Sodales Posuere Fusce Tempus Etiam Et Pellentesque. Molestie Risus Enim Neque Eget Dui.
    //           </Typography>
    //         </Box>
    //       </Box>

    //       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
    //         <Typography variant="h6">Programming Course</Typography>
    //         <Typography variant="h6">Certificate Of Web Training</Typography>
    //       </Box>
    //       <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
    //         <Box>
    //           <Typography variant="subtitle1">Student</Typography>
    //           <Chip label="Jan 2018 - Dec 2021" variant="outlined" />
    //         </Box>
    //         <Box maxWidth={800}>
    //           <Typography variant="body1">
    //             Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus
    //             Nunc, Egestas Id Amet Porttitor. Pulvinar Quisque Sed Amet, Nulla Nunc. Eleifrend
    //             Sodales Posuere Fusce Tempus Etiam Et Pellentesque. Molestie Risus Enim Neque Eget Dui.
    //           </Typography>
    //         </Box>
    //       </Box>

    //       <Box display="flex" justifyContent="space-between" alignItems="center" mb={2}>
    //         <Typography variant="h6">Web Developer Courses</Typography>
    //         <Typography variant="h6">Certificate Of Web Training</Typography>
    //       </Box>
    //       <Box display="flex" justifyContent="space-between" alignItems="center">
    //         <Box>
    //           <Typography variant="subtitle1">Student</Typography>
    //           <Chip label="Jan 2019 - Dec 2022" variant="outlined" />
    //         </Box>
    //         <Box maxWidth={500}>
    //           <Typography variant="body1">
    //             Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Dapibus Nibh Ut Faucibus
    //             Nunc, Egestas Id Amet Porttitor. Pulvinar Quisque Sed Amet, Nulla Nunc. Eleifrend
    //             Sodales Posuere Fusce Tempus Etiam Et Pellentesque. Molestie Risus Enim Neque Eget Dui.
    //           </Typography>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
  );
};

export default EducationPage;