var releaseDate = "march 26 2025, 04:00";
var possibleNextAnnouncementDate = "april 23 2026, 20:00";
var nextAnniversary = "march 27 2027, 04:00";
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
			"『ログインボーナス』"
        ],
        "image": [
			"imgs/exedra/login/login.png"
        ],
        "column": 0,
        "priority": 7,
        "timers": [
            {
				name: "Exedra Quest Chapter 1 Release Bonus",
                "start": "June 16 2026, 12:00",
                "end": "july 2 2026, 11:59",
			},
            {
				name: "Sizzling Summer Campaign",
                "start": "June 29 2026, 12:00",
                "end": "july 31 2026, 11:59",
			},
            {
				name: "Sizzling Summer 1st Login 3,000 Magica Stones",
                "start": "June 29 2026, 12:00",
                "end": "july 13 2026, 11:59",
			},
        ]
    },
        	{
        "type": "Event",
        "title": [
            "Limited Time Daily Missions",
			"『限定デイリーミッション』"
        ],
        "image": [
			"imgs/exedra/other/limited-day.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
            {
				name: "Summer Splash Daily Missions",
               "start": "may 29 2026, 12:00",
                "end": "june 30 2026, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
			"Exedraw!",
			"『エクセドラ』"
        ],
        "image": [
            "imgs/exedra/events00/lotto00.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
            {
				name: "Ticket Acquisition",
                "start": "march 27 2026, 22:00",
                "end": "april 22 2026, 4:59"
			},
            {
				name: "Draw Period",
                "start": "april 22 2026, 5:00",
                "end": "april 24 2026, 11:59"
			},
            {
				name: "Live Stream",
                "start": "april 23 2026, 20:00",
                "end": "april 23 2026, 22:00",
			},
            {
				name: "Prize Claim Period",
                "start": "april 24 2026, 12:00",
                "end": "april 30 2026, 11:59"
			},
            {
				name: "Special Login Bonus",
                "start": "april 24 2026, 5:00",
                "end": "may 1 2026, 11:59"
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
            "Limited Time Missions and Events",
			"『限定ミッション』"
        ],
        "image": [
			"imgs/exedra/other/missions.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
            {
				name: "Exedra Crisis Play Missions",
				start: "july 1 2026, 12:00",
				end: "july 8 2026, 23:59",
			},
            {
				name: "Hotel Pool Rescue Medal Missions",
                "start": "June 29 2026, 12:00",
                "end": "July 31 2026, 11:59",
			},
            {
				name: "Finding Our Formula Medal Missions",
                "start": "June 29 2026, 12:00",
                "end": "July 31 2026, 11:59",
			},
            {
				name: "Link Raid Update Campaign",
                "start": "June 16 2026, 12:00",
                "end": "July 2 2026, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
            "Mini Events",
			"『ミニイベント』"
        ],
        "image": [
			"imgs/exedra/other/mini-events.png"
        ],
        "column": 0,
        "priority": 6,
        "timers": [
        	{
				name: "Sizzling Summer Bingo Part 1",
                "start": "June 29 2026, 12:00",
                "end": "july 31 2026, 11:59",
			},
        	{
				name: "Sizzling Summer Bingo Part 2",
                "start": "July 10 2026, 12:00",
                "end": "july 31 2026, 11:59",
			},
            {
				name: "Portraits of the Past and Promise",
                "start": "mar 27 2026, 00:00",
                "end": "april 30 2026, 11:59",
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
        "priority": 3,
        "timers": [
             {
				name: "Tower | Mirror Layers 101-105",
                "start": "june 22 2026, 12:00",
                "end": "july 6 2026, 11:59",
			},
			{
				"name": "Score Attack【VS Dog Witch】",
                "start": "June 16 2026, 12:00",
                "end": "june 30 2026, 11:59",
			},
            {
				"name": "Score Attack【VS Critic Witch】",
                "start": "march 27 2026, 22:00",
                "end": "April 30 2026, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
			"【Live Stream】Madoka Magica Summer Campaign! Special Realease Info",
			"【まどドラサマーキャンペーン！情報解禁SP】"
        ],
        "image": [
            "imgs/exedra/events00/live-stream.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				"name": "https://www.youtube.com/watch?v=_JGpHjGpaw8",
                "start": "june 28 2026, 20:00",
                "end": "june 28 2026, 21:00",
			},
        ]
    },
    {
        "type": "Event",
        "title": [
			"【Story Event】Hotel Pool Rescue",
			"『ホテルプールの危機を救え！ プール掃除編』"
        ],
        "image": [
            "imgs/exedra/story/pool.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				"name": "Part 1",
                "start": "June 29 2026, 12:00",
                "end": "July 31 2026, 11:59",
			},
			{
				"name": "Part 2",
                "start": "april 14 2026, 12:00",
                "end": "may 05 2026, 11:59",
			},
        ]
        },
    {
        "type": "Event",
        "title": [
			"【Story Event】Finding Our Formula",
			"『アタシとあーしの方程式』"
        ],
        "image": [
            "imgs/exedra/story/formula.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				"name": "",
                "start": "June 29 2026, 12:00",
                "end": "July 31 2026, 11:59",
			},
			{
				"name": "Part 2",
                "start": "June 16 2026, 12:00",
                "end": "june 30 2026, 11:59",
			},
        ]
        },
    {
        "type": "Event",
        "title": [
			"【Story Event】Darc Magica Part II Act I",
			"『魔法少女たると☆マギカ』"
        ],
        "image": [
            "imgs/exedra/events00/darc002.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "Act 1",
                "start": "April 24 2026, 12:00",
                "end": "May 20 2026, 11:59"
			},
			{
				"name": "Part 2",
                "start": "april 30 2026, 12:00",
                "end": "may 20 2026, 11:59",
			},
        ]
        },
       	{
        "type": "Event",
        "title": [
			"【Story Event】Mami Tomoe: A Doppel Tale",
			"『新ストーリー これからも続く物語』"
        ],
        "image": [
            "imgs/exedra/events00/mami-dopple.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				"name": "",
                "start": "may 20 2026, 12:00",
                "end": "June 03 2026, 11:59",
			},
        ]
    },
       	{
        "type": "Event",
        "title": [
			"【Story Event】Rise of the Waning Moon",
			"『聖マギカ学園のクリスマス』"
        ],
        "image": [
            "imgs/exedra/events00/waning.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				"name": "",
                "start": "may 11 2026, 12:00",
                "end": "may 25 2026, 11:59",
			}
        ]
    },
    	{
        "type": "Event",
        "title": [
            "【Campaign】1st Anniversary Campaign!",
			"『1st Anniversary記念キャンペーン』"
        ],
        "image": [
			"imgs/exedra/events00/first.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            // {
			// 	name: "Rebellion Release Celebration",
            //     "start": "march 27 2026, 22:00",
            //     "end": "april 22 2026, 11:59"
			// },
            {
				name: "After Party Missions",
                "start": "April 24 2026, 12:00",
                "end": "May 20 2026, 11:59"
			},
            {
				name: "The Lighthouse Main Story Prologue",
                "start": "march 27 2026, 22:00",
                "end": "april 1 2026, 12:00"
			},
            {
				name: "Buffs Applied to Main Quest",
                "start": "march 27 2026, 22:00",
                "end": "april 30 2026, 11:59"
			},
			{
				name: "Upgrade Quest Fest Half QP",
                "start": "April 1 2026, 5:00",
                "end": "april 14 2026, 11:59",
			},
            {
				name: "Invite-a-Friend",
                "start": "march 27 2026, 22:00",
                "end": "april 30 2026, 11:59",
			},
            {
				name: "Welcome Back Campaign",
                "start": "march 27 2026, 22:00",
                "end": "april 30 2026, 11:59",
			},
            {
				name: "1st Anniversary Portrait Gift",
                "start": "march 27 2026, 22:00",
                "end": "april 30 2026, 11:59"
			},
        	{
				name: "1st Anniversary Missions Part 1",
                "start": "march 27 2026, 22:00",
                "end": "april 14 2026, 11:59",
			},
        	{
				name: "1st Anniversary Missions Part 2",
                "start": "april 14 2026, 12:00",
                "end": "april 30 2026, 11:59",
			},
            {
				name: "Magia Exedraw Draw Period",
                "start": "april 22 2026, 5:00",
                "end": "april 24 2026, 11:59"
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
	{
		type: "Other",
		title: [
		"Exedra Crisis",
		"『エクセドラクライシス』"
		],
		image: [
            "imgs/exedra/other/ex-crisis.png"
        ],
		column: 2,
		priority: 0,
		timers: [
			{
				name: "Dog Witch",
				start: "july 1 2026, 12:00",
				end: "july 8 2026, 23:59",
			},
			{
				name: "Ranking Results Viewability",
                "start": "july 9 2026, 00:00",
                "end": "july 13 2026, 4:59",
			},
			{
				name: "Trader",
                "start": "july 1 2026, 12:00",
                "end": "july 20 2026, 11:59",
			},
		]
	            },
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
				name: "Uwasa of the Commoner's Horse",
				start: "June 16 2026, 12:00",
				end: "July 2 2026, 11:59",
			},
            {
				name: "Sandbox Witch (end date not final)",
				start: "July 2 2026, 12:00",
				end: "july 16 2026, 11:59",
			},
            {
				name: "Kumanoko no Yume",
				start: "may 21 2026, 12:00",
				end: "june 04 2026, 11:59",
			},
            {
				name: "Walpurgisnacht Descends",
				start: "April 24 2026, 12:00",
				end: "may 07 2026, 11:59",
			},
            {
				name: "Ai Chan",
				start: "march 26 2026, 12:00",
				end: "april 09 2026, 11:59",
			},
			{
				name: "Chelation Land Ferris Wheel",
				start: "june 4 2026, 12:00",
				end: "june 16 2026, 4:59",
			},
            {
				name: "Spindle Witch",
				start: "may 07 2026, 12:00",
				end: "may 21 2026, 11:59",
			},
			{
				name: "Gold & Silver Medal Shop - June",
                "start": "June 1 2026, 5:00",
                "end": "July 1 2026, 4:59",
			},
			{
				name: "Gold & Silver Medal Shop - July",
                "start": "july 1 2026, 5:00",
                "end": "aug 1 2026, 4:59",
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
				name: "Season 32",
				start: "june 8 2026, 12:00",
				end: "june 22 2026, 23:59",
			},
            {
				name: "Season 33",
				start: "june 22 2026, 12:00",
				end: "july 05 2026, 23:59",
			},
			{
				name: "Season 34",
				start: "july 06 2026, 12:00",
				end: "july 19 2026, 23:59",
			},
			{
				name: "Match Medal Shop - June",
                "start": "June 1 2026, 5:00",
                "end": "July 1 2026, 4:59",
			},
			{
				name: "Match Medal Shop - July",
                "start": "july 1 2026, 5:00",
                "end": "aug 1 2026, 4:59",
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
				name: "Training Spree Packs",
                "start": "June 29 2026, 12:00",
                "end": "july 31 2026, 11:59",
			},
			{
				name: "Sizzling Summer Packs | Iroha",
                "start": "June 29 2026, 12:00",
                "end": "july 31 2026, 11:59",
			},
			{
				name: "Summer Training Spree Packs",
                "start": "may 29 2026, 12:00",
                "end": "june 30 2026, 11:59"
			},
			{
				name: "Premium Bonus Sale",
                "start": "march 27 2026, 22:00",
                "end": "April 30 2026, 11:59",
			},
            {
				name: "Web shop exclusive Super Training Special Packs",
                "start": "jan 1 2026, 00:00",
                "end": "jan 31 2026, 11:59",
			},
                        {
				name: "Lucky Bags",
                "start": "jan 1 2026, 00:00",
                "end": "jan 22 2026, 11:59",
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
				name: "Finding Our Formula",
                "start": "June 29 2026, 12:00",
                "end": "aug 1 2026, 11:59",
			},
            {
				name: "Hotel Pool Rescue",
                "start": "June 29 2026, 12:00",
                "end": "aug 1 2026, 11:59",
			},
            {
				name: "Darc Magica Part II Act II",
                "start": "April 30 2026, 12:00",
                "end": "May 21 2026, 11:59"
			},
            {
				name: "Mami Tomoe: A Doppel Tale",
                "start": "may 20 2026, 12:00",
                "end": "June 04 2026, 11:59",
			},
            {
				name: "1st Anniversary Medal Trader",
                "start": "march 27 2026, 22:00",
                "end": "may 01 2026, 11:59",
			},
        	{
				name: "Crescent Memoria Part 3",
                "start": "march 27 2026, 22:00",
                "end": "may 1 2026, 11:59"
			},
        	{
				name: "Sumire's Flower",
                "start": "march 27 2026, 22:00",
                "end": "may 1 2026, 11:59"
			},
            {
				name: "Friend Medal Shop Reset",
                "start": "july 1 2026, 5:00",
                "end": "aug 1 2026, 4:59",
			},
            {
				name: "Archive Medals Shop Reset",
                "start": "july 1 2026, 5:00",
                "end": "aug 1 2026, 4:59",
			},
             {
				name: "Steady Steps Reset",
                "start": "july 1 2026, 5:00",
                "end": "aug 1 2026, 4:59",
			},

		]
	},
	{
		type: "Other",
		title: [
		"Fate Weave Trader Medals",
		"「ガチャコインのショップ」"
		],
		image: [
            "imgs/exedra/other/coin-shop.png"
        ],
		column: 2,
		priority: 3,
		timers: [
			{
                name: "Hinano Miyako and Emiri Kisaki",
                "start": "June 29 2026, 12:00",
                "end": "aug 1 2026, 11:59",
			},
            {
				name: "Sizzling Summer Featured (Iroha & Yachan)",
                "start": "June 29 2026, 12:00",
                "end": "aug 1 2026, 11:59"
			},
			{
                name: "Melissa & Liz ",
                "start": "april 24 2026, 12:00",
                "end": "may 21 2026, 11:59",
			},
			{
				name: "[La Lumière] Darc",
                "start": "march 10 2026, 12:00",
                "end": "march 29 2026, 11:59",
			},
			{
				name: "[La Porte du Paradis] Darc (Final)",
                "start": "april 30 2026, 12:00",
                "end": "may 21 2026, 11:59",
			},
            {
				name: "Showcase Fate Weave",
                "start": "april 30 2026, 12:00",
                "end": "may 12 2026, 11:59"
			},
            {
				name: "1st Anniversary Kioku Medals",
                "start": "march 27 2026, 22:00",
                "end": "may 01 2026, 11:59",
			},
            {
				name: "Sumire & Fuka",
                "start": "march 27 2026, 22:00",
                "end": "may 01 2026, 11:59",
			},
            {
				name: "5★ Kioku Trading Medals",
                "start": "march 27 2026, 22:00",
                "end": "may 01 2026, 11:59",
			},
            {
				name: "Sweet Delights Kyoko & Mami",
                "start": "feb 17 2026, 12:00",
                "end": "mar 19 2026, 11:59",
			},
		]
	},
	{
		type: "Other",
		title: [
		"Style Ticket Trader",
		"「スタイルチケットイベント」"
		],
		image: [
            "imgs/exedra/other/style-ticket.png"
        ],
		column: 2,
		priority: 3,
		timers: [	
            {
				name: "Limited Time Items - Homura",
                "start": "April 24 2026, 12:00",
                "end": "May 20 2026, 11:59"
			},
            {
				name: "Limited Time Items",
                "start": "april 14 2026, 12:00",
                "end": "may 05 2026, 11:59",
			},
            {
				name: "Cresent Memoria - Sumire",
                "start": "march 27 2026, 22:00",
                "end": "may 01 2026, 11:59",
			},
            {
				name: "Homura Rebellion Uniform",
                "start": "feb 06 2026, 12:00",
                "end": "mar 1 2026, 11:59"
			},
		]
	},
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
        priority: 10,
        timers: [
            {
                name: "Maintenance",
				start: "march 17 2026, 15:00",
				end: "march 17 2026, 16:59"
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
        "priority": 4,
        "timers": [
            {
                name: "24 Hours Only!🪄",
                "start": "may 31 2026, 12:00",
                "end": "june 1 2026, 11:59",
                extraPriority: 1000
            },
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"【FREE】One Per Day Free Fate Weave",
            "『1日1回無料ガチャ』"
        ],
        "image": [
            "imgs/exedra/feat/free.png",
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "Up to 60 Draws",
                "start": "may 29 2026, 12:00",
                "end": "june 30 2026, 11:59",
                // extraPriority: 100
            },
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【1st Anni】Up to 150 Draws! One Per Day Free 10-Draw Fate Weave",
            "『最大150連！1日1回無料10連ガチャ』"
        ],
        "image": [
            "imgs/exedra/gacha00/free.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "",
                "start": "march 27 2026, 22:00",
                "end": "april 30 2026, 11:59",
                extraPriority: 1000
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Exclusive New】[Evoluzione Presente] Iroha Tamaki",
            "『【限定★5 】[エヴォルツィオーネ・プレゼンテ]環いろは』"
        ],
        "image": [
            "imgs/exedra/fate/swim-iro.png",
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "Free Gems",
                "start": "June 29 2026, 12:00",
                "end": "July 31 2026, 11:59",
            },
            {
                name: "Paid Step Up",
                "start": "June 29 2026, 12:00",
                "end": "July 31 2026, 11:59",
            },
        ]
     },
    {
        "type": "Gacha",
        "title": [
			"【New】Hinano Miyako and Emiri Kisaki",
            "『【★5 】都ひなのと木崎衣美里』"
        ],
        "image": [
            "imgs/exedra/fate/hinaemi.png",
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "",
                "start": "June 29 2026, 12:00",
                "end": "July 31 2026, 11:59",
            },
            {
                name: "Paid Step Up",
                "start": "june 16 2026, 12:00",
                "end": "june 30 2026, 11:59",
            },
        ]
     },
         	{
        "type": "Gacha",
        "title": [
			"【Unlimited New】[Doppel of Invitations] Mami Tomoe (Doppel)",
            "『新★5キオク[ご招待のドッペル] 巴マミ』"
        ],
        "image": [
            "imgs/exedra/fate/mami-dopple.png",
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "Light Breaker",
                "start": "may 20 2026, 12:00",
                "end": "June 03 2026, 11:59",
            //    extraPriority: 1000
            }
        ]
    },
    	{
        "type": "Gacha",
        "title": [
			"【Unlimited New】[Light of Reckoning] Kanagi Izumi",
            "『新★5キオク 和泉十七夜』"
        ],
        "image": [
            "imgs/exedra/fate/kanagi.png",
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "Featured and Step-up",
                "start": "may 11 2026, 12:00",
                "end": "may 25 2026, 11:59",
               extraPriority: 1000
            }
        ]
    },
    	{
        "type": "Gacha",
        "title": [
			"【Monogatari Series Collab Exclusive】Shinobu Oshino",
            "『〈物語〉シリーズコラボ限定★5忍野忍』"
        ],
        "image": [
            "imgs/exedra/fate/mono01.png",
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "Flame Attacker",
                "start": "april 6 2026, 12:00",
                "end": "may 05 2026, 11:59"
               // extraPriority: 1000
            }
        ]
    },
    	{
        "type": "Gacha",
        "title": [
			"【Monogatari Series Collab Exclusive】Mayoi Hachikuji",
            "『〈物語〉シリーズコラボ限定★5八九寺真宵』"
        ],
        "image": [
            "imgs/exedra/fate/mono00.png",
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "Aqua Defender",
                "start": "april 6 2026, 12:00",
                "end": "may 05 2026, 11:59"
               // extraPriority: 1000
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Unlimited New】 Liz & Melissa",
            "『リズとメリッサ』"
        ],
        "image": [
            "imgs/exedra/fate/darc02.png",
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "[Désintégration] Melissa |  [L'Ombre] Liz ",
                "start": "april 24 2026, 12:00",
                "end": "may 20 2026, 11:59",
            //    extraPriority: 1000
            }
        ]
     },
	{
        "type": "Gacha",
        "title": [
		    "【Paid Only】One 5★ Kioku Guaranteed",
            "『有償限定 ステップアップガチャ』"
        ],
        "image": [
			"imgs/exedra/anni/paid.png",
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "1 Time Only",
                "start": "march 27 2026, 22:00",
                "end": "april 30 2026, 11:59",
            },
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Exclusive Redux】Homura Akemi (Ribbon)",
            "『【限定★5 】暁美ほむら 黒い魔力による制圧"
        ],
        "image": [
            "imgs/exedra/anni/homu.png",
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Dark Art Dominion",
                "start": "april 24 2026, 12:00",
                "end": "may 7 2026, 11:59",
                // extraPriority: 1000
            }
        ]
     },
            	{
        "type": "Gacha",
        "title": [
			"【Exclusive New】🎄[Yuletide Gift] Kyoko Sakura",
            "『【新限定】佐倉杏子(クリスマス)』"
        ],
        "image": [
            "imgs/exedra/exc/xmass-gacha-kyoko.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "First 10 Pull Free!",
                "start": "dec 11 2025, 12:00",
                "end": "dec 31 2025, 11:59"
            },
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Featured】2025 Swimsuit Fateweave",
            "『2025水着キオクピックアップガチャ』"
        ],
        "image": [
            "imgs/exedra/feat/swim.png",
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "",
                "start": "June 5 2026, 12:00",
                "end": "june 30 2026, 11:59"
            //    extraPriority: 1000
            }
        ]
    },
            {
        "type": "Gacha",
        "title": [
			"【Rebellion Campaign】One Per Day Free 10-Draw Fate Weave🌙",
            "『【新編】1日1回無料10連ガチャを開催💫』"
        ],
        "image": [
            "imgs/exedra/gacha00/free.png",
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Perform a 10-draw 10 times to get a 5★ medal",
                "start": "jan 28 2026, 12:00",
                "end": "feb 28 2026, 11:59"
            },
        ]
    },
       	{
        "type": "Gacha",
        "title": [
			"【1st Anniversary】Exclusive Kioku",
            "『【1st Anniversary】限定★5キオク)』"
        ],
        "image": [
            "imgs/exedra/anni/anni01.png",
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "Week 1 Swimsuit ",
                "start": "march 27 2026, 22:00",
                "end": "april 03 2026, 11:59",
            },
            {
                name: "Week 2 Halloween",
                "start": "april 03 2026, 12:00",
                "end": "april 10 2026, 11:59",
            },
            {
                name: "Week 3 Winter Sayaka x Kyoko",
                "start": "april 10 2026, 12:00",
                "end": "april 17 2026, 11:59",
            },
            {
                name: "Week 4 Winter Ren x Rika",
                "start": "april 17 2026, 12:00",
                "end": "april 24 2026, 11:59",
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
