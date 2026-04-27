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
				name: "Darc Magica Finale Celebration",
                "start": "April 24 2026, 12:00",
                "end": "May 20 2026, 11:59"
			},
            {
				name: "Monogatari Celebration Part 1",
                "start": "april 6 2026, 12:00",
                "end": "may 05 2026, 11:59",
			},
            {
				name: "Monogatari Celebration Part 2",
                "start": "april 14 2026, 12:00",
                "end": "may 05 2026, 11:59",
			},
            {
				name: "Monogatari Celebration 1 Time 3,000 Gem Gift",
                "start": "april 6 2026, 12:00",
                "end": "may 05 2026, 11:59",
			},
            {
				name: "1st Anniversary",
                "start": "march 27 2026, 22:00",
                "end": "april 30 2026, 11:59"
			},
            {
				name: "Get 3,000 Magica Stones for your first login!",
                "start": "mar 27 2026, 00:00",
                "end": "april 30 2026, 11:59"
			},
            {
				name: "1st Anniversary Portrait Gift",
                "start": "march 27 2026, 22:00",
                "end": "april 30 2026, 11:59"
			},
            {
				name: "Exedraw Special Login Bonus",
                "start": "april 24 2026, 5:00",
                "end": "may 1 2026, 11:59"
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
				name: "After Party Missions",
                "start": "April 24 2026, 12:00",
                "end": "May 7 2026, 11:59"
			},
            {
				name: "Monogatari Celebration Missions Part 1",
                "start": "april 6 2026, 12:00",
                "end": "may 05 2026, 11:59",
			},
            {
				name: "Monogatari Celebration Missions Part 2",
                "start": "april 14 2026, 12:00",
                "end": "may 05 2026, 11:59",
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
				name: "Magia Et Cetera Lighthouse Stamp Rally",
                "start": "april 1 2026, 00:00",
                "end": "april 8 2026, 23:59",
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
				name: "Tower | Mirror Layers 91-95",
                "start": "april 20 2026, 12:00",
                "end": "may 7 2026, 11:59",
			},
			{
				"name": "Score Attack【VS Bunny Eared Witch】",
                "start": "april 14 2026, 12:00",
                "end": "may 05 2026, 11:59",
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
			"【Live Stream】Exedra News: Golden Week Pre-Broadcast Special]",
			"【 エクセドラ通信 GW直前生放送SP】"
        ],
        "image": [
            "imgs/exedra/events00/live-stream.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				"name": "https://www.youtube.com/watch?v=KWTe-Jlxsno",
                "start": "april 23 2026, 20:00",
                "end": "april 23 2026, 22:00",
			},
        ]
    },
    {
        "type": "Event",
        "title": [
			"【Story Event】Crescent Memoria Part 3 - The Finale",
			"『Crescent Memoria 第3弾』"
        ],
        "image": [
            "imgs/exedra/story/cresent.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "",
                "start": "march 27 2026, 22:00",
                "end": "april 30 2026, 11:59",
			},
			// {
			// 	"name": "Part 2",
            //     "start": "feb 27 2026, 12:00",
            //     "end": "mar 18 2026, 11:59",
			// },
        ]
        },
    {
        "type": "Event",
        "title": [
			"【Story Event】Monogatari Series Collab Labyrinth Story",
			"『～ラビリンス・ストーリー～』"
        ],
        "image": [
            "imgs/exedra/story/mono-story.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				"name": "Part 1",
                "start": "april 6 2026, 12:00",
                "end": "may 05 2026, 11:59",
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
			// {
			// 	"name": "Part 2",
            //     "start": "feb 27 2026, 12:00",
            //     "end": "mar 18 2026, 11:59",
			// },
        ]
        },
       	{
        "type": "Event",
        "title": [
			"【Story Event】Next Act: In Search of an Ordinary Life",
			"『新ストーリー これからも続く物語』"
        ],
        "image": [
            "imgs/exedra/story/me-every-day.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "",
                "start": "jan 19 2026, 12:00",
                "end": "feb 02 2026, 11:59"
			},
        ]
    },
       	{
        "type": "Event",
        "title": [
			"【Story Event】Prayers and Play Keep Sickness Away",
			"『聖マギカ学園のクリスマス』"
        ],
        "image": [
            "imgs/exedra/story/nye-story.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "",
                "start": "jan 1 2026, 00:00",
                "end": "jan 15 2026, 11:59"
			},
            {
				"name": "Part Naughty",
                "start": "dec 11 2025, 12:00",
                "end": "dec 31 2025, 11:59"
			},
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
				name: "Desert Witch",
				start: "april 1 2026, 12:00",
				end: "april 8 2026, 23:59",
			},
			{
				name: "Ranking Results Viewability",
                "start": "april 9 2026, 00:00",
                "end": "April 13 2026, 4:59",
			},
			{
				name: "Trader",
                "start": "april 1 2026, 12:00",
                "end": "April 20 2026, 11:59",
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
				name: "Walpurgisnacht Descends",
				start: "April 24 2026, 12:0",
				end: "may 07 2026, 11:59",
			},
            {
				name: "Ai Chan",
				start: "march 26 2026, 12:00",
				end: "april 09 2026, 11:59",
			},
			{
				name: "Chelation Land Ferris Wheel",
				start: "march 12 2026, 12:00",
				end: "march 26 2026, 11:59",
			},
            {
				name: "Spindle Witch",
				start: "feb 26 2026, 12:00",
				end: "march 12 2026, 11:59",
			},
            {
				name: "Uwasa of the Commoner's Horse",
				start: "april 09 2026, 12:00",
				end: "april 24 2026, 11:59",
			},
			{
				name: "Gold & Silver Medal Shop - April",
                "start": "march 31 2026, 12:00",
                "end": "may 1 2026, 4:59",
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
				name: "Season 29",
				start: "april 27 2026, 12:00",
				end: "may 10 2026, 23:59",
			},
			{
				name: "Match Medal Shop - April",
                "start": "April 1 2026, 5:00",
                "end": "may 1 2026, 4:59",
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
				name: "Monogatari Series Collab Packs",
                "start": "april 6 2026, 12:00",
                "end": "may 05 2026, 11:59",
			},
			{
				name: "Training Spree Packs",
                "start": "feb 27 2026, 12:00",
                "end": "mar 31 2026, 11:59",
			},
			{
				name: "Training Spree Packs",
                "start": "march 27 2026, 22:00",
                "end": "April 30 2026, 11:59",
			},
			{
				name: "1st Anniversary Packs",
                "start": "march 27 2026, 22:00",
                "end": "April 30 2026, 11:59",
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
				name: "Darc Magica Part II Act I",
                "start": "April 24 2026, 12:00",
                "end": "May 21 2026, 11:59"
			},
            {
				name: "Monogatari Collab Labyrinth & Dumplings",
                "start": "april 6 2026, 12:00",
                "end": "may 06 2026, 11:59",
			},
            {
				name: "Monogatari Collab Labyrinth Part 2",
                "start": "april 14 2026, 12:00",
                "end": "may 06 2026, 11:59",
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
				name: "Friend Medal Reset",
                "start": "April 1 2026, 5:00",
                "end": "April 30 2026, 4:59",
			},
            {
				name: "Archive Medals Reset",
                "start": "April 1 2026, 5:00",
                "end": "may 1 2026, 4:59",
			},
             {
				name: "Steady Steps Reset",
                "start": "April 1 2026, 5:00",
                "end": "may 1 2026, 4:59",
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
                name: "Homura Akemi (Ribbon)",
                "start": "april 24 2026, 12:00",
                "end": "may 8 2026, 11:59",
			},
			{
                name: "Melissa & Liz ",
                "start": "april 24 2026, 12:00",
                "end": "may 21 2026, 11:59",
			},
			{
				name: "Shinobu Oshino, Mayoi Hachikuji & Yotsugi Ononoki",
                "start": "april 6 2026, 12:00",
                "end": "may 06 2026, 11:59",
			},
			{
				name: "[La Lumière] Darc",
                "start": "march 10 2026, 12:00",
                "end": "march 29 2026, 11:59",
			},
            // {
			// 	name: "【Paid Only】Showcase Fate Weave",
            //     "start": "jan 1 2026, 00:00",
            //     "end": "jan 23 2026, 11:59",
			// },
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
			"【FREE】One Free Magia Fate Weave 10-Draw | Nagisa & Koito",
            "『マギアガチャ10連1回無料』"
        ],
        "image": [
            "imgs/exedra/gacha00/free-24.png",
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "24 Hours Only!🪄",
                "start": "march 30 2026, 12:00",
                "end": "april 1 2026, 11:59",
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
            "imgs/exedra/anni/100.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "",
                "start": "mar 10 2026, 12:00",
                "end": "mar 27 2026, 11:59",
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
			"【Monogatari Series Collab Exclusive】Yotsugi Ononoki",
            "『〈物語〉[シリーズコラボ限定★5斧乃木余接』"
        ],
        "image": [
            "imgs/exedra/fate/mono02.png",
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "Forest Breaker",
                "start": "april 14 2026, 12:00",
                "end": "may 05 2026, 11:59",
               // extraPriority: 1000
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
			"【Unlimited New】 [La Danse Macabre] Corbeau",
            "『[ラ・ダンス・マカブル]コルボー』"
        ],
        "image": [
            "imgs/exedra/fate/corb.png",
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "",
                "start": "march 18 2026, 12:00",
                "end": "april 5 2026, 11:59",
            //    extraPriority: 1000
            }
        ]
     },
    {
        "type": "Gacha",
        "title": [
			"【Exclusive New】Sumire & Fuka",
            "『【限定★5 】夜明すみれ＆日暮ふうか』"
        ],
        "image": [
            "imgs/exedra/anni/sumi.png",
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "Free Gems",
                "start": "march 27 2026, 22:00",
                "end": "april 30 2026, 11:59",
            },
            {
                name: "Paid Step Up",
                "start": "march 27 2026, 22:00",
                "end": "april 30 2026, 11:59",
            },
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
			"【Featured】Follow-Up Attack Showcase",
            "『『追撃』フィーチャーガチャ』"
        ],
        "image": [
            "imgs/exedra/gacha00/follow-up.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: " Eternal Sakura | Ui Tamaki | Alina Grey",
                "start": "feb 06 2026, 12:00",
                "end": "feb 28 2026, 11:59"
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
