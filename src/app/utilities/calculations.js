const contentSlidesCalSchema = [
  {
    name: "textual-content-slide",
    proportion: 651,
    screens: 1085,
  },
  {
    name: "visual-content-slide",
    proportion: 1395,
    screens: 2325,
  },
  {
    name: "interactive-visual-slide",
    proportion: 1395,
    screens: 2325,
  },
  {
    name: "textual-question-slide",
    proportion: 495,
    screens: 388,
  },
  {
    name: "visual-quetion-slide",
    proportion: 1395,
    screens: 1163,
  },
];

const vidoeCalSchema = [
  {
    name: "slideshows",
    proportion: 1860,
    minutes: 3100,
  },
  {
    name: "story-based-slideshows",
    proportion: 3720,
    minutes: 6200,
  },
  {
    name: "screencasts",
    proportion: 10850,
    minutes: 10850,
  },
  {
    name: "iconic-infographic-video",
    proportion: 10850,
    minutes: 10850,
  },
  {
    name: "2d-animated-story",
    proportion: 10850,
    minutes: 10850,
  },
  {
    name: "whiteboard-animation",
    proportion: 12400,
    minutes: 12400,
  },
  {
    name: "motion-graphics",
    proportion: 19375,
    minutes: 19375,
  },
  {
    name: "3d-animated-story",
    proportion: 38750,
    minutes: 38750,
  },
];

const accessibilitySchema = [
  {
    name: "machine-voiceover",
    value: 4650,
    checked: false,
  },
  {
    name: "human-voiceover",
    value: 27900,
    checked: true,
  },
  {
    name: "gamified-story",
    value: 38750,
    checked: false,
  },
];

const presentationSchema = [
  {
    name: "stock-character-with-6-poses",
    value: 15500,
  },
  {
    name: "custom-illustrations",
    value: 3875,
  },
];

// const translationSchema = [
//   {
//     name: "translate-voiceover-scripts",
//     value: 11,
//   },
//   {
//     name: "external-translation-review",
//     value: 20,
//   },
// ];

export function calContentSlides(data) {
  for (let i = 0; i < contentSlidesCalSchema.length; i++) {
    let proportion_unit = contentSlidesCalSchema[i].proportion;
    let screens_unit = contentSlidesCalSchema[i].screens;
    let proportion_cost = data[i].proportion * proportion_unit;
    let screens_cost = data[i].screens * screens_unit;
    data[i].total = proportion_cost + screens_cost;
  }
}

export function calVideo(data) {
  for (let i = 0; i < vidoeCalSchema.length; i++) {
    let proportion_unit = vidoeCalSchema[i].proportion;
    let minutes_unit = vidoeCalSchema[i].minutes;
    let proportion_cost = data[i].proportion * proportion_unit;
    let minutes_cost = data[i].minutes * minutes_unit;
    data[i].total = proportion_cost + minutes_cost;
  }
}

export function calAccessibility(data) {
  for (let i = 0; i < accessibilitySchema.length; i++) {
    if (data[i].checked) {
      data[i].total = accessibilitySchema[i].value;
    } else {
      data[i].total = 0;
    }
  }
}

export function calPresentation(data) {
  for (let i = 0; i < presentationSchema.length; i++) {
    let item_unit = presentationSchema[i].value;
    let item_cost = data[i].value * item_unit;
    data[i].total = item_cost;
  }
}

// export function calTranslation(data) {
//   for (let i = 0; i < presentationSchema.length; i++) {
//     let item_unit = presentationSchema[i].value;
//     let item_cost = data[i].value * item_unit;
//     data[i].total = item_cost;
//   }
// }
