export type Weather = "sunny" | "rainy" | "cloudy" | "windy" | "stormy"
export type visibility = 'great' | "good" | "ok" | "poor"

export interface DiaryEntry{
    id: number,
    date: String,
    weather: Weather,
    visibility: visibility,
    comment: String,
}

export enum WeatherEnum{
    Sunny = "sunny",
    Rainy = "rainy",
    Cloudy = "cloudy",
    Windy = "windy",
    Stormy = "stormy"
}

export enum visibilityEnum{
    Great = "great",
    Good = "good",
    Ok = "ok",
    Poor = "poor"

}

//export type NonsensitiviveDiaryEntries = Pick<DiaryEntry,'id' | 'date' |  'weather' | 'visibility'>

export type NonsensitiviveDiaryEntries = Omit<DiaryEntry,"comment">

export type newDiaryEntry = omit <DiaryEntry,"id">


