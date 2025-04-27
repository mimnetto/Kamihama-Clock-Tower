var releaseDate = "march 26 2025, 04:00";
var possibleNextAnnouncementDate = "march 27 2025, 06:00";
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
			"Pre-Registration Campaign Goals and Rewards",
            "『事前登録キャンペーン』"
        ],
        "image": [
            "imgs/exban/prer.png"
        ],
        "column": 1,
        "priority": 3,
        "timers": [
			{
				name: "100k Magica Stone x1000",
                start: "july 2 2024, 00:00",
                end: "nov 27 2024, 00:00"
			},
			{
				name: "200k 'Door to New Kioku' Portrait",
                start: "july 2 2024, 00:00",
                end: "nov 27 2024, 00:00"
			},
			{
				name: "300k Magica Stone x1000",
                start: "july 2 2024, 00:00",
                end: "dec 12 2024, 00:00"
			},
			{
				name: "400k Magica Stone x1000",
                start: "july 2 2024, 00:00",
                end: "jan 2 2025, 00:00"
			},
			{
				name: "500k 5☆ Kioku [Lux Magica] Madoka Kaname",
                start: "july 2 2024, 00:00",
                end: "Jan 27 2025, 00:00"
			},
			{
				name: "600k Magia Key x2 + Fan Kit",
                start: "july 2 2024, 00:00",
                end: "mar 8 2025, 00:00"
			},
			{
				name: "700k Magia Key x3 + Fan Kit",
                start: "july 2 2024, 00:00",
                end: "mar 8 2025, 00:00"
			},
			{
				name: "800k Magia Key x5 + Fan Kit",
                start: "july 2 2024, 00:00",
                end: "mar 8 2025, 00:00"
			},
			{
				name: "900k Celebration Starter Pack + Fan Kit",
                start: "july 2 2024, 00:00",
                end: "mar 13 2025, 00:00"
			},
			{
				name: "1 Million 5★ Portrait + Fan Kit",
                start: "july 2 2024, 00:00",
                end: "mar 25 2025, 00:00"
			},
            {
                "name": "ALL GOALS REACHED!",
                "start": "july 2 2024, 00:00",
                "end": "march 27 2025, 06:00",
                "extraPriority": 1,
				"type": "normal",
				// markers:
				// [{time: "march 27 2024, 17:00", title: "Part 2 - Groups", type: "battle"}]
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
	// Alina's Atelier
	{
        "type": "Event",
        "title": [
            "Magia Exedra Global Launch Day",
			"『マギアエクセドラリリース』"
        ],
        "image": [
			"imgs/exban/exr07.png",
			"imgs/exban/exr02.png",
			"imgs/exban/exr05.png",
			"imgs/exban/exr06.png",
			"imgs/exban/exr04.png",
			"imgs/exban/exr03.png",
			"imgs/exban/exr00.png",
			"imgs/exban/exr01.png",
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: " iOS & Android Confirmed Release!",
				start: "July 2 2024, 00:00",
				end: "march 27 2025, 06:00",
			},
			{
				name: "Pre-download",
				start: "March 25 2025, 12:00",
				end: "march 26 2025, 17:00",
			},
			{
				name: "Early Access",
				start: "march 26 2025, 17:00",
				end: "march 27 2025, 06:00",
			},
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Campaign】Golden Week Missions and Login Bonus",
			"『GWキャンペーンミッション開催』"
        ],
        "image": [
            "imgs/exedra/camp/golden-login.png",
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "",
                "start": "april 25 2025, 12:00",
                "end": "may 12 2025, 4:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】Limited-Time Score Attack Support Missions ",
			"『スコアアタック攻略応援ミッション』"
        ],
        "image": [
            "imgs/exedra/events00/score-attack.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				"name": "",
                "start": "april 25 2025, 12:00",
                "end": "may 9 2025, 11:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Story Event】Sunny Day Life",
			"『サニーデイライフ 前編』"
        ],
        "image": [
            "imgs/exedra/events00/sunny.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				"name": "Part I",
                "start": "april 18 2025, 12:00",
                "end": "may 9 2025, 11:59",
			},
			{
				"name": "Part II",
                "start": "april 25 2025, 12:00",
                "end": "may 9 2025, 11:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
			"【Event】The Case Files of the Coordinator 1: The Many-Worlds Interpretation Poesy",
			"『調整屋さんの事件簿１ 多世界解釈のポエジー』"
        ],
        "image": [
            "imgs/exedra/events00/case-files.png"
        ],
        "column": 0,
        "priority": 0,
        "timers": [
			{
				"name": "",
                "start": "April 11 2025, 12:00",
                "end": "april 25 2025, 11:59",
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
            "【Last Story】『The Heart is One and Ten Thousand Years』",
			"【ラストストーリー追加】『心は一年一万年』"
        ],
        "image": [
			"imgs/camp/story.png"
        ],
        "column": 0,
        "priority": 5,
		"extraPriority": 1000,
        "timers": [
			{
				name: "",
				start: "July 23 2024, 00:00",
				end: "july 31 2024, 14:59",
				markers:
				[{title: "Story Quests 11～20 & 100 Evils Special Challenge Quests Ⅰ～Ⅲ", time: "feb 13 2024, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【Login Bonus】Release Celebration: Five Major Campaigns",
			"『リリース記念5大キャンペーン』"
        ],
        "image": [
			"imgs/exedra/events00/re-login.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Login Campaign",
                "start": "march 26 2025, 18:00",
                "end": "april 09 2025, 11:59",
			},
			{
				name: "Training Spree Missions",
                "start": "march 26 2025, 18:00",
                "end": "april 04 2025, 11:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "1 Million Downloads Celebration Main Quest Clears",
			"『100万ダウンロード記念』"
        ],
        "image": [
			"imgs/exedra/events00/mil.png",
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "Clear Mermaid Witch (Standard)",
                "start": "march 30 2025, 12:00",
                "end": "april 25 2025, 11:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Tower Opening Campaign",
			"『タワーリリース記念ログインボーナス』"
        ],
        "image": [
			"imgs/exedra/login/tower00.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "Login 10 days for 1,000 Magica Stones",
                "start": "april 18 2025, 12:00",
                "end": "may 2 2025, 11:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Tower Opening Celebration Login Bonus",
			"『タワーリリース記念ログインボーナス』"
        ],
        "image": [
			"imgs/exedra/login/tower00.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "Login 10 days for 1,000 Magica Stones",
                "start": "april 18 2025, 12:00",
                "end": "may 2 2025, 11:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Training Spree Missions Part 4",
			"『育成応援ミッション第4弾』"
        ],
        "image": [
			"imgs/exedra/events00/training04.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "",
                "start": "april 18 2025, 12:00",
                "end": "april 25 2025, 11:59",
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "【Limited-Time】Farewell Story",
			"『フェアウェル・ストーリー』"
        ],
        "image": [
			"imgs/exedra/events00/seeya.png",
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Part I",
                "start": "march 29 2025, 23:00",
                "end": "april 14 2025, 11:59",
			},
			{
				name: "Part II",
                "start": "April 4 2025, 12:00",
                "end": "april 14 2025, 11:59",
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
            "【Rerun】 Kagome's Hundred Monsters ~Burning Summer Banquet~",
			"『かごめの百怪波瀾～炎夏の宴～』"
        ],
        "image": [
			"imgs/events/event04.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			{
				name: "Repeat- Kagome Hyakki Yagyou ver. obtained in Choose 4★ Gacha",
				start: "june 12 2024, 16:00",
				end: "june 24 2024, 14:59",
				//extraPriority: 100,
				markers:
				[{title: "Story Quests 11-20 & 100Evils I~III", time: "june 17 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        title: [
			"Magia Day 2024 Official Livestream!",
            "「Magia Day 2024」"
        ],
        "image": [
            "imgs/events/exedra.png",
		],
        column: 0,
        priority: 0,
        timers: [
            {
                name: "https://www.youtube.com/@madoka_exedra",
                start: "Aug 25 2024, 17:30",
                end: "Aug 25 2024, 20:30",
				//extraPriority: 1000
            }
        ]
    },
	{
        "type": "Event",
        title: [
			"Aniplex Tokyo Game Show Live Stream",
            "https://tgs.nikkeibp.co.jp/tgs/2024/en/"
        ],
        "image": [
            "imgs/ex/tgs00.png",
		],
        column: 0,
        priority: 1,
        timers: [
            {
                name: "",
                start: "sept 27 2024, 18:00",
                end: "sept 27 2024, 19:00",
				extraPriority: 1000
            }
        ]
    },
	{
        "type": "Event",
        title: [
			"Time to Transfer Your Data to the Archive App",
            "【ストーリーアーカイブ】"
        ],
        "image": [
            "imgs/events/trans00.png",
		],
        column: 0,
        priority: 1,
        timers: [
            {
                name: "",
                start: "July 30 2024, 17:00",
                end: "Oct 14 2024, 15:00",
				//extraPriority: 1000
            }
        ]
    },

	{
        "type": "Shops",
        "title": [
            "Monthly Shops",
			"毎月ショップ"
        ],
        "image": [
            "shop"
        ],
        "column": 2,
        "priority": 100,
        "timers": [
			{
				name: "Paid Celebration Packs",
				start: "march 26 2025, 18:00",
				end: "april 30 2025, 11:59"
			},
			{
				name: "Web Shop Exclusives",
				start: "march 26 2025, 18:00",
				end: "april 30 2025, 11:59"
			}
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
				name: "The Case Files of the Coordinator 1",
				"start": "April 11 2025, 12:00",
				"end": "april 26 2025, 11:59",
			},	
			{
				name: "Sunny Day Life Part I",
				"start": "april 18 2025, 12:00",
				"end": "may 10 2025, 11:59",
			}	
		]
	},
	{
		type: "Other",
		title: [
		"Fate Weave Trader Coins",
		"「ガチャコインのショップ」"
		],
		image: [
            "imgs/coin-shop.png"
        ],
		column: 2,
		priority: 3,
		timers: [	
			{
				name: "Team Momoko",
                "start": "april 11 2024, 12:00",
                "end": "april 25 2024, 11:59",
			},
			{
				name: "Mami Tomoe - Tiro Finale",
				start: "march 29 2025, 23:00",
				end: "april 14 2025, 11:59",
			},
			{
				name: "Kyoko Sakura - Kugatachi",
                "start": "april 4 2025, 12:00",
                "end": "april 14 2025, 11:59",
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
				name: "Season 02",
				start: "april 14 2025, 12:00",
				end: "april 28 2025, 4:59",
			},
			{
				name: "Match Medal Shop Reset",
				start: "march 27 2025, 5:00",
				end: "may 1 2025, 4:59",
			},
		]
	},
{
		type: "Other",
		title: [
		"Unlimited Fate Weave Pool Additions",
		"Countdown"
		],
		image: [
            "imgs/exedra/other/fate-pool.png"
        ],
		column: 2,
		priority: 0,
		timers: [
			{
				name: "★5 Mami Tomoe | Tiro Finale - Buffer",
				start: "april 10 2024, 16:00",
				end: "may 31 2024, 12:00",
			},
			{
				name: "★5 Kyoko Sakura | Kugatachi - Attacker",
				start: "april 10 2024, 16:00",
				end: "may 31 2024, 12:00",
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
                name: "Maintenance",
				start: "June 24 2024, 15:00",
				end: "june 24 2024, 17:00"
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
			"【Golden Week Celebration】One Per Day Free Fate Weave",
            "『GW記念！1日1回無料ガチャ開催』"
        ],
        "image": [
            "imgs/exedra/gacha00/free.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "",
                "start": "april 25 2025, 12:00",
                "end": "may 12 2025, 11:59",
               // extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Featured Fate Weave】5★ [Time Stop Strike] Homura Akemi",
            "『★5 暁美ほむら(眼鏡)』"
        ],
        "image": [
            "imgs/exedra/gacha00/moemura.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Buffer - Void",
                "start": "april 25 2025, 12:00",
                "end": "may 9 2025, 11:59",
            //    extraPriority: 1000
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Featured Fate Weave】 5★ [Baldamente Fortissimo] Sayaka Miki",
            "『★5 美樹さやか』"
        ],
        "image": [
            "imgs/exedra/gacha00/sayaka.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "Defender",
                "start": "april 18 2025, 12:00",
                "end": "may 9 2025, 11:59",
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Featured Fate Weave 】5★ Attacker",
            "『★5アタッカーピックアップ』"
        ],
        "image": [
            "imgs/exedra/gacha00/attacker00.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "[Concentrated Missile Fire] Homura | [Absolute Rain] Yachiyo | [Oracle Ray] Oriko",
				start: "april 21 2025, 12:00",
				end: "april 28 2025, 11:59",
            //    extraPriority: 1000
            },
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"【Featured Fate Weave】★5 Team Momoko ",
            "『 ★5 チームモモコ 』"
        ],
        "image": [
            "imgs/exedra/gacha00/banner-momoko.png",
        ],
        "column": 1,
        "priority": 0,
        "timers": [
            {
                name: "[Edge of the Universe] Momoko | [Infinite Poseidon] Rena | [Judgement Earth] Kaede ",
                "start": "april 11 2025, 12:00",
                "end": "april 25 2025, 11:59",
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
