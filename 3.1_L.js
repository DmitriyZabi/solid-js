// Liskov substitution principle

/* Неверно
class Person {
  access() {
    console.log('У тебя есть доступ')
  }
}

class Frontend extends Person {
  canCreateFrontend() {}
}

class Backend extends Person {
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Person {
  access() {
    console.log('У тебя нет доступа!')
  }
}

function openSecretDoor(person) {
  person.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
openSecretDoor(new PersonFromDifferentCompany())
*/

class Person {}

class Member extends Person {
  access() {
    console.log('У тебя есть доступ')
  }
}

class Guest extends Person {
  isGuest = true
  access() {
    console.log('У тебя нет доступа!')
  }
}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {}

function openSecretDoor(member) {
  member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
openSecretDoor(new PersonFromDifferentCompany())
