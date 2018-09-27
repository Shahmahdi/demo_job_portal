import { types, getSnapshot } from "mobx-state-tree"
import axios from "axios";
import { isEmpty } from 'lodash';

export const User = types
    .model("User", {
        name: types.optional(types.string, ''),
        nameError: types.optional(types.boolean, false),
        gender: types.optional(types.string, ''),
        genderError: types.optional(types.boolean, false),
        skills: types.optional(types.array(types.string), []),
        skillError: types.optional(types.boolean, false),
        email: types.optional(types.string, ''),
        emailError: types.optional(types.boolean, false),
        mobile: types.optional(types.string, ''),
        mobileError: types.optional(types.boolean, false),
        password: types.optional(types.string, ''),
        passwordError: types.optional(types.boolean, false)
    })
    .actions(self => ({
        setName(name: string) {
            self.name = name;
        },
        setGender(gender: string) {
            self.gender = gender;
        },
        setSkills(skill: any) {
            self.skills = skill;
        },
        setEmail(email: string) {
            self.email = email;
        },
        setMobile(mobile: string) {
            self.mobile = mobile;
        },
        setPassword(pass: string) {
            self.password = pass;
        },
        save() {

            if (isEmpty(self.name) === true) {
                self.nameError = true;
            } else {
                self.nameError = false;
            }
            if (isEmpty(self.gender) === true) {
                self.genderError = true;
            } else {
                self.genderError = false;
            }
            if (self.skills.length < 1) {
                self.skillError = true;
            } else {
                self.skillError = false;
            }
            if (isEmpty(self.email) === true) {
                self.emailError = true;
            } else {
                self.emailError = false;
            }
            if (isEmpty(self.mobile) === true) {
                self.mobileError = true;
            } else {
                self.mobileError = false;
            }
            if (isEmpty(self.password) === true) {
                self.passwordError = true;
            }  else {
                self.passwordError = false;
            }
            if (self.nameError || self.genderError || self.skillError || self.emailError || self.passwordError || self.mobileError) {
                return;
            }
            
            let userInfo = getSnapshot(self);
            axios.post('http://localhost:4000/users/create', userInfo)
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }));


export const UserStore = types
    .model("UserStore", {
        users: types.optional(types.array(User), []),
        guest: types.optional(User, {})
    }).views(self => ({
        getGuestUser() {
            return User.create();
        }
    }));