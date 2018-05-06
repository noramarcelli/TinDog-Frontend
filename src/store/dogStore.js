import DogService from "../../services/DogService.js";

export const SAVE_LIKE = 'saveLike'
export const LOAD_NEXT_DOGS = 'loadNextDogs'

export default{
  state: {
    selectedDog: null,
    selectedDogIdx: 0
  },
  mutations: {
    setSelectedDog(state, { dogs }) {
      console.log('inside setSelectedDog');
      if (dogs === null) {
        state.selectedDogIdx = 0;
      }
      else {
        state.selectedDogIdx = state.selectedDogIdx++;
      }
      state.selectedDog = dogs[state.selectedDogIdx];
      console.log('state.selectedDog', state.selectedDog);
    }
  },
  actions: {
    [LOAD_NEXT_DOGS](store, { dogId, userDogId }){
      return DogService.getNextDogs(dogId, userDogId).then(dogs => {
             store.commit({ type: 'setSelectedDog', dogs });
             console.log(' dogs',  dogs);
          });
    },

    [SAVE_LIKE](store, { dogId, userDogId }){
      return DogService.addLikeToDog(dogId, userDogId ).then(updatedUserDog => {
     });
    },

    findLikes(store, { userDogId }){
        
    }
  },

  getters: {
  }
};
