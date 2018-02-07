import { takeLatest } from 'redux-saga/effects';

import { searchAndAddRepository } from 'redux/sagas/favorites';

import { Types as FavoriteTyoes } from 'redux/ducks/favorites';

export default function* root() {
  yield [
    takeLatest(FavoriteTyoes.SEARCH, searchAndAddRepository),
  ];
}
