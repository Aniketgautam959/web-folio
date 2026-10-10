export function Atmosphere() {
  return (
    <div
      aria-hidden
      className="atmosphere pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="orb orb-a" />
      <div className="orb orb-b" />
      <div className="orb orb-c" />
      <div className="grain" />
    </div>
  );
}
