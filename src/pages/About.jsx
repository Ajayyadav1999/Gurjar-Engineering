import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Chip,
} from '@mui/material';
import {
  Explore,
  Engineering,
  Group,
  School,
  Business,
  Timeline as TimelineIcon,
  EmojiEvents,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import ParkIcon from '@mui/icons-material/Park';

const About = () => {
  const values = [
    {
      icon: <Explore />,
      title: 'Integrity',
      description: 'Honest, transparent, and ethical in all our dealings',
    },
    {
      icon: <Engineering />,
      title: 'Engineering Excellence',
      description: 'Commitment to the highest standards of technical quality',
    },
    {
      icon: <Group />,
      title: 'Client Commitment',
      description: 'Dedicated to exceeding client expectations every time',
    },
    {
      icon: <ParkIcon />,
      title: 'Sustainability',
      description: 'Building for today while preserving tomorrow',
    },
  ];

  const timeline = [
    {
      year: '2015',
      event: 'Founded in Vadodara',
      description: 'Started with a vision to revolutionize civil engineering in Gujarat',
    },
    {
      year: '2018',
      event: 'Completed 100-acre Township Project',
      description: 'Successfully delivered our first major residential project',
    },
    {
      year: '2020',
      event: 'Expanded to multi-state operations',
      description: 'Extended our services across Western India',
    },
    {
      year: '2023',
      event: 'Recognized by Gujarat Infrastructure Board',
      description: 'Awarded for excellence in sustainable infrastructure development',
    },
  ];

  const certifications = [
    'ISO 9001:2015',
    'Govt. of Gujarat (Infrastructure Division)',
    'Licensed Structural Engineers (Class A)',
  ];

  const team = [
    {
      name: 'Ajay Yadav',
      role: 'Chief Structural Engineer',
      experience: '15+ years',
      avatar: 'AY',
    },
    {
      name: 'Nidhi Sharma',
      role: 'Project Director',
      experience: '12+ years',
      avatar: 'NS',
    },
    {
      name: 'Sameer Patel',
      role: 'Lead Civil Engineer',
      experience: '10+ years',
      avatar: 'SP',
    },
  ];

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h1"
            textAlign="center"
            sx={{ mb: 3, color: 'primary.main' }}
          >
            About Gurjar Engineering
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}
          >
            Gurjar Engineering is a leading engineering consultancy firm based in Gujarat, India. 
            Our legacy is built on a foundation of innovation, integrity, and infrastructure excellence.
          </Typography>
        </motion.div>

        {/* Mission & Vision */}
        <Grid container spacing={6} sx={{ mb: 8 }}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: '100%', p: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <Business sx={{ fontSize: 40, color: 'primary.main', mr: 2 }} />
                    <Typography variant="h3" sx={{ color: 'primary.main', fontWeight: 600 }}>
                      Mission
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
                    To deliver sustainable, high-quality, and efficient engineering solutions 
                    that drive real impact.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card sx={{ height: '100%', p: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <TimelineIcon sx={{ fontSize: 40, color: 'secondary.main', mr: 2 }} />
                    <Typography variant="h3" sx={{ color: 'secondary.main', fontWeight: 600 }}>
                      Vision
                    </Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontStyle: 'italic', lineHeight: 1.6 }}>
                    To be the most trusted civil engineering partner across India.
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        </Grid>

        {/* Core Values */}
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
            Our Core Values
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {values.map((value, index) => (
            <Grid key={value.title} item xs={12} md={6}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card sx={{ height: '100%', p: 3 }}>
                  <CardContent>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: 50,
                          height: 50,
                          bgcolor: 'secondary.light',
                          borderRadius: '50%',
                          mr: 2,
                          color: 'primary.main',
                        }}
                      >
                        {value.icon}
                      </Box>
                      <Typography variant="h5" sx={{ fontWeight: 600, color: 'primary.main' }}>
                        {value.title}
                      </Typography>
                    </Box>
                    <Typography variant="body1" color="text.secondary">
                      {value.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Custom Timeline */}
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
            Our Journey
          </Typography>
        </motion.div>

        <Box sx={{ position: 'relative', mb: 8 }}>
          {timeline.map((item, index) => (
            <Box key={item.year} sx={{ display: 'flex', mb: 4, position: 'relative' }}>
              {/* Timeline line */}
              {index < timeline.length - 1 && (
                <Box
                  sx={{
                    position: 'absolute',
                    left: 24,
                    top: 48,
                    width: 2,
                    height: 'calc(100% + 16px)',
                    bgcolor: 'secondary.main',
                    opacity: 0.3,
                  }}
                />
              )}
              
              {/* Year */}
              <Box sx={{ minWidth: 120, pr: 2 }}>
                <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                  {item.year}
                </Typography>
              </Box>

              {/* Timeline dot */}
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  borderRadius: '50%',
                  bgcolor: 'secondary.main',
                  mt: 0.5,
                  mr: 3,
                  flexShrink: 0,
                }}
              />

              {/* Content */}
              <Box sx={{ flex: 1 }}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    {item.event}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.description}
                  </Typography>
                </motion.div>
              </Box>
            </Box>
          ))}
        </Box>

        {/* Certifications */}
        <Box sx={{ my: 8 }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h2"
              textAlign="center"
              sx={{ mb: 4, color: 'primary.main' }}
            >
              Certifications
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: 2 }}>
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Chip
                    label={cert}
                    sx={{
                      bgcolor: 'secondary.light',
                      color: 'primary.main',
                      fontSize: '1rem',
                      p: 2,
                      height: 'auto',
                      fontWeight: 500,
                    }}
                  />
                </motion.div>
              ))}
            </Box>
          </motion.div>
        </Box>

        {/* Team */}
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
            Meet Our Team
          </Typography>
        </motion.div>

        <Grid container spacing={4}>
          {team.map((member, index) => (
            <Grid key={member.name} item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card sx={{ textAlign: 'center', p: 3 }}>
                  <CardContent>
                    <Avatar
                      sx={{
                        width: 100,
                        height: 100,
                        bgcolor: 'primary.main',
                        fontSize: '2rem',
                        mx: 'auto',
                        mb: 3,
                      }}
                    >
                      {member.avatar}
                    </Avatar>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 1 }}>
                      {member.name}
                    </Typography>
                    <Typography variant="h6" color="primary.main" sx={{ mb: 1 }}>
                      {member.role}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.experience}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default About;