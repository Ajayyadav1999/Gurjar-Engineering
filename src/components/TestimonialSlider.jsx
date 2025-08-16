import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Avatar } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { motion, AnimatePresence } from 'framer-motion';

const testimonials = [
  {
    text: "Professional, on-time, and exceeded expectations.",
    author: "UrbanEdge",
    role: "Project Manager",
    avatar: "U",
  },
  {
    text: "Their civil design work helped us complete our plant ahead of schedule.",
    author: "SmartStruct",
    role: "Construction Director",
    avatar: "S",
  },
  {
    text: "Exceptional attention to detail and innovative solutions.",
    author: "Gujarat Infra",
    role: "Chief Engineer",
    avatar: "G",
  },
];

const TestimonialSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Box sx={{ position: 'relative', height: 200, display: 'flex', alignItems: 'center' }}>
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
          style={{ width: '100%' }}
        >
          <Paper
            elevation={0}
            sx={{
              p: 4,
              textAlign: 'center',
              bgcolor: 'transparent',
              position: 'relative',
            }}
          >
            <FormatQuote
              sx={{
                fontSize: 40,
                color: 'secondary.light',
                mb: 2,
                opacity: 0.7,
              }}
            />
            <Typography
              variant="h6"
              sx={{
                fontStyle: 'italic',
                mb: 3,
                color: 'text.primary',
                lineHeight: 1.6,
              }}
            >
              "{testimonials[current].text}"
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 2 }}>
              <Avatar
                sx={{
                  bgcolor: 'primary.main',
                  width: 40,
                  height: 40,
                }}
              >
                {testimonials[current].avatar}
              </Avatar>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {testimonials[current].author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {testimonials[current].role}
                </Typography>
              </Box>
            </Box>
          </Paper>
        </motion.div>
      </AnimatePresence>

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 1,
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}
      >
        {testimonials.map((_, index) => (
          <Box
            key={index}
            sx={{
              width: 8,
              height: 8,
              borderRadius: '50%',
              bgcolor: index === current ? 'primary.main' : 'grey.300',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease',
            }}
            onClick={() => setCurrent(index)}
          />
        ))}
      </Box>
    </Box>
  );
};

export default TestimonialSlider;