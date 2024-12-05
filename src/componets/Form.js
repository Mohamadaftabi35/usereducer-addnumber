import { useReducer } from "react";

function Form() {

  const num = 0;
  const Addnumber = (State , Action) =>{
    switch(Action){
      case '+ 1':
        return State + 1
        case '+ 10':
        return State + 10
        case '+ 20':
        return State + 20
        case '- 1':
        return State - 1
        case '- 10':
         return State - 10
          case '- 20':
          return State - 20
           case 'Reset':
            return num
          default:
            return State
    }
  }
  const [number , setnumber] = useReducer(Addnumber , num);
  return (
    <>
  <div className="container bg-warning mt-6">
    <div className="row justify-content-center text-center">
      <div className="col-sm-5">
         <h1 className="display-4">کم و زیاد کردن </h1>
         <hr />

           <div className="btn-group p-2">
         <button onClick={() => setnumber('+ 1')} className="btn btn-outline-success">+ 1</button>
         <button onClick={() => setnumber('+ 10')} className="btn btn-outline-success">+ 10</button>
         <button onClick={() => setnumber('+ 20')} className="btn btn-outline-success active">+ 20</button></div>
         <hr />

          <h2>{number}</h2>
         <hr />

         <div className="btn-group p-2">
         <button onClick={() => setnumber('- 1')} className="btn btn-outline-danger">-1</button>
         <button onClick={() => setnumber('- 10')} className="btn btn-outline-danger">- 10</button>
         <button onClick={() => setnumber('- 20')} className="btn btn-outline-danger active">- 20</button></div>
         <hr />
         <button onClick={() => setnumber('Reset')} className="btn btn-outline-danger active p-4">Reset</button>

        </div>
       </div>
     </div>
    </>
  )
}

export default Form;