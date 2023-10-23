const TrafficLight = ({ color, on }) => {
  return (
    <div className={`traffic-light ${on ? 'on' : 'off'}`}>
      <div className={`circle ${color}`}></div>
    </div>
  );
};

export default TrafficLight;
