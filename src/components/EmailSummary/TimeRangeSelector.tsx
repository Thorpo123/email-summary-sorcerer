
import React, { useEffect } from 'react';
import { Card } from "@/components/ui/card";

interface TimeRangeSelectorProps {
  startTime: string;
  endTime: string;
  onTimeChange: (start: string, end: string) => void;
}

const TimeRangeSelector = ({ startTime, endTime, onTimeChange }: TimeRangeSelectorProps) => {
  // Validate and fix time formats on component mount
  useEffect(() => {
    const validateTimeFormat = (time: string) => {
      // Check if time is in valid format
      const isValidTime = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(time);
      if (!isValidTime) {
        console.warn(`Invalid time format detected: ${time}, resetting to default`);
        return "00:00";
      }
      return time;
    };
    
    const validatedStart = validateTimeFormat(startTime);
    const validatedEnd = validateTimeFormat(endTime);
    
    // If either time was invalid, update with valid defaults
    if (validatedStart !== startTime || validatedEnd !== endTime) {
      onTimeChange(validatedStart, validatedEnd);
    }
  }, []);
  
  return (
    <Card className="p-6 mb-8 animate-fade-in bg-white/80 backdrop-blur-sm border border-gray-100">
      <div className="space-y-4">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">Start Time</label>
            <input
              type="time"
              value={startTime}
              onChange={(e) => onTimeChange(e.target.value, endTime)}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            />
          </div>
          <div className="flex-1">
            <label className="block text-sm font-medium text-gray-700 mb-1">End Time</label>
            <input
              type="time"
              value={endTime}
              onChange={(e) => onTimeChange(startTime, e.target.value)}
              className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TimeRangeSelector;
