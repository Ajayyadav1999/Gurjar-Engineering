import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Card,
  CardContent,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Paper,
} from '@mui/material';
import {
  LocationOn,
  Phone,
  Email,
  ExpandMore,
  Download,
} from '@mui/icons-material';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  const contactInfo = [
    {
      icon: <LocationOn />,
      title: 'Address',
      details: '123 Engineering Park, Vadodara, Gujarat',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      details: '+91 98765 43210',
    },
    {
      icon: <Email />,
      title: 'Email',
      details: 'contact@gurjarengineering.com',
    },
  ];

  const faqs = [
    {
      question: 'How soon can a project start after consultation?',
      answer: 'Typically, we can begin project work within 2-3 weeks after the initial consultation and contract signing, depending on project complexity and our current workload.',
    },
    {
      question: 'Do you offer end-to-end execution?',
      answer: 'Yes, we provide comprehensive services from initial design and planning to final construction supervision and project handover.',
    },
    {
      question: 'Are your engineers licensed and insured?',
      answer: 'All our engineers are licensed professionals with appropriate certifications. We maintain comprehensive insurance coverage for all our projects and team members.',
    },
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
            Contact Us
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 8, maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}
          >
            Ready to discuss your project? Get in touch with our team of expert engineers.
            We're here to help bring your vision to life.
          </Typography>
        </motion.div>

        <Grid container spacing={6}>
          {/* Contact Form */}
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card sx={{ p: 4 }}>
                <Typography variant="h4" sx={{ mb: 4, color: 'primary.main', fontWeight: 600 }}>
                  Send us a Message
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                      <TextField
                        fullWidth
                        label="Email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <TextField
                        fullWidth
                        label="Message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        multiline
                        rows={6}
                        variant="outlined"
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          sx={{
                            px: 4,
                            py: 2,
                            fontSize: '1.1rem',
                            fontWeight: 600,
                          }}
                        >
                          Send Message
                        </Button>
                      </motion.div>
                    </Grid>
                  </Grid>
                </form>
              </Card>
            </motion.div>
          </Grid>

          {/* Contact Information */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Box sx={{ mb: 4 }}>
                <Typography variant="h4" sx={{ mb: 3, color: 'primary.main', fontWeight: 600 }}>
                  Get in Touch
                </Typography>
                {contactInfo.map((info, index) => (
                  <Card key={info.title} sx={{ mb: 2, p: 3 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                        {info.icon}
                      </Box>
                      <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, color: 'primary.main' }}>
                          {info.title}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                          {info.details}
                        </Typography>
                      </Box>
                    </Box>
                  </Card>
                ))}
              </Box>

              {/* Download Brochure */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Paper
                  sx={{
                    p: 3,
                    textAlign: 'center',
                    bgcolor: 'primary.main',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      bgcolor: 'primary.dark',
                    },
                  }}
                >
                  <Download sx={{ fontSize: 40, mb: 2 }} />
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    Company Brochure
                  </Typography>
                  <Typography variant="body2" sx={{ opacity: 0.9 }}>
                    Download our detailed company profile and service overview
                  </Typography>
                </Paper>
              </motion.div>
            </motion.div>
          </Grid>
        </Grid>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 8 }}>
            <Typography variant="h4" sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}>
              Find Us
            </Typography>
            <Card>
              <Box
                sx={{
                  height: 400,
                  bgcolor: 'grey.100',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 1,
                }}
              >
                <Typography variant="h6" color="text.secondary">
                  Google Maps Integration
                  <br />
                  123 Engineering Park, Vadodara, Gujarat
                </Typography>
              </Box>
            </Card>
          </Box>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box sx={{ mt: 8 }}>
            <Typography
              variant="h4"
              sx={{ mb: 4, textAlign: 'center', color: 'primary.main' }}
            >
              Frequently Asked Questions
            </Typography>
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Accordion sx={{ mb: 2 }}>
                  <AccordionSummary expandIcon={<ExpandMore />}>
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography variant="body1" color="text.secondary">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </motion.div>
            ))}
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Contact;