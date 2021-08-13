
const Data = {
    chapters: [
       { title: "Shoring",
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
                            text: ["This is an Objective of Shoring:", "To reinforce straining bulkheads, doors and hatches against abnormal pressures."],
                            options: [
                                {text: "True", correct: true},
                                {text: "False", correct: false},
                            ],
                        },
                        {
                            sectionID: 2,
                            type: "True or False",
                            text: ["This is an Objective of Shoring:", "To support strong and sturdy structures and fittings."],
                            options: [
                                {text: "True", correct: false},
                                {text: "False", correct: true},
                            ],
                        },
                        {
                            sectionID: 4,
                            type: "True or False",
                            text: ["The simplest and strongest shoring structure is where the shore, in direct compression, is anchored against a solid structure and holds the strongback against the bulkhead"],
                            options: [
                                {text: "True", correct: true},
                                {text: "False", correct: false},
                            ],
                        },
                        {
                            sectionID: 4,
                            type: "True or False",
                            text: ["Shores will support far greater weight in direct compression than they will in a cross-axial direction."],
                            options: [
                                {text: "True", correct: true},
                                {text: "False", correct: false},
                            ],
                        },
                        {
                            sectionID: 4,
                            type: "True or False",
                            text: ["It makes no difference whether the shores are placed horizontally or vertically"],
                            options: [
                                {text: "True", correct: true},
                                {text: "False", correct: false},
                            ],
                        },
                          {
                            sectionID: 4,
                            type: "True or False",
                            text: ["When designing a shoring structure, it is important to have as many shores as possible under cross-axial stress and as few as possible under direct compression."],
                            options: [
                                {text: "True", correct: false},
                                {text: "False", correct: true},
                            ],
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
                            ],
                            additionalKnowledge: 
                            [
                                "Both objectives are achieved by distributing the stresses exerted on straining or weakened members to sound parts of the structure. ",
                                "Main watertight bulkheads are built to withstand stresses which occur when compartments are flooded statically (compartments are tested during building to ensure this). ",
                                "To conserve timber and avoid wasting valuable time, shoring should not be carried out on an otherwise sound structure merely because the compartment is flooded. Extensive damage in the vicinity, however, may weaken the structure significantly enough that it becomes incapable of standing up to its designed stress point. Shoring is then necessary."
                            ],
                        }
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
                            text: ["When choosing shores, the principal concern is with stresses exerted on the shoring under the following two conditions"],
                            followings: ["When the shore is in direct compression; that is, when the pressure acting on the shore is parallel to its axis", "When the shore is subject to pressure acting perpendicularly to its axis"],
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
                        },
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
                            options: [
                                {text: "True", correct: false},
                                {text: "False", correct: true},
                            ],
                        },
                        {
                            sectionID: 2,
                            type: "True or False",
                            text: ["The shoring assembly must always be kept under observation."],
                            options: [
                                {text: "True", correct: true},
                                {text: "False", correct: true},
                            ],
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
                                "Remember, too, the most basic principle of shoring, When in doubt, shore."
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
                            ], 
                            followings: [
                                "The scene leader will inform the shoring team what needs to be shored when they arrive on scene", 
                                "The length of a shore should never be more than 30 times its minimum thickness", 
                                "Remember that the shorter a wooden or steel shore in relation to its minimum thickness, the more weight it will support. Figure 074-43-3 illustrates this point.", 
                                "Shores should not be cut to length in anticipation of damage, since any distortion of the structure would make them useless", 
                                "For stowage purposes, it is recommended that shores be in 16-foot to 18-foot lengths so, when needed, they can be cut to proper size with minimum waste",  
                                "Shores should never be placed in position before damage occurs since they would transmit the shock of an explosion, extending the damage", 
                                "Wedges should generally be used in opposing pairs. They should either be driven simultaneously or a heavy weight should be held against one while the other is driven", 
                                "Strongbacks, sole pieces or pad pieces should be used to distribute pressure over a large area to prevent the shore from rupturing plating", 
                                "A careful shoring watch should be maintained on any system of shoring, to attend to any loosening immediately"
                            ],
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
                            ],
                            additionalKnowledge: [
                                "Since c, d, and e in the preceding paragraph are variable, it is important to understand that those pressures and stresses also will be variable.",
                                "When undertaking any shoring operation, the maximum stress (with an ample factor of safety) must be allowed."
                            ]
                        },
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
                            additionalKnowledge: [
                                "Items a and c in the preceding paragraph are determined by NAVSEA, whereas items b and d must be determined by the damage control assistant.",
                                "In explanation of item c, it is recognized that the cross-section area has some bearing on the strength of a shore; however, the minimum thickness is far more important.",
                                "A two-inch by four-inch plank is much stronger than a one-inch by eight-inch plank of the same length."
                            ]
                        },
                       
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
            },
            {
                title: "Wooden Shoring",
                itemID: 3,
                questions: [],
                sections: [
                    {
                        sectionID: 1,
                        title: "Components of Wood Shores",
                        text: {
                            text: [
                                "There are four major components used to accomplish wooden shoring operations:",
                            ],
                            followings: [
                                "Shore - a portable beam for reinforcing or adding strength to a bulkhead or deck.", 
                                "Shole - a flat plate that can be placed under the end of a shore to distribute weight or pressure", 
                                "Strongback - a bar or beam, often shorter than a shore, used to distribute pressure or to serve as an anchor for a patch over a hole.", 
                                "Wedge - a block, triangular on the sides and rectangular on the butt end"
                            ],
                        }
                    },
                    {
                        sectionID: 2,
                        title: "Wooden Shores",
                        text: {
                            text: [
                                "Most shores - portable beams for reinforcing or adding strength to a bulkhead or deck - are made from wood which can be readily cut, shaped and trimmed to meet varying needs of repair parties.",
                                "Softwood (pine or fir) is generally used, since such wood can be easily handled, cut and fastened.",
                                "softwood will also absorb water, swell and help to tighten shores."
                            ]
                        }
                    },
                    {
                        sectionID: 3,
                        title: "Types of Wood",
                        text: {
                            text: [
                                "The best woods available for shores are douglas fir and yellow pine.",
                                "Hemlock and spruce may be used but they are not as strong and are less satisfactory for handling.",
                                "Any wood chosen should be straight-grained and relatively free of knots and cracks.",
                                "Keep in mind that green timbers have less strength than cured timbers",
                                "If it becomes necessary to use weaker woods or those containing defects, more or heavier shores will have to be used to support the same weight."
                            ]
                        }
                    },
                    {
                        sectionID: 4,
                        title: "Sizes of Wooden Shores",
                        text: {
                            text: [
                                "Shoring is supplied in square sizes: four-inches by four-inches (large deck ships may have six-inches by six-inches).",
                                "Wood for pad pieces is supplied in lengths of nine-inches by three-inches and twelve-inches by two-inches, both of which can also be used as shores if necessary.",
                                "Shores should be cut to the longest length possible, while maintaining portability and not exceeding stowage height aboard ship. (sixteen-foot to eighteen-foot lengths are typical.)",
                                "Actual quantities allowed per ship are contained in the ship’s allowance equipage list. Following in Figure 079-43-4 is a definition of maximum shoring lengths, given the thickness of the shore",
                            ]
                        },
                        images: ["images/maxshoringlength.png"]
                    },
                    {
                        sectionID: 5,
                        title: "Sholes",
                        text: {
                            text: [
                                "A shole is a flat plate used under the end of a shore to distribute weight or pressure.",
                                "Sholes should be made of douglas fir or yellow pine planks, one inch or more in thickness, and from eight to twelve inches wide.",
                                "Wider sholes can be made by nailing cleats across two or more widths of planking. Even single planks may have to be cleated at the ends to prevent splitting.",
                                "It is neither necessary nor desirable to prefabricate sholes."
                            ]
                        }
                    },
                    {
                        sectionID: 6,
                        title: "Strongbacks",
                        text: {
                            text: [
                                "A strongback - a bar or beam used to distribute pressure or to serve as an anchor for a patch - can be all or part of a shore (and should be as thick as the shore).",
                                "Scraps of wood obtained when cutting shores should be retained for use as strongbacks and short shores.",
                                "Heavy planks as well as steel bars, angle irons and pipe, are often used as strongbacks, although their tendency to spring back and forth under variable loads must be considered.",
                                "The same materials used as strongbacks can also be used for making semipermanent repairs, when time is available."
                            ]
                        }
                    },
                    {
                        sectionID: 7,
                        title: "Wedges",
                        text: {
                            text: [
                                "A wedge is a block, triangular on the sides and rectangular on the butt end, primarily made of wood, which can be shaped as needed to support shoring.",
                                "Soft woods (douglas fir and yellow pine) are preferred; however, a few hardwood wedges should be kept on hand because they have good resistance to crushing. (One drawback to using hardwood wedges is that they have a tendency to work loose.)",
                                "All wedges should be cut with a coarse saw and left unpainted so that they will absorb water and better grip the area into which they are wedged.",
                                "Wedges should be approximately as wide as the shores with which they are to be used.",
                                "They can be made with various angles at the leading edge, but since blunt edges do not hold well, sharp wedges are preferable.",
                                "A good wedge has a length of about six times its butt thickness.",
                                "Thus a wedge for use with a fourinch by four-inch shore, four inches wide and two inches thick, should be twelve inches long.",
                            ],
                            notes: [{
                                type: "note",
                                text: [
                                    "Steel wedges can be used in conjunction with wooden wedges to take some of the wear and pressure off the latter.",
                                    "Steel wedges can also be welded in place when making semi-permanent repairs."
                                ]
                            }],
                        },
                    }
                ]
            },
            {
                title: "Metal Shoring",
                itemID: 3,
                questions: [],
                sections: [
                    {
                        sectionID: 1,
                        title: "Components of Metal Shoring",
                        text: {
                            text: [
                                "In general, the rules for using wooden shores apply also to metal shores.",
                                "Only the methods of applying the shores differ.",
                                "Adjustable steel shores consist of two telescopic, tubular steel sections, fitted with head and base plates and a screw jack, with a drop handle for fine adjustments.",
                                "Damage control automatic adjustable telescoping steel shores are available in the following models:",
                            ],
                            followings: [
                                "Model 3-5 - Adjustable from a minimum of three feet, plus or minus three inches to a maximum of five feet, plus or minus three inches.",
                                "Model 3-5 will carry a vertical load when closed (but extended one inch on screw jack) of 20,000 pounds, but only 12,000 pounds when extended to its maximum", 
                                "Model 6-11 - Adjustable from a minimum of six feet, plus or minus three inches to a maximum of eleven feet, plus or minus three inches.",
                                "Model 6-10 will carry a vertical load when closed (but extended one inch on screw jack) of 20,000 pounds, but only 6,000 pounds when extended to maximum"
                            ],
                        }
                    },
                    {
                        sectionID: 2,
                        title: "Metal Shores",
                        text: {
                            text: [
                                "Steel shores must be maintained in operable condition at all times following the guidance listed here"
                            ],
                            followings: [
                                "Heave each telescope action of both tubes.", 
                                "Keep swivel joints free, clean and greased", 
                                "Keep screw jack free of painted threads; keep clean and greased", 
                                "Do not dent or hit metal shores (any distortion to the outer cases may prevent the inner part form sliding freely, thus making adjustments difficult or impossible)", 
                                "When metal shores are stowed after use, lightly oil all moving parts"
                            ],
                        }
                    },
                    {
                        sectionID: 3,
                        title: "Advantages of Metal Shores",
                        text: {
                            text: [
                                "Steel shores must be maintained in operable condition at all times following the guidance listed here"
                            ],
                            followings: [
                                "Fireproof", "Prefabricated and adjustable", 
                                "Much stronger than wood - the strength of metal shores is along the length and not across the sections, which makes them suitable for use as vertical or breast shores.", 
                                "Saves space, because a less complicated shoring structure is required", 
                                "Welded members will not slide or jump out of position", 
                                "Repairs can be semi-permanent in nature, thus permitting the ship to continue in operation when the use of wooden shores would not permit further action", 
                                "Welded steel permits a greater number of types of repairs than wood"
                            ],
                            notes: [
                                {
                                    type: "note",
                                    text: [
                                        "The disadvantage to using steel shoring is that it can be spark-producing when welded or scraped against other metal"
                                    ]
                                },
                                {
                                    type: "warning",
                                    text: [
                                        "The danger of using any spark-or flame-producing equipment when making repairs cannot be overemphasized, especially when there is a possibility of the presence of explosive gases."
                                    ]
                                }
                            ],
                        }
                    },
                    {
                        sectionID: 4,
                        title: "Bulkhead Shoring Angles",
                        text: {
                            text: [
                                "Shores must form a considerable angle with the bulkhead they are supporting. Correct shoring angles are illustrated in Figure 079-43-2"
                            ]
                        },
                        images: ["images/Figure079-43-2.png"]
                    },
                    {
                        sectionID: 5,
                        title: "Example of Metal Shoring",
                        text: {
                            text: [
                                "In addition to the use of steel shores to plug holes in the side of the ship, steel shores also are used to support overhead decks or loads. Figure 079-43-5 illustrates a steel shore as described in paragraph 079-43.4"
                            ]
                        },
                        images: ["images/Figure079-43-5.png"]

                    },
                    {
                        sectionID: 6,
                        title: "Steel Shapes Used in Shoring",
                        text: {
                            text: [
                                "Metal shapes generally used for shoring and repair operations includflat plate, bar stock, pipe, various types of angle irons, wedges, and sliding (telescopic) shores.",
                                "The thickness of steel plate can be identified by its weight per square foot; that is, five-pound plate is 1/8-inch thick and ten-pound plate, 1/4-inch in thickness.",
                                "Metal shapes can be cut with hacksaws, pneumatic chisels, electric welding tools and by oxyacetylene torches.",
                                "Some of the more common steel shapes are illustrated in Figure 079-43-6."
                            ]
                        },
                        images: ["images/Figure079-43-6.png"]

                    },
                    {
                        sectionID: 7,
                        title: "Pipe Shoes",
                        text: {
                            text: [
                                "Pipe is either ordinary (light walled) or heavy-duty (thick walled).",
                                "When used for shoring, it can be made more resistant to kinking and collapsing by filling it with sand.",
                                "Pipe shores are stronger than wooden shores and can be welded in place, eliminating additional bracing.",
                                "Two types of pipe shores are illustrated in Figure 079-43-7 and a welded pipe shore is shown in Figure 079-43-8"
                            ]
                        },
                        images: ["images/Figure079-43-7.png", "images/Figure079-43-8.png"]
                    }
                ]
            },
            {
                title: "Other Shoring Equipment",
                itemID: 4,
                questions: [],

                sections: [
                    {
                        sectionID: 1,
                        title: "Allowance Equipage List (AELs)",
                        text: {
                            text: [
                              "NAVSEA Allowance Equipage Lists indicate the quantity and type of gear a ship is required to have and also the quantity of shores a ship is allowed.",
                              "Small shoring items are stowed in kit bags to reduce their danger as splinter hazards.",
                              "The bags are to be stenciled and contain a statement of their contents.",
                              "To ensure that a full kit is available, allowance materials are to be inspected regularly and preserved to prevent rusting and deterioration"
                            ],
                        }
                    },
                    {
                        sectionID: 2,
                        title: "Tools for Shoring",
                        text: {
                            text: [
                                "The essential tools for shoring are mauls, handsaws, cross-cut saws, heavy hand hammers, axes and heavy wood chisels.",
                                "These tools are included on the shoring kit AELs and stowed in the damage control repair stations.",
                                "Additionally, sliding measuring battens are also required.",
                                "These normally consist of two pieces of wood about one-inch by one and one-half inches and approximately five feet long, connected with clips in such a way as to permit one batten to slide in line with the other.",
                                "Finally, a carpenter’s square is used to measure angles and cuts on wooden shores."
                            ]
                        }
                    },
                    {
                        sectionID: 3,
                        title: "Hands on Training",
                        text: {
                            text: [
                                "It is difficult to explain and teach the fine points of pressure vectors unless personnel are actually on the job where they can use tools to measure, cut and trim shores and secure them in place.",
                                "Instructions should begin with the use of hand tools such as hammers, hatchets, saws and mauls"
                            ],
                        }
                    },
                    {
                        sectionID: 4,
                        title: "Cutting Shores",
                        text: {
                            text: [
                                "Using a piece of shoring timber, ask trainees to cut off shore lengths.",
                                "Some will press down on the saw blade and cause it to bind.",
                                "It is helpful to point out that in instances where such binding delays the job one-half minute at each cut, a complicated shoring job can be delayed thirty minutes or more, with possibly disastrous results."
                            ]
                        }
                    },
                    {
                        sectionID: 5,
                        title: "Driving Wedges",
                        text: {
                            text: [
                                "In addition to the use of steel shores to plug holes in the side of the ship, steel shores also are used to support overhead decks or loads. Figure 079-43-5 illustrates a steel shore as described in paragraph 079-43.4"
                            ]
                        },
                        images: ["images/Figure079-43-5.png"]

                    },
                    {
                        sectionID: 6,
                        title: "Using Tools",
                        text: {
                            text: [
                                "Personnel should be taught how to use battens, squares, rulers and tapes when measuring lengths of shores required for various jobs.",
                                "They must also be taught how to measure the angles to which the timbers must be trimmed in order to produce a stout structure.",
                                "When trainees have mastered these details, the following principles of spreading pressure should be demonstrated:"
                            ],
                            followings: [
                                "How timbers are strong in direct compression and weak across the grain", "Why strong anchors are necessary"
                            ]
                        }

                    },
                    {
                        sectionID: 7,
                        title: "Often-used Shipboard Equipment",
                        text: {
                            text: [
                                "In addition to the previously described equipment, the following items are often used in connection with shoring"
                            ],
                            followings: [
                                "Mattresses and pillows", "Electric welding machines", "Table tops", " Sheet packing", "C - clamps", "Turnbuckles", "Chainfalls", "Screw jacks", "Hydraulic jacks", "PHARS kit", "Bolts, nuts and washers", "General workshop material", "Ship furniture"
                            ]
                        }
                    },
                    {
                        sectionID: 8,
                        title: "Stowage",
                        text: {
                            text: [
                                "When stowing shores, distribute them well over the ship in accessible compartments above the waterline.",
                                "Pockets between frames and girders are excellent for stowing shores.",
                                "Secure them with lines or metal clips so they cannot break loose but can easily be removed when required.",
                                "The damage control deck, particularly, must be well stocked.",
                                "The majority of wood and metal shoring is spread throughout the DC deck in each DCRS area of responsibility."
                            ],
                            notes: [{
                                type: "note",
                                text: ["Wooden wedges should be made up into compact blocks, stowed with shoring kits."]
                            }]
                        }
                    }
                ]
            },
            {
                title: "Laying Out Shoring",
                itemID: 5,
                questions: [],

                sections: [
                    {
                        sectionID: 1,
                        title: "″I″ Type Shoring",
                        text: {
                            text: [
                                "Basic ″I″ type shoring consists of a single beam between an anchor point and a strongback.",
                                "Strongbacks are set up to distribute pressure on plate patches, box patches, ship’s structure, doors, hatches and scuttles; they are arranged on watertight fittings to put as many points of pressure on the closure as it has dogs.",
                                "″I″ type shoring does not require centerlines0 or angles. Distance is measured from the area to be shored to the anchor point; then the thickness of any patches, shole plates or strongbacks is subtracted to obtain the corrected length of the ″I″ shore."
                            ],
                            notes: [{
                                type: "note",
                                text: ["Subtract an additional one-half inch from any shore length that will receive wedges"]
                            }]
                        }
                    },
                    {
                        sectionID: 2,
                        title: "″K″ Type Shoring",
                        text: {
                            text: [
                                "There are two methods used to lay out ″K″ type shorinthe measuring batten method, illustrated in Figure 079-43-9, and the framing square method. A description of each method follows"
                            ]
                        },
                        images: ["images/Figure079-43-9.png"]

                    },
                    {
                        sectionID: 3,
                        title: "Measuring Batten Method",
                        text: {
                            text: [
                                "″K″ type shoring can be laid out with a measuring batten (used to expedite the process) in the following manner:"
                            ],
                            followings: [
                                "Place one end of the batten against the bulkhead next to the area to be shored and the other end against the anchor point. This will give the correct length of the shore.", 
                                "Next, subtract the thickness of any patches, shole plates or strongbacks to obtain the corrected length.", 
                                "Subtract an additional one-half inch from any length that will receive wedges.", 
                                "Prepare the shore by marking the center line (by placing the heel of the square on the shore’s edge and any even number on the opposite edge). Make sure to have calculated the correct length before starting this step", "Repeat this in several locations along the shore", "Draw a line the entire length of the shore."
                            ]
                        }
                    },
                    {
                        sectionID: 4,
                        title: "Framing Square Method",
                        text: {
                            text: [
                                "″K″ type shoring can also be laid out with a framing square.",
                                "The square used on ships is divided into 12 ths on one side and 16 ths on the other.",
                                "The side of the square that is divided into 12 ths is used to measure shoring; therefore, it is important to hold the square with the tongue (short end) in the left hand and stay on one side of the shore while transferring measurements and angles.",
                                "The following steps should be used to obtain the correct measurements.",
                            ],
                            followings: [
                                "Obtain the rise by measuring from the center of the damage to the deck.", 
                                "Obtain the uncorrected run by measuring from bulkhead to the anchor point.", 
                                "Obtain the corrected run by subtracting the thickness from any of the patches, shole plates or strongbacks.", 
                                "Subtract an additional one-half inch from any shore length that will receive wedges.", "Mark the rise on the tongue (short end) and the run on the body (long end) of the square.", 
                                "Place the marks found in step # 5 on the centerline of the shore and mark the shore at these two points.", 
                                "Measure the distance between these two points and convert it into feet and inches, then mark that length on the shore and square it off at both ends, in pencil.", 
                                "Mark the angles by placing the square on the centerline of the shore.", "Place the rise measurement on the intersection of the centerline and squared-off line.", 
                                "Place the run measurement on the centerline at the opposite end.", "Draw a line across the width of the shore along the edge of the square’s tongue.", 
                                "Turn the square 90° to the left and place the heel (outer point) of the square on the line intersection and the square’s body along the first side of the angle drawn.", 
                                "Draw a line from the centerline to the edge of the shore along the square’s tongue.", 
                                "Mark the opposite end of the shore by turning the square 90° back to the right; slide the square down to the other intersecting lines and repeat the process.", 
                                "Place the run measurement (at this end) on the intersection of the centerline and squared off line. (When finished, the angles should be exactly reverse of the opposite end."],
                        }
                    },
                  
                    {
                        sectionID: 5,
                        title: "Measuring Lengths of Shoring",
                        text: {
                            text: [
                                "When measuring the length to which a shore must be cut (the distance from a bulkhead to a nearby girder) use the folding rule, a steel tape or a wooden batten.",
                                "Cotton or manila lines are unsatisfactory because they are too elastic and will give incorrect dimensions.",
                                "An efficient measuring batten can be made by securing two eight-foot pieces of one and one-half inch by one and onehalfinch lumber with sliding clamps.",
                                "Each clamp is then secured to one leg only, so that the batten can be extended to a length of about fourteen feet.",
                                "A locking device, such as a screw, can be used to hold the pieces in place once a measurement has been taken"
                            ]
                        }

                    },
                    {
                        sectionID: 6,
                        title: "Wooden Batten Measuring",
                        text: {
                            text: [
                                "Extend the batten to the desired length and lock it.",
                                "Lay the batten along a shore, mark and cut the timber to the proper length. (This is more accurate and will take less time than measuring the batten and then measuring that distance on the shore.)",
                                "In general, shores should be cut one-half inch shorter than the measured length.",
                                "This half-inch is to allow space for wedges to enter. Figure 079-43-9, illustrates the use of the measuring batten in shoring"
                            ]
                        },
                        images: ["images/Figure079-43-9.png"]
                    },
                    {
                        sectionID: 7,
                        title: "Folding Rule Measuring",
                        text: {
                            text: [
                                "Shores can be measured for length by using a folding rule or a twentyfive-foot steel tape and a carpenter’s square. The procedure, illustrated in Figure 079-43-10 is as follows:",
                            ],
                            followings: ["Measure the distance A from the center of the strongback to the deck. Then measure the distance B from the edge of the anchorage to the bulkhead, minus the thickness of the strongback.", "Lay off on a carpenter’s square the measurements A and B, using the ratio one-inch to one-foot.", "Measure the diagonal distance between A and B. This is the length of the shore in feet."],
                        },
                        images: ["images/Figure079-43-10.png"]
                    },
                    {
                        sectionID: 8,
                        title: "Cutting Shoring",
                        text: {
                            text: [
                                "Proper cutting of shores is important to all shoring operations.",
                                "Improperly cut shores cause unnecessary delays and waste materials.",
                                "Improperly fitted shores and wedges may cause an entire shoring effort to fail.",
                                "Shores are generally cut with portable electric circular saws or by handsaws when necessary.",
                                "All repair party personnel are to be instructed in the correct use of these tools."
                            ]
                        }
                    },
                    {
                        sectionID: 9,
                        title: "Angel Cuts",
                        text: {
                            text: [
                                "Angle cuts can be made using the measurements indicated in Figure 079-43-10, prior, as a guide. Refer to Figure 079-43-11, Cutting Shoring Angles, for the following step-by-step process:",
                            ],
                            followings: ["Lay the carpenter’s square along the shore as shown in step 1 of Figure 079-43-11, making sure that the measurements, 4 inches and 6-3/4 inches, lay along the same line. Cut shore to this line.", "Measure the center of the cut and mark a right angle to it for the second cut. Work and saw to the line. One end of the shore is now cut.", "Along the center of the stock, measure the desired length of the shore (7’ 10″) and mark off a perpendicular line at the other end of the stock.", "Slide the carpenter’s square to the center point on the perpendicular, keeping the same measurements on the same lines as before. Mark the cutting line on the other side of the square.", "Mark a right angle from the center point of this cut for the second cut. Make these cuts and the shore will be the proper length with the correct angle cuts."],
                        },
                        images: ["images/Figure079-43-10.png", "images/Figure079-43-11.png"]
                    },
                    {
                        sectionID: 10,
                        title: "Cutting Shoring",
                        text: {
                            text: [
                                "Wet timbers are difficult to cut unless the proper methods of sawing are used.",
                                "When cutting heavy six-inch by six-inch and eight-inch by eight-inch shores, a lumberjack crosscut saw will save considerable time.",
                                "Chisels, axes and hatchets can also be used in cutting and trimming shores.",
                                "Keep all cutting tools maintained in the best possible condition, i.e., oiled, sharpened and free from corrosion."
                            ]
                        }
                    },
                    {
                        sectionID: 11,
                        title: "Trimming Shores",
                        text: {
                            text: [
                                "The process of shaping the ends and sides of a shore so they will fit into the shoring structure properly is called ″trimming″.",
                                "Certain rules must be observed when trimming to prevent shoring from splitting and chipping (and thus becoming useless)"
                            ]
                        }
                    },
                    {
                        sectionID: 12,
                        title: "Square Trim",
                        text: {
                            text: [
                                "If shore A is to fit against a plane surface of shore B and take a load in direct compression, the end of A must be cut square and perpendicular to the axis of A.",
                                "This will spread the pressure over the greatest possible area. This principle is illustrated in Figure 079-43-12",
                             ]
                        },
                        images: ["images/Figure079-43-12.png"]
                    },
                    {
                        sectionID: 13,
                        title: "Sharp Point Trimming",
                        text: {
                            text: [
                                "A sharp point never should be left on the end of a shore when the shore will be required to take any pressure, because the a point will slip, permitting the shore to move and work loose.",
                                "The shore must be trimmed in order to present a substantial flat area at each pressure surface. Figure 079-43-13 illustrates the incorrect and the correct method of cutting the end of a shore.",
                            ]
                        },
                        images: ["images/Figure079-43-13.png"]
                    },
                    {
                        sectionID: 13,
                        title: "Fitting Shores to Deck",
                        text: {
                            text: [
                                "Figure 079-43-14 illustrates two shores (A and B) pressing down on the deck. A study of the two illustrations will reveal the weakness inherent in the incorrect fitting",
                            ]
                        },
                        images: ["images/Figure079-43-14.png"]
                    },
                    {
                        sectionID: 13,
                        title: "Trimming Two Ends of a Shore",
                        text: {
                            text: [
                                "Both ends of a shore must be shaped to avoid weakening any part of the assembly.",
                                "Figure 079-43-15 illustrates both incorrect and correct methods of shaping shores which need to be trimmed at both ends.",
                                "The construction shown on the left is not a correct method.",
                                "If shore B is not perpendicular to A, B will have a strong tendency to slip out of place.",
                                "In this case, angle 0 is less than 90 degrees and the shore will slip in the direction of T unless block D is nailed on top of C.",
                                "It would be better to use a wide timber as a strongback, embodying D and C as one piece, because the pressure of B will tend to pry the nailed D away from C.",
                                "A two-inch by ten-inch plank could be used in place of C and D.",
                                "In the illustration on the right, shores A and B have been shaped not only to present flat surfaces to girder G and hatch H but also against decks D and E.",
                                "They are also shaped at their other ends to present flat surfaces to each other and to strongback C at point M. This method makes a strong shoring job.",
                                "The flat surfaces are necessary where wedges are to be driven.",
                            ],
                            notes: [{
                                type: "caution",
                                text: ["Shores are sometimes notched to fit against other shores.", "If there is any working of the shoring structure, the notched shore is very likely to split.", "This method must never be used when any great pressure is expected.", "A safer and more satisfactory method is to cut a socket in the horizontal shore A into which the butt of the inclined shore B will fit."]
                            }] 
                        },
                        images: ["images/Figure079-43-15.png"]
                    },
                ]
            },
            {
                title: "Applying Wedges",
                itemID: 6,
                sections: [
                    {
                        sectionID: 1,
                        title: "Rough-cutting Wedges",
                        text: {
                            text: [
                                "Wedges are made by sawing a rectangular block as indicated in Figure 079-43-17. To stow wedges, set them hypotenuse to hypotenuse; that is, so that they form a shape similar to the timber before cutting",
                           ]
                        },
                        images: ["images/Figure079-43-16.png"]
                    },
                    {
                        sectionID: 2,
                        title: "Sawing Wedges",
                        text: {
                            text: [
                                "Wedges are to be cut in such a manner that they retain a rough finish on all surfaces. Wedges are to be rough-cut to the dimensions as indicated in Figure 079-43-16, and must remain unpainted",
                            ]
                        },
                        images: ["images/Figure079-43-17.png"]
                    },
                    {
                        sectionID: 3,
                        title: "Makeshift Wedges",
                        text: {
                            text: [
                                "Figure 079-43-18 illustrates how to create makeshift wedges by cutting a short piece of shoring with a hatchet. Put wood piece A on block of wood B when chopping, to protect the hatchet.",
                            ]
                        },
                        images: ["images/Figure079-43-18.png"]
                    },
                    {
                        sectionID: 4,
                        title: "Driving a Wedge",
                        text: {
                            text: [
                                "To drive a wedge, put a block of wood between the butt of the wedge and the maul, to prevent the wedge from splitting, as illustrated in Figure 079-43-19",
                            ]
                        },
                        images: ["images/Figure079-43-19.png"]
                    },
                    {
                        sectionID: 5,
                        title: "Using Two Wedges",
                        text: {
                            text: [
                                "When using wedges to support a shore, either horizontally or vertically, always use two wedges driven simultaneously with two five-pound mauls, striking evenly from both sides to prevent tilting the shore.",
                                "If there is not enough room to swing a second maul, the same effect can be gained by holding a maul against the butt of one wedge and driving the other.",
                                "If the deck is slippery, throw sand under the wedges to reduce the tendency to slip.",
                                "It is poor practice to use more than one pair of wedges behind one end of a shore. (Such a rig may easily collapse.)",
                                "Figure 079-43-20-A illustrates the procedure for using two wedges to support a shore.",
                                "As illustrated in Figure 079-43-20-B, if wedges W are not enough to take up all the space between shores A and B, use block C as a filler piece, provided the joint is laid on and supported by a deck.",
                                "It is considered poor practice to use such filler pieces in vertical shoring because the unsupported joint may collapse when the ship works.",
                            ]
                        },
                        images: ["images/Figure079-43-20.png"]
                    },
                    {
                        sectionID: 6,
                        title: "Locking Wedges",
                        text: {
                            text: [
                                "Figure 079-43-21 illustrates the method to be used to lock wedges in place.",
                                "After wedges W have been driven home as indicated in Step 1, cut them off along the lines A - A.",
                                "Then, as indicated in Step 2, cut blocks of two-inch by four-inch shoring (T) to fit the spaces and tap them into place snugly",         
                            ]
                        },
                        images: ["images/Figure079-43-21.png"]
                    },
                ]
            },
            {
                title: "Holding Devices",
                itemID: 7,
                sections: [
                    {
                        sectionID: 1,
                        title: "Cleats",
                        text: {
                            text: [
                                "Horizontal shoring member A can be supported temporarily by cleats C nailed to vertical shore B. Note that there is always a possibility that the cleats will split when nailed.",
                                "Figure 079-43-22 illustrates the use of cleats to give temporary support to a horizontal shoring member.",
                           ]
                        },
                        images: ["images/Figure079-43-22.png"]
                    },
                    {
                        sectionID: 2,
                        title: "Nails",
                        text: {
                            text: [
                                "On shoring structures, nails are used to secure battens and cleats to reduce the possibility of their jumping and slipping.",
                                "Nails are also used to hold shoring members temporarily in place, before final adjustment to the structure. Figure 079-43-23 illustrates both the incorrect way to use nails in sh",
                            ],
                            notes: [{
                                type: "note",
                                text: ["There is a tendency to use nails where they do little or no good or where they actually can split shores and wedges; nails can also break off when the shoring structure exerts excessive lateral pressure upon the nail material."]
                            }]
                        },
                        images: ["images/Figure079-43-23.png", "images/Figure079-43-24.png"]
                    },
                    {
                        sectionID: 1,
                        title: "Notching",
                        text: {
                            text: [
                                "Members of a shoring structure can be supported by cutting shallow notches (onefourth-inch plus) in one member and fitting the other member into the notched socket.",
                                "Although this securing method will weaken the cut member slightly, it will prevent slipping (see Figure 079-43-25).",
                                "Nails can be used as securing aids, provided there is no great pressure on the nails.",
                            ]
                        },
                        images: ["images/Figure079-43-25.png"]
                    },
                    {
                        sectionID: 1,
                        title: "Battens",
                        text: {
                            text: [
                                "It is an acceptable practice to nail battens on the sides of shoring members to help support the structure. Figure 079-43-26 illustrates the batten method.",
                            ]
                        },
                        images: ["images/Figure079-43-26.png"]
                    },
                ]
            },
            {
                title: "Shoring Scenarios",
                itemID: 8,
                sections: [
                    {
                        textsectionID: 1, 
                        title: "Shoring Decks and Overhead",
                        text: {
                            text: [
                                "When a compartment is flooded, the deck and all bulkheads around it (and possibly the overhead) are subject to pressure.",
                                "It may be necessary to shore the entire containing structure, giving priority to any bulkhead that may have been weakened or is subjected to the greatest pressure.",
                                "Decks of flooded upper compartments must be shored from next lower decks."
                            ]
                        }
                    },
                    {
                        textsectionID: 2, 
                        title: "Shoring Doors and Hatches",
                        text: {
                            text: [
                                "When shoring doors and hatches, the basic rule is to put as many points of pressure on the closure as it has dogs.",
                                "As illustrated in Figure 079-43-27, doors and hatches may be complicated by scuttles and quick-acting handwheels R, in which case it will be necessary to build up a framework of shores to clear the wheel.",
                                "Two strongbacks S are laid lengthwise to the hatch, near the knife edges, extending about two inches beyond the ends of the hatch.",
                                "Cross-pieces Q are then laid over the strongbacks. Fillerblocks K (shown cut away) are placed under the cross-pieces to keep the hatch from buckling.",
                                "One or more strongbacks M are laid across the crosspieces; shore A and wedges W are then set in place.",
                                "When heavy pressure is expected under the hatch, lay down two top strongbacks and erect several vertical shores similar to those indicated by the dotted lines, pressing on points P.",
                            ]
                        },
                        images: ["images/Figure079-43-27.png"]
                    },
                    {
                        textsectionID: 3, 
                        title: "Door with Ordinary Dogs",
                        text: {
                            text: [
                                "Figure 079-43-28 illustrates how to shore a door with ordinary dogs.",
                                "The dogs are used to obtain vertical support for strongbacks S and the deck provides support for crosspiece C.",
                                "Any suitable shoring system can be used to keep the strongbacks in place on the hatch or door.",
                                "If beams are not readily available overhead, a good anchorage can usually be obtained by putting a strongback across two adjacent beams.",
                                "Should the door or hatch be badly warped or bent, it could be more satisfactory to erect a false closure that is - a large patch.",
                            ]
                        },
                        images: ["images/Figure079-43-28.png"]
                    },
                    {
                        textsectionID: 4, 
                        title: "Wood Shoring to Hold Patches",
                        text: {
                            text: [
                                "Wood shoring is frequently used to hold patches in placeover holes or cracks.",
                                "In Figure 079-43-29-A, three mattresses H are held in place by T (joiner door or metal plate or wood boards), strongbacks 5, a crosspiece C, and by shores A and B.",
                                "Note that C extends to the deck for vertical support.",
                                "In Figure 079-43-29-B, two crew mattresses M and a backing plate T are held in place by a shoring structure consisting of strongbacks S and C, shores A and B, and wedges W.",
                                "Shore A is supported verticallyby cleat D. Shore B is held in place by stiffener F and brace E, which is held in place against hatch coaming G.",
                                "Note how the protruding edges of the hole dig into the mattress.",
                                "Patches of this type can be used to replace a defective hatch or door",
                            ]
                        },
                        images: ["images/Figure079-43-29.png"]
                    },
                    {
                        textsectionID: 5, 
                        title: "Steel Shoring to Hold Patches",
                        text: {
                            text: [
                                "Steel shoring is often used to support patches, as illustrated in Figure 079-43-30.",
                                "The spark-producing characteristic of this shoring method do not typically present a hazard when used as illustrated",
                            ]
                        },
                        images: ["images/Figure079-43-30.png"]
                    },
                    {
                        textsectionID: 6, 
                        title: "Shoring Flush Hatches",
                        text: {
                            text: [
                                "In Figure 079-43-31 illustrates that flush patches should be shored with the pressure over the gaskets, as shown at P, and not at point N",
                            ]
                        },
                        images: ["images/Figure079-43-31.png"]
                    },
                    {
                        textsectionID: 7, 
                        title: "Shoring With no Anchorage Available on Deck",
                        text: {
                            text: [
                                "Figure 079-43-32 illustrates a form of shoring frequently used in long compartments that have no stout anchorage available on deck.",
                                "Verticalshore A is cut considerably longer than dimension X; when one end of A is secured to beam B, pressure transmitted through shore S forces strongback T against the bulkhead and pushes shore A tight against deck D, which serves as an anchorage.",
                                "It is important to note that there are several inherent weaknesses when using this shoring method:",
                            ],
                            followings: [
                                "Shore A is under cross-grain stress, its weakest position", 
                                "If decks D and E are heaving, shore A will tend to jump and slip and may crack", 
                                "The lower end of A may have to rest on a weak part of deck D not over a frame F"
                            ],
                                
                        },
                        images: ["images/Figure079-43-32.png"]
                    },
                    {
                        textsectionID: 8, 
                        title: "Using Multiple Supports",
                        text: {
                            text: [
                                "Each horizontal strongback must be backed up by a number of shores exerting a pressure perpendicular to the bulkhead.",
                                "In Figure 079-43-33 the vector of supporting forces isin the direction K.",
                                "This example shows why using multiple supports is so important.",
                                "If only shores A and B wereused, there would be insufficient pressure to support the bulkhead.",
                                "Strongback S would exert maximum pressureat point C and practically none at point D.",
                                "This would occur because the bulkhead is bowed and because the strongback tends to curl outward from the point of pressure",
                            ]
                        },
                        images: ["images/Figure079-43-33.png"]
                    },
                    {
                        textsectionID: 9, 
                        title: "Example TWO, Multiple Supports",
                        text: {
                            text: [
                                "Figure 079-43-34 illustrates another application of multiple supports used in shoring.",
                                "Note that compound shoring braces the bulkhead at B.",
                                "The pressure on the shoring structure is spread over several supports in order not to overstrain any one of them.",
                                "Pressure is absorbed by spreading it over several frames F on bulkhead T by means of strongback S.",
                            ]
                        },
                        images: ["images/Figure079-43-34.png"]
                    },
                    {
                        textsectionID: 10, 
                        title: "Supporting Frames or Girders",
                        text: {
                            text: [
                                "When installing supporting shores at bulkheads ordecks, always place them over frames or girders, as at A and B, and never at unstrengthened points as at C, as illustrated in Figure 079-43-35.",
                                "Shores or strongbacks also can be used to widen pressure areas",
                            ],
                            notes: [
                                {
                                    type: "caution", 
                                    text: ["Failure to properly install supporting shores over frames or girders willcause bulkheads or decks to warp and, possibly, rupture."]
                                }
                            ]
                        },
                        images: ["images/Figure079-43-35.png"]
                    },
                    {
                        textsectionID: 11, 
                        title: "Using Rigging Gear",
                        text: {
                            text: [
                                "Various types of rigging gear, such as chainfalls, wire straps, blocks and tackle and manila line can be useful during shoring operations, especially for clearing away wreckage and restoring equipment to its original position.",
                                "To a limited extent, this gear can be used to hold equipment in position, but keep in mind that all fiber lines will stretch under tension.",
                                "Because rigging gear is, for the most part,not rigid, it cannot be relied upon to do the work of shores.",
                                "When rigging such gear, ensure that the fixed end is secured to a strong, undamaged structure.",
                            ],
                            notes: [
                                {
                                    type: "caution", 
                                    text: [
                                        "Do not use jacks (or other shoring methods) to attempt to remove a permanent set from a damaged bulkhead"
                                    ]
                                }
                            ]
                        }
                    },
                    {
                        textsectionID: 12, 
                        title: "Use of Jacks",
                        text: {
                            text: [
                                "As illustrated in Figure 079-43-36, hydraulic jack (or screw) J can be used topush heavy weights back to their original positions.",
                                "When using this method, shoring S also must be erected so,if the jack is suddenly knocked out of place, the weight it is supporting will not crash.",
                                "Build up base B with wide blocks as the jack moves up and the structure returns to its original position",
                            ],
                            notes: [
                                {
                                    type: "caution", 
                                    text: [
                                        "Do not use jacks (or other shoring methods) to attempt to remove a permanent set from a damaged bulkhead"
                               ]
                                }
                            ]
                        },
                        images: ["images/Figure079-43-36.png"]
                    },
                    {
                        textsectionID: 13, 
                        title: "Use of Chainfalls",
                        text: {
                            text: [
                                "Chainfalls or blocks and tackle can be obtained from the deck department and used to pull heavy weights back into position.",
                                "Shoring should be added beneath the apparatus as indicated in Figure 079-43-37 in case the hoisting gear fails.",
                                "The chainfall must be secured to a stout padeye, beamor strongback.",
                                "Wooden or steel strongbacks can be laid over holes or hatches to secure the hook of a chainfall or block and tackle.",
                                "If one strongback is not sturdy enough, tie several together, ensuring that the ends of the strongback(s) protrude well over the edges of the opening.",
                                "If the weight being pulled back into position is loose and free to move, it is important to check such motion with steadying lines while maneuvering the weight to a still position",
                            ]
                        },
                        images: ["images/Figure079-43-37.png"]
                    },
                ]
            },
            {
                title: "Water Pressure in Flooded Compartments",
                itemID: 9,
                sections: [
                    {
                        textsectionID: 1, 
                        title: "Causes of Pressure",
                        text: {
                            text: [
                                "The pressure on a bulkhead or deck in flooded compartments is causedby the following:",
                            ],
                            followings: [
                                "The depth of flooding", 
                                "The flooded area",  
                                "Additional pressure caused by the ship’s motion", 
                                "Whether or not the compartment is open to the sea"
                            ],
                        }
                    },
                    {
                        textsectionID: 2, 
                        title: "Pressure Exerted Against Bulkheads",
                        text: {
                            text: [
                                "The following examples will show that the deeper the flooding is below the waterline, the progressively more pressure is exerted against the bulkhead.",
                                "Sea water weighs approximately 64 pounds per cubic foot; the pressure over one square inch at a depth of one foot below the waterline of the ship is 0.444 pounds (sea water); at nine feet below the waterline, it is 3.996 pounds; at 20 feet below the waterline, pressure is 8.88 pounds.",
                                "The pressure at any point is equal in all directions, whether downward toward the deck or horizontally toward the bulkhead.",
                                "A bulkhead twenty feet wide and five feet high, at a depth of five feet below the waterline will be subjected to a total pressure of 16,000 pounds.",
                                "A bulkhead eight feet high and twenty feet wide, at a depth of fifteen feet below the waterline will exert a total pressure of 112,640 pounds.",
                                "This gives some idea of the pressure that must be contained.",
                                "If the ship remained entirely motionless in all three planes, the pressure of any given point would remain constant and the problem of shoring would be relatively simple.",
                                "It would be possible to erect a light shoring structure and then leave it without further inspection.",
                                "It might not even be necessary to shore. However, the water pressure at any point on asubmerged bulkhead is the same as the pressure of the water over it.",
                                "The pressure, therefore, is directly proportional to the depth of the water, and for that reason watertight bulkheads on naval ships are built progressively stronger as they approach the ship’s bottom.",
                                "Figure 079-43-38 illustrates this principle",
                            ]
                        },
                        images: ["images/Figure079-43-38.png"]
                    },
                    {
                        textsectionID: 3, 
                        title: "Pressure with Ocean Above Overhead",
                        text: {
                            text: [
                                "The depth of the water in a compartment open to the sea and completely flooded is measured from the ocean surface, not from the overhead of the compartment.",
                                "Figure 079-43-39, shows pressure point P which is equal to the pressure of the water at that depth.",
                                "Even if the lower compartment is not entirely flooded but contains a layer of entrapped air at the top, the air in the compartment will be compressed until it assumes the same pressure as the water column.",
                            ]
                        },
                        images: ["images/Figure079-43-39.png"]
                    },
                    {
                        textsectionID: 4, 
                        title: "Pressure with Ocean Below Overhead",
                        text: {
                            text: [
                                "The same rule delineated in Above Overhead applies when the ocean level is below the level of the overhead.",
                                "In figure 079-43-40 the pressure on joint P is WP",
                            ]
                        },
                        images: ["images/Figure079-43-40.png"]
                    },
                    {
                        textsectionID: 5, 
                        title: "Pressure with Compartment Open at Top",
                        text: {
                            text: [
                                "There is one case in which the previous rule does not apply.",
                                "That exception exists when the compartment is open at the top under the following conditions: Figure 079-43-41 shows the outside water level is at W and the inside level at X.",
                                "Water is coming into the compartment through a relatively slow leak and the compartment is open at the top so that air can escape fasterthan water comes in.",
                                "In this case, the pressure at P is XP. This type of flooding is often encountered in spacessurrounding compartments that have been blasted open to the sea.",
                            ]
                        },
                        images: ["images/Figure079-43-41.png"]
                    }
                ]
            },
            {
                title: "Example of Flooded Compartments",
                itemID: 9,
                sections: [
                    {
                        textsectionID: 1, 
                        title: "Change in Pressure as Ship Rolls",
                        text: {
                            text: [
                                "Consider a compartment ABCD, partly flooded, as shown in Example 1 of Figure 079-43-42.",
                                "With the ship on an even keel and trim, the pressure on point X is YX, and on N it is MN.",
                                "If the ship lists or rolls to port, as indicated in Example 2, the pressure on X will rise to ZX, and on N will decrease to RN.",
                            ]
                        },
                        images: ["images/Figure079-43-42png"]
                    },
                    {
                        textsectionID: 2, 
                        title: "Change in Pressure With Change of Ocean Level",
                        text: {
                            text: [
                                "Consider a compartment ABCD entirely flooded, with the ocean surface at L, as illustrated in Figure 079-43-43.",
                                "The pressure on point X is YX.",
                                "If, because of high waves or plunging, the ocean surface rises to S and then drops to T, the pressure head on point X will rise to ZX and then drop to VX.",
                            ]
                        },
                        images: ["images/Figure079-43-43.png"]
                    },
                    {
                        textsectionID: 3, 
                        title: "Change in Pressure From Scoop-Type Rupture",
                        text: {
                            text: [
                                "Consider compartment ABCD rupture at N as illustrated in Figure 079-43-44.",
                                "If the compartment is partly full and the ship is stationary, the pressure on point X is ZX.",
                                "However, if the ship moves ahead in the direction M, the ruptures N and P will scoop up water, raising the level in the compartment above that of the ocean outside. (P shows plate torn out and downward to form a dangerous scoop.)",
                                "The water will tend to back up against bulkhead AD",
                            ]
                        },
                        images: ["images/Figure079-43-44.png"]
                    },
                    {
                        textsectionID: 4, 
                        title: "Change in Pressure From Movement in Water",
                        text: {
                            text: [
                                "If a ship rolls or pitches slowly, or has no free surface, the effect will be a simple variation of pressure.",
                                "If the water can run rapidly, it will have thesame effect as a wave and it will pound heavily on bulkhead AD, momentarily increasing the pressure.",
                                "This effect is illustrated in Figure 079-43-45.",
                            ]
                        },
                        images: ["images/Figure079-43-43.png"]
                    },
                    {
                        textsectionID: 5, 
                        title: "Change in Pressure With Movement of Ship",
                        text: {
                            text: [
                                "As the ship rises and falls with the sea, the pressure on the deck will increase and decrease.",
                                "Likewise, if the ship is going in the direction of motion, the water in the compartment tends to exert more pressure on bulkhead CD than it does on bulkhead AB.",
                                "This interaction is illustrated in Figure 079-43-46.",
                            ]
                        },
                        images: ["images/Figure079-43-43.png"]
                    }
                ]
            }

        ]},
        {
            title: "N/A",
            sectionNumber: 0,
            items: []
        }
    ]
}
    
export default Data;