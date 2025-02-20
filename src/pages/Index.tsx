
import React, { useState } from 'react';
import TimeRangeSelector from '@/components/EmailSummary/TimeRangeSelector';
import CategoryCard from '@/components/EmailSummary/CategoryCard';
import { motion } from 'framer-motion';

const Index = () => {
  const [startTime, setStartTime] = useState('00:00');
  const [endTime, setEndTime] = useState('18:00');
  
  // Mock data for demonstration
  const emailCategories = [
    {
      title: "Important Updates",
      emails: [
        {
          subject: "Project Deadline Update",
          sender: "project.manager@company.com",
          time: "14:30",
          summary: "The project deadline has been extended by one week to accommodate additional requirements."
        },
        {
          subject: "Team Meeting Summary",
          sender: "team.lead@company.com",
          time: "15:45",
          summary: "Key points discussed: Q2 goals, resource allocation, and upcoming milestones."
        }
      ]
    },
    {
      title: "Client Communications",
      emails: [
        {
          subject: "Feedback on Latest Delivery",
          sender: "client@client.com",
          time: "13:15",
          summary: "Positive feedback received on the latest feature deployment with minor suggestions for improvement."
        }
      ]
    },
    {
      title: "Administrative",
      emails: [
        {
          subject: "Office Policy Updates",
          sender: "hr@company.com",
          time: "11:00",
          summary: "New guidelines for remote work and updated security protocols."
        }
      ]
    }
  ];

  const handleTimeChange = (start: string, end: string) => {
    setStartTime(start);
    setEndTime(end);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <div className="text-center mb-12">
          <h1 className="text-4xl font-semibold text-gray-900 mb-4">Email Summary</h1>
          <p className="text-lg text-gray-600">Daily digest of your important communications</p>
        </div>

        <TimeRangeSelector
          startTime={startTime}
          endTime={endTime}
          onTimeChange={handleTimeChange}
        />

        <div className="space-y-6">
          {emailCategories.map((category, index) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              emails={category.emails}
              delay={index}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Index;
