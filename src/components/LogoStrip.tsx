const BASE = "https://careguidebd.com/assets/images/resource";
const LOGOS = ["allian", "figma", "google", "redit"];
// repeat the four logos so one group is wider than the screen
const GROUP = [...LOGOS, ...LOGOS, ...LOGOS];

function Group({ hidden }: { hidden?: boolean }) {
  return (
    <ul className="logos-group" aria-hidden={hidden || undefined}>
      {GROUP.map((n, i) => (
        <li key={`${n}-${i}`}>
          <img src={`${BASE}/${n}.png`} alt={hidden ? "" : "Client logo"} width={141} height={80} loading="lazy" decoding="async" referrerPolicy="no-referrer" />
        </li>
      ))}
    </ul>
  );
}

export default function LogoStrip({ variant }: { variant?: "alt" }) {
  return (
    <section className={`logos${variant ? " logos-alt" : ""}`} aria-label="Clients and partners">
      <div className="wrap">
        <div className="logos-viewport">
          <div className="logos-track">
            <Group />
            <Group hidden />
          </div>
        </div>
      </div>
    </section>
  );
}
