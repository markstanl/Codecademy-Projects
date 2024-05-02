import {
  RaccoonMeadowsVolunteers,
  RaccoonMeadowsActivity,
  raccoonMeadowsVolunteers,
} from './raccoon-meadows-log';

import {
  WolfPointVolunteers,
  WolfPointActivity,
  wolfPointVolunteers,
} from './wolf-point-log';

type CombinedActivity = RaccoonMeadowsActivity | WolfPointActivity;

type Volunteers = {
  id: number;
  name: string;
  activities: CombinedActivity[];
};

function combineVolunteers(
  volunteers: (RaccoonMeadowsVolunteers | WolfPointVolunteers)[]
) {
 return volunteers.map((volunteer) =>{
    let id = volunteer.id;
    if(typeof id === "string") id = parseInt(id, 10);
    return {
      id: id,
      name: volunteer.name,
      activities: volunteer.activities,
    }
  })

}

const getHours = (activity: CombinedActivity) =>{
  if("hours" in activity){
    return activity.hours
  }
  return activity.time;
}

function calculateHours(volunteers: Volunteers[]) {
  return volunteers.map((volunteer) => {
    let hours = 0;

    volunteer.activities.forEach((activity) => {
      if(isVerified(activity.verified)){
        hours += getHours(activity);
      }
    });

    return {
      id: volunteer.id,
      name: volunteer.name,
      hours: hours,
    };
  });
}

const byHours = (a, b) =>{
  return b.hours - a.hours
}

const isVerified = (verified: string| boolean) =>{
  if(typeof verified === "string"){
    return verified === "Yes" 
  }
  return verified
}

const combinedVolunteers = combineVolunteers(
  [].concat(wolfPointVolunteers, raccoonMeadowsVolunteers)
);

console.log(combinedVolunteers);

let result = calculateHours(combinedVolunteers)
console.log(result)
console.log(result.sort(byHours))
