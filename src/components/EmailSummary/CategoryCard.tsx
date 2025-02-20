
import React from 'react';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface EmailSummary {
  subject: string;
  sender: string;
  time: string;
  summary: string;
}

interface CategoryCardProps {
  title: string;
  emails: EmailSummary[];
  delay: number;
}

const CategoryCard = ({ title, emails, delay }: CategoryCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
    >
      <Card 
        className={`p-6 mb-4 cursor-pointer transform transition-all duration-300 hover:shadow-lg
          ${isExpanded ? 'bg-white' : 'bg-white/80 backdrop-blur-sm'}`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{emails.length} emails</span>
        </div>
        
        <div className={`space-y-4 transition-all duration-300 ${isExpanded ? 'max-h-[500px]' : 'max-h-0'} overflow-hidden`}>
          {emails.map((email, index) => (
            <div key={index} className="border-t border-gray-100 pt-4 first:border-t-0 first:pt-0">
              <h4 className="text-base font-medium text-gray-800 mb-1">{email.subject}</h4>
              <p className="text-sm text-gray-600 mb-2">From: {email.sender} • {email.time}</p>
              <p className="text-sm text-gray-700">{email.summary}</p>
            </div>
          ))}
        </div>
      </Card>
    </motion.div>
  );
};

export default CategoryCard;
