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
			"Kimochi Drifting Diamond Hair",
            "『キモチ戦 漂うダイヤモンドの髪』"
        ],
        "image": [
            "imgs/kimochi/kimochi00.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Part 1 - Day 1",
                start: "July 10 2023, 17:00",
                end: "july 11 2023, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "july 11 2023, 16:00",
				end: "july 12 2023, 15:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "july 12 2023, 16:00",
				end: "july 13 2023, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "july 13 2023, 16:00",
				end: "july 14 2023, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "july 14 2023, 16:00",
				end: "july 15 2023, 15:59"
			}, 
            {
                "name": "Event Duration",
                "start": "july 10 2023, 17:00",
                "end": "july 15 2023, 15:59",
                "extraPriority": 1,
				"type": "normal",
				markers:
				[{time: "April 19 2023, 17:00", title: "Part 2 - Groups", type: "battle"}]
			}
			]
    },
		{
        "type": "WeekendBoss",
        "title": [
			"[Mirrors rank match ",
			"【ミラーズランクマッチ】"
        ],
        "image": [
            "imgs/events/mirrors00.png"
        ],
        "column": 0,
        "priority": 11,
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
                "extraPriority": 1,
				"type": "normal",
				markers:
				[{time: "Nov 12 2022, 17:00", title: "Finals", type: "battle"}]
			}
			]
    },
	{
        "type": "Event",
        "title": [
            "【New Event Type】Puella Historia ・ Pillar of Tomorrow",
			"『ピュエラ・ヒストリア Pillar of Tomorrow』"
        ],
        "image": [
            "imgs/events/pot00.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "Tentative Schedule",
				start: "aug 17 2023, 16:00",
				end: "aug 22 2023, 14:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【YouTube Live】 Magia Day 2023",
			"『Magia Day 2023』"
        ],
        "image": [
			"imgs/events/magiaday23.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Confirmed Scene0 Annoucement",
				start: "Sept 24 2023, 18:00",
				end: "Sept 24 2023, 20:00",
				markers:
				[
				{time: "Mar 27 2023, 16:00", title: "Challenge Stages", type: "battle"},
				{time: "Mar 31 2023, 16:00", title: "EX Challenge Stages", type: "battle"}
				],
				extraPriority: 10
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "6th Anniversary Countdown Campaign",
			"『6周年カウントダウンキャンペーン』"
        ],
        "image": [
            "imgs/events/anni06.png"

        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Limited-Time Daily Missions and Login Bonus",
				start: "aug 17 2023, 17:00",
				end: "sep 4 2023, 14:59",
				extraPriority: 10
			},
		]
	},
	{
        "type": "Event",
        "title": [
            "2100 Days Since Release Campaign",
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
				end: "june 9 2023, 14:59",
				extraPriority: 10
			},
			{
				name: "1/2 AP, x2 PLAYER EXP, x2 Support Pt & x2 Magical Strengthening Great and Super Success Rate",
				start: "may 29 2023, 16:00",
				end: "june 9 2023, 14:59",
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
            "【New Event】blank",
			"『かごめの百怪波瀾～炎夏の宴～』"
        ],
        "image": [
			"imgs/events/event04.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Limited-time Daily Missions",
				start: "May 29 2023, 16:00",
				end: "june 9 2023, 14:59",
				extraPriority: 1000,
				markers:
				[{title: "Story Quests Part 2", time: "june 2 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【New Event】Kagome's 100 Monsters ~Midsummer Sabbath~",
			"『かごめの百怪波瀾～炎夏の宴～』"
        ],
        "image": [
			"imgs/events/event04.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "",
				start: "aug 4 2023, 16:00",
				end: "aug 17 2023, 14:59",
				extraPriority: 1000,
				markers:
				[{title: "Story Quests 11-20 & 100Evils I~III", time: "aug 10 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【New Double Tower Event】 Puella Historia ・ Pax Romana’s Sweetheart",
			"『ピュエラ・ヒストリア パクス・ロマーナの恋人編』"
        ],
        "image": [
			"imgs/events/historia003.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "",
				start: "july 24 2023, 16:00",
				end: "aug 4 2023, 14:59",
				markers:
				[{title: "Story Quests 21-30 & 100Evils I~III", time: "july 28 2023, 16:00", type: "battle"}]
			}
        ]
    },
		{
        "type": "Event",
        "title": [
            "【New Mirrors Event】Mirrors Rank Match",
			"【ミラーズランクマッチ】"
        ],
        "image": [
            "imgs/events/mirrors00.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
			{
				name: "Auto Battle",
				start: "June 19 2023, 17:00",
				end: "July 2 2023, 20:59",
				extraPriority: 100,
				markers:
				[
					{
						title: "Day 1", 
						time: "june 19 2023, 17:00", 
						type: "battle"
					},
					{
						title: "Day 2", 
						time: "June 20 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 3", 
						time: "June 21 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 4", 
						time: "June 22 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 5", 
						time: "June 23 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 6", 
						time: "June 24 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 7", 
						time: "June 25 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 8", 
						time: "June 26 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 9", 
						time: "June 27 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 10", 
						time: "June 28 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 11", 
						time: "June 29 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 12", 
						time: "June 30 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 13", 
						time: "July 1 2023, 16:00", 
						type: "battle"
					},
					{
						title: "Day 14", 
						time: "July 2 2023, 16:00", 
						type: "battle"
					},
				]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【New Gatcha】 Puella Historia ・ Amaryllis Pickup Gacha",
			"『ピュエラ・ヒストリア 邪馬台国の跡目編』"
        ],
        "image": [
			"imgs/gatcha/hisitoria00.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "",
				start: "june 26 2023, 16:00",
				end: "July 10 2023, 14:59",
				extraPriority: 100,
				markers:
				[{title: "Story Quests 16-30 & 100Evils I~III", time: "july 3 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        title: [
			"Puella Historia Strategy Campaign",
            "『ピュエラ・ヒストリア攻略キャンペーン』"
        ],
        "image": [
            "imgs/camp/camp00.png",
			"imgs/events/historia001.png"
		],
        column: 0,
        priority: 1,
        timers: [
            {
                name: "",
                start: "Aug 17 2023, 16:00",
                end: "Aug 22 2023, 14:59"
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
		priority: 5,
		timers: [
		{
			name: "Pax Romana - Longed-for Game Board",
			start: "July 24 2023, 16:00",
			end: "Aug 11 2023, 14:59"
		},
		{
			name: "Kagome's 100 Monsters - Ancient Wish",
			start: "aug 4 2023, 16:00",
			end: "aug 24 2023, 14:59"
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
				name: "Kagome Satori Hyakki Yako ver. - Green",
				start: "aug 4 2023, 16:00",
				end: "aug 24 2023, 14:59"
			},
			{
				name: "Historia Magical Girls - Blue",
				start: "aug 17 2023, 16:00",
				end: "sept 11 2023, 14:59"
			},
		]
	},
{
		type: "Other",
		title: [
		"【Limited】Light Attribute Magical Girl Training Pack",
		"『光属性魔法少女育成パック』"
		],
		image: [
            "imgs/shops/hikaru.png"
        ],
		column: 2,
		priority: 1,
		timers: [
		{
			name: "Sales period",
			start: "July 10 2023, 17:00",
			end: "jul 17 2023, 14:59",
			extraPriority: 1000
		}
		]
	},
{
		type: "Other",
		title: [
		"Paid Step-Up Selection Tickets",
		"『交換チケット』"
		],
		image: [
            "imgs/selction-tix.png"
        ],
		column: 2,
		priority: 2,
		timers: [
		{
			name: "Kagome Satori Hyakki Yako ver. Selection Ticket - Green",
			start: "aug 4 2023, 16:00",
			end: "aug 24 2023, 14:59"
		},
		{
			name: "Historia Magical Girls - Blue",
			start: "aug 17 24 2023, 16:00",
			end: "sept 11 2023, 14:59"
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
        priority: 1,
        timers: [
            {
                name: "Estimated Time",
                start: "aug 4 2023, 15:00",
                end: "aug 4 2023, 15:59",
				// extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Limited Gacha】Nanami Yachiyo Historia ver. Pickup and Step-up Gacha",
            "【有償限定 ステップアップ & ピックアップ ガチャ 期間限定 七海やちよ ヒストリアver. 】"
        ],
        "image": [
            "imgs/gatcha/yachan00.png",
			"imgs/gatcha/yachan01.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Pick Up & Paid Step Up",
                start: "Aug 17 2023, 16:00",
				end: "sep 4 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Light Attribute Pick Up Gacha",
            "『光属性魔法少女 ピックアップガチャ』"
        ],
        "image": [
			"imgs/gatcha/kimoga00.png"
        ],
        "column": 1,
        "priority": 15,
        "timers": [
            {
                name: "",
                start: "July 10 2023, 17:00",
				end: "July 17 2023, 14:59",
                extraPriority: 100,
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Gacha】 Masara x Kokoro Bride ver.",
            "『有償限定 ステップアップガチャ まさら・こころ 花嫁ver.編』"
        ],
        "image": [
            "imgs/gatcha/kokomasa-00.png",
			"imgs/gatcha/kokomasa-01.png"
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "",
                start: "june 9 2023, 16:00",
				end: "june 19 2023, 14:59",
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			" 4★ Selectable Memoria Gacha",
            "【選べる★4メモリアセレクションガチャ】"
        ],
        "image": [
            "imgs/gatcha/choose-memo.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "",
                start: "june 19 2023, 17:00",
				end: "jul 3 2023, 14:59",
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
        "priority": 100,
        "timers": [
            {
                name: "Daily Pulls",
                start: "May 29 2023, 16:00",
				end: "June 9 2023, 16:59",
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
			"One Time Guareteed ★ 4 Light Attribute Paid Gacha",
            "『光属性★4確定ガチャ予告』"
        ],
        "image": [
			"imgs/gatcha/kimoga01.png"
        ],
        "column": 1,
        "priority": 15,
        "timers": [
            {
                name: "",
                start: "July 10 2023, 17:00",
				end: "July 17 2023, 14:59",
                extraPriority: 100,
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Gacha】Limited-time Toyo Pickup & Paid Step-UP Gacha",
            "『期間限定 トヨ ピックアップ & ステップアップガチャ』"
        ],
        "image": [
            "imgs/gatcha/toyo00.png",
			"imgs/gatcha/toyo01.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "",
                start: "June 26 2023, 16:00",
				end: "july 10 2023, 14:59",
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
			"【New Gatcha】Amaryllis Pickup and Step-up Gacha",
            "『有償限定 ステップアップ & ピックアップ ガチャ アマリュリス編』"
        ],
        "image": [
			"imgs/gatcha/ama00.png",
			"imgs/gatcha/ama01.png"
        ],
        "column": 1,
        "priority": 15,
        "timers": [
            {
                name: "",
                start: "July 24 2023, 16:00",
				end: "aug 4 2023, 14:59",
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
