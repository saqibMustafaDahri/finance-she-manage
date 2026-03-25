import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import {
  People as PeopleIcon, Videocam as VideocamIcon,
  School as SchoolIcon, CardMembership as CardIcon,
  Quiz as QuizIcon, TrendingUp as TrendingUpIcon,
} from '@mui/icons-material';

const stats = [
  { label: 'Total Users', value: '8', icon: <PeopleIcon />, change: '+12%' },
  { label: 'Deepfake Videos', value: '3', icon: <VideocamIcon />, change: '+5%' },
  { label: 'Tutorial Videos', value: '5', icon: <SchoolIcon />, change: '+8%' },
  { label: 'Subscription Plans', value: '3', icon: <CardIcon />, change: '0%' },
  { label: 'Onboarding Questions', value: '4', icon: <QuizIcon />, change: '+2%' },
  { label: 'Active Subscribers', value: '156', icon: <TrendingUpIcon />, change: '+24%' },
];

const Dashboard: React.FC = () => (
  <Box>
    <Typography variant="h4" gutterBottom sx={{
      background: 'linear-gradient(135deg, #590432, #470328)',
      WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
    }}>
      Dashboard
    </Typography>
    <Typography variant="body2" color="text.secondary" mb={3}>
      Welcome back! Here's an overview of your CMS.
    </Typography>
    <Grid container spacing={3}>
      {stats.map((s) => (
        <Grid item xs={12} sm={6} md={4} key={s.label}>
          <Card sx={{ '&:hover': { transform: 'translateY(-2px)', transition: '0.2s' } }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="body2" color="text.secondary">{s.label}</Typography>
                  <Typography variant="h4" fontWeight={700} mt={0.5}>{s.value}</Typography>
                  <Typography variant="caption" color="success.main">{s.change} this month</Typography>
                </Box>
                <Box sx={{
                  p: 1.2, borderRadius: '12px',
                  background: 'linear-gradient(135deg, rgba(89,4,50,0.1), rgba(71,3,40,0.1))',
                  color: '#590432',
                }}>
                  {s.icon}
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  </Box>
);

export default Dashboard;
