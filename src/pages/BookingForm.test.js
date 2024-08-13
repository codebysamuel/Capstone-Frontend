import {render,screen,fireEvent} from "@testing-library/react"
import BookingForm from "./BookingForm"

describe("BookingForm",()=>{
    it("Should display the form and handle form submission",()=>{
        render (<BookingForm/>);
        
        //get the elements
        const FNInput=screen.getByLabelText(/first name/i);
        const LNInput=screen.getByLabelText(/last name/i)
        const EInput=screen.getByLabelText(/email/i)
        const DTInput=screen.getByLabelText(/date/i)
        const TSelect=screen.getByLabelText(/time/i)
        const GInput=screen.getByLabelText(/guests/i)
        const OCSelect=screen.getByLabelText(/occassion/i)
        const SubButton=screen.getByText(/confirm reservation/i)

      // Fill the fields
      fireEvent.change(FNInput,{target:{value:'Gouri'}})
      fireEvent.change(LNInput,{target:{value:"Bhise"}})
      fireEvent.change(EInput,{target:{value:'gouri@test.com'}})
      fireEvent.change(DTInput,{target:{value:'2024-08-13'}})
      fireEvent.change(TSelect,{target:{value:"17:00"}})
      fireEvent.change(GInput,{target:{value:"2"}})
      fireEvent.change(OCSelect,{target:{value:"birthday"}})

      //expected values
      expect(FNInput.value).toBe('Gouri')
      expect(LNInput.value).toBe("Bhise")
      expect(EInput.value).toBe('gouri@test.com')
      expect(DTInput.value).toBe('2024-08-13')
      expect(TSelect.value).toBe("17:00")
      expect(GInput.value).toBe("2")
      expect(OCSelect.value).toBe("birthday")

      //submit
      fireEvent.click(SubButton)


    })
})