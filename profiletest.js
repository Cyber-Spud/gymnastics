const beginnerProfile1 = {
    coreEndurance: [
      {
        id: "tucked-dish-palmsonknees",
        text: "Tucked Dish (Palms on knees)",
        label: "Tucked Dish",
        scoreMeasure: "secs",
        scoreMax: 100
      },
      {
        id: "arch-hold-handsunderchin",
        text: "Arch Hold (hands under chin)",
        label: "Arch Hold",
        scoreMeasure: "secs",
        scoreMax: 100
      }
    ],
    coreStrength: [
      {
        id: "tucked-v-ups",
        text: "Tucked V Ups",
        label: "Tucked V Ups",
        scoreMeasure: "reps",
        scoreMax: 10
      },
      {
        id: "tucked-l-lifts",
        text: "Tucked L Lifts (WB)",
        label: "Tucked L Lifts (WB)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "tucked-l-supported-lifts",
        text: "Tucked L Supported Lifts",
        label: "Tucked L Supported Lifts",
        scoreMeasure: "reps",
        scoreMax: 20
      }
    ],
    armStrength: [
      {
        id: "push-ups-60cm",
        text: "Push Ups (60cm)",
        label: "Push Ups (60cm)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "2-hand-hang",
        text: "2 Hand Hang",
        label: "2 Hand Hang",
        scoreMeasure: "secs",
        scoreMax: 60
      }
    ],
    legStrength: [
      {
        id: "resting-squat-shoulderwidth",
        text: "Resting Squat (shoulder width)",
        label: "Resting Squat",
        scoreMeasure: "secs",
        scoreMax: 100
      },
      {
        id: "squat-30cm",
        text: "Squat (30cm)",
        label: "Squat (30cm)",
        scoreMeasure: "reps",
        scoreMax: 30
      }
    ],
    handstand: [
      {
        id: "front-support-hold",
        text: "Front Support Hold",
        label: "Front Support Hold",
        scoreMeasure: "secs",
        scoreMax: 100
      },
      {
        id: "tripod-headstand-kneesonelbows",
        text: "Tripod Headstand (knees on elbows)",
        label: "Tripod Headstand",
        scoreMeasure: "secs",
        scoreMax: 60
      }
    ],
    flexibility: [
      {
        id: "pike",
        text: "Pike",
        label: "Pike",
        scoreMeasure: "cm",
        scoreMax: 10
      },
      {
        id: "shoulder-extention",
        text: "Shoulder Extention",
        label: "Shoulder Extention",
        scoreMeasure: "points",
        scoreMax: 10
      }
    ],
  };

  // const beginnerProfile1DataLabelsBig = [
  //   "Tucked Dish",
  //   "Arch Hold",
  //   "Tucked V Ups",
  //   "Tucked L Lifts",
  //   "Tucked L Support Lifts",
  //   "Push Ups (60cm)",
  //   "Two Hand Hang",
  //   "Resting Squat",
  //   "Squat (30cm)",
  //   "Front Support Hold",
  //   "Tripod Headstand",
  //   "Pike",
  //   "Shoulder Extention",
  // ];
  // const beginnerProfile1DataLabelsSmall = [
  //   "Tucked Dish",
  //   "Arch Hold",
  //   ["Tucked", "V Ups"],
  //   ["Tucked", "L Lifts"],
  //   ["Tucked L", "Support Lifts"],
  //   ["Push Ups", "(60cm)"],
  //   ["Two Hand", "Hang"],
  //   "Resting Squat",
  //   "Squat (30cm)",
  //   ["Front Support", "Hold"],
  //   ["Tripod", "Headstand"],
  //   "Pike",
  //   ["Shoulder", "Extention"],
  // ];

