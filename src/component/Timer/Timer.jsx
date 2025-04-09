import "./Timer.css";

export default function Timer() {
  
  return (
    <section className="background-image">
      <h2 className="title">Counter until the big event</h2>
      <div className="timer">
        <div className="time-box">
          <span className="time">00</span>
          <p className="label">Weeks</p>
        </div>
        <div className="time-box">
          <span className="time">00</span>
          <p className="label">Days</p>
        </div>
        <div className="time-box">
          <span className="time">00</span>
          <p className="label">Hours</p>
        </div>
        <div className="time-box">
          <span className="time">00</span>
          <p className="label">Minutes</p>
        </div>
        <div className="time-box">
          <span className="time">00</span>
          <p className="label">Seconds</p>
        </div>
      </div>
    </section>
  );
}
