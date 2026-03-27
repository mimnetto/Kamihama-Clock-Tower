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
				name: "1st Anniversary Countdown Missions",
                "start": "march 10 2026, 12:00",
                "end": "march 27 2026, 11:59"
			},
            {
				name: "Chaos Mode Challenge",
                "start": "jan 30 2026, 12:00",
                "end": "mar 31 2026, 11:59",
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
        "priority": 5,
        "timers": [
            {
				name: "Portraits of the Past and Promise",
                "start": "mar 27 2026, 00:00",
                "end": "april 30 2026, 11:59",
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
				name: "Tower | Mirror Layers 86-90",
                "start": "march 10 2026, 12:00",
                "end": "march 27 2026, 11:59",
			},
			{
				"name": "Score Attack【VS Corbeau】",
                "start": "march 10 2026, 12:00",
                "end": "march 28 2026, 11:59"
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
			"【Live Stream】Exedra Party 2026",
			"【Exedra Party 2026】"
        ],
        "image": [
            "imgs/exedra/other/first.png"
        ],
        "column": 0,
        "priority": 9,
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
			"【Story Event】Crescent Memoria Part 3 - The Finale",
			"『Crescent Memoria 第3弾』"
        ],
        "image": [
            "imgs/exedra/story/cresent.png"
        ],
        "column": 0,
        "priority": 0,
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
			"【Story Event】Puella Magi Darc Magica",
			"『魔法少女たると☆マギカ』"
        ],
        "image": [
            "imgs/exedra/story/tart.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				"name": "Part 1",
                "start": "march 10 2026, 12:00",
                "end": "march 28 2026, 11:59"
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
				name: "Magia Exedraw",
                "start": "march 28 2026, 5:00",
                "end": "april 22 2026, 4:59"
			},
            {
				name: "The Lighthouse Main Story Prologue",
                "start": "march 27 2026, 22:00",
                "end": "april 1 2026, 12:00"
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
                "start": "march 27 2026, 22:00",
                "end": "april 4 2026, 11:59",
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
				name: "Season 26",
				start: "mar 16 2026, 12:00",
				end: "mar 29 2026, 23:59",
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
				name: "Puella Magi Darc Magica & Brave Banner Trader",
                "start": "march 10 2026, 12:00",
                "end": "march 29 2026, 11:59"
			},
            {
				name: "1st Anniversary Medal Trader",
                "start": "april 14 2026, 12:00",
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
                "start": "mar 1 2026, 5:00",
                "end": "mar 31 2026, 4:59",
			},
            {
				name: "Archive Medals Reset",
                "start": "mar 1 2026, 5:00",
                "end": "mar 31 2026, 4:59",
			},
             {
				name: "Steady Steps Reset",
                "start": "mar 1 2026, 5:00",
                "end": "mar 31 2026, 4:59",
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
				name: "[La Danse Macabre] Corbeau",
                "start": "march 18 2026, 12:00",
                "end": "april 06 2026, 11:59",
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
				name: "Limited Time Items",
                "start": "feb 27 2026, 12:00",
                "end": "mar 19 2026, 11:59"
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
                // extraPriority: 1000
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
			"【Collab】Monogatari Series",
            "『物語シリーズ』"
        ],
        "image": [
            "imgs/exedra/anni/monogatari.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Coming Soon - Times will be updated",
                "start": "april 6 2026, 12:00",
                "end": "april 20 2026, 11:59"
               // extraPriority: 1000
            }
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Unlimited New】 [La Lumière] Darc",
            "『[ラ・リュミエール] タルト』"
        ],
        "image": [
            "imgs/exedra/fate/tart.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Light Defender",
                "start": "march 10 2026, 12:00",
                "end": "march 28 2026, 11:59",
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
        "priority": 0,
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
        "priority": 1,
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
                "start": "april 03 2026, 12:00",
                "end": "april 10 2026, 11:59",
            },
            {
                name: "Week 4 Winter Ren x Rika",
                "start": "april 10 2026, 12:00",
                "end": "april 14 2026, 11:59",
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
