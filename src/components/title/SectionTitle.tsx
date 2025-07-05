import { cn } from "@/lib/utils";

const SectionTitle = ({
  title,
  className,
  animation = "",
}: {
  title: string;
  className?: string;
  animation?: string;
}) => {
  return (
    <h2 className={cn("text-[clamp(28px,5vw,48px)] font-semibold text-text leading-[3.75rem]", animation, className)}>
      {title}
    </h2>

  );
};

export default SectionTitle;