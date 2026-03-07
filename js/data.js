var releaseDate = "march 26 2025, 04:00";
var possibleNextAnnouncementDate = "jan 9 2026, 12:00";
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
			"『ログインボーナス』"
        ],
        "image": [
			"imgs/exedra/login/login.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
            {
				name: "Rebellion Release Celebration",
                "start": "feb 06 2026, 12:00",
                "end": "feb 28 2026, 11:59"
			},
            {
				name: "Get 3,000 Magica Stones for your first login!",
                "start": "jan 30 2026, 12:00",
                "end": "feb 28 2026, 11:59"
			},
            {
				name: "Rebellion Release Celebration Campaign",
                "start": "feb 6 2026, 12:00",
                "end": "feb 28 2026, 11:59"
			},
            {
				name: "Sweet Delights Campaign",
                "start": "feb 17 2026, 12:00",
                "end": "mar 10 2026, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
			"Exedraw Prize Redemption Period",
			"『エクセドラ』"
        ],
        "image": [
            "imgs/exedra/events00/lotto.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
			{
				"name": "",
                "start": "jan 9 2026, 12:00",
                "end": "jan 15 2026, 11:59",
			}
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
				name: "Rebellion Part II Event Medal Portrait Missions",
                "start": "feb 06 2026, 12:00",
                "end": "feb 28 2026, 11:59"
			},
            {
				name: "Kioku Super Training Part 1",
                "start": "jan 30 2026, 12:00",
                "end": "feb 08 2026, 11:59",
			},
            {
				name: "Kioku Super Training Part 2",
                "start": "feb 08 2026, 12:00",
                "end": "feb 18 2026, 11:59",
			},
            {
				name: "Kioku Super Training Part 3",
                "start": "feb 18 2026, 12:00",
                "end": "feb 28 2026, 11:59",
			},
            {
				name: "Chaos Mode Challenge",
                "start": "jan 30 2026, 12:00",
                "end": "mar 31 2026, 11:59",
			},
            {
				name: "Main Quest Full Clear",
                "start": "jan 30 2026, 12:00",
                "end": "feb 28 2026, 11:59",
			},
        	{
				name: "Invite-a-Friend",
                "start": "Jan 20 2026, 12:00",
                "end": "feb 28 2026, 11:59",
			},
        	{
				name: "Sweet Delights Missions Part 1",
                "start": "feb 17 2026, 12:00",
                "end": "feb 27 2026, 4:59",
			},
        	{
				name: "Sweet Delights Missions Part 2",
                "start": "feb 27 2026, 12:00",
                "end": "mar 9 2026, 4:59",
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
        "priority": 5,
        "timers": [
            {
				name: "Kioku Super Training EXP Quest",
                "start": "jan 30 2026, 12:00",
                "end": "feb 28 2026, 11:59",
			},
        	{
				name: "Homemade and Heartfelt Valentines!",
                "start": "feb 10 2026, 12:00",
                "end": "feb 20 2026, 11:59",
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
				name: "Tower | Mirror Layers 81-85",
                "start": "feb 06 2026, 12:00",
                "end": "feb 20 2026, 11:59",
			},
			{
				"name": "Score Attack【VS Yaginoko no Yume】",
                "start": "jan 30 2026, 12:00",
                "end": "march 1 2026, 11:59"
			},
            {
				"name": "Score Attack【VS Chocolate Witch】",
                "start": "feb 17 2026, 12:00",
                "end": "mar 18 2026, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
			"【Live Stream】Exedra Party 2026",
			"【Exedra Party 2026】"
        ],
        "image": [
            "imgs/exedra/other/first.png"
        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				"name": "youtube.com/watch?v=DTlZJ_yMW3Q",
                "start": "march 27 2026, 19:00",
                "end": "march 27 2026, 21:00",
			},
        ]
    },
    {
        "type": "Event",
        "title": [
			"【Story Event】Sweet Magic from the Heart",
			"『想い伝わる甘い魔法』"
        ],
        "image": [
            "imgs/exedra/story/vday-story.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "Part 1",
                "start": "feb 17 2026, 12:00",
                "end": "mar 18 2026, 11:59",
			},
			{
				"name": "Part 2",
                "start": "feb 27 2026, 12:00",
                "end": "mar 18 2026, 11:59",
			},
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
            "【Campaign】Rebellion Release Celebration Campaign!🦎",
			"『叛逆の物語 実装決定🦎』"
        ],
        "image": [
			"imgs/exedra/events00/rebel01.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
            {
				name: "Rebellion Release Celebration",
                "start": "jan 30 2026, 12:00",
                "end": "feb 28 2026, 11:59"
			},
            {
				name: "Stroy Event Rebellion Part I",
                "start": "jan 30 2026, 12:00",
                "end": "feb 28 2026, 11:59"
			},
            {
				name: "Stroy Event Rebellion Part II",
                "start": "feb 06 2026, 12:00",
                "end": "feb 28 2026, 11:59"
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
				name: "Spindle Witch",
				start: "feb 26 2026, 12:00",
				end: "march 12 2026, 11:59",
			},
			{
				name: "Gold & Silver Medal Shop - March",
                "start": "march 1 2026, 5:00",
                "end": "march 31 2026, 4:59",
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
				name: "Season 25",
				start: "mar 02 2026, 12:00",
				end: "mar 15 2026, 23:59",
			},
			{
				name: "Match Medal Shop - March",
                "start": "march 1 2026, 5:00",
                "end": "march 31 2026, 4:59",
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
                "start": "feb 27 2026, 12:00",
                "end": "mar 31 2026, 11:59",
			},
			{
				name: "Campaign Packs (Mami Tomoe)",
                "start": "feb 27 2026, 12:00",
                "end": "mar 18 2026, 11:59",
			},
			{
				name: "Campaign Packs (Kyoko Sakura)",
                "start": "feb 17 2026, 12:00",
                "end": "mar 18 2026, 11:59",
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
				name: "Homemade and Heartfelt Valentines Chocolate",
                "start": "feb 10 2026, 12:00",
                "end": "feb 21 2026, 11:59",
			},
            {
				name: "Cheesecake Trader",
                "start": "jan 30 2026, 12:00",
                "end": "march 1 2026, 11:59"
			},
            {
				name: "Rebellion Part I",
                "start": "jan 30 2026, 12:00",
                "end": "march 1 2026, 11:59"
			},
            {
				name: "Rebellion Part II",
                "start": "feb 06 2026, 12:00",
                "end": "march 1 2026, 11:59"
			},
            {
				name: "Magical Sweetbite Trader",
                "start": "feb 17 2026, 12:00",
                "end": "mar 19 2026, 11:59",
			},	
            {
				name: "Sweet Magic from the Heart Trader",
                "start": "feb 17 2026, 12:00",
                "end": "mar 19 2026, 11:59",
			},	
            {
				name: "Archive Medals Reset",
                "start": "feb 1 2026, 5:00",
                "end": "feb 28 2026, 4:59",
			},
             {
				name: "Steady Steps Reset",
                "start": "feb 1 2026, 5:00",
                "end": "feb 28 2026, 4:59",
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
            "imgs/exedra/other/coin-shop.png"
        ],
		column: 2,
		priority: 3,
		timers: [	
			{
				name: "Devil Homura",
                "start": "jan 30 2026, 12:00",
                "end": "march 1 2026, 11:59"
			},
            // {
			// 	name: "【Paid Only】Showcase Fate Weave",
            //     "start": "jan 1 2026, 00:00",
            //     "end": "jan 23 2026, 11:59",
			// },
            {
				name: "Kioku Trading Medal (Rebellion Release)",
                "start": "jan 30 2026, 12:00",
                "end": "march 1 2026, 11:59"
			},
            {
				name: "Nagisa Momoe 🧀",
                "start": "feb 6 2026, 12:00",
                "end": "mar 1 2026, 11:59",
			},
            {
				name: "Follow-Up Attack Showcase",
                "start": "feb 06 2026, 12:00",
                "end": "feb 28 2026, 11:59"
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
				name: "Limited Time Items",
                "start": "feb 27 2026, 12:00",
                "end": "mar 19 2026, 11:59"
			},
            {
				name: "Valentine's Day",
                "start": "feb 17 2026, 12:00",
                "end": "mar 19 2026, 11:59",
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
			"【FREE】One Free Magia Fate Weave 10-Draw | [Groundhog Daze] Mabayu Aki",
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
                "start": "jan 31 2026, 12:00",
                "end": "feb 1 2026, 11:59",
                // extraPriority: 1000
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
			"【Year Ending Fest】1 Per Day Free Fate Weave",
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
                "start": "dec 22 2025, 12:00",
                "end": "jan 01 2026, 4:59",
               // extraPriority: 1000
            }
        ]
    },
    	{
        "type": "Gacha",
        "title": [
			"【Year Greetings Fest 2026】1 Per Day Free Fate Weave",
            "『期間中毎日1日1回無料ガチャ開催！』"
        ],
        "image": [
            "imgs/exedra/gacha00/free.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "",
                "start": "jan 1 2026, 05:00",
                "end": "jan 15 2026, 11:59"
               // extraPriority: 1000
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Unlimited New】[Magic Cake Dish] Nagisa Momoe 🧀",
            "『[魔法のケーキドーム] 百江なぎさ』"
        ],
        "image": [
            "imgs/exedra/gacha00/nagisa.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Light Healer",
                "start": "feb 6 2026, 12:00",
                "end": "feb 28 2026, 11:59",
            //    extraPriority: 1000
            }
        ]
     },
     {
        "type": "Gacha",
        "title": [
			"【Exclusive New】Devil Homura | Falsified Phenomena",
            "『【新限定】悪魔ほむら)』"
        ],
        "image": [
            "imgs/exedra/gacha00/devil-homu.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Paid Only Step Fate Weave",
                "start": "jan 30 2026, 12:00",
                "end": "feb 28 2026, 11:59"
            },
            {
                name: "Free Gem Gacha",
                "start": "jan 30 2026, 12:00",
                "end": "feb 28 2026, 11:59"
            },
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Exclusive New】[Crimson Confectioner] Kyoko Sakura",
            "『【限定★5 】[紅珠焼菓] 佐倉杏子』"
        ],
        "image": [
            "imgs/exedra/exc/vday-kyoko.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Fire Breaker",
                "start": "feb 17 2026, 12:00",
                "end": "mar 18 2026, 11:59",
                // extraPriority: 1000
            }
        ]
     },
	{
        "type": "Gacha",
        "title": [
		    "【Paid Only】Showcase Fate Weave",
            "『有償限定 ステップアップガチャ』"
        ],
        "image": [
			"imgs/exedra/feat/ny-paid.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "1 Time Only for Each",
                "start": "jan 1 2026, 00:00",
                "end": "jan 22 2026, 11:59",
            },
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Exclusive New】[Panna Vorticosa] Mami Tomoe",
            "『【限定★5 】[パンナ・ヴォルティコーザ]巴マミ』"
        ],
        "image": [
            "imgs/exedra/exc/vday-mami.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Fire Breaker",
                "start": "feb 27 2026, 12:00",
                "end": "mar 18 2026, 11:59",
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
			"【Year Kickoff Campaign】Free weekly 10-draw Fate Weave!",
            "『【ニューイヤーキャンペーン】10連無料ガチャ開催！)』"
        ],
        "image": [
            "imgs/exedra/gacha00/free-10.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Week 1 Free Pull",
                "start": "jan 9 2026, 12:00",
                "end": "jan 11 2026, 23:59",
            },
            {
                name: "Week 2 Free Pull",
                "start": "jan 16 2026, 12:00",
                "end": "jan 18 2026, 23:59",
            },
            {
                name: "Week 3 Free Pull",
                "start": "jan 23 2026, 12:00",
                "end": "jan 25 2026, 23:59",
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
