var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "dec 5 2023, 17:00";
var nextAnniversary = "August 22 2024, 0:00";
var alertMessages = [];
var alertTypes = [];
var timerData = [
	{
        "type": "WeekendBoss",
        "title": [
			"Kimochi Battle ～Unmoving Garnet Pinky～",
            "『キモチ戦 止まるガーネットの小指』"
        ],
        "image": [
            "imgs/kimochi/kimochi00.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Part 1 - Day 1",
                start: "nov 15 2023, 17:00",
                end: "nov 16 2023, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "nov 16 2023, 16:00",
				end: "nov 17 2023, 15:59"
			},
			{
				name: "Maintenance",
				start: "nov 17 2023, 16:00",
				end: "nov 17 2023, 16:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "nov 17 2023, 17:00",
				end: "nov 18 2023, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "nov 18 2023, 16:00",
				end: "nov 19 2023, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "nov 19 2023, 16:00",
				end: "nov 20 2023, 15:59"
			}, 
            {
                "name": "Forest Attribute",
                "start": "nov 15 2023, 17:00",
                "end": "nov 20 2023, 15:59",
                "extraPriority": 1,
				"type": "normal",
				markers:
				[{time: "sep 18 2023, 17:00", title: "Part 2 - Groups", type: "battle"}]
			}
			]
    },
	// 	{
    //     "type": "WeekendBoss",
    //     "title": [
	// 		"[Mirrors rank match ",
	// 		"【ミラーズランクマッチ】"
    //     ],
    //     "image": [
    //         "imgs/events/mirrors00.png"
    //     ],
    //     "column": 0,
    //     "priority": 0,
    //     "timers": [
	// 		{
	// 			name: "Preliminaries - Day 1",
	// 			start: "oct 23 2023, 17:00",
	// 			end: "oct 24 2023, 15:59"
	// 		},
	// 		{
	// 			name: "Preliminaries - Day 2",
	// 			start: "oct 24 2023, 16:00",
	// 			end: "oct 25 2023, 15:59"
	// 		},
	// 		{
	// 			name: "Preliminaries - Day 3",
	// 			start: "oct 25 2023, 16:00",
	// 			end: "oct 26 2023, 15:59"
	// 		},
	// 		{
	// 			name: "Preliminaries - Day 4",
	// 			start: "oct 26 2023, 16:00",
	// 			end: "oct 27 2023, 15:59"
	// 		},
	// 		{
	// 			name: "Preliminaries - Day 5",
	// 			start: "oct 27 2023, 16:00",
	// 			end: "oct 28 2023, 15:59"
	// 		},
	// 		{
	// 			name: "Finals",
	// 			start: "sep 16 2023, 17:00",
	// 			end: "sep 17 2023, 20:59"
	// 		},
    //         {
    //             "name": "Main Event",
    //             "start": "oct 23 2023, 17:00",
    //             "end": "nov 5 2023, 20:59",
    //             //"extraPriority": 1,
	// 			"type": "normal",
	// 			markers:
	// 			[{time: "sep 17 2023, 17:00", title: "Finals", type: "battle"}]
	// 		}
	// 		]
    // },
	{
        "type": "Event",
        "title": [
			"Mirrors rank match ",
			"【ミラーズランクマッチ】"
        ],
        "image": [
            "imgs/events/mirrors00.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				"name": "Postponed!!! No new date annouced yet",
                "start": "nov 5 2022, 17:00",
                "end": "nov 5 2022, 20:59",
				markers:
				[{title: "Story Quests 11～20 & 100 Evils Special Challenge Quests Ⅰ～Ⅲ", time: "sep 15 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【YouTube】 Magia Record TV Kamihama Special Channel 2023 in f4 Fan Festival",
			"『マギアレコード TV神浜スペシャルチャンネル 2023 in f4ファンフェスティバル』"
        ],
        "image": [
			"imgs/events/tv02.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "https://www.youtube.com/watch?v=nnyQoAZZTAQ",
				start: "dec 15 2023, 18:30",
				end: "dec 15 2023, 19:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【Annoucement】Forest Attribute Kimochi ～Unmoving Garnet Pinky～  ",
			"『キモチ戦 麗しい真珠の眼』"
        ],
        "image": [
			"imgs/kimochi/kimochi00.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Tentative Schedule",
				start: "nov 20 2022, 12:00",
				end: "nov 25 2022, 18:00",
				markers:
				[{title: "Madoka Time Slot", time: "sep 10 2023, 16:00", type: "star"}]
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
        "priority": 0,
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
            "Scene0 Film.5 DAY.1 ～ Film.7 DAY.32",
			"『魔法少女まどか☆マギカ scene0』Film.5 DAY.1 ～ Film.7 DAY.32"
        ],
        "image": [
			"imgs/scene-zero/scene00.png"

        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "BATTLE 5 The Sweets Witch",
				start: "dec 4 2023, 16:00",
				end: "dec 15 2023, 23:59",
				markers:
				[{title: "Film.4 DAY.15~32 Battle 4", time: "nov 15 2023, 17:00", type: "star"}]
			},
		]
	},
	{
        "type": "Event",
        "title": [
            "New Years Campaign",
			"『お正月キャンペーン』"
        ],
        "image": [
            "imgs/nyear/camp.png",
			"imgs/nyear/stones.png",
			"imgs/nyear/lucky.png",
			"imgs/nyear/mirror.png",

        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				name: "Countdown to New Years Login Bonuses",
				start: "dec 29 2023, 00:00",
				end: "jan 1 2024, 23:59",
			},
			{
				name: "New Years Login Bonuses",
				start: "jan 1 2024, 00:00",
				end: "jan 12 2024, 23:59",
			},
			{
				name: "Limited Time Daily Missions",
				start: "jan 1 2024, 00:00",
				end: "jan 12 2024, 23:59",
			},
			{
				name: "Good Luck Fortunes at Mizuna Shrine",
				start: "Jan 1 2024, 00:00",
				end: "jan 12 2024, 23:59",
			},
			{
				name: "Double Mirrors Coin Rewarded",
				start: "Jan 1 2024, 00:00",
				end: "jan 12 2024, 23:59",
			},
			{
				name: "Magia Stone Bonus Purchase",
				start: "dec 31 2023, 16:00",
				end: "jan 12 2024, 14:59",
			},
        ]
    },
	{
        "type": "Event",
        "title": [
            "【Campaign】Winter Campaign ",
			"『ウィンターキャンペーン』"
        ],
        "image": [
            "imgs/events/winter00.png",
			"imgs/events/winter01.png",

        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "½ AP Quests, 2x SP, 2x Player EXP,  Double Chance Enhancement ",
				start: "dec 18 2023, 16:00",
				end: "jan 12 2024, 14:59",
			},
			{
				name: "Limited Time Daily Missions",
				start: "dec 18 2023, 16:00",
				end: "jan 12 2024, 14:59",
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
            "【Christmas Event】Memory Drops",
			"『オモイデ・ドロップス』"
        ],
        "image": [
			"imgs/events/winter02.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "",
				start: "dec 18 2023, 16:00",
				end: "dec 31 2023, 14:59",
				markers:
				[{title: "Story Quests 11～20 & 100 Evils Special Challenge Quests Ⅰ～Ⅲ", time: "dec 25 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【Login Bonus】Chisato Nishikigi's Birthday Login Bonus",
			"【告知】錦木千束 誕生日記念ログインボーナス 開催"
        ],
        "image": [
			"imgs/eventsp/birth.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "10 Gacha Tickets & Licorice Recoil Memo",
				start: "sep 23 2023, 00:00",
				end: "sep 24 2023, 23:59",
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
			name: "Memory Drops - Snowmen ⛄",
			start: "dec 18 2023, 16:00",
			end: "Jan 7 2024, 14:59",
		},
		{
			name: "Christmas Tickets",
			start: "dec 18 2023, 16:00",
			end: "Jan 7 2024, 14:59",
		},
		{
			name: "S",
			start: "oct 23 2023, 17:00",
			end: "nov 13 2023, 14:59",
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
				name: "Uwasa Mikoto Sena - Navy Blue",
				start: "dec 18 2023, 16:00",
				end: "Jan 7 2024, 14:59",
			},
			{
				name: "Christmas Rerun Units - Green",
				start: "dec 18 2023, 16:00",
				end: "Jan 7 2024, 14:59",
			},
			{
				name: "Choose ★ 4 Magical Girl - Light Green",
				start: "dec 18 2023, 16:00",
				end: "Jan 19 2024, 14:59",
			},
			{
				name: "Homura Akemi scene0 ver. - Black",
				start: "nov 6 2023, 16:00",
				end: "nov 22 2023, 14:59",
			},	
			{
				name: "Mikoto Sena - Lime",
				start: "nov 24 2023, 16:00",
				end: "dec 11 2023, 14:59",
			},	
			{
				name: "Sayaka Miki scene0 ver. - Blue",
				start: "dec 4 2023, 16:00",
				end: "dec 25 2023, 14:59",
			},	

		]
	},
{
		type: "Other",
		title: [
		"Support Shop Commemorative Memoria",
		""
		],
		image: [
			"imgs/events/tv02.png"
        ],
		column: 2,
		priority: 0,
		timers: [
		{
			name: "Sales period",
			start: "dec 11 2023, 16:00",
			end: "dec 18 2023, 14:59",
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
		"Mitama’s New Year DX Lucky Bag",
		"『みたまのお正月DX福袋』"
		],
		image: [
            "imgs/nyear/shop.png",
        ],
		column: 2,
		priority: 6,
		timers: [
		{
			name: "Sales period",
			start: "Jan 1 2024, 00:00",
			end: "jan 12 2024, 23:59",
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
				name: "Uwasa Mikoto Sena - Navy Blue",
				start: "dec 18 2023, 16:00",
				end: "Jan 7 2024, 14:59",
			},
			{
				name: "Rerun Chrismas Units 2022SP",
				start: "dec 18 2023, 16:00",
				end: "Jan 7 2024, 14:59",
			},
			{
				name: "Rerun Chrismas Units 2021SP",
				start: "dec 18 2023, 16:00",
				end: "Jan 7 2024, 14:59",
			},
			{
				name: "Rerun Chrismas Units 2019-2020SP",
				start: "dec 18 2023, 16:00",
				end: "Jan 7 2024, 14:59",
			},	
			{
				name: "Rerun Chrismas Units 2017-2018SP",
				start: "dec 18 2023, 16:00",
				end: "Jan 7 2024, 14:59",
			},
			{
				name: "Sayaka Miki scene0 ver. - Blue",
				start: "dec 4 2023, 16:00",
				end: "dec 25 2023, 14:59",
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
                name: "",
				start: "nov 24 2023, 15:00",
				end: "nov 24 2023, 16:59"
				// extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Choose ★ 4 Magical Girl Pickup Gacha",
            "【選べる★4魔法少女ピックアップガチャ】"
        ],
        "image": [
            "imgs/gacha/gacha00.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Pick Up",
                start: "dec 19 2023, 00:00",
				end: "jan 12 2024, 23:59",
               // extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Fire Attribute Paid Guaranteed 4★ Gacha",
            "『有償限定 火属性★4魔法少女確定ガチャ』"
        ],
        "image": [
			"imgs/kimochi/fire00.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "",
                start: "nov 15 2023, 17:00",
				end: "nov 20 2023, 14:59",
                // extraPriority: 100,
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Limited Gatcha】Sayaka Miki scene0 ver. Pickup & Step-up Gacha",
            "『期間限定  美樹さやか scene0 ver.scene0 ver. ステップアップ&ピックアップガチャ』"
        ],
        "image": [
			"imgs/scene-zero/sayaka00.png",
			"imgs/scene-zero/sayaka01.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "",
                start: "dec 4 2023, 16:00",
				end: "dec 18 2023, 14:59",
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【New Limited】Uwasa Mikoto Sena Pick Up & Step-UP Gacha",
            "『ステップアップ & ピックアップガチャ ウワサのみこと編』"
        ],
        "image": [
            "imgs/gacha/winter00.png",
            "imgs/gacha/winter01.png"
        ],
        "column": 1,
        "priority": 5,
        "timers": [
            {
                name: "",
				start: "dec 18 2023, 16:00",
				end: "dec 31 2023, 14:59",
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
        "priority": 0,
        "timers": [
            {
                name: "",
				start: "oct 23 2023, 17:00",
				end: "nov 13 2023, 14:59",
               // extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
            "【New Limited Gatcha】Homura Akemi scene0 ver. Pickup & Step-up Gacha",
			"『期間限定 暁美ほむら scene0 ver. ステップアップ&ピックアップガチャ』"
        ],
        "image": [
			"imgs/scene-zero/gacha00.png",
			"imgs/scene-zero/gacha01.png"
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "",
				start: "nov 6 2023, 16:00",
				end: "nov 15 2023, 14:59",
                // extraPriority: 100,
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited Rerun】Christmas Magical Girl 2017-2022 Paid Step-up Gachas",
            "『ステップアップガチャ クリスマス魔法少女2017-2022編』"
        ],
        "image": [
            "imgs/gacha/winter00sp.png",
			"imgs/gacha/winter01sp.png",
			"imgs/gacha/winter02sp.png",
			"imgs/gacha/winter03sp.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "",
				start: "dec 18 2023, 16:00",
				end: "dec 31 2023, 14:59",
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited Rerun】Christmas Magical Girl 2017-2022 Pickup Gachas",
            "『ピックアップガチャ クリスマス魔法少女2017-2022編』"
        ],
        "image": [
            "imgs/gacha/winter00pk.png",
			"imgs/gacha/winter01pk.png",
			"imgs/gacha/winter02pk.png",
			"imgs/gacha/winter03pk.png",
			"imgs/gacha/winter04pk.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "",
				start: "dec 18 2023, 16:00",
				end: "dec 31 2023, 14:59",
            }
        ]
    },
	{
	"type": "Gacha",
	"title": [
		"【Limited Rerun】New Years Magical Girl 2018-2023 Paid Step-up Gachas",
		"『ステップアップガチャ お正月魔法少女2018-2023編』"
	],
	"image": [
		"imgs/nyear/stepup00.png",
		"imgs/nyear/stepup01.png",
		"imgs/nyear/stepup02.png",

	],
	"column": 1,
	"priority": 0,
	"timers": [
		{
			name: "",
			start: "jan 1 2024, 00:00",
			end: "jan 12 2024, 14:59",
		}
	]
},
{
	"type": "Gacha",
	"title": [
		"【Limited Rerun】Christmas Magical Girl 2017-2022 Pickup Gachas",
		"『ピックアップガチャ お正月魔法少女2018-2023編』"
	],
	"image": [
		"imgs/nyear/pickup00.png",
		"imgs/nyear/pickup01.png",
		"imgs/nyear/pickup02.png",
		"imgs/nyear/pickup03.png",
	],
	"column": 1,
	"priority": 0,
	"timers": [
		{
			name: "",
			start: "jan 1 2024, 00:00",
			end: "jan 12 2024, 14:59",
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
			"【New Limited】 Yuna ♡ Juri Vampire Ver. Pickup and Step-up Gacha",
            "『結菜・樹里 ヴァンパイアver. ステップアップ ピックアップガチャ』"
        ],
        "image": [
            "imgs/ween/gacha00.png",
			"imgs/ween/gacha01.png"
        ],
        "column": 1,
        "priority": 2,
        "timers": [
            {
                name: "",
                start: "oct 23 2023, 17:00",
				end: "nov 6 2023, 14:59",
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
                extraPriority: 100,
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
        "priority": 14,
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
			"6th Anniversary Choose your 4★ Limited Magical Girl Selection Gacha",
            "『6周年記念 選べる期間限定★4魔法少女ピックアップガチャ』"
        ],
        "image": [
            "imgs/anni/pick08.png",
			"imgs/anni/pick07.png"
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
