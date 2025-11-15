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
				name: "Halloween - 100 Stones a day for 10 days",
                "start": "oct 30 2025, 12:00",
                "end": "nov 25 2025, 11:59",
			},
            {
				name: "Scene 0 Finale Countdown",
                "start": "nov 8 2025, 12:00",
                "end": "nov 18 2025, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
            "Limited Time Missions",
			"『限定ミッション』"
        ],
        "image": [
			"imgs/exedra/other/missions.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
        	{
				name: "Halloween Missions Part 1",
                "start": "oct 30 2025, 12:00",
                "end": "nov 12 2025, 11:59",
			},
            {
				name: "Halloween Missions Part 2",
                "start": "nov 12 2025, 12:00",
                "end": "nov 25 2025, 11:59",
			},
            {
				name: "Main Quest Support Missions",
                "start": "nov 18 2025, 12:00",
                "end": "dec 3 2025, 11:59",
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
				"name": "Score Attack【VS Candy Witch】",
                "start": "oct 30 2025, 12:00",
                "end": "nov 25 2025, 11:59"
			},
            {
				name: "Tower | Mirror Layers 66-70",
                "start": "nov 6 2025, 12:00",
                "end": "nov 20 2025, 11:59",
			},
            {
				"name": "Score Attack【VS Artist Witch】",
                "start": "nov 18 2025, 12:00",
                "end": "dec 3 2025, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
			"【Live Stream】Halloween Campaign Latest Information SP",
			"【ハロウィンキャンペーン最新情報SP】"
        ],
        "image": [
            "imgs/exedra/events00/live-stream.png"
        ],
        "column": 0,
        "priority": 4,
        "timers": [
			{
				"name": "youtube.com/live/SsAbvpZgyko",
                "start": "Oct 28 2025, 20:00",
                "end": "Oct 28 2025, 21:00",
			},
        ]
    },
        	{
        "type": "Event",
        "title": [
			"【Story Event】Crescent Memoria Part 1",
			"『Crescent Memoria』第1弾"
        ],
        "image": [
            "imgs/exedra/anni/cresmoon.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "",
                "start": "oct 20 2025, 12:00",
                "end": "nov 03 2025, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
            "【Story Event】Scene 0 Part II ",
			"『scene0 中編 開幕』"
        ],
        "image": [
			"imgs/exedra/events00/scene02.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Story Event",
                "start": "sept 18 2025, 12:00",
                "end": "oct 02 2025, 11:59",
			},
            			{
				name: "Release Celebration Missions",
                "start": "sept 18 2025, 12:00",
                "end": "oct 02 2025, 11:59",
			}
        ]
    },
       	{
        "type": "Event",
        "title": [
			"【Story Event】Forever Halloween Night",
			"『ハロウィンナイトは永遠に  前編』"
        ],
        "image": [
            "imgs/exedra/events00/halloween00.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "Part 1",
                "start": "oct 30 2025, 12:00",
                "end": "nov 25 2025, 11:59"
			},
            			{
				"name": "Part 2",
                "start": "nov 6 2025, 12:00",
                "end": "nov 25 2025, 11:59"
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
            "【Campaign】Half Anniversary Campaign & Missions!",
			"『ハーフアニバーサリー記念 50大キャンペーン』"
        ],
        "image": [
			"imgs/exedra/anni/anni-fifty.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "One Per Day Free 10-Draw Fate Weave",
                "start": "sept 29 2025, 20:00",
                "end": "oct 31 2025, 11:59",
			},
            {
				name: "Madoka's Birthday Story Event",
                "start": "oct 03 2025, 00:00",
                "end": "oct 10 2025, 23:59",
			},
			{
				name: "Magia Day Half Anniversary Celebration Gift Distribution",
                "start": "sept 29 2025, 20:00",
                "end": "oct 31 2025, 11:59",
			},
        	{
				name: "Gallery Update Heartsand Gift Distribution",
                "start": "sept 29 2025, 20:00",
                "end": "oct 31 2025, 11:59",
			},
			{
				name: "Upgrade Quest Fest Half QP",
                "start": "sept 29 2025, 17:00",
                "end": "oct 14 2025, 11:59",
			},
            {
				name: "Invite-a-Friend",
                "start": "sept 29 2025, 20:00",
                "end": "oct 31 2025, 11:59",
			},
            {
				name: "Welcome Back Campaign",
                "start": "sept 29 2025, 20:00",
                "end": "oct 31 2025, 11:59",
			},
            {
				name: "Magia Day 2025 Announcement Campaign Goal",
                "start": "sept 29 2025, 20:00",
                "end": "oct 31 2025, 11:59",
			},
        	{
				name: "Half Anniversary Missions Part 1",
                "start": "sept 29 2025, 20:00",
                "end": "oct 09 2025, 11:59",
			},
			{
				name: "Half Anniversary Missions Part 2",
                "start": "oct 09 2025, 12:00",
                "end": "oct 20 2025, 11:59",
			},
            {
				name: "Half Anniversary Missions Part 3",
                "start": "oct 20 2025, 12:00",
                "end": "oct 31 2025, 11:59",
			},
        ]
    },
	{
        "type": "Event",
        "title": [
            "Puella Magi Madoka Magica: Scene 0 Finale",
			"『魔法少女まどか☆マギカ scene0 完結編』"
        ],
        "image": [
			"imgs/exedra/events00/scene-finale.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Main Quest Addition & Event",
                "start": "nov 18 2025, 12:00",
                "end": "dec 3 2025, 11:59",
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
				name: "Uwasa of the Chelation Land Ferris Wheel",
				start: "nov 6 2025, 12:00",
				end: "nov 20 2025, 11:59",
			},
			{
				name: "Gold & Silver Medal Shop - Oct",
				start: "Oct 01 2025, 5:00",
				end: "Nov 1 2025, 4:59",
			},
			{
				name: "Gold & Silver Medal Shop - Nov",
				start: "Nov 01 2025, 5:00",
				end: "Dec 1 2025, 4:59",
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
				name: "Season 17",
				start: "nov 10 2025, 12:00",
				end: "nov 24 2025, 4:59",
			},
			{
				name: "Match Medal Shop - November",
				start: "Nov 01 2025, 5:00",
				end: "Dec 1 2025, 4:59",
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
				name: "Halloween Celebration Packs",
                "start": "oct 30 2025, 12:00",
                "end": "nov 25 2025, 23:59",
			},
			{
				name: "Training Spree Packs",
                "start": "oct 31 2025, 12:00",
                "end": "nov 30 2025, 11:59",
			},
            {
				name: "Premium Bonus Sale",
                "start": "sept 29 2025, 20:00",
                "end": "oct 31 2025, 11:59",
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
				name: "Forever Halloween Part 1",
                "start": "oct 30 2025, 12:00",
                "end": "nov 26 2025, 11:59",
			},
            {
				name: "Forever Halloween Part 2",
                "start": "nov 6 2025, 12:00",
                "end": "nov 26 2025, 11:59",
			},
            {
				name: "Half Anniversary Medals Trader",
                "start": "sept 29 2025, 20:00",
                "end": "oct 31 2025, 11:59",
			},
            {
				name: "Archive Medals Reset",
                "start": "sept 29 2025, 20:00",
                "end": "nov 1 2025, 4:59",
			},
                        {
				name: "Steady Steps Reset",
                "start": "sept 29 2025, 20:00",
                "end": "nov 1 2025, 4:59",
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
			"imgs/exedra/other/maintenance.png"
		],
        column: 0,
        priority: 0,
        timers: [
			{
                name: "Maintenance",
				start: "nov 4 2025, 14:00",
				end: "nov 4 2025, 14:59"
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
                "start": "oct 31 2025, 12:00",
                "end": "nov 1 2025, 11:59",
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
            "imgs/exedra/anni/100.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "100 Pulls Total Between The Dates",
                "start": "sept 29 2025, 20:00",
                "end": "oct 31 2025, 11:59",
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
			"【Exclusive】Homura Akemi (Ribbon) Paid and Free",
            "『暁美ほむら（リボン）ガチャ』"
        ],
        "image": [
            "imgs/exedra/anni/homu.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Dark Art Dominion (Void Attacker)",
                "start": "sept 29 2025, 20:00",
                "end": "oct 31 2025, 11:59",
            //    extraPriority: 1000
            }
        ]
    },
        	{
        "type": "Gacha",
        "title": [
			"【Exclusive New】 Alina (Halloween)",
            "『【新限定】 [Marigold Dadaism] アリナ・グレイ』"
        ],
        "image": [
            "imgs/exedra/exc/alina_halloween.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Marigold Dadaism | Flame Attacker",
                "start": "nov 6 2025, 12:00",
                "end": "nov 25 2025, 11:59"
            //    extraPriority: 1000
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Exclusive New】Mami Tomoe (Halloween)",
            "『【新限定】 巴マミ(ハロウィン)』"
        ],
        "image": [
            "imgs/exedra/exc/mami_halloween.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Babe-O'-Lantern | Dark Debuffer",
                "start": "oct 30 2025, 12:00",
                "end": "nov 25 2025, 11:59"
            //    extraPriority: 1000
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Unlimited New】[Groundhog Daze] Mabayu Aki",
            "『  [解はデジャ・ブ]愛生まばゆ』"
        ],
        "image": [
            "imgs/exedra/exc/mabayu02.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Void Breaker",
                "start": "nov 18 2025, 12:00",
                "end": "dec 3 2025, 11:59"
            //    extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
		    "【Featuted】Showcase Fate Weave",
            "『放送記念 フィーチャーガチャ 』"
        ],
        "image": [
			"imgs/exedra/gacha00/showcase.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: " [Hollow Woman] Mabayu Aki [Baldamente Fortissimo] Sayaka Miki",
                "start": "sept 18 2025, 12:00",
                "end": "oct 02 2025, 11:59",
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
       	{
        "type": "Gacha",
        "title": [
			"【Free】PMMM Beginnings / Eternal Celebration",
            "『 魔法少女まどか☆マギカTV Edition 放送記念』"
        ],
        "image": [
            "imgs/exedra/anni/tv.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Week 3 Free Pull & Showcase",
                "start": "oct 26 2025, 17:30",
                "end": "oct 28 2025, 23:59",
            },
            {
                name: "Week 4 Free Pull & Showcase",
                "start": "nov 2 2025, 17:30",
                "end": "nov 4 2025, 23:59",
            },
            {
                name: "Week 5 Free Pull & Showcase",
                "start": "nov 9 2025, 17:30",
                "end": "nov 11 2025, 23:59",
            },
            {
                name: "Week 6 Free Pull & Showcase",
                "start": "nov 16 2025, 17:30",
                "end": "nov 18 2025, 23:59",
            },
            {
                name: "Week 7 Free Pull & Showcase",
                "start": "nov 23 2025, 17:30",
                "end": "nov 25 2025, 23:59",
            },
            {
                name: "Week 8 Free Pull & Showcase",
                "start": "nov 30 2025, 17:30",
                "end": "dec 2 2025, 23:59",
            },
            {
                name: "Week 9 Free Pull & Showcase",
                "start": "dec 7 2025, 17:30",
                "end": "dec 9 2025, 23:59",
            },
            {
                name: "Week 10 Free Pull & Showcase",
                "start": "dec 14 2025, 17:30",
                "end": "dec 16 2025, 23:59",
            },
            {
                name: "Week 11 Free Pull & Showcase",
                "start": "dec 21 2025, 17:30",
                "end": "dec 23 2025, 23:59",
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
