interface ProcessStepProps {
  step: number;
  title: string;
  description: string;
  isActive?: boolean;
}

export default function ProcessStep({ step, title, description, isActive = false }: ProcessStepProps) {
  return (
    <div className="relative">
      <div className={`text-center transition-all ${isActive ? 'scale-105' : ''}`}>
        <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-heading font-bold text-xl transition-colors ${
          isActive 
            ? 'bg-primary text-primary-foreground' 
            : 'bg-accent text-muted-foreground border-2 border-border'
        }`}>
          {step}
        </div>
        <h3 className="font-heading font-semibold text-base mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground px-2">
          {description}
        </p>
      </div>
    </div>
  );
}
