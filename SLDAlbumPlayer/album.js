// Album settings for the player (index.html).
// On GitHub Pages the player also checks the repo for .m4a files itself, so new or renamed
// songs show up without editing this file. This list is the backup.

window.ALBUM = {
  title: "SEEK LOVE DESTROY",          // shown at the top; leave "" to use the repo name
  artwork: "artwork-circle.webp",
  discStarts: [1, 13, 20],   // track numbers where Disc 1, Disc 2 and Disc 3 begin
  tracks: [
    "01 Free, Like a Bird.m4a",
    "02 Make Your Move.m4a",
    "03 Where Horizons Meet.m4a",
    "04 Sinking Through Endless Sea.m4a",
    "05 Into the Kingdom of Control.m4a",
    "06 This Way.m4a",
    "07 I WIll Fly.m4a",
    "08 Feel Again.m4a",
    "09 Pretender's Paradise.m4a",
    "10 The Wanderer and the Journey Through the Unraveling Cycle.m4a",
    "11 Alone.m4a",
    "12 Never Enough.m4a",
    "13 Metamorphosis II.m4a",
    "14 The Eyes That Open a Second Time.m4a",
    "15 Mi Amor, I Am Nothing at All!.m4a",
    "16 The Breeze You Need to Fly.m4a",
    "17 A Message Suspended in Time.m4a",
    "18 The Place Beyond Mind's Cave.m4a",
    "19 Ascent into the Sun.m4a",
    "20 The State that Remains.m4a",
  ],
  // Visualizer: each song's clip in visualizer/ was cut from the full video starting at `cut` (seconds),
  // and the song begins at `start` (seconds into the full video). To nudge a song's visuals, change its
  // `start` (later = visuals later). Stays in range as long as start is at least `cut`.
  visualizer: {
    cut:   [0.000, 220.944, 389.251, 617.600, 871.333, 1087.933, 1334.367, 1493.207, 1715.624, 1935.825, 2097.506, 2359.000, 2620.000, 2682.737, 2868.100, 3053.247, 3186.000, 3272.967, 3431.879, 3881.333],
    start: [7.000, 230.946, 399.256, 627.600, 881.333, 1097.933, 1344.367, 1503.208, 1725.630, 1945.832, 2107.506, 2369.000, 2630.000, 2692.737, 2878.100, 3071.750, 3204.000, 3282.967, 3441.883, 3891.333]
  }
};
