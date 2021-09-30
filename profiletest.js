const beginnerProfile1 = {
    coreEndurance: [
      {
        id: "tucked-dish-palmsonknees",
        text: "Tucked Dish (Palms on knees)",
        scoreMeasure: "secs",
        scoreMax: 100
      },
      {
        id: "arch-hold-handsunderchin",
        text: "Arch Hold (hands under chin)",
        scoreMeasure: "secs",
        scoreMax: 100
      }
    ],
    coreStrength: [
      {
        id: "tucked-v-ups",
        text: "Tucked V Ups",
        scoreMeasure: "reps",
        scoreMax: 10
      },
      {
        id: "tucked-l-lifts",
        text: "Tucked L Lifts (WB)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "tucked-l-supported-lifts",
        text: "Tucked L Supported Lifts",
        scoreMeasure: "reps",
        scoreMax: 20
      }
    ],
    armStrength: [
      {
        id: "push-ups-60cm",
        text: "Push Ups (60cm)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "2-hand-hang",
        text: "2 Hand Hang",
        scoreMeasure: "secs",
        scoreMax: 60
      }
    ],
    legStrength: [
      {
        id: "resting-squat-shoulderwidth",
        text: "Resting Squat (shoulder width)",
        scoreMeasure: "secs",
        scoreMax: 100
      },
      {
        id: "squat-30cm",
        text: "Squat (30cm)",
        scoreMeasure: "reps",
        scoreMax: 30
      }
    ],
    handstand: [
      {
        id: "front-support-hold",
        text: "Front Support Hold",
        scoreMeasure: "secs",
        scoreMax: 100
      },
      {
        id: "tripod-headstand-kneesonelbows",
        text: "Tripod Headstand (knees on elbows)",
        scoreMeasure: "secs",
        scoreMax: 60
      }
    ],
    flexibility: [
      {
        id: "pike",
        text: "Pike",
        scoreMeasure: "cm",
        scoreMax: 10
      },
      {
        id: "shoulder-extention",
        text: "Shoulder Extention",
        scoreMeasure: "points",
        scoreMax: 10
      }
    ],
  };

  const beginnerProfile1DataLabelsBig = [
    "Tucked Dish",
    "Arch Hold",
    "Tucked V Ups",
    "Tucked L Lifts",
    "Tucked L Support Lifts",
    "Push Ups (60cm)",
    "Two Hand Hang",
    "Resting Squat",
    "Squat (30cm)",
    "Front Support Hold",
    "Tripod Headstand",
    "Pike",
    "Shoulder Extention",
  ];
  const beginnerProfile1DataLabelsSmall = [
    "Tucked Dish",
    "Arch Hold",
    ["Tucked", "V Ups"],
    ["Tucked", "L Lifts"],
    ["Tucked L", "Support Lifts"],
    ["Push Ups", "(60cm)"],
    ["Two Hand", "Hang"],
    "Resting Squat",
    "Squat (30cm)",
    ["Front Support", "Hold"],
    ["Tripod", "Headstand"],
    "Pike",
    ["Shoulder", "Extention"],
  ];

