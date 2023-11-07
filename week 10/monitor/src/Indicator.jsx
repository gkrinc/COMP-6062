const Indicator = ({ status, label, active }) => (
  <div className={`indicator status-${active ? 'on' : 'off'} status-${status}`}>{label}</div>
);

export default Indicator;
