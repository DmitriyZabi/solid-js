// Dependency inversion principle

/* Неверно
class Fetch {
  request(url) {
    //return fetch(url).then((r) => r.json())
    return Promise.resolve('data from fetch')
  }
}

class Database {
  constructor() {
    //this.fetch = new Fetch()
    this.localStorage = new LocalStorage()
  }
  getData() {
    //return this.fetch.request('vk.com')
    return this.localStorage.get()
  }
}

class LocalStorage {
  get() {
    const dataFromLocalStorage = 'data from local storage'
    //return localStorage.getItem('vk.com')
    return dataFromLocalStorage
  }
}

const db = new Database()
console.log(db.getData())
*/

class Database {
  constructor(client) {
    this.client = client
  }
  getData(key) {
    return this.client.clientGet(key)
  }
}

class Fetch {
  request(url) {
    //return fetch(url).then((r) => r.json())
    return Promise.resolve('data from fetch')
  }
}

class LocalStorage {
  get(key) {
    //return localStorage.getItem('vk.com')
    const dataFromLocalStorage = 'data from local storage'
    return dataFromLocalStorage
  }
}

class FetchClient {
  constructor() {
    this.fetch = new Fetch()
  }

  clientGet(url) {
    return this.fetch.request(url)
  }
}

class LocalStorageClient {
  constructor() {
    this.localStorage = new LocalStorage()
  }

  clientGet(key) {
    return this.localStorage.get(key)
  }
}

const db = new Database(new LocalStorageClient())
console.log(db.getData('vk.com'))
