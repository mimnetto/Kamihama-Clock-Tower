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
				name: "Crescent Memoria Release Celebration",
                "start": "jan 9 2026, 12:00",
                "end": "jan 29 2026, 11:59",
			},
            {
				name: "Year Endings Fest Login Bonus",
                "start": "dec 22 2025, 12:00",
                "end": "jan 01 2026, 4:59"
			},
            {
				name: "Year Greetings Fest 2026: Magia Exedraw",
                "start": "jan 1 2026, 5:00",
                "end": "jan 7 2026, 11:59"
			},
            {
				name: "New Year's 3000 Gems and Portrait Gift",
                "start": "jan 1 2026, 00:00",
                "end": "jan 15 2026, 11:59"
			},
            {
				name: "Year Greetings Fest 2026 Login Bonus",
                "start": "jan 1 2026, 00:00",
                "end": "jan 15 2026, 11:59"
			},
            {
				name: "Crystalis Quest Skip Celebration",
                "start": "dec 22 2025, 12:00",
                "end": "jan 15 2026, 11:59"
			},
            {
				name: "Anime Final Episode Celebration Gift",
                "start": "dec 21 2025, 18:30",
                "end": "jan 05 2026, 11:59",
			},
            {
				name: "Ultimate Madoka Portrait Gift",
                "start": "dec 21 2025, 18:30",
                "end": "jan 05 2026, 11:59",
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
				name: "Crescent Memoria 2 Missions",
                "start": "jan 9 2026, 12:00",
                "end": "jan 29 2026, 11:59",
			},
        	{
				name: "Link Raid Daily Bonus Increase",
				start: "jan 15 2026, 12:00",
				end: "jan 19 2026, 11:59",
			},
            {
				name: "Year Greetings Fest 2026 Missions",
                "start": "jan 1 2026, 00:00",
                "end": "jan 15 2026, 11:59"
			},
            {
				name: "Year Greetings Fest 2026: Magia Exedraw Missions",
                "start": "jan 1 2026, 5:00",
                "end": "jan 7 2026, 11:59"
			},
            {
				name: "Year Greetings Fest 2026: Half QP!",
                "start": "jan 1 2026, 00:00",
                "end": "jan 15 2026, 11:59"
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
				"name": "Score Attack【VS AI Chan】",
                "start": "dec 22 2025, 12:00",
                "end": "jan 09 2026, 11:59"
			},
            {
				"name": "Score Attack【VS Niddle Witch】",
                "start": "jan 19 2026, 12:00",
                "end": "feb 02 2026, 11:59"
			},
             {
				name: "Tower | Mirror Layers 76-80",
                "start": "jan 9 2026, 12:00",
                "end": "jan 23 2026, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
			"【Live Stream】Madoka Magica Grand Lottery Drawing & Crescent Memoria Part 2",
			"【Crescent Memoria第2弾 最新情報SP】"
        ],
        "image": [
            "imgs/exedra/events00/live-stream.png"
        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				"name": "https://www.youtube.com/watch?v=MTAmhG7IAFA",
                "start": "jan 08 2026, 20:00",
                "end": "jan 08 2026, 21:00",
			},
        ]
    },
        	{
        "type": "Event",
        "title": [
			"【Story Event】Crescent Memoria Part 2",
			"『Crescent Memoria』第2弾"
        ],
        "image": [
            "imgs/exedra/anni/cresmoon.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "Release Celebration",
                "start": "jan 9 2026, 12:00",
                "end": "jan 29 2026, 11:59",
			},
			{
				"name": "Event Story Quest",
                "start": "jan 9 2026, 12:00",
                "end": "jan 23 2026, 11:59",
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
				name: "【Daily Bonus x2】AI Chan",
				start: "jan 15 2026, 12:00",
				end: "jan 29 2026, 11:59",
			},
			{
				name: "Gold & Silver Medal Shop - Jan",
                "start": "jan 1 2026, 5:00",
                "end": "jan 31 2026, 4:59",
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
				name: "Season 22",
				start: "jan 19 2026, 12:00",
				end: "feb 02 2026, 4:59",
			},
			{
				name: "Match Medal Shop - January",
                "start": "jan 1 2026, 5:00",
                "end": "jan 31 2026, 4:59",
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
				name: "Final Episode Celebration Packs",
                "start": "dec 21 2025, 18:30",
                "end": "jan 05 2026, 11:59"
			},
			{
				name: "Train Spree Packs SALE",
                "start": "nov 29 2025, 12:00",
                "end": "dec 31 2025, 11:59"
			},
			{
				name: "Web shop exclusive Ultra Training Special Pack",
                "start": "nov 29 2025, 12:00",
                "end": "dec 31 2025, 11:59"
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
				name: "Prayers and Play Keep Sickness Away",
                "start": "jan 1 2026, 00:00",
                "end": "jan 16 2026, 11:59"
			},
            {
				name: "Next Act: In Search of an Ordinary Life",
                "start": "jan 19 2026, 12:00",
                "end": "feb 03 2026, 11:59"
			},
            {
				name: "Crescent Memoria Part 2",
                "start": "jan 9 2026, 12:00",
                "end": "jan 24 2026, 11:59",
			},	
            {
				name: "Archive Medals Reset",
                "start": "jan 1 2026, 5:00",
                "end": "jan 31 2026, 4:59",
			},
             {
				name: "Steady Steps Reset",
                "start": "jan 1 2026, 5:00",
                "end": "jan 31 2026, 4:59",
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
				name: "Christmas Sayaka & Kyoko Featured Fate Weave",
                "start": "nov 29 2025, 12:00",
                "end": "jan 1 2026, 11:59"
			},
            // {
			// 	name: "【Paid Only】Showcase Fate Weave",
            //     "start": "jan 1 2026, 00:00",
            //     "end": "jan 23 2026, 11:59",
			// },
            {
				name: "Kanae Yukino",
                "start": "jan 9 2026, 12:00",
                "end": "jan 24 2026, 11:59",
			},
            {
				name: "Koito Asakos",
                "start": "jan 19 2026, 12:00",
                "end": "feb 03 2026, 11:59",
			},
                        {
				name: "🌸 Madoka Kaname (Kimono)",
                "start": "jan 1 2026, 00:00",
                "end": "jan 23 2026, 11:59",
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
				name: "Yuletide Tale",
                "start": "dec 22 2025, 12:00",
                "end": "jan 10 2026, 11:59"
			},
            {
				name: "New Years Outfits",
                "start": "jan 1 2026, 00:00",
                "end": "jan 16 2026, 11:59",
			},
                        {
				name: "Magia Day Outfit",
                "start": "jan 1 2026, 00:00",
                "end": "jan 16 2026, 11:59",
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
                "start": "Dec 31 2025, 12:00",
                "end": "jan 1 2026, 11:59",
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
			"【Unlimited New】[Thoughtless] Kanae Yukino",
            "『  [無思考] 雪野かなえ』"
        ],
        "image": [
            "imgs/exedra/gacha00/kanae.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Dark Debuffer",
                "start": "jan 9 2026, 12:00",
                "end": "jan 23 2026, 11:59",
            //    extraPriority: 1000
            }
        ]
     },
    {
        "type": "Gacha",
        "title": [
			"【Unlimited New】[Soaring Storyteller] Koito Asako",
            "『[天翔ける語り部] 浅古小糸』"
        ],
        "image": [
            "imgs/exedra/gacha00/koito.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Void Debuffer",
                "start": "jan 19 2026, 12:00",
                "end": "feb 02 2026, 11:59",
                extraPriority: 1000
            }
        ]
     },
         {
        "type": "Gacha",
        "title": [
			"【Exclusive New】🌸 Madoka Kaname (Kimono) | Pluvia☆Neujahr",
            "『【新限定】鹿目まどか(晴着)』"
        ],
        "image": [
            "imgs/exedra/exc/madoka-ny.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Paid Step Up",
                "start": "jan 1 2026, 00:00",
                "end": "jan 22 2026, 11:59"
            },
            {
                name: "Free Gem Gacha",
                "start": "jan 1 2026, 00:00",
                "end": "jan 22 2026, 11:59"
            },
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
			"【Exclusive New】🎄[Gitterjoy Snow Globe] Rika Ayano (Christmas) ",
            "『【新限定】綾野梨花(クリスマス)』"
        ],
        "image": [
            "imgs/exedra/exc/xmass-rika.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "First 10 Pull Free!",
                "start": "dec 22 2025, 12:00",
                "end": "jan 09 2026, 11:59"
            },
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
			"【Exclusive Rerun】Ultimate Madoka",
            "『【新限定】 アルティメットまど』"
        ],
        "image": [
            "imgs/exedra/gacha00/ult-madoka.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Nothing to Despair, Ever",
                "start": "dec 21 2025, 18:30",
                "end": "jan 05 2026, 11:59"
            //    extraPriority: 1000
            }
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
                name: "Once a week",
                "start": "dec 22 2025, 12:00",
                "end": "jan 09 2026, 11:59"
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
