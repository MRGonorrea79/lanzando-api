import { WeatherEnum,visibilityEnum } from "./enums"

export interface DiaryEntry{
    id: number,
    date: String,
    weather: Weather,
    visibility: visibility,
    comment: String,
}


//export type NonsensitiviveDiaryEntries = Pick<DiaryEntry,'id' | 'date' |  'weather' | 'visibility'>

export type NonsensitiviveDiaryEntries = Omit<DiaryEntry,"comment">

export type newDiaryEntry = omit <DiaryEntry,"id">


