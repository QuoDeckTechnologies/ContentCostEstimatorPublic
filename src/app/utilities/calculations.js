export const margin  = 0.55

export const contentSlidesCalSchema = [
  {
    name: "textual-content-slide",
    INR_screen: 1085,
    screen_min: 1,
    OST_screen: 80,
    VO_screen: 50,
  },
  {
    name: "visual-content-slide",
    INR_screen: 2325,
    screen_min: 1,
    OST_screen: 50,
    VO_screen: 75,
  },
  {
    name: "interactive-visual-slide",
    INR_screen: 2325,
    screen_min: 1,
    OST_screen: 100,
    VO_screen: 100,
  },
  {
    name: "textual-question-slide",
    INR_screen: 388,
    screen_min: 2,
    OST_screen: 100,
    VO_screen: 0,
  },
  {
    name: "visual-quetion-slide",
    INR_screen: 1163,
    screen_min: 2,
    OST_screen: 50,
    VO_screen: 0,
  },
];

export const videoCalSchema = [
  {
    name: "slideshows",
    minutes: 1,
    INR_screen: 3100,
    OST_screen: 30,
    VO_screen: 100,
  },
  {
    name: "story-based-slideshows",
    minutes: 1,
    INR_screen: 6200,
    OST_screen: 30,
    VO_screen: 100,
  },
  {
    name: "screencasts",
    minutes: 1,
    INR_screen: 10850,
    OST_screen: 30,
    VO_screen: 100,
  },
  {
    name: "iconic-infographic-video",
    minutes: 1,
    INR_screen: 10850,
    OST_screen: 30,
    VO_screen: 100,
  },
  {
    name: "2d-animated-story",
    minutes: 1,
    INR_screen: 10850,
    OST_screen: 30,
    VO_screen: 100,
  },
  {
    name: "whiteboard-animation",
    minutes: 1,
    INR_screen: 12400,
    OST_screen: 30,
    VO_screen: 100,
  },
  {
    name: "motion-graphics",
    minutes: 1,
    INR_screen: 19375,
    OST_screen: 30,
    VO_screen: 100,
  },
  {
    name: "3d-animated-story",
    minutes: 1,
    INR_screen: 38750,
    OST_screen: 30,
    VO_screen: 100,
  },
];

export const presentationCalSchema = [
  {
    name: "stock-character-with-6-poses",
    INR_item: 15500,
    item: 1,
  },
  {
    name: "custom-illustrations",
    INR_item: 3875,
    item: 1,
  },
];

export const accessibilityCalSchema = [
  {
    name: "machine-voiceover",
    INR_hour: 4650,
  },
  {
    name: "human-voiceover",
    INR_hour: 27900,
  },
  {
    name: "gamified-story",
    INR_hour: 38750,
  },
];

export const translationCalSchema = [
  {
    name: "ost-translation",
    cost_word: 1.75,
  },
  {
    name: "vo-translation",
    cost_word: 1.75,
  },
  {
    name: "ost-review",
    cost_word: 0.75,
  },
  {
    name: "vo-review",
    cost_word: 0.75,
  },
  {
    name: "reauthoring",
    cost: 15000,
  },
];
