import { Injectable } from '@angular/core';
import { AngularFirestore, QueryFn } from '@angular/fire/firestore';

@Injectable()
export class DataService {
  constructor(private af: AngularFirestore) {}

  _getDataList<T>(collection: string, queryFn?: QueryFn) {
    return this.af.collection<T>(collection, queryFn).valueChanges();
  }

  _getData<T>(id: string, collection: string) {
    return this.af.doc<T>(`${collection}/${id}`).valueChanges();
  }
}
