interface Props {
  className?: string;
}

const STEM = "#8b9b7a";
const FLOWER_FILL = "#fbfcf9";
const FLOWER_STROKE = "#a9b894";

const Bloom = ({ cx, cy, r = 2.4 }: { cx: number; cy: number; r?: number }) => (
  <circle cx={cx} cy={cy} r={r} fill={FLOWER_FILL} stroke={FLOWER_STROKE} strokeWidth="0.4" />
);

const HalfSprig = () => (
  <g>
    <path
      d="M 8 22 Q 30 14 55 20"
      stroke={STEM}
      strokeWidth="0.6"
      fill="none"
      strokeLinecap="round"
    />
    <Bloom cx={10} cy={22} r={3} />
    <Bloom cx={20} cy={18} r={2.4} />
    <Bloom cx={30} cy={15} r={2.8} />
    <Bloom cx={40} cy={17} r={2.4} />
    <Bloom cx={50} cy={20} r={2.6} />
    <Bloom cx={25} cy={22} r={1.5} />
    <Bloom cx={45} cy={14} r={1.6} />
  </g>
);

const SprigDivider = ({ className = "" }: Props) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <div className="h-px w-16 md:w-24 bg-wedding-charcoal/25" />
    <svg
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
      className="w-28 h-9"
      aria-hidden="true"
    >
      <HalfSprig />
      <circle cx={60} cy={20} r={1.6} fill={STEM} />
      <g transform="translate(120,0) scale(-1,1)">
        <HalfSprig />
      </g>
    </svg>
    <div className="h-px w-16 md:w-24 bg-wedding-charcoal/25" />
  </div>
);

export default SprigDivider;
