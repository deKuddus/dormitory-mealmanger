
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
    {
        "date": "2023-02-01",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-02",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-03",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-04",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-05",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-06",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-07",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-08",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-09",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-10",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-11",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-12",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-13",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-14",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-15",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-16",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-17",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-18",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-19",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-20",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-21",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-22",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-23",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-24",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-25",
        "title": "Lunch: 2 | Dinner: 2"
    },
    {
        "date": "2023-02-26",
        "title": "Lunch: 2 | Dinner: 2"
    }
]

export function createEventId() {
    return String(eventGuid++)
}
