export interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

export interface IBasicTabsProps {
  tabs?: ITapProps[];
  defaultValue: number;
  onChange: (value: number) => void;
}

export interface ITapProps {
  id: number;
  label: string;
  describe?: string;
  value: string;
}
