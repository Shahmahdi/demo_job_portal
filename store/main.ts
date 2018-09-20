import { UserStore } from './User';
import { types } from "mobx-state-tree";

const Store = types.model("Store", {
  userStore: types.optional(UserStore, {})
});


export default Store.create();