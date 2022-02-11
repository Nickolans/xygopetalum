const ExampleTasks = [
  {
    name: "Work on app colors...",
    identifier: "8a55b756-465e-494b-ac1c-f5ece89175f5",
    completed: false,
    parent: "",
    projects: [
      "personal",
      "nicks cool app"
    ],
    children: []
  },
  {
    name: "Create xygopetalum main screen",
    identifier: "d23d602b-9aec-4ca0-be33-a6b30d8ba829",
    completed: false,
    parent: "",
    projects: [
      "personal",
      "nicks cool app"
    ],
    children: [
      "56839911-240e-4c29-aace-88739bf79009",
      "ed30b1f0-d112-4b25-a046-58e691874494"
    ]
  },
  {
    name: "Create cells",
    identifier: "ed30b1f0-d112-4b25-a046-58e691874494",
    completed: true,
    parent: "d23d602b-9aec-4ca0-be33-a6b30d8ba829",
    projects: [
      "personal",
      "nicks cool app"
    ],
    children: []
  },
  {
    name: "Write example data",
    identifier: "56839911-240e-4c29-aace-88739bf79009",
    completed: false,
    parent: "d23d602b-9aec-4ca0-be33-a6b30d8ba829",
    projects: [
      "personal",
      "nicks cool app"
    ],
    children: []
  },
  {
    name: "Complete timesheet",
    identifier: "a3da9e71-a57d-4944-a940-0130faada2f6",
    completed: false,
    parent: "",
    projects: [
      "my work :/"
    ],
    children: []
  }
]

export default ExampleTasks