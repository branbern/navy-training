
const Data = {
    chapters: {
        title: "Shoring",
        sectionNumber: 43,
        items: [
            {
                title: "Shoring Introduction",
                itemID: 1,
                questions: [{
                    trueOrFalse: [
                        {
                            sectionID: 2,
                            type: "True or False",
                            text: ["This is an Objective of Shoring", "To reinforce straining bulkheads, doors and hatches against abnormal pressures."],
                            answer: true
                        },
                        {
                            sectionID: 2,
                            type: "True or False",
                            text: ["This is an Objective of Shoring", "To support strong and sturdy structures and fittings."],
                            answer: false
                        },
                        {
                            sectionID: 4,
                            type: "True or False",
                            text: ["The simplest and strongest shoring structure is where the shore, in direct compression, is anchored against a solid structure and holds the strongback against the bulkhead"],
                            answer: true
                        },
                        {
                            sectionID: 4,
                            type: "True or False",
                            text: ["Shores will support far greater weight in direct compression than they will in a cross-axial direction."],
                            answer: true
                        },
                        {
                            sectionID: 4,
                            type: "True or False",
                            text: ["It makes no difference whether the shores are placed horizontally or vertically"],
                            answer: true
                        },
                          {
                            sectionID: 4,
                            type: "True or False",
                            text: ["When designing a shoring structure, it is important to have as many shores as possible under cross-axial stress and as few as possible under direct compression."],
                            answer: false
                        }

                    ],
                    multipleChoice: [
                        {
                            sectionID: 1, 
                            text: ["What is the process of placing supports against, beneath or above the side of a structure?"], 
                            options: [
                                {text: "Shoring", correct: true},
                                {text: "Leaning", correct: false},
                                {text: "Supporting", correct: false},
                                {text: "Sholing", correct: false},
                            ],
                        },
                        {
                            sectionID: 1, 
                            text:["What is the best way to temporarily support a structure until more permanent measures are possible?"], 
                            options: [
                                {text: "Shoring", correct: true},
                                {text: "Wooden Wedges", correct: false},
                                {text: "Tape", correct: false},
                                {text: "Pipe Patching", correct: false},
                            ]
                        },
                        {
                            sectionID: 1, 
                            text: ["What prevents metal fatigue, sagging, and bulging?"], 
                            options: [
                                {text: "Shoring", correct: true},
                                {text: "Wooden Wedges", correct: false},
                                {text: "Tape", correct: false},
                                {text: "Pipe Patching", correct: false},
                            ]
                        },
                        {
                            sectionID: 2,
                            type: "Multiple Choice",
                            text: ["The objectives of shoring are"],
                            options: [
                                {text: "To reinforce straining bulkheads, doors and hatches against abnormal pressures.", correct: true}, 
                                {text: "To reinforce straining bulkheads, doors and hatches against normal pressures.", correct: false}, 
                                {text: "To support damaged and weakened structure and fittings.", correct: true},
                                {text: "To support strong and sturdy structure and fittings.", correct: false}
                            ]
                        },
                        {
                            sectionID: 3,
                            type: "Multiple Choice",
                            text: [
                                "Weakened structures can come from which of the the following?"
                            ],
                            options: [
                                {text: "Battle Damage", correct: true},
                                {text: "Heavy Seas", correct: true},
                                {text: "Vibrations", correct: false},
                                {text: "Corrosion", correct: false},
                            ],
                        },
                        {
                            sectionID: 4,
                            type: "Multiple Choice",
                            text: [
                                "When choosing shores, the principal concern is with stresses exerted on the shoring under the following two conditions"
                            ],
                            options: [
                                {text: "When the shore is in direct compression; that is, when the pressure acting on the shore is parallel to its axis", correct: true},
                                {text: "When the shore is subject to pressure acting perpendicularly to its axis", correct: true},
                                {text: "When the shore is subject to pressure acting parallel to its axis", correct: false},
                                {text: "When the shore is in direct compression; that is, when the pressure acting on the shore is perpendicular to its axis", correct: false},

                            ],
                        }
                    ],
                }],
                sections: [
                    {
                        sectionID: 1,
                        title: "Shoring Definition",
                        text: {
                            text: [
                                "Shoring is the process of placing supports against the side of, beneath or above a structure to prevent metal fatigue, sagging and bulging.",
                                "Shoring is the best way to temporarily support structure until more permanent measures are possible."
                        ]}
                    },
                    {
                        sectionID: 2,
                        title: "Objectives of Shoring",
                        text: {
                            text: [
                                "The objectives of shoring are:",
                            ],
                            followings: [
                                "To reinforce straining bulkheads, doors and hatches against abnormal pressures.",
                                "To support damaged and weakened structure and fittings."
                            ]
                        },
                        additionalKnowledge: 
                        [
                            "Both objectives are achieved by distributing the stresses exerted on straining or weakened members to sound parts of the structure. ",
                            "Main watertight bulkheads are built to withstand stresses which occur when compartments are flooded statically (compartments are tested during building to ensure this). ",
                            "To conserve timber and avoid wasting valuable time, shoring should not be carried out on an otherwise sound structure merely because the compartment is flooded. Extensive damage in the vicinity, however, may weaken the structure significantly enough that it becomes incapable of standing up to its designed stress point. Shoring is then necessary."
                        ],
                    },
                    {
                        sectionID: 3,
                        title: "Symptoms of Strain on Structures",
                        text: {
                            text: [
                                "The primary purpose of shoring is to support weakened structures, which can result from battle damage, heavy seas, collision or excessive weight.",
                                "Straining of structure is usually readily apparent and can be recognized by any of the following:"
                            ],
                            followings: [
                                "Panting - the alternate bulging and contraction of plating (caused by uneven pressure or locked up stresses) resulting in metal fatigue and often accompanied by a groaning or pinging noise", 
                                "Buckling of deck beams or bulkhead stiffeners", 
                                "Bulging of bulkhead or deck plating", 
                                "Fracture or splitting of plating, especially alongside stiffeners or where bulkheads or decks abut hull plating."
                            ]
                        },
                        notes: [{
                                type: "note",
                                text: ["It is often difficult to detect cracks since they can be hidden under paint, oil or fittings."]
                        }],
                    },
                    {
                        sectionID: 4,
                        title: "Symptoms of Strain on Shoring",
                        text: {
                            text: "When choosing shores, the principal concern is with stresses exerted on the shoring under the following two conditions",
                            followings: ["When the shore is in direct compression; that is, when the pressure acting on the shore is parallel to its axis", "When the shore is subject to pressure acting perpendicularly to its axis"]
                        },
                        additionalKnowledge: [
                            "Shores will support far greater weight in direct compression than they will in a cross-axial direction.",
                            "It makes no difference whether the shores are placed horizontally or vertically; it does make a great deal of difference how the pressure is applied in relation to the axis.",
                            "When designing a shoring structure, it is important to have as few shores as possible under cross-axial stress and as many as possible under direct compression.",
                            "The simplest and strongest shoring structure is illustrated in Figure 079-43-1, where the shore, in direct compression, is anchored against a solid structure and holds the strongback against the bulkhead"
                        ],
                        notes: [{
                            type: "note",
                            text: ["If a deck or bulkhead has been distorted, use shoring only to hold the new position (not to force the damaged area back to its original shape)."]
                        }],
                        image: "images/Figure079-43-1.png"
                    }
                ]
            },
            {
                title: "Shoring Principles",
                itemID: 2,
                questions: [{
                    trueOrFalse: [
                        {
                            sectionID: 1,
                            type: "True or False",
                            text: ["This is an essential element of effective Shoring", "Strong and smooth anchor points for the shores."],
                            answer: false
                        },
                    ],
                    trueOrFalse: [
                        {
                            sectionID: 2,
                            type: "True or False",
                            text: ["The shoring assembly must always be kept under observation."],
                            answer: true
                        },
                    ],
                    multipleChoice: [
                        {
                            sectionID: 1, 
                            text: ["The essential elements of effective shoring are"], 
                            options: [
                                {text: "Strong and rigid anchor points for the shores", correct: true},
                                {text: "A reasonably complete network of reinforcement", correct: true},
                                {text: "Distribution of the load over as large an area as possible with a good layout of strongbacks or a shole", correct: true},
                                {text: "Observation of length limitations - 30 times minimum thickness", correct: true},
                                {text: "Use of shores for support only - not to restore structure to original shape", correct: true},
                            ],
                        },
                        {
                            sectionID: 2, 
                            text: ["If the nearest structure is not strong enough"], 
                            options: [
                                {text: "The shoring must be continued back to end at members of sufficient strength.", correct: true},
                                {text: "The shoring must be tied off with several wraps and bounds.", correct: false},
                            ],
                        },
                       
                    ],
                }],
                sections: [
                    {
                        sectionID: 1,
                        title: "Essential Elements",
                        text: {
                            text: [
                                "The essential elements of effective shoring are as follows:",
                            ],
                            followings: [
                                "Strong and rigid anchor points for the shores", 
                                "A reasonably complete network of reinforcement", 
                                "Distribution of the load over as large an area as possible with a good layout of strongbacks or a shole", 
                                "Observation of length limitations - 30 times minimum thickness", 
                                "Use of shores for support only - not to restore structure to original shape."
                            ],
                        }
                    },
                    {
                        sectionID: 2,
                        title: "Decision AIDS",
                        text: {
                            text: [
                                "The aim should be to shore to the nearest strong point.",
                                "If the nearest structure is not strong enough, the shoring must be continued back, through other compartments if necessary, to end at members of sufficient strength.",
                                "The shoring assembly must always be kept under observation because if it becomes strained it will, itself, require support.",
                            ]
                        }
                    },
                    {
                        sectionID: 3,
                        title: "Application of Shoring Principles",
                        text: {
                            text: [
                                "Chosing when to shore requires good judgement.",
                                "For example, deep water in a compartment, with consequent pressure, is not, of itself, a criterion for application of shores.",
                                "A low-level bulkhead will have more pressure exerted upon it, but it will be able to withstand that greater pressure because of its heavier construction.",
                                "The force of an explosion may loosen foundations, crack beams, shear plates or part seams, damaging the bulkhead, with subsequent loss of strength.",
                                "Deep bulges in plating, bowed frames and stanchions, loose rivets, cracked seams and panting of bulkheads are indications of the need for shoring.",
                                "Panting is a dangerous condition since it causes metal fatigue which, in time, will result in cracking and splitting. In most cases, the need for shoring patches and loose machinery is obvious.",
                                "However, weakened supports under guns and machinery units may not be readily noticed, so a careful inspection should be made of this equipment whenever damage is sustained in the vicinity; such weakened supports should be shored whenever necessary so further operation will not cause greater damage.",
                                "Remember, too, the most basic principle of shorinWhen in doubt, shore."
                            ]
                        }
                    },
                    {
                        sectionID: 4,
                        title: "Characteristics of Shored Bulkheads",
                        text: {
                            text: [
                                "A bulkhead and its supporting frames make up a sort of spring on which varying pressures are exerted.",
                                "The bulkhead will bulge and pant as pressure varies, and it will weave as the ship itself changes shape while working in a seaway.",
                                "Hence, the pressure on shoring will increase and decrease, and the bulkhead will tend to move away from the shores.",
                                "No shoring job can be considered complete, therefore, until all slack has been taken up.",
                                "Then a continuous watch must be posted, whose duty it is to tighten the wedges as they start to work loose.",
                                "Shoring is intended to support warped bulkheads; it is not intended to push warped bulkheads back to their original positions or shapes.",
                                "Note that excessive shoring pressure may cause a bulkhead to collapse or rupture, especially at boundaries"
                            ]
                        }
                    },
                    {
                        sectionID: 5,
                        title: "Bulkhead Shoring Angles",
                        text: {
                            text: [
                                "Shores must form a considerable angle with the bulkhead they are supporting.",
                                "Correct shoring angles are illustrated in Figure 079-43-2"
                            ]
                        },
                        images: ["images/Figure079-43-2.png"]
                    },
                    {
                        sectionID: 6,
                        title: "General Rules for Shoring",
                        text: {
                            text: [
                               "There are certain general rules applicable to all types of shoring - whether for bulkheads, decks, hatches or doors. These rules are:"
                            ], followings: [
                                "The scene leader will inform the shoring team what needs to be shored when they arrive on scene", 
                                "The length of a shore should never be more than 30 times its minimum thickness", 
                                "Remember that the shorter a wooden or steel shore in relation to its minimum thickness, the more weight it will support. Figure 074-43-3 illustrates this point.", 
                                "Shores should not be cut to length in anticipation of damage, since any distortion of the structure would make them useless", 
                                "For stowage purposes, it is recommended that shores be in 16-foot to 18-foot lengths so, when needed, they can be cut to proper size with minimum waste",  
                                "Shores should never be placed in position before damage occurs since they would transmit the shock of an explosion, extending the damage", 
                                "Wedges should generally be used in opposing pairs. They should either be driven simultaneously or a heavy weight should be held against one while the other is driven", 
                                "Strongbacks, sole pieces or pad pieces should be used to distribute pressure over a large area to prevent the shore from rupturing plating", 
                                "A careful shoring watch should be maintained on any system of shoring, to attend to any loosening immediately"],
                        },
                        images: ["images/shorelength.png"]
                    },
                    {
                        sectionID: 7,
                        title: "Pressure Calculations",
                        text: {
                            text: [
                               "While it is not expected that repair parties will stop to make many calculations after the ship is hit, emphasis should be placed on the following important points"
                            ], 
                            followings: [
                                "a) The total pressure on a bulkhead of a flooded compartment is tremendous.", 
                                "b) The pressure is greatest along the deck and least along the overhead.", 
                                "c) Pressure depends upon the height of the water over a given point.", 
                                "d) Pressure also depends upon the roll and pitch of the ship", 
                                "e) Pressure may depend on the motion (speed forward or backward) of the ship"
                            ]
                        },
                        additionalKnowledge: [
                            "Since c, d, and e in the preceding paragraph are variable, it is important to understand that those pressures and stresses also will be variable.",
                            "When undertaking any shoring operation, the maximum stress (with an ample factor of safety) must be allowed."
                        ]
                    },
                    {
                        sectionID: 8,
                        title: "Volume Supported by Shoring",
                        text: {
                            text: [
                               "The load which a store can safely support depends upon the following factors:"
                            ], 
                            followings: [
                                    "a) The material of which the shore is made - the stronger the material, the greater the load", 
                                    "b) The length between supports - the greater the length, the less the load.", 
                                    "c) The minimum thickness of the shore - the greater the thickness, the greater the load", 
                                    "d) The direction in which the pressure is applied in relation to the axis or grain of the shore."
                                ],
                        },
                        additionalKnowledge: [
                            "Items a and c in the preceding paragraph are determined by NAVSEA, whereas items b and d must be determined by the damage control assistant.",
                            "In explanation of item c, it is recognized that the cross-section area has some bearing on the strength of a shore; however, the minimum thickness is far more important.",
                            "A two-inch by four-inch plank is much stronger than a one-inch by eight-inch plank of the same length."
                        ]
                    },
                    {
                        sectionID: 9,
                        title: "Instruction and Training",
                        text: {
                            text: [
                                "Repair personnel and other key members of the ship’s force must be trained and given practice in the details of shoring operations.",
                                "Models of compartments and miniature shores can be used to train personnel; applying simulated shores to bulkheads in repetitive situations under ideal conditions is also an effective teaching method.",
                                "After a group has mastered several types of structures, they can then be drilled in actual shoring problems.",
                                "They should study complications (such as interference from bunks, pipe lines and other immovable obstructions) and difficulties inherent in locating strong supports."
                            ]
                        }
                    }
                ]
            }
        ]
    }
}
    
export default Data;