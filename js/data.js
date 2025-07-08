var releaseDate = "march 26 2025, 04:00";
var possibleNextAnnouncementDate = "march 27 2025, 06:00";
var nextAnniversary = "march 27 2026, 04:00";
var alertMessages = [];
var alertTypes = [];
var timerData = [
	{
        "type": "WeekendBoss",
        "title": [
			"Battle Special The Happy Wich",
            "『キモチ戦特別編 幸福な魔女』"
        ],
        "image": [
            "imgs/kimochi/final00.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Part 1 - Day 1",
                start: "march 11 2024, 17:00",
                end: "march 12 2024, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "march 12 2024, 16:00",
				end: "march 13 2024, 15:59"
			},
			{
				name: "Tally & Group Placements",
				start: "march 13 2024, 16:00",
				end: "march 13 2024, 16:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "march 13 2024, 17:00",
				end: "march 14 2024, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "march 14 2024, 16:00",
				end: "march 15 2024, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "march 15 2024, 16:00",
				end: "march 16 2024, 15:59"
			}, 
            {
                "name": "Void Attribute",
                "start": "march 11 2024, 16:00",
                "end": "march 16 2024, 15:59",
                "extraPriority": 1,
				"type": "normal",
				markers:
				[{time: "march 13 2024, 17:00", title: "Part 2 - Groups", type: "battle"}]
			}
			]
    },
		{
        "type": "WeekendBoss",
        "title": [
			"【Mirrors Ranking】",
			"【ミラーズランクマッチ】"
        ],
        "image": [
            "imgs/events/mirrors00.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Preliminaries - Day 1",
				start: "july 8 2024, 17:00",
				end: "july 9 2024, 15:59"
			},
			{
				name: "Preliminaries - Day 2",
				start: "july 9 2024, 16:00",
				end: "july 10 2024, 15:59"
			},
			{
				name: "Preliminaries - Day 3",
				start: "july 10 2024, 16:00",
				end: "july 11 2024, 15:59"
			},
			{
				name: "Preliminaries - Day 4",
				start: "july 11 2024, 16:00",
				end: "july 12 2024, 15:59"
			},
			{
				name: "Preliminaries - Day 5",
				start: "july 12 2024, 16:00",
				end: "july 13 2024, 15:59"
			},
			{
				name: "Finals",
				start: "july 13 2024, 17:00",
				end: "july 14 2024, 20:59"
			},
            {
                "name": "Main Event",
                "start": "july 8 2024, 17:00",
                "end": "july 14 2024, 20:59",
                //"extraPriority": 1,
				"type": "normal",
				markers:
				[{time: "sep 17 2023, 17:00", title: "Finals", type: "battle"}]
			}
			]
    },
	{
        "type": "Event",
        "title": [
            "Login Bonus",
			"『グインボーナス』"
        ],
        "image": [
			"imgs/exedra/login/login.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "Scene 0 Celebration",
                "start": "may 30 2025, 12:00",
                "end": "june 30 2025, 4:59",
			},
			{
				name: "Magia Exedra 100 Day Fest",
                "start": "june 26 2025, 12:00",
                "end": "july 16 2025, 11:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】Score Attack and Tower Events",
			"『スコアアタック&タワーミッション』"
        ],
        "image": [
            "imgs/exedra/other/score-attack.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "100-Day Fest Tower Event",
                "start": "july 4 2025, 12:00",
                "end": "july 22 2025, 11:59",
			},
			{
				"name": "Score Attack VS Uwasa of the Commoner's Horse",
                "start": "june 12 2025, 12:00",
                "end": "june 26 2025, 11:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Story Event】Puella Magi Madoka Magica Scene 0 Part I",
			"『魔法少女まどか☆マギカ scene0 前編』"
        ],
        "image": [
            "imgs/exedra/events00/scene0.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				"name": "",
                "start": "may 30 2025, 12:00",
                "end": "june 30 2025, 11:59",
			}
        ]
    },
		{
        "type": "Event",
        "title": [
			"【Story Event】The Case Files of the Coordinator 3: Cozy Cosmology",
			"『調整屋さんの事件簿３ 箱庭のコスモロジー』"
        ],
        "image": [
            "imgs/exedra/events00/case-files03.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				"name": "",
                "start": "june 26 2025, 12:00",
                "end": "july 16 2025, 11:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Limited】Chaos Mode Release Celebration Missions",
			"『Chaosモード追加記念ミッション』"
        ],
        "image": [
            "imgs/exedra/events00/chaos.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				"name": "",
                "start": "may 30 2025, 12:00",
                "end": "june 16 2025, 11:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【Campaign】100-Day Fest: 10 Major Campaigns!",
			"『まどドラ100日感謝祭 10大キャンペーン』"
        ],
        "image": [
			"imgs/exedra/events00/hundo.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Login Bonus",
                "start": "june 26 2025, 12:00",
                "end": "july 16 2025, 11:59",
			},
			{
				name: "Free 10-Draw Fate Weave - Nemu & Touka",
                "start": "june 26 2025, 12:00",
                "end": "july 16 2025, 11:59"
			},
			{
				name: "Free 10-Draw Fate Weave - Magia 24hr ONLY",
                "start": "june 30 2025, 12:00",
                "end": "july 1 2025, 11:59",
			},
			{
				name: "Free 10-Draw Fate Weave - Alina",
                "start": "july 4 2025, 12:00",
                "end": "july 23 2025, 11:59",
			},
			{
				name: "Orb Collection and Selectable 5★ Event",
                "start": "june 26 2025, 12:00",
                "end": "july 31 2025, 11:59"
			},
			{
				name: "100-Day Fest Missions Part 1",
                "start": "june 26 2025, 12:00",
                "end": "july 4 2025, 11:59"
			},
			{
				name: "100-Day Fest Missions Part 2",
                "start": "july 4 2025, 12:00",
                "end": "july 16 2025, 11:59"
			},
			{
				name: "100-Day Fest Event Reward Increase",
                "start": "june 26 2025, 12:00",
                "end": "july 16 2025, 11:59"
			},
			{
				name: "Player EXP Collection Event",
                "start": "june 26 2025, 12:00",
                "end": "july 16 2025, 11:59"
			},
			{
				name: "Tower Reward Increase",
                "start": "july 4 2025, 12:00",
                "end": "july 18 2025, 11:59"
			},
        ]
    },

	{
        "type": "Event",
        "title": [
            "Training Spree Missions Part 4",
			"『育成応援ミッション第4弾』"
        ],
        "image": [
			"imgs/exedra/events00/training04.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "",
                "start": "april 18 2025, 12:00",
                "end": "april 25 2025, 11:59",
			}
        ]
    },
		// {
        // "type": "Event",
        // "title": [
        //     "【New Mirrors Event】Mirrors Rank Match",
		// 	"【ミラーズランクマッチ】"
        // ],
        // "image": [
        //     "imgs/events/mirrors00.png"
        // ],
        // "column": 0,
        // "priority": 1,
        // "timers": [
		// 	{
		// 		name: "Auto Battle",
        //          "start": "oct 30 2023, 17:00",
        //          "end": "nov 12 2023, 20:59",
		// 	//	extraPriority: 100,
		// 		markers:
		// 		[
		// 			{
		// 				title: "Day 1", 
		// 				time: "oct 30 2023, 17:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 2  - Happy Halloween! 🎃", 
		// 				time: "oct 31 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 3", 
		// 				time: "nov 1 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 		]
		// 	},
			// {
			// 	name: "Time to collect ranking rewards",
			// 	start: "oct 24 2023, 16:00",
			// 	end: "nov 5 2023, 21:00"
			// },
    //     ]
    // },
	{
        "type": "Shops",
        "title": [
            "Celebration & Bonus Packs",
			"開幕記念パック"
        ],
        "image": [
            "shop"
        ],
        "column": 2,
        "priority": 100,
        "timers": [
			{
				name: "Scene 0 Celebration Packs",
				start: "may 31 2025, 12:00",
				end: "june 30 2025, 11:59"
			},
			{
				name: "Training Spree Packs",
				start: "June 26 2025, 12:00",
				end: "july 31 2025, 119:59"
			},
        ]
    },
	{
		type: "Other",
		title: [
		"Event Quests Trader Shops",
		"「イベントクエスト 通貨ショップ」"
		],
		image: [
            "imgs/quest-shop.png"
        ],
		column: 2,
		priority: 5,
		timers: [	
			{
				name: "Scene 0 Part I",
                "start": "may 30 2025, 12:00",
                "end": "june 30 2025, 11:59",
			},
			{
				name: "Cozy Cosmology",
                "start": "june 26 2025, 12:00",
                "end": "july 17 2025, 11:59",
			},
			{
				name: "5★ Mikazuki Villa Trading Medals",
                "start": "june 26 2025, 12:00",
                "end": "aug 01 2025, 11:59",
			},	
			{
				name: "Orb Collection and Selectable 5★",
                "start": "june 26 2025, 12:00",
                "end": "aug 01 2025, 11:59",
			},	
		]
	},
	{
		type: "Other",
		title: [
		"Fate Weave Trader Coins",
		"「ガチャコインのショップ」"
		],
		image: [
            "imgs/coin-shop.png"
        ],
		column: 2,
		priority: 3,
		timers: [	
			{
				name: "Team Momoko",
                "start": "april 11 2024, 12:00",
                "end": "april 25 2024, 11:59",
			},
		]
	},
	{
		type: "Other",
		title: [
		"Player Match",
		"『プレイヤーマッチ』"
		],
		image: [
            "imgs/exedra/other/player-match.png"
        ],
		column: 2,
		priority: 0,
		timers: [
			{
				name: "Season 08",
				start: "july 7 2025, 12:00",
				end: "july 21 2025, 4:59",
			},
			{
				name: "Match Medal Shop - June",
				start: "june 01 2025, 5:00",
				end: "july 1 2025, 4:59",
			},
						{
				name: "Match Medal Shop - July",
				start: "july 01 2025, 5:00",
				end: "aug 1 2025, 4:59",
			},
		]
	},
