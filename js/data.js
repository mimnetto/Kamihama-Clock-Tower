var releaseDate = "August 22 2017, 0:00";
var possibleNextAnnouncementDate = "Mar 17 2023, 18:00";
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
			"Moving Aquamarine Heels Kimochi Battle",
            "キモチ戦振動するアクアマリンの踵"
        ],
        "image": [
            "imgs/2002/banner_0351_m.png"
        ],
        "column": 0,
        "priority": 500,
        "timers": [
			{
				name: "Part 1 - Day 1",
				start: "Feb 20 2023, 17:00",
				end: "Feb 21 2023, 15:59"
			},
			{
				name: "Part 1 - Day 2",
				start: "Feb 21 2023, 16:00",
				end: "Feb 22 2023, 15:59"
			},
			{
				name: "Part 2 - Day 1",
				start: "Feb 22 2023, 17:00",
				end: "Feb 23 2023, 15:59"
			},
			{
				name: "Part 2 - Day 2",
				start: "Feb 23 2023, 16:00",
				end: "Feb 24 2023, 15:59"
			},
			{
				name: "Part 2 - Day 3",
				start: "Feb 24 2023, 16:00",
				end: "Feb 25 2023, 15:59"
			},
            {
                "name": "Main Event",
                "start": "Feb 20 2023, 17:00",
                "end": "Feb 25 2023, 15:59",
                "extraPriority": 1000,
				"type": "normal",
				markers: 
				[{time: "Feb 22 2023, 17:00", title: "Part 2 - Groups", type: "battle"}]
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
            "Extermination Battle: Witches Paradox",
			"『ピュエラ・ヒストリア攻略キャンペーン』"
        ],
        "image": [
            "imgs/2001/banner_0494_m.png"
        ],
        "column": 0,
        "priority": 5,
        "timers": [
			{
				name: "",
				start: "Jan 20 2023, 17:00",
				end: "Jan 27 2023, 14:59",
				markers:
				[
				{time: "Jan 23 2023, 16:00", title: "Challenge Stages", type: "battle"},
				{time: "Jan 25 2023, 16:00", title: "EX Challenge Stages", type: "battle"}
				],
				extraPriority: 100
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Puella・Historia Strategy Campaign",
			"『ピュエラ・ヒストリア攻略キャンペーン』"
        ],
        "image": [
            "imgs/2602/banner_0661_m.png",
			"imgs/2602/banner_0662_m.png"
        ],
        "column": 0,
        "priority": 1,
        "timers": [
			/*{
				name: "Login Bonus",
				start: "feb 10 2023, 16:00",
				end: "feb 20 2023, 23:59",
				extraPriority: 100
			},*/
			{
				name: "1/2 AP, x2 PLAYER EXP, x2 Support Pt & x2 Magical Strengthening Great and Super Success Rate",
				start: "mar 10 2023, 18:00",
				end: "mar 20 2023, 14:59",
				extraPriority: 100
			},
			{
				name: "Limited-time Daily Missions",
				start: "mar 10 2023, 18:00",
				end: "mar 20 2023, 14:59"
			}
        ]
    },
		{
        "type": "Event",
        "title": [
            "Little Bird's Star",
			"Little Bird's Star"
        ],
        "image": [
            "imgs/2602/banner_0655_m.png"
        ],
        "column": 0,
        "priority": 3,
        "timers": [
			{
				name: "",
				start: "feb 27 2023, 16:00",
				end: "mar 10 2023, 14:59",
				extraPriority: 100,
				markers: 
				[{title: "Story Quests 11-20 & 100Evils I~III", time: "mar 3 2023, 16:00", type: "battle"}]
			}
        ]
    },
	{
        "type": "Event",
        "title": [
            "Puella・Historia: Mirage of Alexandria Arc",
			"『ピュエラ・ヒストリア アレクサンドリアの蜃気楼編』"
        ],
        "image": [
            "imgs/2602/banner_0657_m.png"
        ],
        "column": 0,
        "priority": 2,
        "timers": [
			{
				name: "",
				start: "mar 10 2023, 18:00",
				end: "mar 20 2023, 14:59",
				extraPriority: 100,
				markers: 
				[{title: "Story Quests 11-20 & 100Evils I~III", time: "mar 14 2023, 16:00", type: "battle"}]
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
				name: "Adjuster Coin Shop: Water - Past Valentines Units Gachas",
				start: "Feb 10 2023, 16:00",
				end: "Feb 27 2023, 14:59"
			},
			{
				name: "Valentines Special Ticket Shop - Past Valentines Step-up Gacha",
				start: "Feb 10 2023, 16:00",
				end: "Feb 27 2023, 14:59"
			},
			{
				name: "Valentines Day Message - Event Shops & Missions",
				start: "Feb 10 2023, 16:00",
				end: "Feb 27 2023, 14:59"
			},
			{
				name: "2000 Days Since Release - Special Missions & Shop",
				start: "Feb 10 2023, 16:00",
				end: "Feb 27 2023, 14:59"
			},
			{
				name: "Little Bird's Star - Event Shop & Missions",
				start: "Feb 27 2023, 16:00",
				end: "Mar 17 2023, 14:59"
			},
			{
				name: "Adjuster Coin Shop: Ebony Gacha",
				start: "mar 10 2023, 18:00",
				end: "mar 27 2023, 14:59"
			},
			{
				name: "Ranking Mirrors Related Packs",
				start: "Mar 20 2023, 16:00",
				end: "Mar 27 2023, 14:59"
			}
        ]
    },

{
		type: "Other",
		title: [
		"Flame Attribute Strengthening Pack",
		"火属性魔法少女育成パック"
		],
		image: [
            "imgs/2002/banner_0566_m.png"
        ],
		column: 2,
		priority: 5,
		timers: [ 
		{
			name: "Sales period",
			start: "Feb 20 2023, 17:00",
			end: "Feb 27 2023, 14:59",
			extraPriority: 100
		}
		]
	},
{
		type: "Other",
		title: [
		"Tart☆Magica Collaboration Commemorative Training Support Pack",
		"魔法少女たると☆マギカコラボ記念 育成応援パックの販売"
		],
		image: [
            "imgs/0901/banner_0647_m.png"
        ],
		column: 2,
		priority: 6,
		timers: [ 
		{
			name: "Sales period",
			start: "Jan 10 2023, 16:00",
			end: "Jan 20 2023, 14:59",
			extraPriority: 100
		}
		]
	},
{
		type: "Other",
		title: [
		"2000 Days Since Release Packs",
		"2000日記念パック"
		],
		image: [
            "imgs/1002/banner_0653_m.png"
        ],
		column: 2,
		priority: 5,
		timers: [ 
		{
			name: "",
			start: "Feb 10 2023, 16:00",
			end: "Feb 20 2023, 14:59",
			extraPriority: 100
		}
		]
	},
	{
        type: "Maintenance",
        title: [
            "Maintenance",
			"维护"
        ],
		"image": [
			"imgs/maintenance.png"
		],
        column: 0,
        priority: 4,
        timers: [
            {
                name: "",
                start: "mar 20 2023, 16:00",
                end: "mar 27 2023, 18:00",
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
			"Choose Your 4★  Memoria Selection Gacha ",
            "『選べる★4メモリアセレクションガチャ』"
        ],
        "image": [
            "imgs/gatcha/choose-memo.png"
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "",
                start: "Mar 20 2023, 17:00",
				end: "Mar 27 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Limited-time Ebony Pickup Gacha",
            "有償限定 火属性★4魔法少女確定ガチャ"
        ],
        "image": [
            "imgs/2002/gachabanner_1338_m.png"
        ],
        "column": 1,
        "priority": 4,
        "timers": [
            {
                name: "",
                start: "Feb 20 2023, 17:00",
				end: "Feb 27 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Daily Free 10 pull Rare Gacha",
            "10連レアガチャ毎日1回無料"
        ],
        "image": [
            "imgs/1912/banner_0641_m.png"
        ],
        "column": 1,
        "priority": 21,
        "timers": [
            {
                name: "",
                start: "Dec 21 2022, 00:00",
				end: "Jan 10 2023, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Dec 21 2022, 00:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Dec 22 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Dec 23 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Dec 24 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Dec 25 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Dec 26 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Dec 27 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Dec 28 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Dec 29 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Dec 30 2022, 0:00",
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
			"5th Anniversary Choose your 4★ Memoria Selection Gacha ",
            "5周年記念 選べる★4メモリアセレクションガチャ"
        ],
        "image": [
            "imgs/anniv/gachabanner_1101_m.png"
        ],
        "column": 1,
        "priority": 18,
        "timers": [
            {
                name: "",
                start: "Aug 22 2022, 16:00",
				end: "Sep 5 2022, 23:59",
                extraPriority: 100,
				markers:
				[
				{
					title: "Free pull 1",
					time: "Aug 22 2022, 16:00",
					type: "star"
				},
				{
					title: "Free pull 2",
					time: "Aug 23 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 3",
					time: "Aug 24 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 4",
					time: "Aug 25 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 5",
					time: "Aug 26 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 6",
					time: "Aug 27 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 7",
					time: "Aug 28 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 8",
					time: "Aug 29 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 9",
					time: "Aug 30 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 10",
					time: "Aug 31 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 11",
					time: "Sep 1 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 12",
					time: "Sep 2 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 13",
					time: "Sep 3 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 14",
					time: "Sep 4 2022, 0:00",
					type: "star"
				},
				{
					title: "Free pull 15",
					time: "Sep 5 2022, 0:00",
					type: "star"
				}
				]
            }
        ]
    },
		{
        "type": "Gacha",
        "title": [
			"Limited-time Ebony Pickup and STEP-UP Gachas",
            "『有償限定 ステップアップガチャ エボニー編』"
        ],
        "image": [
            "imgs/2602/gachabanner_1349_m.png",
			"imgs/2602/gachabanner_1350_m.png"
			

        ],
        "column": 1,
        "priority": 17,
        "timers": [
            {
                name: "",
                start: "mar 10 2023, 18:00",
				end: "mar 20 2023, 14:59",
                extraPriority: 100
            }
        ]
    },
	{
        "type": "Gacha",
        "title": [
			"Limited-time Kuroe Pickup and STEP-UP Gachas",
            "期間限定 黒江 ピックアップ&ステップアップガチャ"
        ],
        "image": [
            "imgs/2602/gachabanner_1341_m.png",
			"imgs/2602/gachabanner_1342_m.png"
        ],
        "column": 1,
        "priority": 16,
        "timers": [
            {
                name: "",
                start: "Feb 27 2023, 16:00",
				end: "Mar 10 2023, 14:59",
                extraPriority: 100
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
            "imgs/anniv/gachabanner_1107_m.png"
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
