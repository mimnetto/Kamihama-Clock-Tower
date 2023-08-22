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
			"【Special Kimochi】 ～ Witch of the Nutcracker ～ ",
            "『キモチ戦特別編 くるみ割りの魔女』"
        ],
        "image": [
            "imgs/anni/kimochi00.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Part 1 - Day 1",
                start: "sep 4 2023, 17:00",
                end: "sep 5 2023, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "sep 5 2023, 16:00",
				end: "sep 6 2023, 15:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "sep 6 2023, 16:00",
				end: "sep 7 2023, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "sep 7 2023, 16:00",
				end: "sep 8 2023, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "sep 8 2023, 16:00",
				end: "sep 9 2023, 15:59"
			}, 
            {
                "name": "Void Attribute",
                "start": "sep 4 2023, 17:00",
                "end": "sep 9 2023, 15:59",
                "extraPriority": 1,
				"type": "normal",
				markers:
				[{time: "sep 7 2023, 17:00", title: "Part 2 - Groups", type: "battle"}]
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
            "Iroha Tamaki's Birthay limited-time mission Celebration",
			"「環いろは」のお誕生日"
        ],
        "image": [
            "imgs/anni/birth.png"

        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Limited-Time Missions",
				start: "aug 22 2023, 16:00",
				end: "sep 4 2023, 14:59",
			},
		]
	},
	{
        "type": "Event",
        "title": [
            "6th Anniversary Campaign",
			"【6周年記念キャンペーン】"
        ],
        "image": [
            "imgs/anni/camp00.png",
			"imgs/events/anni06.png"

        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				name: "Login Bonus & Story",
				start: "aug 22 2023, 16:00",
				end: "sep 4 2023, 14:59",
			},
			{
				name: "1/2 AP, x2 PLAYER EXP, x2 Support Pt & x2 Magical Strengthening Great and Super Success Rate",
				start: "aug 22 2023, 16:00",
				end: "sep 4 2023, 14:59",
			},
			{
				name: "Mirror Coin Rewards Doubled",
				start: "aug 22 2023, 16:00",
				end: "sep 4 2023, 14:59",
			}
        ]
    },
		{
        "type": "Event",
        "title": [
            "【New Event】 Paradise Shift ～The Story of Returning～",
			"『かごめの百怪波瀾～炎夏の宴～』"
        ],
        "image": [
			"imgs/anni/event00.png"
        ],
        "column": 0,
        "priority": 9,
        "timers": [
			{
				name: "",
				start: "aug 22 2023, 16:00",
				end: "sept 4 2023, 14:59",
				markers:
				[{title: "Story Quests Part 2, 100 Evils Challenge Quests Ⅰ～Ⅲ", time: "aug 28 2023, 16:00", type: "battle"}]
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
			{
				name: "Devil Homura - Purple",
				start: "aug 22 2023, 16:00",
				end: "sept 18 2023, 14:59"
			},
		]
	},
{
		type: "Other",
		title: [
		"【Limited】6th anniversary DX lucky bag",
		"『6周年DX福袋』"
		],
		image: [
            "imgs/anni/shops00.png",
			"imgs/anni/shops01.png"
        ],
		column: 2,
		priority: 1,
		timers: [
		{
			name: "Sales period",
			start: "aug 22 2023, 16:00",
			end: "sep 4 2023, 14:59",
			extraPriority: 1000
		},
		{
			name: "DX Ticket Limited and Unlimited Gachas",
			start: "aug 22 2023, 16:00",
			end: "sep 11 2023, 14:59",
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
			start: "aug 17 2023, 16:00",
			end: "sept 11 2023, 14:59"
		},
		{
			name: "Devil Homura - Purple",
			start: "aug 22 2023, 16:00",
			end: "sept 18 2023, 14:59"
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
			"Paid Limited Step-up Gacha Anniversary Edition",
            "『有償限定 ステップアップガチャ アニバーサリー編』"
        ],
        "image": [
            "imgs/anni/step00.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "",
                start: "aug 22 2023, 16:00",
				end: "sep 4 2023, 14:59",
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited Pickup Gacha Anniversary Edition Gachas",
            "『有償限定 ピックアップ ガチャ アニバーサリー編』"
        ],
        "image": [
            "imgs/anni/pick00.png",
			"imgs/anni/pick01.png",
			"imgs/anni/pick02.png",
			"imgs/anni/pick03.png",
			"imgs/anni/pick04.png",
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "",
                start: "aug 22 2023, 16:00",
				end: "sep 4 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Anniversary Gacha】Devil Homura Gacha",
            "『有償限定 ステップアップ & ピックアップガチャ 悪魔ほむら編』"
        ],
        "image": [
            "imgs/anni/homu00.png",
			"imgs/anni/homu01.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "",
                start: "aug 22 2023, 16:00",
				end: "sep 11 2023, 14:59",
                extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"6th Anniversary Choose your 4★ Limited Magical Girl Selection Gacha ",
            "『6周年記念 選べる★4魔法少女ピックアップガチャ』"
        ],
        "image": [
            "imgs/anni/pick05.png"
        ],
        "column": 1,
        "priority": 14,
        "timers": [
            {
                name: "4★ Magical Girl Pull Rate Doubled!",
                start: "aug 22 2023, 16:00",
				end: "sep 4 2023, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "aug 22 2023, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "aug 23 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "aug 24 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "aug 25 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "aug 26 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "aug 27 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "aug 28 2023 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "aug 29 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "aug 30 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "aug 31 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "sep 1 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 2 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 3 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 4 2023, 00:00",
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
			"6th Anniversary Choose your 4★ Limited Memoria Selection Gacha ",
            "『6周年記念 選べる★4メモリアセレクションガチャ』"
        ],
        "image": [
            "imgs/anni/pick06.png"
        ],
        "column": 1,
        "priority": 14,
        "timers": [
            {
                name: "4★ Magical Girl Pull Rate Doubled!",
                start: "aug 22 2023, 16:00",
				end: "sep 4 2023, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "aug 22 2023, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "aug 23 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "aug 24 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "aug 25 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "aug 26 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "aug 27 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "aug 28 2023 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "aug 29 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "aug 30 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "aug 31 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "sep 1 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 2 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 3 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 4 2023, 00:00",
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
