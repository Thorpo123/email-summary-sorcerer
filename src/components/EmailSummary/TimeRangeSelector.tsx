
import React from 'react';
import { Card } from "@/components/ui/card";

interface TimeRangeSelectorProps {
  startTime: string;
  endTime: string;
  onTimeChange: (start: string, end: string) => void;
}

const TimeRangeSelector = ({ startTime, endTime, onTimeChange }: TimeRangeSelectorProps) => {
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
