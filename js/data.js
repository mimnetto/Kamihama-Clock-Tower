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
				end: "dec 31 2023, 23:59",
				markers:
				[{title: "Film.4 DAY.15~32 Battle 4", time: "nov 15 2023, 17:00", type: "star"}]
			},
		]
	},
	{
        "type": "Event",
        "title": [
            "6th Anniversary Campaign",
			"【『6周年カウントダウンキャンペーン』】"
        ],
        "image": [
            "imgs/anni/camp00.png",

        ],
        "column": 0,
        "priority": 10,
        "timers": [
			{
				name: "1/2 AP, x2 PLAYER EXP, x2 Support Pt & x2 Magical Strengthening Great and Super Success Rate",
				start: "aug 22 2023, 16:00",
				end: "sep 4 2023, 14:59",
			},
			{
				name: "Mirror Coin Rewards Doubled",
				start: "aug 22 2023, 16:00",
				end: "sep 4 2023, 14:59",
			},
			{
				name: "Daily Single Pull in Premium Gacha",
				start: "aug 22 2023, 16:00",
				end: "sep 4 2023, 14:59",
			}
        ]
    },
		{
        "type": "Event",
        "title": [
            "【Rerun Event】Sayonara ・ Storage",
			"『サヨナラ・ストレージ』"
        ],
        "image": [
			"imgs/events/rerun00.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
			{
				name: "",
				start: "nov 24 2023, 16:00",
				end: "dec 12 2023, 14:59",
				markers:
				[{title: "Story Quests 11～20 & 100 Evils Special Challenge Quests Ⅰ～Ⅲ", time: "nov 29s 2023, 16:00", type: "battle"}]
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
			name: "Mirror Ranking Coins",
			start: "oct 23 2023, 17:00",
			end: "nov 30 2023, 14:59",
		},
		{
			name: "Sayonara ・ Storage - Storage",
			start: "nov 24 2023, 17:00",
			end: "dec 11 2023, 14:59"
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
				name: "Dark Attribute Magical Girls - Purple",
				start: "oct 16 2023, 16:00",
				end: "oct 30 2023, 14:59"
			},
			{
				name: "Yuna & Juri (Vampire ver.) - Orange",
				start: "oct 23 2023, 17:00",
				end: "nov 13 2023, 14:59",
			},
			{
				name: "Halloween Rerun Units - Navy Blue",
				start: "oct 23 2023, 17:00",
				end: "nov 13 2023, 14:59",
			},
			{
				name: "Choose your own Memo - Tea",
				start: "oct 23 2023, 17:00",
				end: "nov 13 2023, 14:59",
			},
			{
				name: "Homura Akemi scene0 ver. - Black",
				start: "nov 6 2023, 16:00",
				end: "nov 22 2023, 14:59",
			},	
			{
				name: "Kyoko Sakura scene0 ver. - Red",
				start: "nov 15 2023, 16:00",
				end: "dec 01 2023, 14:59",
			},		
			{
				name: "Mikoto Sena - Lime",
				start: "nov 24 2023, 16:00",
				end: "dec 11 2023, 14:59",
			},	

		]
	},
{
		type: "Other",
		title: [
		" Fire Attribute Magical Girl Training Pack",
		"『火属性魔法少女育成パック』"
		],
		image: [
            "imgs/shops/fire00.png",
        ],
		column: 2,
		priority: 10,
		timers: [
		{
			name: "Sales period",
			start: "nov 15 2023, 17:00",
			end: "nov 22 2023, 14:59",
		}
		]
	},
	{
		type: "Other",
		title: [
		"Mirrors Ranking Memo Support Pack",
		"『ミラーズランクマッチメモリア強化応援パック』"
		],
		image: [
            "imgs/ween/shop.png",
        ],
		column: 2,
		priority: 6,
		timers: [
		{
			name: "Sales period",
			start: "oct 23 2023, 17:00",
			end: "nov 20 2023, 14:59"
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
				name: "Yuna & Juri (Vampire ver.) - Orange",
				start: "oct 23 2023, 17:00",
				end: "nov 13 2023, 14:59",
			},
			{
				name: "Rerun Halloween Units 2020-2021SP",
				start: "oct 23 2023, 17:00",
				end: "nov 13 2023, 14:59",
			},
			{
				name: "Rerun Halloween Units 2022SP",
				start: "oct 23 2023, 17:00",
				end: "nov 13 2023, 14:59",
			},
			{
				name: "Kyoko Sakura scene0 ver. - Red",
				start: "nov 15 2023, 16:00",
				end: "dec 01 2023, 14:59",
			},	
			{
				name: "Mikoto Sena SP",
				start: "nov 24 2023, 16:00",
				end: "dec 11 2023, 14:59",
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
			"Fire Attribute Magical Girl Pickup Gacha",
            "【火属性魔法少女 ピックアップガチャ】"
        ],
        "image": [
            "imgs/kimochi/gacha00.png",
        ],
        "column": 1,
        "priority": 3,
        "timers": [
            {
                name: "Pick Up",
                start: "nov 15 2023, 17:00",
				end: "nov 20 2023, 14:59",
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
        "priority": 0,
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
			"【Limited Rerun】Mikoto Sena Pick Up & Step-UP Gacha",
            "『瀬奈みこと編 ステップアップ & ピックアップガチャ』"
        ],
        "image": [
            "imgs/gatcha/rerun01.png",
			"imgs/gatcha/rerun00.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "",
                start: "nov 24 2023, 16:00",
				end: "dec 4 2023, 14:59",
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
                extraPriority: 100,
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Limited Rerun】Halloween 2022 Pickup and Step-up Gacha",
            "『ステップアップガチャ ハロウィン魔法少女2022編』"
        ],
        "image": [
            "imgs/ween/gacha22.png",
			"imgs/ween/gacha2201.png",
			"imgs/ween/gacha2202.png"
        ],
        "column": 1,
        "priority": 1,
        "timers": [
            {
                name: "",
				start: "oct 23 2023, 17:00",
				end: "nov 6 2023, 14:59"
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
