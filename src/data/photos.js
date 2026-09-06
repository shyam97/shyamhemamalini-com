/**
 * Photo gallery content. Placeholder entries — to swap in real photos, drop
 * files into public/photos/ (already created) and point `src` at them, e.g.
 * `/photos/canal-frost.jpg`. `orientation` is "portrait" (2:3) or
 * "landscape" (3:2) — keep every photo to one of these two ratios so the
 * grid tiles stay a consistent shape. Display order is randomized at
 * render time (see Photography.jsx) — the order here is just for editing
 * convenience, not what visitors see.
 */
export const PHOTOS = [
  {
    id: "p1",
    src: "https://picsum.photos/seed/tue-01/800/1200",
    orientation: "portrait",
    caption: "Frozen canal just after sunrise, first frost of the year",
    location: "Eindhoven, NL",
    date: "Jan 2026",
  },
  {
    id: "p2",
    src: "https://picsum.photos/seed/tue-02/1200/800",
    orientation: "landscape",
    caption: "Empty cluster room lit only by monitor glow",
    location: "Eindhoven, NL",
    date: "Nov 2025",
  },
  {
    id: "p3",
    src: "https://picsum.photos/seed/tue-03/800/1200",
    orientation: "portrait",
    caption: "Ridge line above the cloud layer, early morning hike",
    location: "Zermatt, CH",
    date: "Aug 2025",
  },
  {
    id: "p4",
    src: "https://picsum.photos/seed/tue-04/1200/800",
    orientation: "landscape",
    caption: "Fog rolling over the river at dusk",
    location: "Zurich, CH",
    date: "Jun 2025",
  },
  {
    id: "p5",
    src: "https://picsum.photos/seed/tue-05/800/1200",
    orientation: "portrait",
    caption: "Reflections in the station's glass terminal wall",
    location: "Eindhoven, NL",
    date: "Apr 2025",
  },
  {
    id: "p6",
    src: "https://picsum.photos/seed/tue-06/1200/800",
    orientation: "landscape",
    caption: "Last train of the night, platform three",
    location: "Utrecht, NL",
    date: "Mar 2025",
  },
  {
    id: "p7",
    src: "https://picsum.photos/seed/tue-07/800/1200",
    orientation: "portrait",
    caption: "Wind turbines at low tide, long exposure",
    location: "Zeeland, NL",
    date: "Dec 2024",
  },
  {
    id: "p8",
    src: "https://picsum.photos/seed/tue-08/1200/800",
    orientation: "landscape",
    caption: "Wet cobblestone in the old town after rain",
    location: "Ghent, BE",
    date: "Oct 2024",
  },
  {
    id: "p9",
    src: "https://picsum.photos/seed/tue-09/800/1200",
    orientation: "portrait",
    caption: "Crevasse detail on the glacier's north face",
    location: "Saas-Fee, CH",
    date: "Aug 2024",
  },
  {
    id: "p10",
    src: "https://picsum.photos/seed/tue-10/1200/800",
    orientation: "landscape",
    caption: "Boat lights streaked across a canal at night",
    location: "Amsterdam, NL",
    date: "Jul 2024",
  },
];
