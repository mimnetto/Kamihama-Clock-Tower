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
            "Magia Day 2026 -1.5th Anniversary-",
			"『Magia Day 2026 -1.5th Anniversary-』"
        ],
        "image": [
			"imgs/exedra/events00/magia-day.png"
        ],
        "column": 0,
        "priority": 6,
        "timers": [
            {
				name: "https://madoka-exedra.com/magiaday2026",
               "start": "sept 27 2026, 17:00",
                "end": "sept 27 2026, 19:00",
			},
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
				name: "Rebellion Redux Celebration 1st Login 3,000 Magica Stones",
                "start": "July 31 2026, 12:00",
                "end": "aug 31 2026, 11:59"
			},
            {
				name: "Rebellion Redux Celebration Bonus Part 1",
                "start": "July 31 2026, 12:00",
                "end": "aug 31 2026, 11:59"
			},
            {
				name: "Rebellion Redux Celebration Bonus Part 2",
                "start": "aug 22 2026, 12:00",
                "end": "aug 28 2026, 21:59"
			},
            {
				name: "Magia Et Cetera: 100 Episodes Celebration✨",
                "start": "aug 18 2026, 12:00",
                "end": "aug 31 2026, 11:59",
			},
            {
				name: "Walpurgisnacht Rising feat. 5★ Limited Madoka",
                "start": "aug 28 2026, 22:00",
                "end": "oct 29 2026, 23:59",
			},
            {
				name: "Walpurgisnacht Rising 3,000 Magica Stones Gift",
                "start": "aug 28 2026, 22:00",
                "end": "sept 30 2026, 23:59",
			},
            {
				name: "10 Keys Gift Part 2",
                "start": "aug 11 2026, 20:00",
                "end": "aug 28 2026, 21:59",
			},
            {
				name: "10 Keys Gift Part 2",
                "start": "aug 12 2026, 20:00",
                "end": "aug 28 2026, 21:59",
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
            "imgs/exedra/events00/lotto.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
            {
				name: "Ticket Acquisition",
                "start": "July 31 2026, 12:00",
                "end": "aug 31 2026, 11:59"
			},
            {
				name: "Draw Period",
                "start": "aug 31 2026, 12:00",
                "end": "sept 01 2026, 11:59"
			},
            {
				name: "Live Stream",
                "start": "april 23 2026, 20:00",
                "end": "april 23 2026, 22:00",
			},
            {
				name: "Prize Claim Period",
                "start": "sept 01 2026, 12:00",
                "end": "sept 08 2026, 11:59"
			},
            {
				name: "Trader",
                "start": "July 31 2026, 12:00",
                "end": "sept 09 2026, 11:59"
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
				name: "Rebellion Redux Celebration Missions Part 1",
                "start": "July 31 2026, 12:00",
                "end": "aug 31 2026, 11:59"
			},
            {
				name: "Half QP",
                "start": "July 31 2026, 12:00",
                "end": "aug 15 2026, 11:59"
			},
            {
				name: "Main Quest Clear Support Buffs (Standard)",
                "start": "aug 28 2026, 22:00",
                "end": "sept 27 2026, 11:59",
			},
            {
				name: "EX and S Crystalis Droprates Doubled",
                "start": "aug 28 2026, 22:00",
                "end": "sept 8 2026, 11:59",
			},
            {
				name: "Exedra Quest Clear Missions",
                "start": "July 31 2026, 12:00",
                "end": "oct 31 2026, 11:59",
			},
            {
				name: "Main Quest Clear Missions (No Offcial End Date)",
                "start": "aug 28 2026, 22:00",
                "end": "oct 04 2026, 11:59",
			},
            {
				name: "Invite-a-Friend",
                "start": "aug 28 2026, 22:00",
                "end": "nov 30 2026, 11:59",
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
				name: "Walpurg Rising Bingo",
                "start": "aug 28 2026, 22:00",
                "end": "oct 30 2026, 11:59",
			},
        	{
				name: "Kioku Crystal Release Part 1",
                "start": "aug 28 2026, 5:00",
                "end": "sept 05 2026, 4:59",
			},
        	{
				name: "Kioku Crystal Release Part 2",
                "start": "sept 05 2026, 5:00",
                "end": "sept 12 2026, 4:59",
			},
        	{
				name: "Kioku Crystal Release Part 3",
                "start": "sept 12 2026, 5:00",
                "end": "sept 19 2026, 4:59",
			},
        	{
				name: "Kioku Crystal Release Part 4",
                "start": "sept 19 2026, 5:00",
                "end": "sept 27 2026, 20:59",
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
				name: "Tower | Mirror Layers 111-115",
                "start": "aug 21 2026, 12:00",
                "end": "sep 4 2026, 11:59",
			},
			{
				"name": "Score Attack【VS Devil Homura】",
                "start": "aug 13 2026, 22:00",
                "end": "aug 28 2026, 21:59",
			},
            {
				"name": "Score Attack【VS Rubber Witch】",
                "start": "july 15 2026, 12:00",
                "end": "July 31 2026, 11:59",
			},
        ]
    },
    	{
        "type": "Event",
        "title": [
			"【Live Stream】Walpurgis Rising Campaign Info",
			"【〈ワルプルギスの廻天〉上映記念キャンペーン情報解禁 スペシャル特番】"
        ],
        "image": [
            "imgs/exedra/events00/live-stream.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				"name": "https://www.youtube.com/watch?v=agOE4mFWWkE",
                "start": "aug 28 2026, 20:00",
                "end": "aug 28 2026, 21:30",
			},
        ]
    },
    {
        "type": "Event",
        "title": [
			"【Story Event】Waking Dreamer After Dark",
			"『空想少女は夜を生きる』"
        ],
        "image": [
            "imgs/exedra/story/dreamer.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				"name": "Event and Medal Missions",
                "start": "July 31 2026, 12:00",
                "end": "aug 31 2026, 11:59"
			},
        ]
        },
    {
        "type": "Event",
        "title": [
			"【Story Event】Rebellion- Nightmare Story",
			"『[新編]叛逆の物語 Nightmareストーリー』"
        ],
        "image": [
            "imgs/exedra/story/nightmare.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				"name": "Event and Medal Missions",
                "start": "July 31 2026, 12:00",
                "end": "sept 30 2026, 11:59",
			},
        ]
        },
    {
        "type": "Event",
        "title": [
			"【Story Event】Rebellion Redux",
			"『[新編]叛逆の物語』"
        ],
        "image": [
            "imgs/exedra/story/rebel-redux02.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				"name": "Event and Medal Missions",
                "start": "aug 13 2026, 22:00",
                "end": "sept 30 2026, 11:59",
			},
        ]
        },
    {
        "type": "Event",
        "title": [
			"【Story Event】What-If Story Event",
			"『近くて遠い場所』"
        ],
        "image": [
            "imgs/exedra/story/so-close.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				"name": "So Close, Yet So Far - Sayaka",
                "start": "July 31 2026, 12:00",
                "end": "sept 30 2026, 11:59",
			},
			{
				"name": "Moments to Myself - Mami",
                "start": "aug 07 2026, 12:00",
                "end": "sept 30 2026, 11:59",
			},
        ]
        },
    {
        "type": "Event",
        "title": [
			"【Story Event】Redux Story Event",
			"『叛逆の物語』"
        ],
        "image": [
            "imgs/exedra/story/rebel-redux.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "All Redux Stories",
                "start": "aug 13 2026, 22:00",
                "end": "sept 30 2026, 11:59"
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
			"【Story Event】Iroha's Birthday 2026: A Summer School Special",
			"『「環いろは」のお誕生日』"
        ],
        "image": [
            "imgs/exedra/story/iroha-birth.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				"name": "",
                "start": "aug 22 2026, 00:00",
                "end": "aug 29 2026, 23:59",
			},
        ]
    },
       	{
        "type": "Event",
        "title": [
			"【Story Event】Magia Et Cetera: 100 Episodes Celebration✨",
			"『マギア☆エトセトラ100話到達記念』"
        ],
        "image": [
            "imgs/exedra/story/papa100.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				"name": "",
                "start": "aug 18 2026, 12:00",
                "end": "aug 31 2026, 11:59",
			},
        ]
    },
       	{
        "type": "Event",
        "title": [
			"【Story Event】Sweet Dreams and Shifting Realities",
			"『虚映が見せる夢 定まらない現実を添えて』"
        ],
        "image": [
            "imgs/exedra/story/sweet-dreams.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
			{
				"name": "Event and Medal Missions",
                "start": "aug 28 2026, 22:00",
                "end": "oct 29 2026, 11:59",
			}
        ]
    },
       	{
        "type": "Event",
        "title": [
			"【Story Event】Hollow Utopia",
			"『虚ろなユートピア』"
        ],
        "image": [
            "imgs/exedra/story/hollow.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
			{
				"name": "Event and Medal Missions",
                "start": "aug 28 2026, 22:00",
                "end": "sept 30 2026, 11:59",
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
				name: "Box Witch",
				start: "aug 1 2026, 12:00",
				end: "aug 8 2026, 23:59",
			},
			{
				name: "Ranking Results Viewability",
                "start": "aug 9 2026, 00:00",
                "end": "aug 12 2026, 4:59",
			},
			{
				name: "Trader",
                "start": "aug 1 2026, 12:00",
                "end": "aug 20 2026, 11:59",
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
				name: "Birdcage Witch",
				start: "aug 29 2026, 12:00",
				end: "sept 10 2026, 11:59",
			},
            {
				name: "Uwasa of the Commoner's Horse",
				start: "June 16 2026, 12:00",
				end: "July 2 2026, 11:59",
			},
            {
				name: "Sandbox Witch",
				start: "July 2 2026, 12:00",
				end: "july 16 2026, 11:59",
			},
            {
				name: "Kumanoko no Yume",
				start: "aug 14 2026, 12:00",
				end: "aug 29 2026, 11:59",
			},
            {
				name: "Walpurgisnacht Descends",
				start: "April 24 2026, 12:00",
				end: "may 07 2026, 11:59",
			},
            {
				name: "Ai Chan",
				start: "July 16 2026, 12:00",
				end: "July 31 2026, 11:59",
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
				name: "Gold & Silver Medal Shop - Aug",
                "start": "aug 1 2026, 5:00",
                "end": "sept 1 2026, 4:59",
			},
			{
				name: "Gold & Silver Medal Shop - September",
                "start": "sept 1 2026, 5:00",
                "end": "oct 1 2026, 4:59",
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
				name: "Season 37",
				start: "aug 17 2026, 12:00",
				end: "aug 30 2026, 23:59",
			},
            {
				name: "Season 38",
				start: "aug 31 2026, 12:00",
				end: "sept 13 2026, 23:59",
			},
			{
				name: "Season 34",
				start: "july 06 2026, 12:00",
				end: "july 19 2026, 23:59",
			},
			{
				name: "Match Medal Shop - Aug",
                "start": "aug 1 2026, 5:00",
                "end": "sept 1 2026, 4:59",
			},
			{
				name: "Match Medal Shop - September",
                "start": "sept 1 2026, 5:00",
                "end": "oct 1 2026, 4:59",
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
                   "start": "July 31 2026, 12:00",
                "end": "aug 31 2026, 11:59"
			},
			{
				name: "Rebellion Packs - Mami & Sayaka",
                "start": "July 31 2026, 12:00",
                "end": "sept 30 2026, 11:59",
			},
			{
				name: "Premium Bonus Sale",
                "start": "July 31 2026, 12:00",
                "end": "sept 27 2026, 11:59",
			},
			{
				name: "Rebellion Packs - Madoka Kami & Akuma Homura",
                "start": "aug 13 2026, 22:00",
                "end": "sept 30 2026, 11:59",
			},
			{
				name: "Walpurgis Rising Packs - Madoka",
                "start": "aug 28 2026, 22:00",
                "end": "oct 29 2026, 11:59",
			},
            {
				name: "5★ Kioku Selection Pack",
                "start": "aug 28 2026, 22:00",
                "end": "sept 30 2026, 11:59",
			},
			{
				name: "Training Spree Packs",
                "start": "aug 28 2026, 22:00",
                "end": "sept 30 2026, 11:59",
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
				name: "Rebellion- Nightmare Story",
                "start": "July 31 2026, 12:00",
                "end": "oct 1 2026, 11:59",
			},
            {
				name: "Waking Dreamer After Dark",
                "start": "July 31 2026, 12:00",
                "end": "sep 1 2026, 11:59"
			},
            {
				name: "Story of Rebellion Redux",
                "start": "aug 13 2026, 22:00",
                "end": "oct 1 2026, 11:59",
			},
            {
				name: "Hallow Utopia",
                "start": "aug 28 2026, 22:00",
                "end": "oct 1 2026, 11:59",
			},
            {
				name: "Sweet Dreams and Shifting Realities",
                "start": "aug 28 2026, 22:00",
                "end": "oct 30 2026, 11:59",
			},
        	{
				name: "Main Quest Clear Missions 5★ Medal",
                "start": "aug 28 2026, 22:00",
                "end": "oct 04 2026, 11:59",
			},
        	{
				name: "Sumire's Flower",
                "start": "march 27 2026, 22:00",
                "end": "may 1 2026, 11:59"
			},
            {
				name: "Permanent Shop Resets - Aug",
                "start": "aug 1 2026, 5:00",
                "end": "sep 1 2026, 4:59",
			},
            {
				name: "Permanent Shop Resets - September",
                "start": "sept 1 2026, 5:00",
                "end": "oct 1 2026, 4:59",
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
                name: "[Luminous Tenet] Kush Irina ",
                "start": "July 31 2026, 12:00",
                "end": "sept 1 2026, 11:59",
			},
            {
				name: "Sayaka & Mami (Rebellion)",
                "start": "July 31 2026, 12:00",
                "end": "oct 1 2026, 11:59",
			},
			{
                name: "Ultimate Madoka & Devil Homura Redux ",
                "start": "aug 13 2026, 22:00",
                "end": "oct 1 2026, 11:59"
			},
			{
				name: "[Thuderous Waltz] Uwasa Tsuruno",
                "start": "aug 28 2026, 22:00",
                "end": "oct 1 2026, 11:59",
			},
			{
				name: "[Vinctio☆Magica] Madoka Kaname (Walpurg Rising)",
                "start": "aug 28 2026, 22:00",
                "end": "oct 30 2026, 11:59"
			},
            {
				name: "Showcase Fate Weave",
                "start": "april 30 2026, 12:00",
                "end": "may 12 2026, 11:59"
			},
            {
				name: "5★ Kioku Selection Pack Medals",
                "start": "aug 28 2026, 22:00",
                "end": "sept 30 2026, 11:59",
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
		"Limited Time Style Ticket Trader",
		"「スタイルチケットイベント」"
		],
		image: [
            "imgs/exedra/other/style-ticket.png"
        ],
		column: 2,
		priority: 3,
		timers: [	
            {
				name: "Magia Day Sayaka & Mami",
                "start": "July 31 2026, 12:00",
                "end": "sept 30 2026, 11:59",
			},
            {
				name: "Homura School Uniform",
                "start": "aug 13 2026, 22:00",
                "end": "oct 01 2026, 11:59",
			},
            {
				name: "Homura School Uniform II",
                "start": "aug 29 2026, 22:00",
                "end": "oct 30 2026, 11:59",
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
        priority: 1,
        timers: [
            {
                name: "Maintenance",
				start: "aug 24 2026, 14:00",
				end: "aug 24 2026, 15:29"
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
                name: "5★ draw rate 50% for Step 5 on each cycle",
                "start": "aug 28 2026, 22:00",
                "end": "sept 30 2026, 11:59",
                extraPriority: 100
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
			"【Exclusive New】Rebellion Redux Mami & Sayaka",
            "『【限定★5 】美樹さやか(叛逆の物語) & 巴マミ(叛逆の物語)登場』"
        ],
        "image": [
            "imgs/exedra/fate/rebel00.png",
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "Mami Tomoe (Rebellion) - Defender",
                "start": "July 31 2026, 12:00",
                "end": "sept 30 2026, 11:59",
            },
            {
                name: "Sayaka Miki (Rebellion) - Healer",
                "start": "July 31 2026, 12:00",
                "end": "sept 30 2026, 11:59",
            },
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
			"【New】[Luminous Tenet] Kush Irina ",
            "『【★5 】[赫奕の福音]入名クシュ』"
        ],
        "image": [
            "imgs/exedra/fate/kush.png",
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "",
                "start": "July 31 2026, 12:00",
                "end": "aug 31 2026, 11:59"
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
			"【Limited New】[Vinctio☆Magica] Madoka Kaname (Walpurg Rising)",
            "『新★5キオク鹿目まどか(ワルプルギスの廻天)』"
        ],
        "image": [
            "imgs/exedra/fate/mado-walp.png",
        ],
        "column": 1,
        "priority": 9,
        "timers": [
            {
                name: "Light Debuffer",
                "start": "aug 28 2026, 22:00",
                "end": "oct 29 2026, 11:59",
            //    extraPriority: 1000
            }
        ]
    },
         	{
        "type": "Gacha",
        "title": [
			"【Unlimited New】[Thuderous Waltz] Uwasa Tsuruno",
            "『新★5キオク[ウワサの雷扇痺舞]ウワサの鶴乃』"
        ],
        "image": [
            "imgs/exedra/fate/uwasa-tsu.png",
        ],
        "column": 1,
        "priority": 9,
        "timers": [
            {
                name: "Fire Defender",
                "start": "aug 28 2026, 22:00",
                "end": "sept 30 2026, 11:59",
            //    extraPriority: 1000
            }
        ]
    },
            	{
        "type": "Gacha",
        "title": [
			"【Free Daily】Free 10-draws up to 100 draws ",
            "『最大100連まで毎日10連ガチャ無料』"
        ],
        "image": [
            "imgs/exedra/fate/ten-free0826.png",
        ],
        "column": 1,
        "priority": 10,
        "timers": [
            {
                name: "Featuring Ultimate Madoka & Devil Homura ",
                "start": "aug 13 2026, 22:00",
                "end": "sept 30 2026, 11:59"
            },
        ]
    },
    {
        "type": "Gacha",
        "title": [
			"【Exclusive】Ultimate Madoka & Devil Homura Redux",
            "『アルティメットまどか・悪魔ほむら』"
        ],
        "image": [
            "imgs/exedra/fate/mado-homu-kami.png",
        ],
        "column": 1,
        "priority": 9,
        "timers": [
            {
                name: "First 30 Pulls Free!",
                "start": "aug 13 2026, 22:00",
                "end": "sept 30 2026, 11:59"
            },
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
			"Special Fate Weaves",
            "『 スペシャルなガチャ』"
        ],
        "image": [
            "imgs/exedra/other/special-fate.png",
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "Walpurg Rising 5★ Guarenteed Showcase",
                "start": "aug 28 2026, 22:00",
                "end": "sept 30 2026, 11:59",
            },
            {
                name: "Free 5★ Attacker Guaranteed Fate Weave",
                "start": "aug 28 2026, 22:00",
                "end": "sept 28 2026, 20:59",
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
