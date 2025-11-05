"use client";
import { Card } from "@/components/ui/card";

interface MyAppProps {
  children: React.ReactNode;
  className?: string;
}
const CardBox: React.FC<MyAppProps> = ({ children, className }) => {
  return (
    <Card className={`card bg-background ${className}`}
    >
      {children}
    </Card>
  );

};

export default CardBox;
