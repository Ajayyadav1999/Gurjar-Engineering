import React from 'react';
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Paper,
} from '@mui/material';
import {
  Engineering,
  Schedule,
  Star,
  TrendingUp,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import StatsCounter from '../components/StatsCounter';
import TestimonialSlider from '../components/TestimonialSlider';

const Home = () => {
  const features = [
    {
      icon: <Engineering />,
      title: 'Expert Engineers',
      description: 'Highly experienced professionals',
    },
    {
      icon: <Schedule />,
      title: 'On-Time Delivery',
      description: 'Punctual execution every time',
    },
    {
      icon: <Star />,
      title: 'Trusted Reputation',
      description: 'Backed by clients across Gujarat',
    },
  ];

  const clients = [
    'Tata Projects',
    'Gujarat Infra',
    'UrbanEdge',
    'BuildGrid',
    'SmartStruct',
  ];

  return (
    <Box>
      {/* Hero Section */}
      <Box
        sx={{
          bgcolor: 'background.default',
          py: { xs: 8, md: 12 },
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Typography
                  variant="h1"
                  sx={{
                    mb: 3,
                    color: 'primary.main',
                    fontWeight: 700,
                  }}
                >
                  Innovating Infrastructure.{' '}
                  <Box component="span" sx={{ color: 'secondary.main' }}>
                    Building the Future.
                  </Box>
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    mb: 4,
                    color: 'text.secondary',
                    lineHeight: 1.6,
                    fontWeight: 300,
                  }}
                >
                  We design and develop world-class civil and structural engineering
                  solutions tailored for modern needs.
                </Typography>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    component={Link}
                    to="/services"
                    variant="contained"
                    size="large"
                    sx={{
                      px: 4,
                      py: 2,
                      fontSize: '1.1rem',
                      fontWeight: 600,
                    }}
                  >
                    Explore Our Services
                  </Button>
                </motion.div>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Box
                  component="img"
                  src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                  alt="Civil Engineering"
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 2,
                    boxShadow: '0 20px 40px rgba(0,95,115,0.2)',
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Why Choose Us Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 2, color: 'primary.main' }}
          >
            Why Choose Us
          </Typography>
          <Typography
            variant="h6"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
          >
            We combine expertise, reliability, and innovation to deliver exceptional
            engineering solutions
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid key={feature.title} item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    p: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 12px 40px rgba(0,95,115,0.15)',
                    },
                  }}
                >
                  <CardContent>
                    <Box
                      sx={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 80,
                        height: 80,
                        bgcolor: 'secondary.light',
                        borderRadius: '50%',
                        mb: 3,
                        color: 'primary.main',
                        fontSize: '2rem',
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Typography
                      variant="h5"
                      gutterBottom
                      sx={{ fontWeight: 600, color: 'primary.main' }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Stats Section */}
      <Box sx={{ bgcolor: 'primary.main', color: 'white', py: 8 }}>
        <Container maxWidth="lg">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              textAlign="center"
              sx={{ mb: 6, color: 'white' }}
            >
              Our Achievements
            </Typography>
          </motion.div>
          <StatsCounter />
        </Container>
      </Box>

      {/* Client Logos Section */}
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ mb: 6, color: 'primary.main' }}
          >
            Trusted by Industry Leaders
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center" alignItems="center">
          {clients.map((client, index) => (
            <Grid key={client} item xs={6} md={2.4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <Paper
                  elevation={2}
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: '0 8px 25px rgba(0,95,115,0.15)',
                    },
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    {client}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Testimonials Section */}
      <Box sx={{ bgcolor: 'background.default', py: 8 }}>
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              textAlign="center"
              sx={{ mb: 6, color: 'primary.main' }}
            >
              What Our Clients Say
            </Typography>
          </motion.div>
          <TestimonialSlider />
        </Container>
      </Box>
    </Box>
  );
};

export default Home;