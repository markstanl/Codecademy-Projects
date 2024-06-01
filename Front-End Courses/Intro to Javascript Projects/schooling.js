//school file to practice inheritence, creates a school parent class, with a highschool and primary school child classes

class School{

  constructor(name, level, numberOfStudents){
    this._name = name;
    this._level = level;
    this._numberOfStudents = numberOfStudents;
  }

  get name(){
    return this._name;
  }

  get level(){
    return this._level;
  }

  get numberOfStudents(){
    return this._numberOfStudents;
  }

  set numberOfStudents(newNumberOfStudents){
      if(typeof newNumberOfStudents === 'number'){
        this._numberOfStudents = newNumberOfStudents;
      }
      else{
        console.log('Invalid input: numberOfStudents must be set to a Number.');
      }
  }

  quickFacts(){
    console.log(`${this._name} educates ${this.numberOfStudents} students at the ${this._level} school level`);
  }

  static pickSubstituteTeacher(substituteTeachers){
    let ran = Math.floor(Math.random() * substituteTeachers.length);
    return substituteTeachers[ran];
  }


} 


class PrimarySchool extends School{

  constructor(name, pickupPolicy, numberOfStudents){
      super(name, 'primary', numberOfStudents)
      this._pickupPolicy = pickupPolicy;
  }

  get pickupPolicy(){
    return this._pickupPolicy;
  }

}

class Highschool extends School{

  constructor(name, sportsTeams, numberOfStudents){
    super(name, 'high', numberOfStudents);
    this._sportsTeams = sportsTeams;
  }

  get sportsTeams(){
    return this._sportsTeams;
  }
}

let lorraineHansbury = new PrimarySchool('Lorraine Hansbury','Students must be picked up by a parent, guardian, or a family member over the age of 13.',514);

lorraineHansbury.quickFacts();

let substitute = School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

let alSmith = new Highschool('Al E. Smith',['Baseball', 'Basketball', 'Volleyball', 'Track and Field'], 415);

let basketball = alSmith.sportsTeams[1];
