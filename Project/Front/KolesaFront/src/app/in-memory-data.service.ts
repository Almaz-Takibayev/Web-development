import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  getUserByEmail(email: string): User {
    this.getUsers().forEach(user => {
      if ( user.email === email ) {
        return user;
      }
    });
    return null;
  }
  createDb() {
    const users = [
      { id: 11, name: 'Dr Nice', email: 'nice@gmail.com', password: '123', phone: '8707' },
      { id: 12, name: 'Narco', email: 'narco@gmail.com', password: '123', phone: '8707'  },
      { id: 13, name: 'Bombasto', email: 'bomba@gmail.com', password: '123', phone: '8707'  },
      { id: 14, name: 'Celeritas', email: 'cele@gmail.com', password: '123', phone: '8707'  },
      { id: 15, name: 'Magneta', email: 'magneta@gmail.com', password: '123', phone: '8707'  }
    ];
    return {users};
  }

  getUsers(): User[] {
    return this.createDb().users;
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 11;
  }
}
