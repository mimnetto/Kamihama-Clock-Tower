var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "july 31 2024, 15:00";
var nextAnniversary = "August 22 2024, 0:00";
var alertMessages = [];
var alertTypes = [];
var timerData = [
	{
        "type": "WeekendBoss",
        "title": [
			"Battle Special Edition Alina・Eve ",
            "『キモチ戦特別編 アリナ・イブ』"
        ],
        "image": [
            "imgs/kimochi/kimochi00.png"
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
			"Battle Special Edition Nutcracker Witch ",
            "『キモチ戦特別編 くるみ割りの魔女』"
        ],
        "image": [
            "imgs/kimochi/kimochi01.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Part 1 - Day 1",
                start: "march 25 2024, 17:00",
                end: "march 26 2024, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "march 26 2024, 16:00",
				end: "march 27 2024, 15:59"
			},
			{
				name: "Tally & Group Placements",
				start: "march 27 2024, 16:00",
				end: "march 27 2024, 16:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "march 27 2024, 17:00",
				end: "march 28 2024, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "march 28 2024, 16:00",
				end: "march 29 2024, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "march 29 2024, 16:00",
				end: "march 30 2024, 15:59"
			}, 
            {
                "name": "Darkness Attribute",
                "start": "march 25 2024, 16:00",
                "end": "march 30 2024, 15:59",
                "extraPriority": 1,
				"type": "normal",
				markers:
				[{time: "march 27 2024, 17:00", title: "Part 2 - Groups", type: "battle"}]
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
        "priority": 10,
        "timers": [
			{
				name: "Preliminaries - Day 1",
				start: "jan 29 2024, 17:00",
				end: "jan 29 2024, 15:59"
			},
			{
				name: "Preliminaries - Day 2",
				start: "jan 30 2024, 16:00",
				end: "jan 31 2024, 15:59"
			},
			{
				name: "Preliminaries - Day 3",
				start: "jan 31 2024, 16:00",
				end: "feb 1 2024, 15:59"
			},
			{
				name: "Preliminaries - Day 4",
				start: "feb 1 2024, 16:00",
				end: "feb 2 2024, 15:59"
			},
			{
				name: "Preliminaries - Day 5",
				start: "feb 2 2024, 16:00",
				end: "feb 3 2024, 15:59"
			},
			{
				name: "Finals",
				start: "feb 3 2024, 17:00",
				end: "feb 4 2024, 20:59"
			},
            {
                "name": "Main Event",
                "start": "jan 29 2024, 17:00",
                "end": "feb 4 2024, 20:59",
                //"extraPriority": 1,
				"type": "normal",
				markers:
				[{time: "sep 17 2023, 17:00", title: "Finals", type: "battle"}]
			}
			]
    },
	// Alina's Atelier
	{
        "type": "Event",
        "title": [
            "Alina's Atelier ～Factor of Despair～",
			"『アリナのアトリエ～Factor of Despair～』"
        ],
        "image": [
			"imgs/events/despair.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "",
				start: "april 30 2024, 16:00",
				end: "may 10 2024, 14:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Rerun Event】The Ribbon at the Beach",
			"『波打ち際のリボン』"
        ],
        "image": [
            "imgs/summer/event00.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "",
                "start": "may 22 2024, 16:00",
                "end": "may 31 2024, 14:59",
				markers:
				[{title: "Story Quests 13～26 & Special Challenge Quests Ⅰ～Ⅲ", time: "may 27 2024, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【Campaign】Golden Week ",
			"『ゴールデンウィークキャンペーン』"
        ],
        "image": [
			"imgs/camp/gold.png",
			"imgs/camp/gold00.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "",
				start: "april 30 2021, 12:00",
				end: "may 10 2021, 23:59",
				//extraPriority: 100,
				markers:
				[{title: "", time: "sep 10 2023, 16:00", type: "star"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【Rerun】Nagisa Momoe's Wish Granted",
			"『百江なぎさは願いを叶えた』"
        ],
        "image": [
			"imgs/events/cheese00.png",
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "Rerun with New Yu Live 2D",
				start: "april 22 2024, 16:00",
				end: "april 30 2024, 14:59",
				markers:
				[{title: "Challenge", time: "april 25 2024, 16:00", type: "star"}]
			},
		]
	},
	{
        "type": "Event",
        "title": [
            "【Campaign】Golden Week ",
			"『ゴールデンウィークキャンペーン』"
        ],
        "image": [
			"imgs/camp/gold.png",
			"imgs/camp/gold00.png"


        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Daily Loging Bonus",
				start: "march 18 2024, 16:00",
				end: "april 1 2024, 23:59",
			},
			{
				name: "Limited Time Daily Missions",
				start: "april 30 2024, 12:00",
				end: "may 10 2024, 23:59",
			},
			{
				name: "½ AP Quests, 2x SP, 2x Player EXP, Double Chance Enhancement ",
				start: "april 30 2024, 12:00",
				end: "may 10 2024, 23:59",
			},
			{
				name: "Double Mirrors Coin Rewarded",
				start: "Jan 1 2024, 00:00",
				end: "jan 12 2024, 14:59",
			},
			{
				name: "300 Paid Gems Bag",
				start: "april 30 2024, 12:00",
				end: "may 10 2024, 23:59",
			},
        ]
    },
	{
        "type": "Event",
        "title": [
            "【Campaign】Early Spring Campaign ",
			"『アーリースプリングキャンペーン』"
        ],
        "image": [
            "imgs/camp/spring.png",


        ],
        "column": 0,
        "priority": 5,
        "timers": [
			{
				name: "½ AP Quests, 2x SP, 2x Player EXP,  Double Chance Enhancement ",
				start: "jan 22 2024, 16:00",
				end: "feb 19 2024, 23:59",
			},
			{
				name: "Limited Time Daily Missions",
				start: "jan 22 2024, 16:00",
				end: "feb 19 2024, 23:59",
			},
			{
				name: "Daily 10-Pull from a Choose 4★ Unlimited Magical Girl ",
				start: "dec 18 2023, 00:00",
				end: "jan 12 2024, 23:59",
			}
        ]
    },
		{
        "type": "Event",
        "title": [
            "【Login Story】Future Relationships ~Current Status with our Sister~",
			"『未来への装関関係 ～お姉さまとの現在地～』"
        ],
        "image": [
			"imgs/camp/story.png"
        ],
        "column": 0,
        "priority": 6,
        "timers": [
			{
				name: "",
				start: "June 1 2024, 00:00",
				end: "July 16 2024, 14:59",
				markers:
				[{title: "Story Quests 11～20 & 100 Evils Special Challenge Quests Ⅰ～Ⅲ", time: "feb 13 2024, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【Special】BEYOND MAGIA",
			"『BEYOND MAGIA』"
        ],
        "image": [
			"imgs/camp/magia.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Raid Event - No end date annouced",
				start: "June 7 2024, 17:00",
				end: "June 12 2024, 14:59",
				markers:
				[{title: "Story Quests 11-20 & 100Evils I~III", time: "aug 10 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Battle Museum",
			"『バトルミュージアム』"
        ],
        "image": [
			"imgs/events/battle.png",
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Rerun with new stages",
				start: "may 31 2024, 17:00",
				end: "june 7 2024, 14:59",
				extraPriority: 100,
				markers:
				[{title: "Story Quests 21-30 & 100Evils I~III", time: "july 28 2023, 16:00", type: "battle"}]
			}
        ]
    },
		// {
        // "type": "Event",
        // "title": [
        //     "【New Mirrors Event】Mirrors Rank Match",
		// 	"【ミラーズランクマッチ】"
        // ],
        // "image": [
        //     "imgs/events/mirrors00.png"
        // ],
        // "column": 0,
        // "priority": 1,
        // "timers": [
		// 	{
		// 		name: "Auto Battle",
        //          "start": "oct 30 2023, 17:00",
        //          "end": "nov 12 2023, 20:59",
		// 	//	extraPriority: 100,
		// 		markers:
		// 		[
		// 			{
		// 				title: "Day 1", 
		// 				time: "oct 30 2023, 17:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 2  - Happy Halloween! 🎃", 
		// 				time: "oct 31 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 3", 
		// 				time: "nov 1 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 4", 
		// 				time: "nov 2 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 5", 
		// 				time: "nov 3 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 6", 
		// 				time: "nov 4 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 7", 
		// 				time: "nov 5 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 8", 
		// 				time: "nov 6 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 9 ", 
		// 				time: "nov 7 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 10", 
		// 				time: "nov 8 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 11", 
		// 				time: "nov 9 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 12", 
		// 				time: "nov 10 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 13", 
		// 				time: "nov 11 2023, 16:00", 
		// 				type: "battle"
		// 			},
		// 			{
		// 				title: "Day 14", 
		// 				time: "nov 12 2023, 20:59", 
		// 				type: "battle"
		// 			}
					
		// 		]
		// 	},
			// {
			// 	name: "Time to collect ranking rewards",
			// 	start: "oct 24 2023, 16:00",
			// 	end: "nov 5 2023, 21:00"
			// },
    //     ]
    // },
	{
        "type": "Event",
        "title": [
            "【New Gatcha】 Puella Historia ・ Amaryllis Pickup Gacha",
			"『ピュエラ・ヒストリア 邪馬台国の跡目編』"
        ],
        "image": [
			"imgs/gatcha/akuma01.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "",
				start: "june 26 2024, 16:00",
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
                end: "Aug 22 2023, 14:59",
				extraPriority: 1000
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
				name: "Paid Support Pack",
				start: "Sep 1 2023, 00:00",
				end: "Sep 30 2023, 23:59"
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
			name: "Last Bird's Hope - Feather",
			start: "may 10 2024, 16:00",
			end: "may 29 2024, 14:59",
		},	
		{
			name: "The Ribbon at the Beach - Summer Memory",
			start: "may 22 2024, 16:00",
			end: "jun 7 2024, 14:59",
		},		
		]
	},
	{
		type: "Other",
		title: [
		"Adjuster Coins",
		"「調整屋コインの期間限定ショップ」"
		],
		image: [
            "imgs/coin-shop.png"
        ],
		column: 2,
		priority: 3,
		timers: [	
			{
				name: "Iroha・Kuroe - Peach",
				start: "may 10 2024, 16:00",
				end: "may 27 2024, 14:59",
			},
			{
				name: "Shi - Navy Blue",
				start: "may 10 2024, 16:00",
				end: "may 27 2024, 14:59",
			},
			{
				name: "Rerun Mizugi Magical Girls - Yellow",
				start: "may 22 2024, 16:00",
				end: "jun 7 2024, 14:59",
			},
		]
	},
{
		type: "Other",
		title: [
		"2400 days since release commemorative pack sale",
		""
		],
		image: [
			"imgs/shops/anni00.png",
        ],
		column: 2,
		priority: 7,
		timers: [
		{
			start: "march 18 2024, 16:00",
			end: "april 1 2024, 14:59",
		},
		{
			name: "Support Shop Commemorative Memoria",
			start: "dec 11 2023, 16:00",
			end: "jan 31 2024, 14:59",
		}
		]
	},
	{
		type: "Other",
		title: [
		"Forest Attribute Magical Girl Training Pack",
		"『木属性魔法少女育成パック』"
		],
		image: [
            "imgs/kimochi/pack00.png",
        ],
		column: 2,
		priority: 6,
		timers: [
		{
			name: "Sales period",
			start: "feb 19 2024, 17:00",
			end: "feb 26 2024, 14:59",
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
				name: "Yu - Black",
				start: "april 22 2024, 16:00",
				end: "may 17 2024, 14:59",
			},
			{
				name: "Iroha・Kuroe - Peach",
				start: "may 10 2024, 16:00",
				end: "may 27 2024, 14:59",
			},
			{
				name: "Shi - Navy Blue",
				start: "may 10 2024, 16:00",
				end: "may 27 2024, 14:59",
			},
			{
				name: "Rerun Mizugi Magical Girls - 2018-2022",
				start: "may 22 2024, 16:00",
				end: "jun 7 2024, 14:59",
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
        priority: 2,
        timers: [
			{
                name: "Maintenance",
				start: "June 7 2024, 15:00",
				end: "june 7 2024, 17:00"
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
			"【Special Gacha】Choose Your Limited 4★ Magical Girl Gacha",
            "『選べる期間限定★4魔法少女ピックアップガチャ』"
        ],
        "image": [
            "imgs/gacha/owari.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Free Daily 10x Pulls",
                start: "june 1 2024, 00:00",
                end: "july 31 2024, 14:59",
               extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited】Iroha・Kuroe Pick Up & Step-UP",
            "『 いろは・黒江編 ピックアップガチャ&ステップアップガチャ』"
        ],
        "image": [
            "imgs/gacha/irokuro01.png",
			"imgs/gacha/irokuro00.png"
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "New Limited",
                "start": "may 10 2024, 16:00",
                "end": "may 22 2024, 14:59",
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited】Momoe Nagisa Pick Up & Step-UP",
            "『期間限定 百江なぎさ ピックアップガチャ&ステップアップガチャ』"
        ],
        "image": [
            "imgs/gacha/nagisa01.png",
			"imgs/gacha/nagisa00.png"
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Limited Rerun",
				start: "june 22 2023, 16:00",
				end: "july 30 2023, 14:59",
               // extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited】Paid-only Step Up Gacha Magia ☆ Report Edition",
            "『有償限定 ステップアップガチャ マギア☆レポート編』"
        ],
        "image": [
            "imgs/gacha/papa02.png",
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "Rerun",
				start: "april 1 2024, 16:00",
				end: "april 8 2024, 14:59",
               // extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited】Infinite Iroha-chan Pickup Gacha",
            "『期間限定 無限大いろはちゃん ピックアップガチャ』"
        ],
        "image": [
            "imgs/gacha/papa03.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Rerun",
				start: "april 1 2024, 16:00",
				end: "april 8 2024, 14:59",
               // extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Rerun】Mizugi Magical Girls 2022 Edition Pickup & Stepup Gachas",
            "『有償限定 ステップアップガチャ 水着魔法少女2022編』"
        ],
        "image": [
            "imgs/summer/sp2200.png",
			"imgs/summer/sp2201.png"
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Limited",
				start: "may 22 2024, 16:00",
				end: "may 31 2024, 14:59",
				extraPriority: 100,
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Rerun】Mizugi Magical Girls 2020-2021 Edition Pickup & Stepup Gachas",
            "『ピックアップ&ステップアップガチャ 水着魔法少女2020-2021編』"
        ],
        "image": [
            "imgs/summer/sp202100.png",
			"imgs/summer/sp202101.png"
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Limited",
				start: "may 22 2024, 16:00",
				end: "may 31 2024, 14:59",

            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Rerun】Mizugi Magical Girls 2018-2019 Edition Pickup & Stepup Gachas",
            "『ピックアップ&ステップアップガチャ 水着魔法少女2018-2019編』"
        ],
        "image": [
            "imgs/summer/sp181900.png",
			"imgs/summer/sp181901.png"
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Limited",
				start: "may 22 2024, 16:00",
				end: "may 31 2024, 14:59",

            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited Rerun】Scene0 ver. Magical Girls Pickup Gachas",
            "『期間限定 scene0 ver.魔法少女編 ピックアップガチャ』"
        ],
        "image": [
			"imgs/scene-zero/mami00.png",
			"imgs/scene-zero/kyoko00.png",
			"imgs/scene-zero/sayaka00.png",
			"imgs/scene-zero/homu00.png",
			"imgs/scene-zero/mado00.png",
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "",
				start: "feb 26 2024, 16:00",
				end: "march 8 2024, 14:59"
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Limited】Reira・Seika Pickup and Stepup Gachas",
            "『ピックアップ&ステップアップガチャ れいら・せいか編』"
        ],
        "image": [
            "imgs/gacha/gacha001.png",
			"imgs/gacha/gacha002.png"
        ],
        "column": 1,
        "priority": 10,
        "timers": [
            {
                name: "",
				start: "feb 5 2024, 16:00",
				end: "feb 19 2024, 14:59",
            }
        ]
    },
	{
	"type": "Gacha",
	"title": [
		"【Limited Rerun】Valentine Magical Girl 2020-2023 Paid Stepup Gachas",
		"『ステップアップガチャ バレンタイン魔法少女2020-2023編』"
	],
	"image": [
		"imgs/gacha/vday00sp.png",
		"imgs/gacha/vday02sp.png",

	],
	"column": 1,
	"priority": 5,
	"timers": [
		{
			name: "",
			start: "feb 5 2024, 16:00",
			end: "feb 19 2024, 14:59",
		}
	]
},
{
	"type": "Gacha",
	"title": [
		"【Limited Rerun】Valentine Magical Girl 2020-2023 Pickup Gachas",
		"『ピックアップガチャ バレンタイン魔法少女2020-2023編』"
	],
	"image": [
		"imgs/gacha/vday01.png",
		"imgs/gacha/vday02.png",
		"imgs/gacha/vday00.png",

	],
	"column": 1,
	"priority": 5,
	"timers": [
		{
			name: "",
			start: "feb 5 2024, 16:00",
			end: "feb 19 2024, 14:59",
		}
	]
},
	{
        "type": "Gacha",
        "title": [
			"Limited Paid Step Up Historia Gachas",
            "『有償限定 ステップアップガチャ ピュエラ・ヒストリア編』"
        ],
        "image": [
            "imgs/hist/gacha00.png",
			"imgs/hist/gacha01.png",
			"imgs/hist/gacha02.png",
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "",
				start: "jan 22 2024, 16:00",
				end: "feb 19 2024, 14:59",
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Choose Your 4★ Memoria Gacha",
            "『選べる★4メモリアセレクションガチャ』"
        ],
        "image": [
            "imgs/hist/memo00.png",
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "",
				start: "jan 22 2024, 16:00",
				end: "feb 19 2024, 14:59",
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Choose Your 4★ Historia Bae Pickup Gacha",
            "『ピュエラ・ヒストリア 選べる★4魔法少女ピックアップガチャ』"
        ],
        "image": [
            "imgs/hist/choose00.png",
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "",
				start: "jan 22 2024, 16:00",
				end: "feb 19 2024, 14:59",
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Daily 10-Pull from a Choose 4★ Unlimited Magical Girl",
            "『毎日1回10連ガチャ無料』"
        ],
        "image": [
            "imgs/events/winter01.png",
        ],
        "column": 1,
        "priority": 14,
        "timers": [
            {
                name: "4★ Magical Girl Pull Rate Doubled!",
				start: "dec 18 2023, 16:00",
				end: "jan 12 2024, 23:59",
				markers:
				[
				{
					title: "Free pull 1",
					time: "dec 18 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "dec 19 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "dec 20 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "dec 21 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "dec 22 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "dec 23 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "dec 24 2023 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "dec 25 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "dec 26 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "dec 27 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "dec 28 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "dec 29 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "dec 30 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "dec 31 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "jan 1 2024, 0:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "jan 2 2024, 0:00",
					type: "star"
				},
				{
					title: "Free pull 17",
					time: "jan 3 2024, 0:00",
					type: "star"
				},
				{
					title: "Free pull 18",
					time: "jan 4 2024, 0:00",
					type: "star"
				},
				{
					title: "Free pull 19",
					time: "jan 5 2024, 0:00",
					type: "star"
				},
				{
					title: "Free pull 20",
					time: "jan 6 2024, 0:00",
					type: "star"
				},
				{
					title: "Free pull 21",
					time: "jan 7 2024, 0:00",
					type: "star"
				},
				{
					title: "Free pull 22",
					time: "jan 8 2024, 0:00",
					type: "star"
				},
				{
					title: "Free pull 23",
					time: "jan 9 2024, 0:00",
					type: "star"
				},
				{
					title: "Free pull 24",
					time: "jan 10 2024, 0:00",
					type: "star"
				},
				{
					title: "Free pull 25",
					time: "jan 11 2024, 0:00",
					type: "star"
				},
				{
					title: "Free pull 26",
					time: "jan 12 2024, 0:00",
					type: "star"
				},
				]
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"6th Anniversary Choose your 4★ Limited Memoria Selection Gacha",
            "『6周年記念 選べる★4メモリアセレクションガチャ』"
        ],
        "image": [
            "imgs/anni/pick06.png"
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Wave 2 - 4★ Magical Girl Pull Rate Doubled!",
                start: "sep 4 2023, 17:00",
				end: "sep 22 2023, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "sep 4 2023, 17:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "sep 5 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "sep 6 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "sep 7 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "sep 8 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "sep 9 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "sep 10 2023 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "sep 11 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "sep 12 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "sep 13 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "sep 14 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 15 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 16 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 17 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 18 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "Sep 19 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 17",
					time: "Sep 20 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 18",
					time: "Sep 21 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 19",
					time: "Sep 22 2023, 00:00",
					type: "star"
				},
				]
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Choose Your 4★ Memoria Gacha",
            "『選べる★4メモリアセレクションガチャ』"
        ],
        "image": [
			"imgs/gacha/gacha001.png",
        ],
        "column": 1,
        "priority": 15,
        "timers": [
            {
                name: "Wave 2 - 4★ Magical Girl Pull Rate Doubled!",
                start: "sep 4 2023, 17:00",
				end: "sep 22 2023, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "sep 4 2023, 17:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "sep 5 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "sep 6 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "sep 7 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "sep 8 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "sep 9 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "sep 10 2023 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "sep 11 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "sep 12 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "sep 13 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "sep 14 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 15 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 16 2023, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 17 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 18 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 16",
					time: "Sep 19 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 17",
					time: "Sep 20 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 18",
					time: "Sep 21 2023, 00:00",
					type: "star"
				},
				{
					title: "Free pull 19",
					time: "Sep 22 2023, 00:00",
					type: "star"
				},
				]
            }
        ]
    }
];
