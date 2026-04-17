interface Props {
  className?: string;
}

const STEM = "#8b9b7a";
const FLOWER_FILL = "#fbfcf9";
const FLOWER_STROKE = "#a9b894";
const LEAF = "#9fae8a";

/** Single round bloom — like printed invite style */
const Bloom = ({ cx, cy, r = 4 }: { cx: number; cy: number; r?: number }) => (
  <g>
    <circle cx={cx} cy={cy} r={r} fill={FLOWER_FILL} stroke={FLOWER_STROKE} strokeWidth="0.6" />
  </g>
);

/** Single sprig — stems curve, blooms scattered along, rotated 180° so base at top */
const Sprig = () => (
  <g transform="rotate(180 250 150)">
    {/* main arching stem */}
    <path
      d="M 15 285 C 40 240, 70 200, 105 155 S 170 75, 235 50"
      stroke={STEM}
      strokeWidth="1"
      fill="none"
      strokeLinecap="round"
    />

    {/* branches */}
    <path d="M 40 245 Q 65 230 90 238" stroke={STEM} strokeWidth="0.7" fill="none" strokeLinecap="round" />
    <path d="M 75 195 Q 100 178 128 188" stroke={STEM} strokeWidth="0.7" fill="none" strokeLinecap="round" />
    <path d="M 115 140 Q 142 122 168 130" stroke={STEM} strokeWidth="0.7" fill="none" strokeLinecap="round" />
    <path d="M 155 95 Q 180 82 205 88" stroke={STEM} strokeWidth="0.7" fill="none" strokeLinecap="round" />
    <path d="M 195 62 Q 215 55 228 60" stroke={STEM} strokeWidth="0.6" fill="none" strokeLinecap="round" />

    {/* leaves */}
    <ellipse cx="55" cy="230" rx="3.5" ry="1.2" fill={LEAF} transform="rotate(-30 55 230)" />
    <ellipse cx="95" cy="175" rx="3.5" ry="1.2" fill={LEAF} transform="rotate(-40 95 175)" />
    <ellipse cx="135" cy="120" rx="3.5" ry="1.2" fill={LEAF} transform="rotate(-45 135 120)" />
    <ellipse cx="180" cy="80" rx="3.5" ry="1.2" fill={LEAF} transform="rotate(-20 180 80)" />
    <ellipse cx="72" cy="215" rx="2.5" ry="1" fill={LEAF} transform="rotate(25 72 215)" />
    <ellipse cx="118" cy="158" rx="2.5" ry="1" fill={LEAF} transform="rotate(15 118 158)" />

    {/* blooms — larger along main stem + at branch tips, smaller scattered */}
    <Bloom cx={18} cy={283} r={6} />
    <Bloom cx={30} cy={268} r={4.5} />
    <Bloom cx={45} cy={250} r={5.5} />
    <Bloom cx={60} cy={232} r={4} />
    <Bloom cx={74} cy={218} r={5} />
    <Bloom cx={90} cy={238} r={4.5} />
    <Bloom cx={85} cy={200} r={5.5} />
    <Bloom cx={100} cy={182} r={4} />
    <Bloom cx={115} cy={168} r={5} />
    <Bloom cx={128} cy={188} r={4.5} />
    <Bloom cx={120} cy={152} r={5.5} />
    <Bloom cx={138} cy={132} r={4} />
    <Bloom cx={152} cy={118} r={5} />
    <Bloom cx={168} cy={130} r={4.5} />
    <Bloom cx={160} cy={105} r={5.5} />
    <Bloom cx={175} cy={92} r={4.5} />
    <Bloom cx={190} cy={80} r={5} />
    <Bloom cx={205} cy={88} r={4.5} />
    <Bloom cx={200} cy={68} r={4.5} />
    <Bloom cx={215} cy={60} r={5} />
    <Bloom cx={228} cy={60} r={4} />
    <Bloom cx={235} cy={50} r={5} />

    {/* tiny buds */}
    <Bloom cx={38} cy={260} r={1.8} />
    <Bloom cx={68} cy={205} r={1.8} />
    <Bloom cx={108} cy={175} r={1.8} />
    <Bloom cx={145} cy={110} r={1.8} />
    <Bloom cx={188} cy={72} r={1.8} />
    <Bloom cx={222} cy={52} r={1.6} />
  </g>
);

const GypsophilaArch = ({ className = "" }: Props) => (
  <svg
    viewBox="0 0 500 300"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    preserveAspectRatio="xMidYMin meet"
    aria-hidden="true"
  >
    <g transform="translate(10,0)">
      <Sprig />
    </g>
    <g transform="translate(490,0) scale(-1,1)">
      <Sprig />
    </g>
  </svg>
);

export { Sprig };
export default GypsophilaArch;
