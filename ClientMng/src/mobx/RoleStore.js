import { makeObservable, observable, runInAction } from 'mobx';
class RoleStore {
    roles = [
        {
            id: 1,
            name: "מורה"
        },
        {
            id: 2,
            name: "ספרית"
        },
        {
            id: 3,
            name: "מוכרת"
        },
        {
            id: 4,
            name: "מנקה"
        },
        {
            id: 5,
            name: "סופרת"
        },
        {
            id: 6,
            name: "אברך"
        }
    ];
    // employeeRoles = [
    //     {
    //         id:1,
    //         roleId:3,
    //         empId:0,
    //         isManagement: true,
    //         startRole: new Date(2024, 1, 12)
    //     },
    //     {
    //         id:2,
    //         roleId:2,
    //         empId:0,
    //         isManagement: false,
    //         startRole: new Date(2012, 10, 5)
    //     },
    //     {
    //         id:3,
    //         roleId:1,
    //         empId:1,
    //         isManagement: false,
    //         startRole: new Date(2022, 8, 10)
    //     }
    // ]

    constructor() {
        makeObservable(this, {
            roles: observable,
            getAllRoles: observable,
            // getEmployeeRoles: observable
        });
        //baseUrl = 'https://localhost:7067/api/Role'
    }
    getAllRoles() {
        return this.roles;
    }
    // getEmployeeRoles() {
    //     return this.employeeRoles;
    // }
    // addEmployeeRole(employeeR){
    //     this.employeeRoles.push(employeeR)
    // }
    // updateEmployeeRole(id, employeeR){
    //     const index = this.employeeRoles.findIndex(emp => emp.id === id);//בדיקה האם קיים
    //     console.log(index)
    //     if (index !== -1) {
    //         this.employeeRoles[index] = { ...this.employeeRoles[index], ...employeeR };
    //         const emp = this.employees.find(e => e.id === index)//האוביקט שצריך להשתנות

    //         console.log("putEmployeeById success");
    //         // console.log(`update emp: ${emp} firstName: ${emp.firstName}`)
    //         // console.log(`index: ${index} emp: ${emp} firstName: ${emp.firstName}`)
    //     }
    // }
} export default new RoleStore();