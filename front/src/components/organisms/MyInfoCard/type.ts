export type MyInfoCardProps = {
  imageSource?: string;
  iconLabel?: Array<{ icon: React.ReactNode; label: string | React.ReactNode }>;
  name: string;
  style?: React.CSSProperties;
};
