import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  ButtonGroup,
} from '@mui/material';
import { motion } from 'framer-motion';
import ProjectCard from '../components/ProjectCard';

const Portfolio = () => {
  const [filter, setFilter] = useState('All');

  const projects = [
    {
      id: 1,
      title: 'Metro Rail Bridge (Ahmedabad)',
      description: '12 km viaduct foundations',
      category: 'Bridges',
      image: 'https://images.pexels.com/photos/681333/pexels-photo-681333.jpeg',
      fullDescription: 'A comprehensive metro rail bridge project spanning 12 kilometers through Ahmedabad city. This project involved complex foundation work, structural design, and coordination with urban infrastructure.',
      details: 'Duration: 18 months | Budget: ₹450 Crores | Team: 25 Engineers',
    },
    {
      id: 2,
      title: 'Smart City Roads (Bharuch)',
      description: 'Urban road network',
      category: 'Urban',
      image: 'https://images.pexels.com/photos/2159065/pexels-photo-2159065.jpeg',
      fullDescription: 'Modern urban road network development as part of the Smart City initiative in Bharuch. Included smart traffic management systems, sustainable drainage, and pedestrian-friendly infrastructure.',
      details: 'Duration: 12 months | Budget: ₹180 Crores | Team: 15 Engineers',
    },
    {
      id: 3,
      title: 'Riverfront Beautification (Surat)',
      description: 'Landscaping & structures',
      category: 'Urban',
      image: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg',
      fullDescription: 'Riverfront development project featuring landscaping, recreational structures, and flood management systems. Enhanced the aesthetic and functional value of the Tapi riverfront.',
      details: 'Duration: 15 months | Budget: ₹250 Crores | Team: 20 Engineers',
    },
    {
      id: 4,
      title: 'Industrial Plant (Rajkot)',
      description: 'Structural layout',
      category: 'Industrial',
      image: 'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg',
      fullDescription: 'Complete structural design and layout for a large-scale industrial manufacturing plant. Included specialized foundation systems for heavy machinery and efficient workflow design.',
      details: 'Duration: 10 months | Budget: ₹120 Crores | Team: 12 Engineers',
    },
    {
      id: 5,
      title: 'Residential Township (Vadodara)',
      description: '150-unit design',
      category: 'Residential',
      image: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg',
      fullDescription: 'Comprehensive residential township development with 150 housing units. Featured sustainable design principles, community spaces, and modern infrastructure facilities.',
      details: 'Duration: 24 months | Budget: ₹300 Crores | Team: 30 Engineers',
    },
    {
      id: 6,
      title: 'Highway Overpass (Gandhinagar)',
      description: 'Multi-level interchange',
      category: 'Bridges',
      image: 'https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg',
      fullDescription: 'Complex multi-level highway interchange project designed to improve traffic flow and reduce congestion in the state capital. Featured advanced structural engineering solutions.',
      details: 'Duration: 20 months | Budget: ₹380 Crores | Team: 22 Engineers',
    },
  ];

  const categories = ['All', 'Bridges', 'Residential', 'Urban', 'Industrial'];

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
            Our Portfolio
          </Typography>
          <Typography
            variant="h5"
            textAlign="center"
            color="text.secondary"
            sx={{ mb: 6, maxWidth: 800, mx: 'auto', lineHeight: 1.6 }}
          >
            Explore our diverse range of successful projects across Gujarat and beyond.
            Each project represents our commitment to excellence and innovation.
          </Typography>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
            <ButtonGroup variant="outlined" sx={{ flexWrap: 'wrap' }}>
              {categories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setFilter(category)}
                  variant={filter === category ? 'contained' : 'outlined'}
                  sx={{
                    px: 3,
                    py: 1,
                    fontWeight: 500,
                    textTransform: 'none',
                    borderRadius: 2,
                    minWidth: 'auto',
                  }}
                >
                  {category}
                </Button>
              ))}
            </ButtonGroup>
          </Box>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout>
          <Grid container spacing={4}>
            {filteredProjects.map((project, index) => (
              <Grid key={project.id} item xs={12} md={6} lg={4}>
                <ProjectCard project={project} index={index} />
              </Grid>
            ))}
          </Grid>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              textAlign: 'center',
              mt: 10,
              p: 6,
              bgcolor: 'primary.main',
              borderRadius: 3,
              color: 'white',
            }}
          >
            <Typography variant="h3" sx={{ mb: 3, fontWeight: 600 }}>
              Ready to Start Your Project?
            </Typography>
            <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
              Let's discuss how we can bring your vision to life with our expertise
              and innovative engineering solutions.
            </Typography>
            <Button
              variant="contained"
              size="large"
              sx={{
                bgcolor: 'white',
                color: 'primary.main',
                px: 4,
                py: 2,
                fontSize: '1.1rem',
                fontWeight: 600,
                '&:hover': {
                  bgcolor: 'secondary.light',
                },
              }}
              href="/contact"
            >
              Get In Touch
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Portfolio;