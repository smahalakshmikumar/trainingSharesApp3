import TestRenderer from "react-test-renderer"
import { create, act } from 'react-test-renderer';
import { Button } from "react-bootstrap";
import SelectedShareChild from "./SelectedShareChild";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";
import { mount } from "enzyme";


describe("Given SelectedShareChild comp", () => {
    let wrapper;
    let mockAppstore;
    let vieMore = jest.fn();

    beforeEach(() => {
        //redux
        mockAppstore = createStore(rootReducer, {
            users: { usersList: [{ id: 1, firstName: "Maha", role: "admin" }],
            isLoading: false },
            shares:{confirmedShares:[
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
       let selectedShare={id: 4,
        isSold: false,
        quantity: 0,
        shareName: "HCL",
        sharePrice: 500,
        totalPrice: 0,
        userId: 2}
        wrapper = mount(<Provider store={mockAppstore}>
            <SelectedShareChild  selectedShare={selectedShare}/>
        </Provider>)
    });

    it("should render SelectedShareChild comp", () => {
        expect(wrapper).toHaveLength(1);
    })

   

    // describe('when "clear cart" is clicked', () => {

    //     it("should dispatch clear cart action", () => {
    //         const clearButton = wrapper.find(Button).find('#clear-button').
    //             find('button');
    //         clearButton.simulate('click');
    //         expect(dispatch).toHaveBeenCalled();
    //         expect(dispatch).toHaveBeenCalledWith(ClearCart());
    //     })
    // })

   
    
})