const beginnerProfile2 = {
    coreEndurance: [
      {
        id: "dish-hold",
        text: "Dish Hold",
        label: "Dish Hold",
        scoreMeasure: "secs",
        scoreMax: 100
      },
      {
        id: "arch-hold",
        text: "Arch Hold",
        label: "Arch Hold",
        scoreMeasure: "secs",
        scoreMax: 100
      }
    ],
    coreStrength: [
      {
        id: "tucked-v-ups",
        text: "Tucked V Ups",
        label: "Tucked V Ups",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "tucked-l-hang",
        text: "Tucked L Hang",
        label: "Tucked L Hang",
        scoreMeasure: "secs",
        scoreMax: 60
      },
      {
        id: "tucked-l-sit",
        text: "Tucked L Sit",
        label: "Tucked L Sit",
        scoreMeasure: "secs",
        scoreMax: 60
      }
    ],
    armStrength: [
      {
        id: "push-ups",
        text: "Push Ups",
        label: "Push Ups",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "chin-hang",
        text: "Chin Hang",
        label: "Chin Hang",
        scoreMeasure: "secs",
        scoreMax: 60
      }
    ],
    legStrength: [
      {
        id: "single-leg-squat-hold-l",
        text: "Single Leg Squat Hold (L)",
        label: "Single Leg Squat Hold (L)",
        scoreMeasure: "secs",
        scoreMax: 30,
        maxPoints: 5
      },
      {
        id: "single-leg-squat-hold-r",
        text: "Single Leg Squat Hold (R)",
        label: "Single Leg Squat Hold (R)",
        scoreMeasure: "secs",
        scoreMax: 30,
        maxPoints: 5
      },
      {
        id: "deck-squat",
        text: "Deck Squat",
        label: "Deck Squat",
        scoreMeasure: "reps",
        scoreMax: 50
      }
    ],
    handstand: [
      {
        id: "wall-handstand",
        text: "Wall Handstand",
        label: "Wall Handstand",
        scoreMeasure: "secs",
        scoreMax: 100
      },
      {
        id: "headstand",
        text: "Headstand",
        label: "Headstand",
        scoreMeasure: "secs",
        scoreMax: 60
      }
    ],
    flexibility: [
      {
        id: "pike",
        text: "Pike",
        label: "Pike",
        scoreMeasure: "cm",
        scoreMax: 20
      },
      {
        id: "shoulder-extention",
        text: "Shoulder Extention",
        label: "Shoulder Extention",
        scoreMeasure: "points",
        scoreMax: 10
      }
    ],
  };

  // const beginnerProfile2DataLabelsBig = [
  //   "Dish Hold",
  //   "Arch Hold",
  //   "Tucked V Ups",
  //   "Tucked L Hang",
  //   "Tucked L Sit",
  //   "Push Ups",
  //   "Chin Hang",
  //   "Single Leg Hold",
  //   "Deck Squat",
  //   "Wall Handstand",
  //   "Headstand",
  //   "Pike",
  //   "Shoulder Extention",
  // ];
  // const beginnerProfile2DataLabelsSmall = [
  //   "Dish Hold",
  //   "Arch Hold",
  //   ["Tucked", "V Ups"],
  //   ["Tucked", "L Hang"],
  //   ["Tucked", "L Sit"],
  //   "Push Ups",
  //   "Chin Hang",
  //   ["Single Leg", "Hold"],
  //   "Deck Squat",
  //   ["Wall", "Handstand"],
  //   "Headstand",
  //   "Pike",
  //   ["Shoulder", "Extention"],
  // ];

  const intermediateProfile1 = {
    coreEndurance: [
      {
        id: "candle-hold-singlebar",
        text: "Candle Hold (Single Bar)",
        label: "Candle Hold (Single Bar)",
        scoreMeasure: "secs",
        scoreMax: 30
      },
      {
        id: "backward-candle-hold-singlebar",
        text: "Bwd Candle Hold (Single bar)",
        label: "Bwd Candle Hold (Single bar)",
        scoreMeasure: "secs",
        scoreMax: 30
      }
    ],
    coreStrength: [
      {
        id: "v-ups-20sec",
        text: "V Ups (20 sec)",
        label: "V Ups (20 sec)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "tucked-leg-lifts",
        text: "Tucked Leg Lifts",
        label: "Tucked Leg Lifts",
        scoreMeasure: "reps",
        scoreMax: 10
      },
      {
        id: "l-sit",
        text: "L Sit",
        label: "L Sit",
        scoreMeasure: "secs",
        scoreMax: 30
      }
    ],
    armStrength: [
      {
        id: "pb-dips",
        text: "PB Dips",
        label: "PB Dips",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "chin-ups-ug",
        text: "Chin Ups (ug)",
        label: "Chin Ups (ug)",
        scoreMeasure: "reps",
        scoreMax: 10
      }
    ],
    legStrength: [
      {
        id: "standing-long-jump",
        text: "Standing Long Jump",
        label: "Standing Long Jump",
        scoreMeasure: "cm",
        scoreMax: 895,
        maxPercentage: 30
      },
      {
        id: "single-leg-squat-rock-l",
        text: "Single Leg Squat Rock (L)",
        label: "Single Leg Squat Rock (L)",
        scoreMeasure: "reps L",
        scoreMax: 5,
        maxPoints: 5
      },
      {
        id: "single-leg-squat-rock-r",
        text: "Single Leg Squat Rock (R)",
        label: "Single Leg Squat Rock (R)",
        scoreMeasure: "reps R",
        scoreMax: 5,
        maxPoints: 5
      }
    ],
    handstand: [
      {
        id: "handstand-hold-chestonwall",
        text: "Handstand Hold (Chest on wall)",
        label: "Handstand Hold (Chest on wall)",
        scoreMeasure: "secs",
        scoreMax: 60
      },
      {
        id: "press-hs-from-straddle-stand",
        text: "Press HS from Straddle Stand",
        label: "Press HS from Straddle Stand",
        scoreMeasure: "-1 per 10cm",
        scoreMax: 100
      }
    ],
    flexibility: [
      {
        id: "pancake",
        text: "Pancake",
        label: "Pancake",
        scoreMeasure: "points",
        scoreMax: 10
      },
      {
        id: "bridge",
        text: "Bridge",
        label: "Bridge",
        scoreMeasure: "points",
        scoreMax: 10
      }
    ],
  };

  // const intermediateProfile1DataLabelsBig = [
  //   ["Candle Hold", "(single bar)"],
  //   ["BWD Candle Hold", "(single bar)"],
  //   "V Ups (20 Secs)",
  //   "Tucked Leg Lifts",
  //   "L Sit",
  //   "PB Dips",
  //   "Chin Ups (UG)",
  //   "Standing Long Jump",
  //   "Single Leg Squat Rock",
  //   ["Handstand hold", "(Chest on wall)"],
  //   ["Press HS from", "Straddle Stand"],
  //   "Pancake",
  //   "Bridge",
  // ];
  // const intermediateProfile1DataLabelsSmall = [
  //   ["Candle Hold", "(single bar)"],
  //   ["BWD Candle Hold", "(single bar)"],
  //   "V Ups (20 Secs)",
  //   "Tucked Leg Lifts",
  //   "L Sit",
  //   "PB Dips",
  //   "Chin Ups (UG)",
  //   "Standing Long Jump",
  //   ["Single Leg", "Squat Rock"],
  //   ["Handstand hold", "(Chest on wall)"],
  //   ["Press HS from", "Straddle Stand"],
  //   "Pancake",
  //   "Bridge",
  // ];

  const intermediateProfile2 = {
    coreEndurance: [
      {
        id: "straddled-front-lever",
        text: "Straddled Front Lever",
        label: "Straddled Front Lever",
        scoreMeasure: "secs",
        scoreMax: 30
      },
      {
        id: "straddled-back-lever-pb",
        text: "Straddled Back Lever (PB)",
        label: "Straddled Back Lever (PB)",
        scoreMeasure: "secs",
        scoreMax: 30
      }
    ],
    coreStrength: [
      {
        id: "v-ups-30sec",
        text: "V Ups (30 sec)",
        label: "V Ups (30 sec)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "piked-leg-lifts",
        text: "Piked Leg Lifts",
        label: "Piked Leg Lifts",
        scoreMeasure: "reps",
        scoreMax: 10
      },
      {
        id: "straddle-l-sit",
        text: "Straddle L Sit",
        label: "Straddle L Sit",
        scoreMeasure: "secs",
        scoreMax: 30
      }
    ],
    armStrength: [
      {
        id: "sr-dips",
        text: "SR Dips",
        label: "SR Dips",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "chest-to-bar-tg",
        text: "Chest to Bar (TG)",
        label: "Chest to Bar (TG)",
        scoreMeasure: "reps?",
        scoreMax: 15
      }
    ],
    legStrength: [
      {
        id: "standing-long-jump",
        text: "Standing Long Jump",
        label: "Standing Long Jump",
        scoreMeasure: "cm",
        scoreMax: 895
      },
      {
        id: "single-leg-squat-l",
        text: "Single Leg Squat (L)",
        label: "Single Leg Squat (L)",
        scoreMeasure: "reps",
        scoreMax: 5,
        maxPoints: 5
      },
      {
        id: "single-leg-squat-r",
        text: "Single Leg Squat (R)",
        label: "Single Leg Squat (R)",
        scoreMeasure: "reps",
        scoreMax: 5,
        maxPoints: 5
      }
    ],
    handstand: [
      {
        id: "handstand-hold-floor",
        text: "Handstand Hold (Floor)",
        label: "Handstand Hold (Floor)",
        scoreMeasure: "secs",
        scoreMax: 30
      },
      {
        id: "press-hs-from-straddle-stand",
        text: "Press HS from Straddle Stand",
        label: "Press HS from Straddle Stand",
        scoreMeasure: "reps",
        scoreMax: 5
      }
    ],
    flexibility: [
      {
        id: "pancake",
        text: "Pancake",
        label: "Pancake",
        scoreMeasure: "points",
        scoreMax: 10
      },
      {
        id: "bridge",
        text: "Bridge",
        label: "Bridge",
        scoreMeasure: "points",
        scoreMax: 10
      }
    ],
  };

  

  // const intermediateProfile2DataLabelsBig = [
  //   "Straddled Front Lever",
  //   "Straddled Back Lever (PB)",
  //   "V Ups (30 Secs)",
  //   "Piked Leg Lifts",
  //   "Straddle L Sit",
  //   "SR Dips",
  //   "Chest To Bar (TG)",
  //   "Standing Long Jump",
  //   "Single Leg Squat L",
  //   "Single Leg Squat R",
  //   "Handstand Hold (Floor)",
  //   ["Press HS from", "Straddle Stand"],
  //   "Pancake",
  //   "Bridge",
  // ];
  // const intermediateProfile2DataLabelsSmall = [
  //   "Straddled Front Lever",
  //   ["Straddled Back", "Lever (PB)"],
  //   "V Ups (30 Secs)",
  //   "Piked Leg Lifts",
  //   "Straddle L Sit",
  //   "SR Dips",
  //   "Chest To Bar (TG)",
  //   "Standing Long Jump",
  //   "Single Leg Squat L",
  //   "Single Leg Squat R",
  //   ["Handstand Hold", "(Floor)"],
  //   ["Press HS from", "Straddle Stand"],
  //   "Pancake",
  //   "Bridge",
  // ];

  const advancedProfile1 = {
    coreEndurance: [
      {
        id: "front-lever-hold",
        text: "Straddled Front Lever",
        label: "Straddled Front Lever",
        scoreMeasure: "secs",
        scoreMax: 20
      },
      {
        id: "back-lever-hold-sr",
        text: "Back Lever Hold (SR)",
        label: "Back Lever Hold (SR)",
        scoreMeasure: "secs",
        scoreMax: 20
      }
    ],
    coreStrength: [
      {
        id: "v-ups-30sec",
        text: "V Ups (30 sec)",
        label: "V Ups (30 sec)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "piked-leg-lifts-20s",
        text: "Piked Leg Lifts (20 secs)",
        label: "Piked Leg Lifts (20 secs)",
        scoreMeasure: "reps",
        scoreMax: 20
      },
      {
        id: "v-sit",
        text: "V Sit",
        label: "V Sit",
        scoreMeasure: "secs",
        scoreMax: 20
      }
    ],
    armStrength: [
      {
        id: "hs-push-ups",
        text: "HS Push Ups",
        label: "HS Push Ups",
        scoreMeasure: "reps",
        scoreMax: 10
      },
      {
        id: "muscle-ups",
        text: "Muscle Ups",
        label: "Muscle Ups",
        scoreMeasure: "reps",
        scoreMax: 10
      }
    ],
    legStrength: [
      {
        id: "standing-long-jump",
        text: "Standing Long Jump",
        label: "Standing Long Jump",
        scoreMeasure: "+100%",
        scoreMax: 70
      },
      {
        id: "single-leg-squat-l",
        text: "Single Leg Squat (L)",
        label: "Single Leg Squat",
        scoreMeasure: "reps",
        scoreMax: 20,
        maxPoints: 5
      },
      {
        id: "single-leg-squat-r",
        text: "Single Leg Squat (R)",
        label: "Single Leg Squat",
        scoreMeasure: "reps",
        scoreMax: 20,
        maxPoints: 5
      }
    ],
    handstand: [
      {
        id: "handstand-hold-sr",
        text: "Handstand Hold (SR)",
        label: "Handstand Hold (SR)",
        scoreMeasure: "secs",
        scoreMax: 30
      },
      {
        id: "press-hs-from-straddle-l-sit",
        text: "Press HS from Straddle L-Sit",
        label: "Press HS from Straddle L-Sit",
        scoreMeasure: "reps",
        scoreMax: 10
      }
    ],
    flexibility: [
      {
        id: "left-splits",
        text: "Left Splits",
        label: "Left Splits",
        scoreMeasure: "points",
        scoreMax: 10
      },
      {
        id: "right-splits",
        text: "Right Splits",
        label: "Right Splits",
        scoreMeasure: "points",
        scoreMax: 10
      }
    ],
  };

  // const advancedProfile1DataLabelsBig = [
  //   "Front Lever Hold",
  //   "Back Lever Hold (SR)",
  //   "V Ups (30 Secs)",
  //   ["Piked Leg Lifts", "(20 secs)"],
  //   "V Sit",
  //   "HS Push Ups",
  //   "Muscle Ups",
  //   "Standing Long Jump",
  //   "Single Leg Squat",
  //   "Handstand Hold (SR)",
  //   ["Press HS from", "Straddle L-Sit"],
  //   "Left Splits",
  //   "Right Splits",
  // ];
  // const advancedProfile1DataLabelsSmall = [
  //   "Front Lever Hold",
  //   ["Back Lever", "Hold (SR)"],
  //   "V Ups (30 Secs)",
  //   ["Piked Leg Lifts", "(20 secs)"],
  //   "V Sit",
  //   "HS Push Ups",
  //   "Muscle Ups",
  //   ["Standing Long", "Jump"],
  //   "Single Leg Squat",
  //   ["Handstand", "Hold (SR)"],
  //   ["Press HS from", "Straddle L-Sit"],
  //   "Left Splits",
  //   "Right Splits",
  // ];