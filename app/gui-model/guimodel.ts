export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Re-Friend-Tracker_Riesegri",
            "formList": [
                {
                    "id": "FriendForm",
                    "title": "Friend",
                    "formFieldList": [
                        {
                            "id": "familyName",
                            "type": "text",
                            "name": "FamilyName",
                            "width": 1,
                            "required": true
                        },
                        {
                            "id": "firstName",
                            "type": "text",
                            "name": "FirstName",
                            "width": 1,
                            "required": true
                        },

			{
			    "id": "nickname",
			    "type": "text",
			    "name": "Nickname",
			    "width": 2,
			    "required": true
			},
			{
				"id": "group",
				"type": "autocomplete",
				"name": "Group",
				"data": [ "Study", "Family", "School" ],
				"form": "GroupForm",
				"width": 2
			},
			{
	                    "id":   "location",
                            "type": "autocomplete",
                            "name": "Location",
                            "data": [ "Winterthur", "Zürich" ],
                            "form": "GroupForm",
                            "width": 2
                        },
                        {
                            "id": "evtBirth",
                            "type": "date",
                            "name": "Birthday",
                            "width": 2
                        },
                        {
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
		{
				"id": "GroupForm",
				"title": "Group",
				"formFieldList": [
			{
				"id": "name",
				"type": "text",
				"name": "GroupName",
				"width": 2,
				"required": true
			},
			{
                            "id": "evtBirth",
                            "type": "date",
                            "name": "CreatedOn",
                            "width": 2
                        },
 			{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
			{
				"type": "deleteButton",
				"name": "Delete"
			},
			{
				"type": "cancelButton",
				"name": "Cancel"
			},
			{
                            "id": "evtBirth",
                            "type": "date",
                            "name": "CreatedOn",
                            "width": 2
                        },
			{
				"type": "okButton",
				"name": "Ok"
			}
			]
		},
		{
				"id": "AddActivityForm",
				"title": "Activity",
				"formFieldList": [
			{
				"id": "activity",
				"type": "autocomplete",
				"name": "Activity",
				"data": [ "Cinema", "Hike", "HangOut" ],
				"form": "GroupForm",
				"width": 2
			},
			{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,	
                        },
			{
				"type": "deleteButton",
				"name": "Delete"
			},
			{
				"type": "cancelButton",
				"name": "Cancel"
			},
			{
				"type": "okButton",
				"name": "Ok"
			}
			]
		},
		{
				"id": "EditActivityForm",
				"title": "Activity",
				"formFieldList": [
			{
				"id": "activity",
				"type": "autocomplete",
				"name": "Activity",
				"data": [ "Cinema", "Hike", "HangOut" ],
				"form": "GroupForm",
				"width": 2
			},
			{
				"id": "place",
				"type": "autocomplete",
				"name": "Place",
				"data": [ "Adelboden", "Winterthur", "Zinal", "Zürich" ],
				"form": "GroupForm",
				"width": 2
			},
			{
				"type": "deleteButton",
				"name": "Delete"
			},
			{
				"type": "cancelButton",
				"name": "Cancel"
			},
			{
				"type": "okButton",
				"name": "Ok"
			}
			]
		},
                {
                    "id": "LocationForm",
                    "title": "Location",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "LocationName",
                            "width": 2,
                            "required": true
                        },
			{
                            "id": "comment",
                            "type": "text",
                            "name": "Comments",
                            "width": 2,
                            "height": 4,
                            "maxLength": 5000,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ],
            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "button",
                            "name": "Friends",
                            "icon": "fa-user",
                            "color": "blue",
                            "page": "friendspage",
                        },
                        {
                            "type": "button",
                            "name": "Location",
                            "icon": " fa-globe",
                            "color": "yellow",
                            "page": "locationspage",
                        },
			{
				"type": "button",
				"name": "Groups",
				"icon": "fa-group",
				"color": "wisteria",
				"page": "groupspage",
			},
                    ]
                },
			{
				"id": "groupspage",
				"elementList": [
				{
					"type": "backbutton",
				},
				{
					"type": "newButton",
					"name": "NewGroup",
					"icon": "fa-weixin",
					"color": "green",
					"form": {
					"form": "GroupForm"
					}
					},
				{
					"type": "list",
					"icon": "fa-weixin",
					"color": "wisteria",
					"search": true,
					"data": [ { name: "Study" }, { name: "Family" }, { name: "School"} ],
					"form": {
					"form": "GroupForm"
					}
				},
				]
		},
		{
				"id": "activiestakenpartspage",
				"elementList": [
				{
					"type": "backbutton",
				},
				{
					"type": "list",
					"icon": "fa-weixin",
					"color": "wisteria",
					"search": false,
					"data": [ { name: "Hike" }, { name: "Cinema" }, { name: "Cinema"},{ name: "Hike" }, { name: "HangOut" }, ],
					"form": {
					"form": "GroupForm"
					}
				},
				]
		},
		{
				"id": "participants",
				"elementList": [
				{
					"type": "backbutton",
				},
				{
                            		"type": "list",
                            		"icon": "fa-user",
                            		"color": "blue",
                            		"search": false,
                            		"data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            		"page": "activityspage",
                        },
				]
		},

		{
					"id": "activityspage",
					"elementList": [
						{
							"type": "backbutton",
						},
						{
							"type": "newButton",
							"name": "EditFriend",
							"icon": "fa-pencil",
							"color": "green",
							"form": {
							"form": "FriendForm"
							}
						},
						{
							"type": "newButton",
							"name": "EditActivity",
							"icon": "fa-pencil",
							"color": "green",
							"form": {
							"form": "EditActivityForm"
							}
						},
						{
							"type": "newButton",
							"name": "AddActivity",
							"icon": "fa-weixin",
							"color": "green",
							"form": {
							"form": "AddActivityForm"
							}
						},
						{
							"type": "newButton",
							"name": "ActivityHistory",
							"icon": "fa-weixin",
							"color": "red",
							"page": "activiestakenpartspage",
						},
						{
							"type": "list",
							"icon": " fa-hand-peace-o",
							"color": "wisteria",
							"search": true,
							"data": [ { name: "Cinema" }, { name: "Hike" }, { name: "Hang out"} ],
							"page": "participants", 
						},
						]
						
		},
                {
                    "id": "friendspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewFriend",
                            "icon": "fa-user",
                            "color": "green",
                            "form": {
			    "form": "FriendForm"
			}  
                        },
                        {
                            "type": "list",
                            "icon": "fa-user",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Anton Amacker" }, { name: "Britta Beavers"} ],
                            "page": "activityspage",
                        },
                    ]
                },
                {
                    "id": "locationspage",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "newButton",
                            "name": "NewLocation",
                            "icon": "fa-home",
                            "color": "green",
                            "form": {
                                "form": "LocationForm"
                            }
                        },
                        {
                            "type": "list",
                            "icon": "fa-home",
                            "color": "blue",
                            "search": true,
                            "data": [ { name: "Adelboden" }, { name: "Winterthur" }, { name: "Zinal"}, { name: "Zürich"} ],
                            "page": "activiestakenpartspage",
                        },
                    ]
                }
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
