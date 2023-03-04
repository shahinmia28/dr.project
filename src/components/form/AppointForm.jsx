import styled from "styled-components";
import { formData } from "../../data/data";

const AppointForm = () => {
  return (
    <FormStyle>
      <form action="#">
        <select name="department" id="department">
          <option value="selected">Select: Department</option>
          {formData.map((curElem, i) => (
            <option value={curElem.department} key={i}>
              {curElem.department}
            </option>
          ))}
        </select>
        <select name="doctor" id="doctor">
          <option value="selected">Select: Doctor</option>
          {formData.map((curElem, i) =>
            curElem.doctors ? (
              <option value={curElem.doctors} key={i}>
                {curElem.doctors}
              </option>
            ) : null
          )}
        </select>
        <input type="text" name="name" placeholder="Your Full Name" />
        <input type="number" name="phone" placeholder="Phone" />
        <input type="date" name="date" />
        <input type="time" name="time" placeholder="Time" />
        <button type="submit" className="btn-my">
          Make appointment
          <i className="fa-solid fa-arrow-right-long"></i>
        </button>
      </form>
    </FormStyle>
  );
};

const FormStyle = styled.div`
  form {
    width: 100%;
    font-size: 14px;
    margin-top: 30px;
    select {
      width: 100%;
      padding: 15px;
      outline: none;
      margin: 5px 0;
      text-transform: capitalize;
      option {
        background: #fff;
      }
    }
    input {
      width: 100%;
      padding: 15px;
      outline: none;
      border: 1px solid #767676;
      margin: 5px 0;
      &::placeholder {
        color: #000;
      }
    }
    button {
      width: 100%;
      background: #062a4d;
      color: #fff;
      margin: 5px 0;
      i {
        margin-left: 15px;
      }
      &:hover {
        background: #062a4dbe;
      }
    }
  }
`;
export default AppointForm;
