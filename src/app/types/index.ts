export interface SectionProps {
  id: string;
  children: React.ReactNode;
}

export interface NavItem {
  name: string;
  icon: React.ReactNode;
  id: string;
}

export interface BenefitItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}