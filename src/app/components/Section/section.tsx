interface ISectionProps {
  title?: string;
  id: string;
  className?: string;
  children?: React.ReactNode;
}

export const Section = ({ title, id, className, children }: ISectionProps) => {
  return (
    <section id={id} className={` container px-4 pb-16 ${className}`}>
      {title && (
        <h2 className={`text-4xl font-bold text-center hidden `}>{title}</h2>
      )}
      {children}
    </section>
  );
};
