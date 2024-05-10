import { makeObservable, observable, action, runInAction } from 'mobx';
import { format } from 'date-fns';

class EmployeeStore {

    employees = [
        {
            id: 0,
            firstName: 'יהודית',
            lastName: 'דידרגן',
            tz: '325984870',
            birthDate: new Date(2004, 1, 1),
            isMale: false,
            empRoleId: [1, 2],
            startDate: new Date(2024, 19, 5),
            status: true,
        },
        {
            id: 1,
            firstName: 'אבא',
            lastName: 'דידרגן',
            tz: '059825232',
            birthDate: new Date(1965, 4, 12),
            isMale: true,
            empRoleId: [3],
            startDate: new Date(2000, 15, 3),
            status: true,
        },
        {
            id: 2,
            firstName: 'אמא',
            lastName: 'דידרגן',
            tz: '023635055',
            birthDate: new Date(1977, 24, 12),
            isMale: false,
            empRoleId: [],
            startDate: new Date(2002, 10, 8),
            status: true,
        }, {
            id: 3,
            firstName: 'אביגיל',
            lastName: 'שמאי',
            tz: '212826937',
            birthDate: new Date(2002, 6, 5),
            isMale: false,
            empRoleId: [],
            startDate: new Date(2022, 10, 10),
            status: true,
        }

    ];
    id = 4;//אם יש api, אין בעיה בחוסר ה id
    baseUrl = 'https://localhost:7067/api/Employee'

    constructor() {
        makeObservable(this, {
            employees: observable,
            addEmployee: action,
            getAllEmployees: action,
            removeEmployee: action,
            putEmployeeById: action,
            getEmployeeById: action,//זה אמור להיות observable
            formatDateFields: action
        });
        this.getAllEmployees()
    }

    formatDateFields() {
        this.employees.forEach(emp => {
            emp.birthDate = format(new Date(emp.birthDate), 'dd/MM/yyyy');
            emp.startDate = format(new Date(emp.startDate), 'dd/MM/yyyy');
        });
    }

    async getAllEmployees() {
        // fetch('https://localhost:7067/api/Employee', {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //     }
        // }).then((res) => {
        //     res.json().then((data) => {
        //         console.log(data);
        //         runInAction(() => {
        //             this.employees = JSON.parse(JSON.stringify(data));
        //             this.formatDateFields()
        //         });
        //     });
        // }).catch((error) => {
        //     console.log(error);
        //     console.log("error");
        // });
    }

    getEmployeeById(id) {
        // fetch(`${this.baseUrl}/${id}`, {
        //     method: "GET",
        //     headers: {
        //         "Content-Type": "application/json",
        //     }
        // }).then((res) => {
        //     res.json().then((data) => {
        //         runInAction(() => {
        //             // אולי כדאי להוסיף בדיקה כאן שהעובד נמצא ברשימת העובדים ולעדכן רק אם כן
        //             this.employees = [data];
        //         });
        //     });
        // });
        return this.employees.filter(emp => emp.id === id)
    }

    addEmployee = async (employee) => {

        // const response = await fetch(this.baseUrl, {
        //     method: "POST",
        //     body: JSON.stringify(employee),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });
        // if (response.status === 200) {
        //     this.employees.push(employee)
        //     console.log("addEmployee")
        // }
        // else {
        //     console.log("fail addEmployee")
        // }
        console.log(employee)
        this.employees.push(employee);

        console.log(this.employees.map(e => e.id))
    }

    async putEmployeeById(id, updatedEmployee) {
        // const url = `${this.baseUrl}/${id}`;

        // const response = await fetch(url, {
        //     method: "PUT",
        //     body: JSON.stringify(updatedEmployee),
        //     headers: {
        //         "Content-Type": "application/json",
        //     },
        // });

        // if (response.ok) {

        const index = this.employees.findIndex(emp => emp.id === id);//בדיקה האם קיים
        console.log(index)
        if (index !== -1) {
            this.employees[index] = { ...this.employees[index], ...updatedEmployee };
            const emp = this.employees.find(e => e.id === index)//האוביקט שצריך להשתנות

            console.log("putEmployeeById success");
            // console.log(`update emp: ${emp} firstName: ${emp.firstName}`)
            // console.log(`index: ${index} emp: ${emp} firstName: ${emp.firstName}`)
        }

        // } else {
        //     console.log("putEmployeeById failed");
        // }
    }
    async removeEmployee(id) {
        const employee = this.employees.find(emp => emp.id === id);
        if (employee) {
            const updatedEmployee = { ...employee, status: !employee.status };
            //const url = `${this.baseUrl}/${id}`;

            // const response = await fetch(url, {
            //     method: "PUT",
            //     body: JSON.stringify(updatedEmployee),
            //     headers: {
            //         "Content-Type": "application/json",
            //     },
            // });

            // if (response.ok) {
            const index = this.employees.findIndex(emp => emp.id === id);
            if (index !== -1) {
                this.employees[index] = updatedEmployee;
                console.log("removeEmployee success");
            }
            else {
                console.log("updateEmployeeStateById failed");
            }
        } else {
            console.log("Employee not found to delete");
        }
    }

}
export default new EmployeeStore();
