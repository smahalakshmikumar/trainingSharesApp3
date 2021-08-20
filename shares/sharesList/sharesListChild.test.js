import TestRenderer from "react-test-renderer"
import { create, act } from 'react-test-renderer';
import { Button } from "react-bootstrap";
import SharesListChild from "./SharesListChild";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "../../redux/reducers";
import { mount } from "enzyme";


describe("Given SharesListChild comp", () => {
    let wrapper;
    let mockAppstore;
    let viewMore = jest.fn();

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

        wrapper = mount(<Provider store={mockAppstore}>
            <SharesListChild  shares={mockAppstore.getState().shares.sharesList} viewMore={viewMore}/>
        </Provider>)
    });

    it("should render SharesListChild comp", () => {
        expect(wrapper).toHaveLength(1);
    })

   

    describe('when "viewMoreButton" is clicked', () => {

        it("should dispatch viewMoreButton action", () => {
            const viewMoreButton = wrapper.find(Button).find('#viewMoreButton').
                find('button');
                viewMoreButton.simulate('click');
            expect(viewMore).toHaveBeenCalled();
        })
    })

   
    
})