import React, { useState, useEffect, useRef } from 'react';
import { Box, Typography, Grid } from '@mui/material';
import { motion, useInView } from 'framer-motion';

const stats = [
  { label: 'Projects Delivered', value: 50, suffix: '+' },
  { label: 'Years of Excellence', value: 10, suffix: '+' },
  { label: 'Team Members', value: 15, suffix: '+' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
];

const CounterItem = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = stat.value / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.value) {
          setCount(stat.value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Box sx={{ textAlign: 'center', p: 2 }}>
        <Typography
          variant="h2"
          sx={{
            fontWeight: 700,
            color: 'white', // Changed from 'primary.main' to 'white'
            mb: 1,
            fontFamily: '"Poppins", sans-serif',
            fontSize: { xs: '2.5rem', md: '3rem' }, // Added responsive sizing
          }}
        >
          {count}{stat.suffix}
        </Typography>
        <Typography
          variant="h6"
          sx={{
            color: 'rgba(255, 255, 255, 0.9)', // Changed to white with slight transparency
            fontWeight: 500,
          }}
        >
          {stat.label}
        </Typography>
      </Box>
    </motion.div>
  );
};

const StatsCounter = () => {
  return (
    <Grid container spacing={4}>
      {stats.map((stat, index) => (
        <Grid key={stat.label} item xs={6} md={3}>
          <CounterItem stat={stat} index={index} />
        </Grid>
      ))}
    </Grid>
  );
};

export default StatsCounter;