// {
// 		type: "Other",
// 		title: [
// 		"Unlimited Fate Weave Pool Additions",
// 		"Countdown"
// 		],
// 		image: [
//             "imgs/exedra/other/fate-pool.png"
//         ],
// 		column: 2,
// 		priority: 0,
// 		timers: [
// 			{
// 				name: "★5 Mami Tomoe | Tiro Finale - Buffer",
// 				start: "april 10 2024, 16:00",
// 				end: "may 31 2024, 12:00",
// 			},
// 			{
// 				name: "★5 Kyoko Sakura | Kugatachi - Attacker",
// 				start: "april 10 2024, 16:00",
// 				end: "may 31 2024, 12:00",
// 			},
// 		]
// 	},
	{
        type: "Maintenance",
        title: [
            "Maintenance",
			"【メンテナンス】"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 1,
        timers: [
			{
                name: "Maintenance",
				start: "June 24 2024, 15:00",
				end: "june 24 2024, 17:00"
				// extraPriority: 100
            },
            {
                name: "Maintenance",
				start: "march 11 2024, 15:00",
				end: "march 11 2024, 16:00"
				// extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"【FREE】Free 10-Draw Fate Weave - Magia Fateweave",
            "『24時間限定マギアガチャ10連1回無料』"
        ],
        "image": [
            "imgs/exedra/gacha00/free-24.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "24 Hours Only!!!",
                "start": "june 30 2025, 12:00",
                "end": "july 1 2025, 11:59",
                extraPriority: 100
            },
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Scene 0 Celebration】One Per Day Free Fate Weave ",
            "『scene0開幕記念 1日1回無料ガチャ開催』"
        ],
        "image": [
            "imgs/exedra/gacha00/free.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "",
                "start": "may 30 2025, 12:00",
                "end": "june 30 2025, 11:59",
               // extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Featured】5★ [Hallow Woman] Mabayu Aki",
            "『★5愛生まばゆ ホロウ・ウーマン』"
        ],
        "image": [
			"imgs/exedra/gacha00/mabayu.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Light - Buffer",
                "start": "may 30 2025, 12:00",
                "end": "june 30 2025, 11:59",
            //    extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Featured】5★ [My Creations] Nemu | [Neo Genesis] Touka",
            "『新★5キオク柊ねむ & 里見灯花』"
        ],
        "image": [
            "imgs/exedra/gacha00/nemutou.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "5★ Rate Increased to 5%!",
                "start": "june 26 2025, 12:00",
                "end": "july 16 2025, 11:59"
            //    extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Featured】5★ [Nine Phases] Alina Gray",
            "『新★5キオク[Nine Phases]アリナ・グレイ』"
        ],
        "image": [
            "imgs/exedra/gacha00/alina.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "5★ Rate Increased to 5%!",
                "start": "july 4 2025, 12:00",
                "end": "july 23 2025, 11:59"
            //    extraPriority: 1000
            }
        ]
    },
	// {
    //     "type": "Gacha",
    //     "title": [
	// 		"Daily 10-Pull from a Choose 4★ Unlimited Magical Girl",
    //         "『毎日1回10連ガチャ無料』"
    //     ],
    //     "image": [
    //         "imgs/events/winter01.png",
    //     ],
    //     "column": 1,
    //     "priority": 14,
    //     "timers": [
    //         {
    //             name: "4★ Magical Girl Pull Rate Doubled!",
	// 			start: "dec 18 2023, 16:00",
	// 			end: "jan 12 2024, 23:59",
	// 			markers:
	// 			[
	// 			{
	// 				title: "Free pull 1",
	// 				time: "dec 18 2023, 00:00",
	// 				type: "star"
	// 			},
	// 			{
	// 				title: "Free pull 2",
	// 				time: "dec 19 2023, 0:00",
	// 				type: "star"
	// 			},
	// 			{
	// 				title: "Free pull 3",
	// 				time: "dec 20 2023, 0:00",
	// 				type: "star"
	// 			},
	// 			]
    //         }
    //     ]
    // },
	
];
