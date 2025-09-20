var releaseDate = "march 26 2025, 04:00";
var possibleNextAnnouncementDate = "sept 28 2025, 16:00";
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
			"Magia Exedra Steam Release",
			"『まどドラ Steam版』"
        ],
        "image": [
            "imgs/ex/re-steam.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				"name": "Exact Time of Release Unknown",
                "start": "July 17 2025, 02:00",
                "end": "julu 18 2025, 00:00",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Login Bonus",
			"『ログインボーナス』"
        ],
        "image": [
			"imgs/exedra/login/login.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
            {
				name: "Magia Record Part 1 Complete Celebration",
                "start": "aug 28 2025, 12:00",
                "end": "sept 18 2025, 11:59"
			},
            {
				name: "Iroha Birthday Portrait",
                "start": "aug 22 2025, 00:00",
                "end": "aug 28 2025, 23:59",
			},
                        {
				name: "MagiReco Final Release Celebration",
                "start": "aug 15 2025, 12:00",
                "end": "aug 28 2025, 11:59",
			},
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
				"name": "Score Attack VS Uwasa of the Chelation Land Ferris Wheel",
                "start": "aug 28 2025, 12:00",
                "end": "sept 11 2025, 11:59",
			},
			{
				"name": "Tower Event - Up to a total of 60 floors!",
                "start": "sept 4 2025, 12:00",
                "end": "sept 18 2025, 11:59",
			},
            			{
				"name": "Score Attack VS Sandbox Witch!",
                "start": "sept 8 2025, 12:00",
                "end": "sept 22 2025, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
			"【Live Stream】Half Anniversary Coming Soon! Latest Information SP",
			"【もうすぐHalf Anniversary！最新情報SP】"
        ],
        "image": [
            "imgs/exedra/events00/live-stream.png"
        ],
        "column": 0,
        "priority": 4,
        "timers": [
			{
				"name": "youtube.com/watch?v=w6BVLx-Nu6U",
                "start": "Sept 16 2025, 20:00",
                "end": "sept 16 2025, 21:00",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
            "Magia Record Part 1 Complete Celebration Missions",
			"『「マギアレコード編 第1部 完結記念ミッション』"
        ],
        "image": [
			"imgs/exedra/camp/magireco01.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "",
                "start": "aug 28 2025, 12:00",
                "end": "sept 18 2025, 11:59",
			}
        ]
    },
       	{
        "type": "Event",
        "title": [
			"【Story Event】Defying Destiny: Forbidden Cards Call",
			"『調整屋さんの事件簿５ 不可視のエピファニー』"
        ],
        "image": [
            "imgs/exedra/events00/mel.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				"name": "",
                "start": "sept 18 2025, 12:00",
                "end": "oct 2 2025, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
			"【Story Event】The Rumored Temp Counselor",
			"『ウワサのあの子は臨時相談員!?』"
        ],
        "image": [
            "imgs/exedra/events00/temp.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				"name": "",
                "start": "sept 8 2025, 12:00",
                "end": "sept 22 2025, 11:59",
			},
        ]
    },
		{
        "type": "Event",
        "title": [
			"Happy Birthday Iroha!",
			"『いろはの誕生日おめでとう』"
        ],
        "image": [
            "imgs/exedra/other/iroha-birth.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				"name": "In Game Story & Login Bonus",
                "start": "aug 22 2025, 00:00",
                "end": "aug 28 2025, 23:59",
			}
        ]
    },
    	{
        "type": "Event",
        "title": [
            "【Campaign】100-Day Fest Part 2: 10 Major Campaigns!",
			"『まどドラ100日感謝祭 10大キャンペーン』"
        ],
        "image": [
			"imgs/exedra/events00/hundo02.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Login Bonus",
                "start": "july 16 2025, 12:00",
                "end": "july 31 2025, 11:59",
			},
			{
				name: "One Per Day Free 10-Draw Fate Weave",
                "start": "july 16 2025, 12:00",
                "end": "aug 19 2025, 11:59"
			},
			{
				name: "100-Day Fest Pt. 2 Main Quest Support Missions",
                "start": "july 16 2025, 12:00",
                "end": "aug 19 2025, 11:59"
			},
			{
				name: "Core & Orb Login Bonus",
                "start": "july 16 2025, 12:00",
                "end": "aug 19 2025, 11:59"
			},
			{
				name: "100-Day Fest Reward Increase",
                "start": "july 16 2025, 12:00",
                "end": "aug 19 2025, 11:59"
			},
			{
				name: "100-Day Fest Half QP",
                "start": "july 16 2025, 12:00",
                "end": "july 31 2025, 11:59"
			},
			{
				name: "100-Day Fest Missions Part 1",
                "start": "july 16 2025, 12:00",
                "end": "july 23 2025, 11:59"
			},
			{
				name: "100-Day Fest Missions Part 2",
                "start": "july 23 2025, 12:00",
                "end": "july 31 2025, 11:59"
			},
            {
				name: "Main Quest Addition Login Bonus (Scene 0)",
                "start": "july 23 2025, 12:00",
                "end": "aug 06 2025, 11:59"
			},
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
            "Magia Day 2025 -Half Anniversary-",
			"『「Magia Day 2025 -Half Anniversary-』"
        ],
        "image": [
			"imgs/exedra/other/magia-day.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "madoka-exedra.com/magiaday2025",
                "start": "sept 28 2025, 16:00",
                "end": "sept 28 2025, 17:59",
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
		type: "Other",
		title: [
		"Link Raid",
		"『リンクレイド』"
		],
		image: [
            "imgs/exedra/other/link-raid.png"
        ],
		column: 2,
		priority: 0,
		timers: [
			{
				name: "Season 1",
				start: "aug 28 2025, 12:00",
				end: "sep 11 2025, 11:59",
			},
			{
				name: "Gold & Silver Medal Shop",
				start: "aug 28 2025, 12:00",
				end: "Sept 15 2025, 11:59",
			},
            			{
				name: "Season 2 - Commoner's Horse",
				start: "sept 11 2025, 12:00",
				end: "sept 25 2025, 11:59",
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
				name: "Season 13",
				start: "sept 15 2025, 12:00",
				end: "sep 29 2025, 4:59",
			},
			{
				name: "Match Medal Shop - September",
				start: "Sept 01 2025, 5:00",
				end: "Oct 1 2025, 4:59",
			},
						{
				name: "Match Medal Shop - July",
				start: "july 01 2025, 5:00",
				end: "aug 1 2025, 4:59",
			},
		]
	},
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
				name: "Link Raid Packs",
				start: "sept 9 2025, 12:00",
				end: "sept 21 2025, 11:59"
			},
            			{
				name: "Training Spree Packs ",
                "start": "sept 9 2025, 12:00",
                "end": "sept 30 2025, 11:59",
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
				name: "The Rumored Temp Counselor",
                "start": "sept 8 2025, 12:00",
                "end": "sept 23 2025, 11:59",
			},
            {
				name: "Archive Medals Reset",
                "start": "sept 1 2025, 12:00",
                "end": "Oct 1 2025, 4:59",
			},
                        {
				name: "Steady Steps Reset",
                "start": "sept 1 2025, 12:00",
                "end": "Oct 1 2025, 4:59",
			},
                                    {
				name: "The case files of the Coordinator 5",
                "start": "aug 28 2025, 12:00",
                "end": "sept 12 2025, 11:59",
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
			"【FREE】One Free Magia Fate Weave 10-Draw",
            "『マギアガチャ10連1回無料』"
        ],
        "image": [
            "imgs/exedra/gacha00/free-24.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "24 Hours Only!🪄",
                "start": "aug 31 2025, 12:00",
                "end": "sept 1 2025, 11:59",
                extraPriority: 1000
            },
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"【FREE】One Per Day Free 10-Draw Fate Weave",
            "『最大100連！1日1回無料10連ガチャ』"
        ],
        "image": [
            "imgs/exedra/gacha00/free-10.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "100 Pulls Total Between The Dates",
                "start": "july 16 2025, 12:00",
                "end": "aug 19 2025, 11:59",
                // extraPriority: 100
            },
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【MagiReco Celebration】1 Per Day Free Fate Weave",
            "『「マギアレコード編  第1部」完結記念 1日1回無料ガチャ』"
        ],
        "image": [
            "imgs/exedra/gacha00/free.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "",
                "start": "aug 28 2025, 12:00",
                "end": "sept 28 2025, 11:59",
               // extraPriority: 1000
            }
        ]
    },
   	{
        "type": "Gacha",
        "title": [
			"【Unlimted New】Ui Tamaki",
            "『[ルーチェ・スペランツァー] 環うい』"
        ],
        "image": [
            "imgs/exedra/gacha00/ui.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "[Luce della Speranza]  Dark Buffer",
                "start": "aug 28 2025, 12:00",
                "end": "sept 11 2025, 11:59",
            //    extraPriority: 1000
            }
        ]
    },
       	{
        "type": "Gacha",
        "title": [
			"【Unlimted New】Eternal Sakura",
            "『[刻み込む桜の物語] 万年桜のウワサ』"
        ],
        "image": [
            "imgs/exedra/gacha00/sakurako.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "[A Tale of Cherry Blossoms] Aqua Attacker",
                "start": "sept 8 2025, 12:00",
                "end": "sept 22 2025, 11:59",
            //    extraPriority: 1000
            }
        ]
    },
    	{
        "type": "Gacha",
        "title": [
			"【Featured】Mel Anna",
            "『[漆黒のアルカナ] 安名メル』"
        ],
        "image": [
            "imgs/exedra/gacha00/mel.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Tenebrous Arcana",
                "start": "sept 18 2025, 12:00",
                "end": "oct 02 2025, 11:59"
            //    extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
		    "【Link Raid Celebration】Showcase Fate Weave",
            "『リンクレイド実装記念 無属性フィーチャーガチャ』"
        ],
        "image": [
			"imgs/exedra/gacha00/feat-link.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Dark - [Vampire Fang] [Cherry Blizzard] [Doppel of Silence]",
                "start": "sept 5 2025, 12:00",
                "end": "sept 9 2025, 11:59",
            },
            {
                name: "Flame -[Flame Waltz] [Kugatachi] [Universe's Edge]",
                "start": "sept 9 2025, 12:00",
                "end": "sept 13 2025, 11:59",
            },
            {
                name: "Forest - [Tiro Finale] [Folter Gefängnis] [Judgement Earth]",
                "start": "sept 13 2025, 12:00",
                "end": "sept 17 2025, 11:59",
            },
            {
                name: "Light - [Hollow Woman] [Cherry Ballad] [Oracle Ray]",
                "start": "sept 17 2025, 12:00",
                "end": "sept 21 2025, 11:59",
            },
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
