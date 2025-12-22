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
				name: "Magia Exedraw - Win up to 30,000 Stones",
                "start": "dec 21 2025, 18:30",
                "end": "jan 01 2026, 4:59"
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
            {
				name: "Christmas - Log in Period",
                "start": "nov 29 2025, 12:00",
                "end": "dec 26 2025, 11:59"
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
				name: "Christmas Missions",
                "start": "nov 29 2025, 12:00",
                "end": "dec 31 2025, 11:59"
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
				"name": "Score Attack【VS Rose Garden Witch (Christmas)】",
                "start": "nov 29 2025, 12:00",
                "end": "dec 31 2025, 11:59"
			},
            {
				name: "Tower | Mirror Layers 71-75",
                "start": "dec 11 2025, 12:00",
                "end": "dec 25 2025, 11:59",
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
			"【Live Stream】Year-End/Year-Beginning Campaign Special",
			"【ゆく年くる年キャンペーンSP】"
        ],
        "image": [
            "imgs/exedra/events00/live-stream.png"
        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				"name": "https://www.youtube.com/watch?v=NL2i9EwBj0A",
                "start": "dec 21 2025, 17:30",
                "end": "dec 21 2025, 19:00",
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
			"【Story Event】Yuletide Tale: Where Our Hearts Begin",
			"『『聖夜に刻む1ページ〜君と、ここから〜』』"
        ],
        "image": [
            "imgs/exedra/story/xmass-story02.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "",
                "start": "dec 22 2025, 12:00",
                "end": "jan 09 2026, 11:59"
			},
        ]
    },
       	{
        "type": "Event",
        "title": [
			"【Story Event】A St. Magica Academy Christmas",
			"『聖マギカ学園のクリスマス』"
        ],
        "image": [
            "imgs/exedra/story/xmass-story.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "Part Nice",
                "start": "nov 29 2025, 12:00",
                "end": "dec 31 2025, 11:59"
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
				name: "Chelation Land Ferris Wheel",
				start: "dec 18 2025, 12:00",
				end: "jan 1 2026, 11:59",
			},
			{
				name: "Gold & Silver Medal Shop - Dec",
				start: "Dec 01 2025, 5:00",
				end: "Jan 1 2026, 4:59",
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
				name: "Season 20",
				start: "dec 22 2025, 12:00",
				end: "jan 5 2026, 4:59",
			},
			{
				name: "Match Medal Shop - Decemeber",
				start: "Dec 01 2025, 5:00",
				end: "Jan 1 2026, 4:59",
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
				name: "Yuletide Tale: Where Our Hearts Begin",
                "start": "dec 22 2025, 12:00",
                "end": "jan 10 2026, 11:59"
			},
            {
				name: "A St. Magica Academy Christmas: Part Naughty",
                "start": "dec 11 2025, 12:00",
                "end": "jan 1 2026, 11:59",
			},
            {
				name: "A St. Magica Academy Christmas: Part Nice",
                "start": "nov 29 2025, 12:00",
                "end": "jan 1 2026, 11:59",
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
                "start": "nov 30 2025, 20:00",
                "end": "jan 1 2026, 4:59",
			},
                        {
				name: "Steady Steps Reset",
                "start": "nov 30 2025, 20:00",
                "end": "jan 1 2026, 4:59",
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
            {
				name: "PMMM Beginnings / Eternal Showcase",
                "start": "oct 10 2025, 12:00",
                "end": "dec 24 2025, 23:59"
			},
            {
				name: "Ultimate Madoka",
                "start": "dec 21 2025, 18:30",
                "end": "jan 06 2026, 11:59"
			},
            {
				name: "Ren & Rika (Christmas)",
                "start": "dec 22 2025, 12:00",
                "end": "jan 10 2026, 11:59"
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
			"【Exclusive New】🎄[Sacred Gift] Ren Isuzu (Christmas) ",
            "『【新限定】五十鈴れん(クリスマス)』"
        ],
        "image": [
            "imgs/exedra/exc/xmass-ren.png",
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
			"【Exclusive New】🎄[Buon Natale Grazioso] Sayaka Miki",
            "『【新限定】美樹さやか(クリスマス)』"
        ],
        "image": [
            "imgs/exedra/exc/xmass-gacha.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "First 10 Pull Free!",
                "start": "nov 29 2025, 12:00",
                "end": "dec 31 2025, 11:59"
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
			"【Web Shop Gift】🎄Free Isuzu or Rika (Christmas) ",
            "『【無料】どちらかのキオクを無料🎁)』"
        ],
        "image": [
            "imgs/exedra/exc/free-xmas.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "https://webshop-gl.games.madoka-exedra.com/",
                "start": "dec 22 2025, 12:00",
                "end": "jan 09 2026, 11:59"
            },
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
