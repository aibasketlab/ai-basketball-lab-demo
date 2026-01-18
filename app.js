const DEMO = {
  video:{
    src:"assets/video/demo.mp4",
    title:"Shot Analysis",
    stamp:"#1st shot video",
    meta:"18/1/2026 • 7:23 PM"
  },

  metrics:[
    {name:"Release Angle",score:"EXCELLENT",value:"57°"},
    {name:"Elbow Angle",score:"EXCELLENT",value:"175°"},
    {name:"Knee Angle",score:"EXCELLENT",value:"170°"},
    {name:"Entry Angle",score:"GOOD",value:"61°"},
    {name:"Release Height",score:"GOOD",value:"2.21 m"}
  ],

  charts:{
    chart1Img:"assets/img/elbow.png",
    chart2Img:"assets/img/knee.png",
    releaseImg:"assets/img/release.png"
  },

  feedback:`1. Shot Mechanics

Elbow reaches full extension at 175° at release — textbook arm snap and clean follow-through.
Knees load at ~138° and extend fully to 170°, with the ball released exactly at peak leg extension. No energy leak.
Release height is 2.21 m, creating a high visual window and making contests ineffective.
One-motion shot with a smooth set point and fast pickup — efficient and repeatable.

2. Ball Trajectory

Release angle: 57°
Entry angle: 61°

This is a very steep flight path. The ball approaches the rim with near-ideal geometry, making the rim play bigger.
The parabola is clean, apex sits in the optimal window, and the backspin stabilizes the ball for a soft drop and shooter’s roll.

3. Outcome

Shot is made.
Driven by perfect timing between lower body (170° knee extension) and upper body (175° elbow snap).
No arm-push, no steering — pure kinetic chain.

4. Overall Assessment

Mechanically elite jumper with high release, clean sequencing, and optimal geometry.
The only variable to monitor is maintaining a 57° arc under fatigue or deep-range conditions, where 45–50° is often more sustainable.

Coach Grade

A+

This is a pro-level mechanical base. High release, full extension, perfect timing. This form will translate at game speed.

Key Cue: Keep the timing — flatten the arc slightly for deep range.`,

  note:"Demo only. Values and visuals are manually inserted from the pipeline."
};

function el(id){ return document.getElementById(id); }

function render(){
  el("demoVideo").src = DEMO.video.src;
  el("videoTitle").textContent = DEMO.video.title;
  el("shotStamp").textContent = DEMO.video.stamp;
  el("shotMeta").textContent = DEMO.video.meta;

  el("chart1Img").src = DEMO.charts.chart1Img;
  el("chart2Img").src = DEMO.charts.chart2Img;
  el("releaseImg").src = DEMO.charts.releaseImg;

  const grid = el("metricGrid");
  DEMO.metrics.forEach(m=>{
    const d=document.createElement("div");
    d.className="metric";
    d.innerHTML=`
      <div class="metricTop">
        <div>${m.name}</div>
        <div class="metricScore">${m.score}</div>
      </div>
      <div class="metricValue">${m.value}</div>
    `;
    grid.appendChild(d);
  });

  const full = DEMO.feedback;
  const preview = full.split("\n").slice(0,6).join("\n");

  el("feedbackPreview").textContent = preview;
  el("feedbackFull").textContent = full;

  el("toggleFeedback").onclick = () => {
    el("feedbackPreview").classList.toggle("hidden");
    el("feedbackFull").classList.toggle("hidden");
    el("toggleFeedback").textContent =
      el("feedbackFull").classList.contains("hidden") ? "Show more" : "Show less";
  };

  el("noteText").textContent = DEMO.note;
}

render();


