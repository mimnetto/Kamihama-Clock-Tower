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
            "【Double Tower Event】Puella Historia ・ The Rakshasi of Tibet",
			"『ピュエラ・ヒストリア チベットのラクシャーシー編』"
        ],
        "image": [
            "imgs/gatcha/gatcha03.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "",
				start: "may 19 2023, 16:00",
				end: "may 29 2023, 14:59",
				extraPriority: 1000,
				markers:
				[{title: "Story Quests 21-40 & 100Evils I~III", time: "May 24 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Puella Historia Strategy Campaign",
			"『ピュエラ・ヒストリア攻略キャンペーン』"
        ],
        "image": [
            "imgs/camp/camp00.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
			{
				name: "",
				start: "may 19 2023, 16:00",
				end: "may 29 2023, 14:59",
				markers:
				[
				{time: "Mar 27 2023, 16:00", title: "Challenge Stages", type: "battle"},
				{time: "Mar 31 2023, 16:00", title: "EX Challenge Stages", type: "battle"}
				],
				extraPriority: 100
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "2100th Anniversary Campaign",
			"『リリース2100日記念キャンペーン』"
        ],
        "image": [
            "imgs/gatcha/free002100.png",
			"imgs/gatcha/quest2100.png"

        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "Limited-Time Daily Missions and Login Bonus",
				start: "may 29 2023, 16:00",
				end: "june 9 2023, 23:59",
				extraPriority: 10
			},
			{
				name: "1/2 AP, x2 PLAYER EXP, x2 Support Pt & x2 Magical Strengthening Great and Super Success Rate",
				start: "may 29 2023, 16:00",
				end: "june 9 2023, 23:59",
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
            "【Event Rerun】Rainbow Colored Summer ~Everyday Life Recorded in a Notebook~",
			"『七色夏模様 ～ノートに記された日常～』"
        ],
        "image": [
			"imgs/events/rerun00.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
			{
				name: "Limited-time Daily Missions",
				start: "May 29 2023, 16:00",
				end: "june 9 2023, 14:59",
				extraPriority: 1000
			}
        ]
    },
		{
        "type": "Event",
        "title": [
            "Battle Museum",
			"【バトルミュージアム予告】"
        ],
        "image": [
            "imgs/events/banner_0530.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
			{
				name: "",
				start: "May 8 2023, 16:00",
				end: "May 19 2023, 14:59",
				extraPriority: 100,
				markers:
				[{title: "Story Quests 11-20 & 100Evils I~III", time: "mar 3 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Shop",
        "title": [
            "Monthly Magia Stones Shops",
			"毎月マギアストーンショップ"
        ],
        "image": [
            "shop"
        ],
        "column": 2,
        "priority": 100,
        "timers": [
			{
				name: "Choose your 4☆ Memoria Trade-in Ticket - Red",
				start: "may 8 2023, 16:00",
				end: "may 26 2023, 14:59"
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
		"Event Quests Currency Shops",
		"「イベントクエスト 通貨ショップ」"
		],
		image: [
            "imgs/quest-shop.png"
        ],
		column: 2,
		priority: 2,
		timers: [
		{
			name: "The Rakshasi of Tibet -  Butter Tea",
			start: "May 19 2023, 16:00",
			end: "June 5 2023, 14:59",
			extraPriority: 100
		},
		{
			name: "Kimochi Medal - Ruby Navel",
			start: "April 17 2023, 18:00",
			end: "May 05 2023, 14:59",
			extraPriority: 1000
		},
		]
	},
	{
		type: "Other",
		title: [
		"Adjuster Coin Limited-time Shops",
		"「調整屋コインの期間限定ショップ」"
		],
		image: [
            "imgs/coin-shop.png"
        ],
		column: 2,
		priority: 3,
		timers: [
			{
				name: "4☆ Selectable Pickup Adjuster's Coins - Pink",
				start: "may 1 2023, 16:00",
				end: "may 26 2023, 14:59",
				extraPriority: 100
			},
			{
				name: "Heruka Adjuster Coin Shop and Memo Ticket - Green",
				start: "may 19 2023, 16:00",
				end: "june 5 2023, 14:59",
				extraPriority: 100
			},
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
		"Limited Time Magia Stone Packs",
		"『マギアストーン限定ショップ』"
		],
		image: [
            "imgs/shops/shop2100.png"
        ],
		column: 2,
		priority: 1,
		timers: [
		{
			name: "Sales period",
			start: "May 29 2023, 16:00",
			end: "june 9 2023, 14:59",
			extraPriority: 1000
		}
		]
	},
{
		type: "Other",
		title: [
		"Mitama's Special Offer",
		"『みたまのスペシャルオファー』"
		],
		image: [
            "imgs/shops/mitama00.png"
        ],
		column: 2,
		priority: 5,
		timers: [
		{
			name: "",
			start: "May 8 2023, 16:00",
			end: "May 19 2023, 14:59",
			extraPriority: 100
		}
		]
	},
	{
        type: "Maintenance",
        title: [
            "Rika & Ayaka ★ 5 Awakening and Doppel Release Countdown",
			"【★5覚醒およびドッペル解放予告】"
        ],
		"image": [
			"imgs/events/doppel00.png",
			"imgs/events/doppel01.png"
		],
        column: 0,
        priority: 4,
        timers: [
            {
                name: "Rika Finally Awakens",
                start: "may 29 2023, 16:00",
                end: "may 29 2023, 16:00",
				extraPriority: 1000
            }
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
                start: "May 29 2023, 15:00",
                end: "May 29 2023, 16:00",
				extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Gacha Rurun】Paid Limited Step-up Swimsuit Gacha",
            "【有償限定 ステップアップガチャ 水着魔法少女】"
        ],
        "image": [
            "imgs/gatcha/rerun06.png",
			"imgs/gatcha/rerun05.png",
			"imgs/gatcha/rerun04.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "2019-2022 Editions",
                start: "May 29 2023, 16:00",
				end: "june 9 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
			{
        "type": "Gacha",
        "title": [
			"【Gacha Rurun】Limited Pick-Up Swimsuit Gacha",
            "【有償限定 ピックアップガチャ 水着魔法少女】"
        ],
        "image": [
            "imgs/gatcha/rerun03.png",
			"imgs/gatcha/rerun02.png",
			"imgs/gatcha/rerun01.png",
			"imgs/gatcha/rerun01.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "2019-2022 Editions",
                start: "May 29 2023, 16:00",
				end: "june 9 2023, 14:59",
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
			"Free Daily Rare Gacha 10 Pull",
            "『10連レアガチャ』"
        ],
        "image": [
            "imgs/gatcha/free00.png"
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "Daily Pulls",
                start: "May 29 2023, 16:00",
				end: "June 9 2023, 23:59",
                extraPriority: 0,
				markers:
				[
				{
					title: "Free pull 1",
					time: "May 29 2023, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "May 30 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "May 31 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "June 1 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "June 2 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "June 3 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "June 4 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "June 5 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "June 6 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "June 7 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "June 8 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "June 9 2023, 0:00",
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
        "priority": 17,
        "timers": [
            {
                name: "",
                start: "May 2 2023, 00:00",
				end: "May 19 2023, 23:59",
                extraPriority: 0,
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
			"【New Gacha】Limited-time Heruka Pickup & Paid Step-UP Gacha",
            "『ピュエラ・ヒストリア チベットのラクシャーシー編』"
        ],
        "image": [
            "imgs/gatcha/gatcha0302.png",
			"imgs/gatcha/gatcha0303.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "",
                start: "May 19 2023, 16:00",
				end: "May 29 2023, 14:59",
                extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Ren Paid Step Up Gacha",
            "『有償限定 ステップアップガチャ』"
        ],
        "image": [
            "imgs/gatcha/gatcha-ren.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "",
                start: "May 8 2023, 16:00",
				end: "May 19 2023, 14:59",
                extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Battle Museum, Special Offers and Ren Step Up Gacha",
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
