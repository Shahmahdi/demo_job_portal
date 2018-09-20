import { types } from "mobx-state-tree"

export const User = types
    .model("User", {
        name: types.optional(types.string, ''),
        gender: types.optional(types.string, ''),
        skills: types.array(types.string),
        email: types.optional(types.string, ''),
        mobile: types.optional(types.string, ''),
        password: types.optional(types.string, '')
    })
    .actions(self => ({
        setName(name: string) {
            self.name = name;
        },
        setGender(gender: string) {
            self.gender = gender;
        },
        setEmail(email: string) {
            self.email = email;
        },
        setMobile(mobile: string) {
            self.mobile = mobile;
        },
        setPassword(pass: string) {
            self.password = pass;
        }
    }));


export const UserStore = types
    .model("UserStore", {
        users: types.optional(types.array(User), []),
    });