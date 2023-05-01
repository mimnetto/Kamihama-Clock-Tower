var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "May 5 2023, 18:00";
var nextAnniversary = "August 22 2023, 0:00";
var alertMessages = [];
var alertTypes = [];
var timerData = [
    /*{
        type: "DailyQuest",
        title: "Daily Quests",
        priority: 50,
        days: {
            "sunday": { elements: ["Sun", "Priest", "Mage", "Alchemist"], short:"Sun" },
            "monday": { elements: ["Moon", "Gold", "Warrior"], short:"Mon" },
            "tuesday": { elements: ["Fire", "Knight", "Priest"], short:"Tue" },
            "wednesday": { elements: ["Water", "Gold", "Mage"], short:"Wed" },
            "thursday": { elements: ["Wind", "Warrior", "Alchemist"], short:"Thu" },
            "friday": { elements: ["Gold", "Priest", "Mage"], short:"Fri" },
            "saturday": { elements: ["Earth", "Warrior", "Knight"], short:"Sat" }
        }
    },

  */
	{
        "type": "WeekendBoss",
        "title": [
			"Docile Ruby Navel",
            "『キモチ戦 従順なルビーのへそ』"
        ],
        "image": [
            "imgs/events/kimochi00.png"
        ],
        "column": 0,
        "priority": 500,
        "timers": [
			{
				name: "Part 1 - Day 1",
				start: "April 17 2023, 18:00",
				end: "April 18 2023, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "April 18 2023, 16:00",
				end: "April 19 2023, 15:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "April 19 2023, 16:00",
				end: "April 20 2023, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "April 20 2023, 16:00",
				end: "April 21 2023, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "April 21 2023, 16:00",
				end: "April 22 2023, 15:59"
			}, 
            {
                "name": "Main Event",
                "start": "April 17 2023, 18:00",
                "end": "April 22 2023, 16:00",
                "extraPriority": 1000,
				"type": "normal",
				markers:
				[{time: "April 19 2023, 16:00", title: "Part 2 - Groups", type: "battle"}]
			}
			]
    },
		{
        "type": "WeekendBoss",
        "title": [
			"Ranked Mirrors",
			"ミラーズランキング"
        ],
        "image": [
            "imgs/mirroran.png"
        ],
        "column": 0,
        "priority": 8,
        "timers": [
			{
				name: "Preliminaries - Day 1",
				start: "Mar 20 2023, 17:00",
				end: "Mar 21 2023, 15:59"
			},
			{
				name: "Preliminaries - Day 2",
				start: "Mar 21 2023, 16:00",
				end: "Mar 22 2023, 15:59"
			},
			{
				name: "Preliminaries - Day 3",
				start: "Mar 22 2023, 16:00",
				end: "Mar 23 2023, 15:59"
			},
			{
				name: "Preliminaries - Day 4",
				start: "Mar 23 2023, 16:00",
				end: "Mar 24 2023, 15:59"
			},
			{
				name: "Preliminaries - Day 5",
				start: "Mar 24 2023, 16:00",
				end: "Mar 25 2023, 15:59"
			},
			{
				name: "Finals",
				start: "Mar 25 2023, 17:00",
				end: "Mar 26 2023, 20:59"
			},
            {
                "name": "Main Event",
                "start": "Mar 26 2023, 17:00",
                "end": "Mar 27 2023, 20:59",
                "extraPriority": 1000,
				"type": "normal",
				markers:
				[{time: "Nov 12 2022, 17:00", title: "Finals", type: "battle"}]
			}
			]
    },
	{
        "type": "Event",
        "title": [
            "【New Event】Puella · Historia: Valkyrie of Vik",
			"『ピュエラ・ヒストリア ヴィークのワルキューレ編』』"
        ],
        "image": [
            "imgs/events/historia002.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "",
				start: "April 24 2023, 16:00",
				end: "April 5 2023, 14:59",
				markers:
				[
				{time: "Mar 27 2023, 16:00", title: "Challenge Stages", type: "battle"},
				{time: "Mar 31 2023, 16:00", title: "EX Challenge Stages", type: "battle"}
				],
				extraPriority: 1000
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Puella・Historia Strategy Campaign  ",
			"『ピュエラ・ヒストリア攻略キャンペーン』"
        ],
        "image": [
            "imgs/quest/quest00.png",
			"imgs/events/historia001.png"

        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "Limited-time missions",
				start: "april 24 2023, 16:00",
				end: "may 8 2023, 14:59",
				extraPriority: 10
			},
			{
				name: "1/2 AP, x2 PLAYER EXP, x2 Support Pt & x2 Magical Strengthening Great and Super Success Rate",
				start: "april 24 2023, 16:00",
				end: "may 8 2023, 14:59",
				extraPriority: 10
			},
			{
				name: "Limited-time Daily Missions",
				start: "april 24 2023, 16:00",
				end: "may 8 2023, 14:59",
			}
        ]
    },
		{
        "type": "Event",
        "title": [
            "Early Summer Campaign",
			"『アーリーサマーキャンペーン』"
        ],
        "image": [
			"imgs/events/event02.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
			{
				name: "Limited-time Daily Missions",
				start: "May 2 2023, 00:00",
				end: "May 19 2023, 23:59",
				extraPriority: 100
			}
        ]
    },
		{
        "type": "Event",
        "title": [
            "Magical Paper Sumo: Deluxe Edition",
			"「マジカルカルタ」"
        ],
        "image": [
            "imgs/2602/banner_0655_m.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
			{
				name: "",
				start: "mar 31 2022, 16:00",
				end: "april 17 2022, 14:59",
				extraPriority: 100,
				markers:
				[{title: "Story Quests 11-20 & 100Evils I~III", time: "mar 3 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【New Event】Puella · Historia: Valkyrie of Vik",
			"『ピュエラ・ヒストリア ヴィークのワルキューレ編』』"
        ],
        "image": [
            "imgs/events/historia002.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
			{
				name: "",
				start: "april 24 2023, 16:00",
				end: "may 8 2023, 14:59",
				extraPriority: 100,
				markers:
				[{title: "Story Quests 21-40 & 100Evils I~III", time: "May 1 2023, 16:00", type: "battle"}]
			}
        ]
    },

	{
        "type": "Shop",
        "title": [
            "Shops and Limited-time Missions",
			"ショップと期間限定ミッション"
        ],
        "image": [
            "shop"
        ],
        "column": 2,
        "priority": 100,
        "timers": [
			{
				name: "Adjuster Coin Shop: Water",
				start: "april 17 2023, 18:00",
				end: "may 01 2023, 14:59"
			},
			{
				name: "Olga and Gunhild Adjuster's Coins",
				start: "April 24 2023, 16:00",
				end: "May 15 2023, 14:59",
			},
			{
				name: "Adjuster Coin Shop: Yellow (Infinity Iroha-chan)",
				start: "april 5 2023, 16:00",
				end: "april 24 2023, 14:59"
			},
			{
				name: "Choose your 4☆ Memoria Trade-in Ticket Yellow",
				start: "april 5 2023, 16:00",
				end: "april 24 2023, 14:59"
			},
			{
				name: "Kamihama M",
				start: "Feb 10 2023, 16:00",
				end: "Feb 27 2023, 14:59"
			},
			{
				name: "Little Bird's Star - Event Shop & Missions",
				start: "Feb 27 2023, 16:00",
				end: "Mar 17 2023, 14:59"
			},
			{
				name: "Ranking Mirrors Related Packs",
				start: "Mar 20 2022, 16:00",
				end: "Mar 27 2022, 14:59"
			}
        ]
    },

{
		type: "Other",
		title: [
		"Choose your 4☆ Memoria Trade-in Ticket Yellow",
		"「水属性魔法少女育成パック」"
		],
		image: [
            ""
        ],
		column: 2,
		priority: 5,
		timers: [
		{
			name: "Sales period",
			start: "april 5 2022, 16:00",
			end: "april 24 2022, 14:59",
			extraPriority: 100
		}
		]
	},
{
		type: "Other",
		title: [
		"Magical Paper Sumo: Deluxe Edition",
		"魔法少女たると☆マギカコラボ記念 育成応援パックの販売"
		],
		image: [
            "imgs/shops/shop00.png"
        ],
		column: 2,
		priority: 6,
		timers: [
		{
			name: "Sales period",
			start: "Mar 23 2023, 16:00",
			end: "Mar 31 2023, 14:59",
			extraPriority: 100
		}
		]
	},
{
		type: "Other",
		title: [
		"Aqua Attribute Strengthening Pack",
		"「水属性魔法少女育成パック」"
		],
		image: [
            "imgs/shops/shop02.png"
        ],
		column: 2,
		priority: 5,
		timers: [
		{
			name: "",
			start: "April 17 2023, 18:00",
			end: "April 24 2023, 14:59",
			extraPriority: 1000
		}
		]
	},
	{
		type: "Other",
		title: [
		"Event Quests Currency Shops",
		"「イベントクエスト 通貨ショップ」"
		],
		image: [
            "imgs/quest-shop.png"
        ],
		column: 2,
		priority: 1,
		timers: [
		{
			name: "Puella Historia Valkyrie of Vik -  ᚺ - Hail Rune",
			start: "April 14 2023, 16:00",
			end: "May 15 2023, 14:59",
			extraPriority: 100
		},
		{
			name: "Kimochi Medal - Ruby Navel",
			start: "April 17 2023, 18:00",
			end: "May 05 2023, 14:59",
			extraPriority: 100
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
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Scheduled Time",
                start: "april 17 2023, 15:00",
                end: "april 17 2023, 16:00",
				extraPriority: 1000
            }
        ]
    },
	{
        type: "Maintenance",
        title: [
            "Maintenance & App version 2.6.3 Update",
			"维护&アプリバージョン2.6.3強制アップデート"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 7,
        timers: [
            {
                name: "Scheduled Time",
                start: "Dec 20 2022, 15:00",
                end: "Dec 20 2022, 16:00",
				extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			" 4★Selectable Pickup Gacha",
            "【水属性★4確定ガチャ予告】"
        ],
        "image": [
            "imgs/gatcha/gacha_sp00.png",
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "",
                start: "May 2 2022, 00:00",
				end: "May 19 2022, 23:59",
                extraPriority: 100
            }
        ]
    },
			{
        "type": "Gacha",
        "title": [
			"【New Gacha】Aqua Attribute Pickup Gacha",
            "『水属性魔法少女 ピックアップガチャ』"
        ],
        "image": [
            "imgs/gatcha/blue00.png"
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "",
                start: "April 17 2023, 18:00",
				end: "April 24 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Gacha】 Paid Only Magia Report Step-UP Gacha",
            "『有償限定 ステップアップガチャ マギア☆レポート編』"
        ],
        "image": [
            "imgs/gatcha/gacha04.png"
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "",
                start: "Mar 27 2023, 17:00",
				end: "April 5 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			" 4★Selectable Pickup Gacha",
            "【水属性★4確定ガチャ予告】"
        ],
        "image": [
            "imgs/gatcha/gacha_sp00.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "",
                start: "May 2 2022, 00:00",
				end: "May 19 2022, 23:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Gacha】Limited-time Gunhild Pickup & Paid Gacha",
            "『有償限定 ステップアップガチャ オルガ編』"
        ],
        "image": [
            "imgs/gatcha/gatcha002.png",
			"imgs/gatcha/gatcha00201.png"
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "",
                start: "April 24 2023, 00:00",
				end: "Mar 31 2023, 23:59",
                extraPriority: 0,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Mar 24 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Mar 25 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Mar 26 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Mar 27 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Mar 28 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Mar 29 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Mar 30 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Mar 31 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Dec 29 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Mar 30 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Dec 31 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Jan 1 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Jan 2 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Jan 3 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Jan 4 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "Jan 5 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 17",
					time: "Jan 6 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 18",
					time: "Jan 7 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 19",
					time: "Jan 8 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 20",
					time: "Jan 9 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 21",
					time: "Jan 10 2023, 0:00",
					type: "star"
				}
				]
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"4★Selectable Pickup & Single Free Pull",
            "『選べる期間限定★4魔法少女 ピックアップガチャ』"
        ],
        "image": [
            "imgs/events/event03.png",
			"imgs/gatcha/gacha_sp00.png"
        ],
        "column": 1,
        "priority": 6,
        "timers": [
            {
                name: "",
                start: "May 2 2023, 00:00",
				end: "May 19 2023, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "May 2 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "May 3 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "May 4 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "May 5 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "May 6 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "May 7 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "May 8 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "May 9 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "May 10 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "May 11 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "May 12 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "May 13 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "May 14 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "May 15 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "May 16 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "May 17 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 17",
					time: "May 18 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 18",
					time: "May 19 2023, 00:00",
					type: "star"
				}
				]
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"【New Gacha】Limited-time Infinity Iroha-chan Pickup & Step-UP Gacha",
            "『期間限定 無限大いろはちゃん ピックアップガチャ』"
        ],
        "image": [
            "imgs/gatcha/gacha06.png",
			"imgs/gatcha/gacha0602.png"


        ],
        "column": 1,
        "priority": 17,
        "timers": [
            {
                name: "",
                start: "April 5 2023, 16:00",
				end: "April 17 2023, 15:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Gacha】Limited-time Olga Pickup & Paid Gacha",
            "『有償限定 ステップアップガチャ オルガ編』"
        ],
        "image": [
            "imgs/gatcha/gatcha002.png",
			"imgs/gatcha/gatcha00201.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "",
                start: "April 24 2023, 16:00",
				end: "May 8 2023, 14:59",
                extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Gacha】Limited-time Gunhild Pickup & Paid Gacha",
            "『有償限定 ステップアップガチャ オルガ編』"
        ],
        "image": [
            "imgs/gatcha/gatcha001.png",
			"imgs/gatcha/gatcha00203.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "",
                start: "April 24 2023, 16:00",
				end: "May 8 2023, 14:59",
                extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"5th Anniversary Choose your 4★ Limited Magical Girl Pickup Gacha ",
            "5周年記念 選べる期間限定★4魔法少女ピックアップガチャ"
        ],
        "image": [
            "imgs/anniv/gachabanner_1107_m.png",
			"imgs/gatcha/gacha_sp00.png"
        ],
        "column": 1,
        "priority": 15,
        "timers": [
            {
                name: "",
                start: "Sep 5 2022, 16:00",
				end: "Sep 20 2022, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Sep 5 2022, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Sep 6 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Sep 7 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Sep 8 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Sep 9 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Sep 10 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Sep 11 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Sep 12 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Sep 13 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Sep 14 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Sep 15 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 16 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 17 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 18 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 19 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "Sep 20 2022, 0:00",
					type: "star"
				}
				]
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"5th Anniversary Choose your 4★ Limited Memoria Selection Gacha ",
            "5周年記念 選べる期間限定★4メモリアセレクションガチャ"
        ],
        "image": [
            "imgs/anniv/gachabanner_1108_m.png"
        ],
        "column": 1,
        "priority": 14,
        "timers": [
            {
                name: "",
                start: "Sep 5 2022, 16:00",
				end: "Sep 20 2022, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Sep 5 2022, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Sep 6 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Sep 7 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Sep 8 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Sep 9 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Sep 10 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Sep 11 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Sep 12 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Sep 13 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Sep 14 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Sep 15 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 16 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 17 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 18 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 19 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "Sep 20 2022, 0:00",
					type: "star"
				}
				]
            }
        ]
    }
];
