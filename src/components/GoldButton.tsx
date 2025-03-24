
import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowRightIcon, AnchorIcon } from 'lucide-react';

interface GoldButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'solid' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  children: React.ReactNode;
  href?: string;
  showArrow?: boolean;
  showAnchor?: boolean;
}

const GoldButton: React.FC<GoldButtonProps> = ({
  variant = 'solid',
  size = 'md',
  className,
  children,
  href,
  showArrow = false,
  showAnchor = false,
  ...props
}) => {
  const baseStyles = "font-medium rounded-md relative transition-all duration-300 overflow-hidden group focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold/50 focus:ring-offset-navy-dark";
  
  const variantStyles = {
    solid: "bg-gold text-navy-dark hover:bg-gold-light",
    outline: "bg-transparent text-gold border border-gold hover:bg-gold/10"
  };
  
  const sizeStyles = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2",
    lg: "px-6 py-3 text-lg"
  };
  
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );
  
  const content = (
    <>
      <span className="relative z-10 flex items-center gap-2">
        {showAnchor && (
          <AnchorIcon
            size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16}
            className="transition-transform duration-300"
          />
        )}
        {children}
        {showArrow && (
          <ArrowRightIcon 
            size={size === 'sm' ? 14 : size === 'lg' ? 20 : 16} 
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        )}
      </span>
      <span className="absolute inset-0 bg-gradient-to-r from-gold-light to-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      
      {/* Submarine-like sonar ripple effect */}
      <span className="absolute inset-0 rounded-md overflow-hidden">
        <span className="absolute -inset-[100%] rounded-full opacity-0 group-hover:opacity-100 bg-gold/10 transform scale-0 group-hover:scale-100 transition-all duration-1000"></span>
        <span className="absolute -inset-[100%] rounded-full opacity-0 group-hover:opacity-70 bg-gold/5 transform scale-0 group-hover:scale-100 transition-all duration-1500 delay-200"></span>
      </span>
    </>
  );
  
  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }
  
  return (
    <button className={classes} {...props}>
      {content}
    </button>
  );
};

export default GoldButton;
