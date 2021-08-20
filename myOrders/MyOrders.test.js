import { Button } from "react-bootstrap";
import MyOrders from "./MyOrders";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../redux/reducers"
import { mount, shallow } from "enzyme";
import { Router } from "react-router-dom";

describe("Given MyOrders comp", () => {
    let wrapper;
    let mockAppstore;
    let dispatch = jest.fn();
    let mockHistory={push:jest.fn(),listen:jest.fn(),location:{}}

    beforeEach(() => {
        //redux
        mockAppstore = createStore(rootReducer, {
            users: { usersList: [{ "id": 1, "firstName": "Maha", "role": "admin" }], isLoading: false },
            orders:{confirmedShares:[
                { acceptTerms: true,
                confirmPassword: "123456",
                email: "smahalakshmikumar@gmail.com",
                firstName: "mahalakshmi",
                id: 2,
                lastName: "kumar",
                password: "123456",
                userorders:[{id: 4,
                    isSold: false,
                    quantity: 0,
                    shareName: "HCL",
                    sharePrice: 500,
                    totalPrice: 0,
                    userId: 2}]
                }]}
           
        })

        wrapper = mount(
           <Router history={mockHistory}>
           <Provider store={mockAppstore}>
               <MyOrders dispatch={dispatch} userorders={mockAppstore.getState().orders.confirmedShares}/>
           </Provider> 
        </Router>)
    });

    it("should render MyOrders comp", () => {
       expect(wrapper).toHaveLength(1);
    })
})