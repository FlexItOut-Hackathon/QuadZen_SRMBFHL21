import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>Daily workout Session</h1>
        <p>
        Show up, push hard, and let consistency sculpt your greatness
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
      <h1>FEATURES</h1>
<p>
  A dedicated space to power up your fitness journey with guided daily workout sessions.
</p>

<div className="bootcamps">
  <div>
    <h4>USER DASHBOARD</h4>
    <p>
      Your all-in-one fitness hub, giving you a clear view of your progress and daily goals. It includes:
    </p>
  </div>

  <div>
    <h4>Activity Tracking</h4>
    <p>
      Keep track of your workouts, steps, and overall movement to stay consistent in your fitness journey.
    </p>
  </div>

  <div>
    <h4>Calories Tracker</h4>
    <p>
      Monitor your calorie burn and intake to maintain a well-balanced fitness plan.
    </p>
  </div>

  <div>
    <h4>Leaderboard & Challenges</h4>
    <p>
      Engage in friendly competition, join challenges, and climb the ranks to stay motivated!
    </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;