const beginnerProfile2 = {
    coreEndurance: [
      {
        id: "dish-hold",
        text: "Dish Hold",
        scoreMeasure: "secs",
        scoreMax: 100
      },
      {
        id: "arch-hold",
        text: "Arch Hold",
        scoreMeasure: "secs",
        scoreMax: 100
      }
    ],
    coreStrength: [
      {
        id: "tucked-v-ups",
        text: "Tucked V Ups",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "tucked-l-hang",
        text: "Tucked L Hang",
        scoreMeasure: "secs",
        scoreMax: 60
      },
      {
        id: "tucked-l-sit",
        text: "Tucked L Sit",
        scoreMeasure: "secs",
        scoreMax: 60
      }
    ],
    armStrength: [
      {
        id: "push-ups",
        text: "Push Ups",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "chin-hang",
        text: "Chin Hang",
        scoreMeasure: "secs",
        scoreMax: 60
      }
    ],
    legStrength: [
      {
        id: "single-leg-squat-hold",
        text: "Single Leg Squat Hold",
        scoreMeasure: "secs L+R",
        scoreMax: 60
      },
      {
        id: "deck-squat",
        text: "Deck Squat",
        scoreMeasure: "reps",
        scoreMax: 50
      }
    ],
    handstand: [
      {
        id: "wall-handstand",
        text: "Wall Handstand",
        scoreMeasure: "secs",
        scoreMax: 100
      },
      {
        id: "headstand",
        text: "Headstand",
        scoreMeasure: "secs",
        scoreMax: 60
      }
    ],
    flexibility: [
      {
        id: "pike",
        text: "Pike",
        scoreMeasure: "cm",
        scoreMax: 20
      },
      {
        id: "shoulder-extention",
        text: "Shoulder Extention",
        scoreMeasure: "points",
        scoreMax: 10
      }
    ],
  };

  const beginnerProfile2DataLabelsBig = [
    "Dish Hold",
    "Arch Hold",
    "Tucked V Ups",
    "Tucked L Hang",
    "Tucked L Sit",
    "Push Ups",
    "Chin Hang",
    "Single Leg Hold",
    "Deck Squat",
    "Wall Handstand",
    "Headstand",
    "Pike",
    "Shoulder Extention",
  ];
  const beginnerProfile2DataLabelsSmall = [
    "Dish Hold",
    "Arch Hold",
    ["Tucked", "V Ups"],
    ["Tucked", "L Hang"],
    ["Tucked", "L Sit"],
    "Push Ups",
    "Chin Hang",
    ["Single Leg", "Hold"],
    "Deck Squat",
    ["Wall", "Handstand"],
    "Headstand",
    "Pike",
    ["Shoulder", "Extention"],
  ];

  const intermediateProfile1 = {
    coreEndurance: [
      {
        id: "candle-hold-singlebar",
        text: "Candle Hold (Single Bar)",
        scoreMeasure: "secs",
        scoreMax: 30
      },
      {
        id: "backward-candle-hold-singlebar",
        text: "Bwd Candle Hold (Single bar)",
        scoreMeasure: "secs",
        scoreMax: 30
      }
    ],
    coreStrength: [
      {
        id: "v-ups-20sec",
        text: "V Ups (20 sec)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "tucked-leg-lifts",
        text: "Tucked Leg Lifts",
        scoreMeasure: "reps",
        scoreMax: 10
      },
      {
        id: "l-sit",
        text: "L Sit",
        scoreMeasure: "secs",
        scoreMax: 30
      }
    ],
    armStrength: [
      {
        id: "pb-dips",
        text: "PB Dips",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "chin-ups-ug",
        text: "Chin Ups (ug)",
        scoreMeasure: "reps",
        scoreMax: 10
      }
    ],
    legStrength: [
      {
        id: "standing-long-jump",
        text: "Standing Long Jump",
        scoreMeasure: "+100%",
        scoreMax: 30
      },
      {
        id: "single-leg-squat-rock",
        text: "Single Leg Squat Rock",
        scoreMeasure: "reps L+R",
        scoreMax: 10
      }
    ],
    handstand: [
      {
        id: "handstand-hold-chestonwall",
        text: "Handstand Hold (Chest on wall)",
        scoreMeasure: "secs",
        scoreMax: 60
      },
      {
        id: "press-hs-from-straddle-stand",
        text: "Press HS from Straddle Stand",
        scoreMeasure: "-1 per 10cm",
        scoreMax: 5
      }
    ],
    flexibility: [
      {
        id: "pancake",
        text: "Pancake",
        scoreMeasure: "points",
        scoreMax: 10
      },
      {
        id: "bridge",
        text: "Bridge",
        scoreMeasure: "points",
        scoreMax: 10
      }
    ],
  };

  const intermediateProfile1DataLabelsBig = [
    ["Candle Hold", "(single bar)"],
    ["BWD Candle Hold", "(single bar)"],
    "V Ups (20 Secs)",
    "Tucked Leg Lifts",
    "L Sit",
    "PB Dips",
    "Chin Ups (UG)",
    "Standing Long Jump",
    "Single Leg Squat Rock",
    ["Handstand hold", "(Chest on wall)"],
    ["Press HS from", "Straddle Stand"],
    "Pancake",
    "Bridge",
  ];
  const intermediateProfile1DataLabelsSmall = [
    ["Candle Hold", "(single bar)"],
    ["BWD Candle Hold", "(single bar)"],
    "V Ups (20 Secs)",
    "Tucked Leg Lifts",
    "L Sit",
    "PB Dips",
    "Chin Ups (UG)",
    "Standing Long Jump",
    ["Single Leg", "Squat Rock"],
    ["Handstand hold", "(Chest on wall)"],
    ["Press HS from", "Straddle Stand"],
    "Pancake",
    "Bridge",
  ];

  const intermediateProfile2 = {
    coreEndurance: [
      {
        id: "straddled-front-lever",
        text: "Straddled Front Lever",
        scoreMeasure: "secs",
        scoreMax: 30
      },
      {
        id: "straddled-back-lever-pb",
        text: "Straddled Back Lever (PB)",
        scoreMeasure: "secs",
        scoreMax: 30
      }
    ],
    coreStrength: [
      {
        id: "v-ups-30sec",
        text: "V Ups (30 sec)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "piked-leg-lifts",
        text: "Piked Leg Lifts",
        scoreMeasure: "reps",
        scoreMax: 10
      },
      {
        id: "straddle-l-sit",
        text: "Straddle L Sit",
        scoreMeasure: "secs",
        scoreMax: 30
      }
    ],
    armStrength: [
      {
        id: "sr-dips",
        text: "SR Dips",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "chest-to-bar-tg",
        text: "Chest to Bar (TG)",
        scoreMeasure: "reps",
        scoreMax: 10
      }
    ],
    legStrength: [
      {
        id: "standing-long-jump",
        text: "Standing Long Jump",
        scoreMeasure: "+100%",
        scoreMax: 40
      },
      {
        id: "single-leg-squat",
        text: "Single Leg Squat",
        scoreMeasure: "reps L+R",
        scoreMax: 10
      }
    ],
    handstand: [
      {
        id: "handstand-hold-floor",
        text: "Handstand Hold (Floor)",
        scoreMeasure: "secs",
        scoreMax: 30
      },
      {
        id: "press-hs-from-straddle-stand",
        text: "Press HS from Straddle Stand",
        scoreMeasure: "reps",
        scoreMax: 10
      }
    ],
    flexibility: [
      {
        id: "pancake",
        text: "Pancake",
        scoreMeasure: "points",
        scoreMax: 10
      },
      {
        id: "bridge",
        text: "Bridge",
        scoreMeasure: "points",
        scoreMax: 10
      }
    ],
  };

  const intermediateProfile2DataLabelsBig = [
    "Straddled Front Lever",
    "Straddled Back Lever (PB)",
    "V Ups (30 Secs)",
    "Piked Leg Lifts",
    "Straddle L Sit",
    "SR Dips",
    "Chest To Bar (TG)",
    "Standing Long Jump",
    "Single Leg Squat",
    "Handstand Hold (Floor)",
    ["Press HS from", "Straddle Stand"],
    "Pancake",
    "Bridge",
  ];
  const intermediateProfile2DataLabelsSmall = [
    "Straddled Front Lever",
    ["Straddled Back", "Lever (PB)"],
    "V Ups (30 Secs)",
    "Piked Leg Lifts",
    "Straddle L Sit",
    "SR Dips",
    "Chest To Bar (TG)",
    "Standing Long Jump",
    "Single Leg Squat",
    ["Handstand Hold", "(Floor)"],
    ["Press HS from", "Straddle Stand"],
    "Pancake",
    "Bridge",
  ];

  const advancedProfile1 = {
    coreEndurance: [
      {
        id: "front-lever-hold",
        text: "Straddled Front Lever",
        scoreMeasure: "secs",
        scoreMax: 20
      },
      {
        id: "back-lever-hold-sr",
        text: "Back Lever Hold (SR)",
        scoreMeasure: "secs",
        scoreMax: 20
      }
    ],
    coreStrength: [
      {
        id: "v-ups-30sec",
        text: "V Ups (30 sec)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "piked-leg-lifts-20s",
        text: "Piked Leg Lifts (20 secs)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "v-sit",
        text: "V Sit",
        scoreMeasure: "secs",
        scoreMax: 20
      }
    ],
    armStrength: [
      {
        id: "hs-push-ups",
        text: "HS Push Ups",
        scoreMeasure: "reps",
        scoreMax: 10
      },
      {
        id: "muscle-ups",
        text: "Muscle Ups",
        scoreMeasure: "reps",
        scoreMax: 10
      }
    ],
    legStrength: [
      {
        id: "standing-long-jump",
        text: "Standing Long Jump",
        scoreMeasure: "+100%",
        scoreMax: 70
      },
      {
        id: "single-leg-squat",
        text: "Single Leg Squat",
        scoreMeasure: "reps L+R",
        scoreMax: 20
      }
    ],
    handstand: [
      {
        id: "handstand-hold-sr",
        text: "Handstand Hold (SR)",
        scoreMeasure: "secs",
        scoreMax: 30
      },
      {
        id: "press-hs-from-straddle-l-sit",
        text: "Press HS from Straddle L-Sit",
        scoreMeasure: "reps",
        scoreMax: 10
      }
    ],
    flexibility: [
      {
        id: "left-splits",
        text: "Left Splits",
        scoreMeasure: "points",
        scoreMax: 10
      },
      {
        id: "right-splits",
        text: "Right Splits",
        scoreMeasure: "points",
        scoreMax: 10
      }
    ],
  };

  const advancedProfile1DataLabelsBig = [
    "Front Lever Hold",
    "Back Lever Hold (SR)",
    "V Ups (30 Secs)",
    ["Piked Leg Lifts", "(20 secs)"],
    "V Sit",
    "HS Push Ups",
    "Muscle Ups",
    "Standing Long Jump",
    "Single Leg Squat",
    "Handstand Hold (SR)",
    ["Press HS from", "Straddle L-Sit"],
    "Left Splits",
    "Right Splits",
  ];
  const advancedProfile1DataLabelsSmall = [
    "Front Lever Hold",
    ["Back Lever", "Hold (SR)"],
    "V Ups (30 Secs)",
    ["Piked Leg Lifts", "(20 secs)"],
    "V Sit",
    "HS Push Ups",
    "Muscle Ups",
    ["Standing Long", "Jump"],
    "Single Leg Squat",
    ["Handstand", "Hold (SR)"],
    ["Press HS from", "Straddle L-Sit"],
    "Left Splits",
    "Right Splits",
  ];