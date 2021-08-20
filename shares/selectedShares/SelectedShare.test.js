import { Button } from "react-bootstrap";
import SelectedShare from "./SelectedShare";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers"
import { mount, shallow } from "enzyme";
import { Router } from "react-router-dom";

describe("Given CartParent comp", () => {
    let wrapper;
    let mockAppstore;
    let dispatch = jest.fn();
    let mockHistory={push:jest.fn(),listen:jest.fn(),location:{}}

    beforeEach(() => {
        //redux
        mockAppstore = createStore(rootReducer, {
            users: { usersList: [{ id: 1, firstName: "Maha", role: "admin" }],
             isLoading: false },
             shares:{confirmedShares:[{ "id": 1}]}

           
        })

        wrapper = mount(
           <Router history={mockHistory}>
           <Provider store={mockAppstore}>
            <SelectedShare/>
           </Provider> 
        </Router>)
    });

    it("should render shareslist comp", () => {
       expect(wrapper).toHaveLength(1);
    })
})