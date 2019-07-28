import { addCard, removeCard } from './actions/index.js';
import { createStore } from 'redux';
import scrumDisk from './reducers/index.js';

const store = createStore(scrumDisk);

const unsubscribe = store.subscribe(() => console.log(store.getState()));

store.dispatch(addCard("cards", { 
    title: "New Card Title 1", 
    desc: "New Card Desc 1"
}));
store.dispatch(addCard("monsterSlot1", {
    title: "New Card Title 2",
    desc: "New Card Desc 2"
}));
store.dispatch(removeCard("monsterSlot1", {
    title: "New Card Title 2",
    desc: "New Card Desc 2"
}));

unsubscribe();
