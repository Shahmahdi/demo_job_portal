import { types, getSnapshot } from "mobx-state-tree"
import axios from "axios";

export const User = types
    .model("User", {
        name: types.optional(types.string, ''),
        gender: types.optional(types.string, ''),
        skills: types.optional(types.array(types.string), []),
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
        setSkills(skill: any) {
            // console.log(skill);
            self.skills = skill

            // let a = skill.split(',');
            // a.map(e => {
            //     self.skills.push(e.toString());
            // })
            // skill.map(s => {
            //     self.skills.push(s.toString());
            // })
            
            // console.log("self.skills: " + self.skills);
            
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
            console.log(getSnapshot(self));
            let userInfo = getSnapshot(self);
            axios.post('http://localhost:4000/users/create', userInfo)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            // axios({
            //     method: 'post',
            //     url: 'http://localhost:4000/users/create',
            //     data: userInfo,
            //     config: { headers: {'Content-Type': 'application/json' }}
            //     })
            //     .then(function (response) {
            //         //handle success
            //         console.log(response);
            //     })
            //     .catch(function (response) {
            //         //handle error
            //         console.log(response);
            //     });
        }
        // const save = flow(function* aasf() {
        //     yield axios.post('http://localhost:4000/', {
        //         name: self.name,
        //         age: self.age
        //     })
        //         .then(function (response) {
        //             console.log(response);
        //         })
        //         .catch(function (error) {
        //             console.log(error);
        //         });
        // });
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