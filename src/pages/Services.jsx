import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import {
  Engineering,
  Business,
  ManageAccounts,
  Construction,
  Calculate,
  Water,
  Security,
  Build,
} from '@mui/icons-material';
import { motion } from 'framer-motion';
import ServiceCard from '../components/ServiceCard';

const Services = () => {
  const mainServices = [
    {
      icon: '🏗️',
      title: 'Civil Engineering',
      description: 'Planning, execution, and supervision of infrastructure projects with precision and expertise.',
    },
    {
      icon: '🏢',
      title: 'Structural Design',
      description: 'Scalable and code-compliant structural modeling for all types of construction projects.',
    },
    {
      icon: '🧰',
      title: 'Project Management',
      description: 'Complete oversight of scope, time, cost, and quality throughout the project lifecycle.',
    },
    {
      icon: '🧱',
      title: 'Construction Supervision',
      description: 'On-site inspection and technical supervision by our expert engineers.',
    },
  ];

  const additionalServices = [
    { icon: <Calculate />, title: 'Quantity Surveying', description: 'Accurate cost estimation and material planning' },
    { icon: <Water />, title: 'Sewage/Drainage Design', description: 'Efficient water management systems' },
    { icon: <Security />, title: 'Earthquake-Resistant Design', description: 'Seismic safety compliance and design' },
    { icon: <Build />, title: 'Retrofitting and Renovation Consulting', description: 'Upgrading existing structures' },
  ];

  return (
    <Box>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* Header */}
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
            Our Services
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}
          >
            Comprehensive engineering solutions tailored to meet your project requirements
            from conception to completion.
          </Typography>
        </motion.div>

        {/* Main Services */}
        <Typography
          variant="h2"
          sx={{ mb: 6, color: 'primary.main', textAlign: 'center' }}
        >
          Core Services
        </Typography>

        <Grid container spacing={4} sx={{ mb: 10 }}>
          {mainServices.map((service, index) => (
            <Grid key={service.title} item xs={12} md={6}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                index={index}
              />
            </Grid>
          ))}
        </Grid>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Typography
            variant="h2"
            sx={{ mb: 6, color: 'primary.main', textAlign: 'center' }}
          >
            Additional Services
          </Typography>
        </motion.div>

        <Grid container spacing={4} sx={{ mb: 8 }}>
          {additionalServices.map((service, index) => (
            <Grid key={service.title} item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Box
                  sx={{
                    textAlign: 'center',
                    p: 3,
                    height: '100%',
                    borderRadius: 2,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'background.paper',
                      boxShadow: '0 8px 25px rgba(0,95,115,0.1)',
                      transform: 'translateY(-4px)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      width: 60,
                      height: 60,
                      bgcolor: 'secondary.light',
                      borderRadius: '50%',
                      mx: 'auto',
                      mb: 2,
                      color: 'primary.main',
                    }}
                  >
                    {service.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: 600, mb: 1, color: 'primary.main' }}
                  >
                    {service.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {service.description}
                  </Typography>
                </Box>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Service Process */}
        <Box sx={{ bgcolor: 'background.paper', borderRadius: 3, p: 6, mt: 8 }}>
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
              Our Process
            </Typography>
            <Typography
              variant="h6"
              textAlign="center"
              color="text.secondary"
              sx={{ mb: 6, maxWidth: 600, mx: 'auto' }}
            >
              We follow a structured approach to ensure project success and client satisfaction
            </Typography>
          </motion.div>

          <Grid container spacing={4}>
            {[
              { step: '01', title: 'Consultation', desc: 'Initial project assessment and requirement analysis' },
              { step: '02', title: 'Planning', desc: 'Detailed project planning and design development' },
              { step: '03', title: 'Execution', desc: 'Implementation with regular monitoring and quality checks' },
              { step: '04', title: 'Delivery', desc: 'Project completion and handover with documentation' },
            ].map((process, index) => (
              <Grid key={process.step} item xs={12} sm={6} md={3}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography
                      variant="h2"
                      sx={{
                        color: 'secondary.light',
                        fontWeight: 700,
                        mb: 2,
                        opacity: 0.7,
                      }}
                    >
                      {process.step}
                    </Typography>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: 600, mb: 2, color: 'primary.main' }}
                    >
                      {process.title}
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      {process.desc}
                    </Typography>
                  </Box>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Services;