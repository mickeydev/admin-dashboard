import { Box, Button, IconButton, Typography, useTheme } from '@mui/material';
import { tokens } from '../../Theme/theme';
import Header from '../../components/Header';
import { mockTransactions } from '../../data/mockData';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';
import LineChart from '../../components/LineChart';
import BarChart from '../../components/BarChart';
import GeographyChart from '../../components/GeographyChart';
import StatBox from '../../components/StatBox';
import ProgressCircle from '../../components/ProgresCircle';

const Dashboard = () => {
   const theme = useTheme();
   const colors = tokens(theme.palette.mode);
   return (
      <Box m="20px">
         <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            <Box>
               <Button
                  sx={{
                     backgroundColor: colors.blueAccent[700],
                     color: colors.grey[100],
                     fontWeight: 'bold',
                     padding: '10px 20px',
                  }}
               >
                  <DownloadOutlinedIcon sx={{ mr: '10px' }} />
                  Download Reports
               </Button>
            </Box>

            {/* GRID & CHARTS */}
         </Box>
      </Box>
   );
};

export default Dashboard;
