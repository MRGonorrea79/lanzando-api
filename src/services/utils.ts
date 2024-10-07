import { newDiaryEntry } from "../types";
import { Weather,visibility } from "../enums";

const isString = (string:string): boolean => {
    return typeof string === "string" 
}

const isDate = (date : string): boolean =>{
    return Boolean(Date.parse(date))
}
const isWeather = (string:any) : boolean =>{
    return Object.values(Weather).includes(string)
}

const isVisibility = (string : any) :boolean =>{
    return Object.values(visibility).includes(string)
}

const parseComment = (commentRequest : any): String => {
    if (!isString(commentRequest)) {
        throw new Error("comentario incorrecto")
    }
    return commentRequest
}

const parseDate = (dateRequest : any): String => {
    if (!isDate(dateRequest) || !isString(dateRequest)) {
        throw new Error("fecha incorrecta")
    }
    return dateRequest
}

const parseWeather = (weatherRequest : any) : Weather => {
    if (!isString(weatherRequest) || !isWeather(weatherRequest)) {
        throw new Error("clima incorrecto")
    }
    return weatherRequest
}

const parseVisibility = (visibilityRequest: any) : visibility =>{
    if (!isString(visibilityRequest) || !isVisibility(visibilityRequest)) {
        throw new Error("visibilidad incorrecta")
    }
    return visibilityRequest
}

const toNewDiaryEntry = (object: any): newDiaryEntry => {
    const newEntru:newDiaryEntry ={
        Comment:parseComment(object.comment),
        date:parseDate(object.date),
        weather:parseWeather(object.weather),
        visibility:parseVisibility(object.visibility)

    }


    return newEntru
}

export default toNewDiaryEntry