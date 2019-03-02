import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private afs: AngularFirestore) {}

  login(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  signOut() {
    return this.afAuth.auth.signOut();
  }
}
