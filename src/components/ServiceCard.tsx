
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Link } from 'react-router-dom';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
}

const ServiceCard = ({ title, description, icon, link }: ServiceCardProps) => {
  return (
    <Card className="border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="flex justify-center items-center pb-2">
        <div className="w-16 h-16 rounded-full bg-xappiens-purple/10 flex items-center justify-center text-xappiens-purple mb-4">
          {icon}
        </div>
        <CardTitle className="text-xl text-center">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-center">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-center pt-2 pb-6">
        <Link to={link}>
          <Button variant="outline" className="border-xappiens-purple text-xappiens-purple hover:bg-xappiens-purple hover:text-white">
            Saber más
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
