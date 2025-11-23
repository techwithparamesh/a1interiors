import { Card } from "@/components/ui/card";

interface WhyChooseUsCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle?: string;
}

export default function WhyChooseUsCard({ icon, title, subtitle }: WhyChooseUsCardProps) {
  return (
    <Card className="flex-shrink-0 w-[180px] p-6 hover:shadow-lg transition-shadow cursor-pointer border-border">
      <div className="flex flex-col items-center text-center gap-4">
        {/* Icon Container */}
        <div className="w-20 h-20 flex items-center justify-center">
          {icon}
        </div>
        
        {/* Title */}
        <div className="space-y-1">
          <h3 className="font-semibold text-sm leading-tight">
            {title}
          </h3>
          {subtitle && (
            <p className="text-xs text-muted-foreground">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
