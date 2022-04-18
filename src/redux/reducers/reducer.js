import { ADDITION, CLEAR, DIVISION, MULTIPLICATION, NUMBER, RESULT, SUBTRACTION } from '../constant';

let rootReducer = (prevState,action)=>{
  //let prevState = prevState

  switch(action.type){ 
    case ADDITION:
        return {
            ...prevState,
            operation: '+'
        }
    case SUBTRACTION:
        return {
            ...prevState,
            operation: '-'
        }
    case MULTIPLICATION:
        return {
            ...prevState,
            operation: '*'
        }
    case DIVISION:
        return {
            ...prevState,
            operation: '/'
        }
    case RESULT:
        //alert('RESULT');
        switch(prevState.operation){
            case '+':
                return {
                    ...prevState,
                    result: prevState.leftValue + prevState.rightValue
                }
            case '-':
                return {
                    ...prevState,
                    result: prevState.leftValue - prevState.rightValue
                }
            case '*':
                return {
                    ...prevState,
                    result: prevState.leftValue * prevState.rightValue
                }
            case '/':
                return {
                    ...prevState,
                    result: prevState.leftValue / prevState.rightValue
                }
            default:
        }
      console.log(prevState);
      break;
    case CLEAR:
        return {
            result: 0,
            leftValue: '',
            operation: '',
            rightValue: ''
        }
    case NUMBER:
      //alert(action.number);
      if(prevState.operation === ""){
        if(prevState.leftValue === ""){
            return {
                ...prevState,
                leftValue : parseInt(action.number),
                result    : parseInt(action.number)
            }
          
        }else{
          //Concatinatte
          return {
                ...prevState,
                leftValue : parseInt(prevState.leftValue + action.number),
                result    : parseInt(prevState.leftValue + action.number)
            }
        } 
      }else{
        if(prevState.rightValue === ""){
            return {
                ...prevState,
                rightValue : parseInt(action.number),
                result    : parseInt(action.number)
            }
        }else{
            return {
                ...prevState,
                rightValue : parseInt(prevState.rightValue + action.number),
                result    : parseInt(prevState.rightValue + action.number)
            }
        }
      }
    default:
  }
  //console.log(prevState);
  return prevState
}

export default rootReducer;