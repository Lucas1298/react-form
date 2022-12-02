import { useState } from "react";
import "./formInput.css";



const FormInput = (props) => {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, values, flag, id,types,impPrisma, ...inputProps } = props;

  const formatoMexico = (number) => {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1,';
    let arr = number.toString().split('.');
    arr[0] = arr[0].replace(exp,rep);
    return arr[1] ? arr.join('.'): arr[0];
  }

  const handleFocus = (e) => {
    setFocused(true);
  };

  switch (types) {
    case "common":
      return (
        <div className="formInput">
          <label>{label}</label>
          {console.log(props)}
          <input className="inputOne"
            {...inputProps}
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            required= {true}
          />
          <span>{errorMessage}</span>
        </div>
      )
    case "result":
      return (
        <div className="formInputTwo">
          <label>{label}</label>
          
          <input className="inputTwo"
            {...inputProps}
            value={formatoMexico((Math.floor(values * 10000) / 10000).toFixed(4)) }
            onChange={onChange}
            onBlur={handleFocus}
            focused={focused.toString()}
            required= {true}
          />
          <span>{errorMessage}</span>
        </div>
      ) 
  

    case "porcentaje":
        return (
          <div className="formInput">
            <label>
              {label}
              <select className="select" onChange={onChange}  {...inputProps}>
                <option value={0.8}>0.80%</option>
                <option value={1.8}>1.80%</option>
              </select>
            </label>
          </div>
        )
    default:
      break;
  }
};

export default FormInput;
