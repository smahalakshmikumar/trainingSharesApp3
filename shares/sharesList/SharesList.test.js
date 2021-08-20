import { Button } from "react-bootstrap";
import SharesList from "./SharesList";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers"
import { mount, shallow } from "enzyme";
import { Router } from "react-router-dom";

describe("Given shareslist comp", () => {
    let wrapper;
    let mockAppstore;
    let viewMore = jest.fn();
    let mockHistory={push:jest.fn(),listen:jest.fn(),location:{}}

    beforeEach(() => {
        //redux
        mockAppstore = createStore(rootReducer, {
            users: { usersList: [{ id: 1, firstName: "Maha", role: "admin" }],
            isLoading: false },
            shares:{sharesList:[{
                    aboutCompany: "HCL Technologies is an Indian multinational information technology (IT) services and consulting company, headquartered in Noida, Uttar Pradesh, India. It is a subsidiary of HCL Enterprise. ",
                    id: 1,
                    logoImg: "https://groww.in/stocks/jk-cement-ltd",
                    managingDirector: "Shiv Nadar",
                    shareName: "HCL",
                    sharePrice: 500

            }
               ]}
        })
        wrapper = mount(
           <Router history={mockHistory}>
           <Provider store={mockAppstore}>
            <SharesList shares={mockAppstore.getState().shares.sharesList} viewMore={viewMore}/>
           </Provider> 
        </Router>)
    });

    it("should render shareslist comp", () => {
       expect(wrapper).toHaveLength(1);
    })
})