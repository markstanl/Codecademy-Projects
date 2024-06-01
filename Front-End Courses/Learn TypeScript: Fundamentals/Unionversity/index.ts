import courses from "./courses";
import studyGroups from "./studyGroups";

type Course = {
  id: number,
      studyGroupId: number,
    title: string,
    keywords:string[],
    eventType: string,
}
type StudyGroup = {
      id: number,
    courseId: number,
    title: string,
    keywords: string[],
    eventType: string,
}
type SearchEventsOptions = {
  query: number | string,
  eventType: 'courses' | 'groups'
}

const searchEvents = (options: SearchEventsOptions) =>{
  let events: (Course | StudyGroup )[];
  if(options.eventType === "courses"){
    events = courses;
  }else{
    events = studyGroups
  }
  return events.filter((event: Course | StudyGroup) =>{
    if(typeof options.query === "number"){
      return event.id === options.query
    }else if(typeof options.query === "string"){
      for(let keyword of event.keywords){
        if(keyword === options.query){
          return true
        }
      } return false
    }
  })
}


let searchResults= searchEvents({
  query: "art",
  eventType: "courses"
})

//console.log(searchResults)

let enrolledEvents: (Course | StudyGroup)[] = [];
const enroll = (event: Course | StudyGroup | (Course | StudyGroup)[]) =>{
  if(Array.isArray(event)){
    for(let singleEvent of event){
      enrolledEvents.push(singleEvent)
    }
  }else{
  enrolledEvents.push(event)}
}

const drop = (event: Course | StudyGroup) =>{
  enrolledEvents.filter((enrolledEvent) =>{
    return enrolledEvent.title !== event.title
  })
}

const enrolledTitles = (): string =>{
  let returnString: string = "";
  enrolledEvents.map((enrolledEvent) =>{
    returnString += enrolledEvent.title
    returnString += ", "
  })
  return returnString;
}

enroll(searchResults[0])

console.log(enrolledEvents)
console.log(enrolledTitles())
drop(searchResults[0])
console.log(enrolledEvents)
console.log(enrolledTitles())

