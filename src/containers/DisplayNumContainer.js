import DisplayNum from "../components/DisplayNum";
import {connect} from 'react-redux'

function mapReduxStateToReactProps(state) {
  return {
    number: state.number
  }
}

function mapReduxDispatchToReactProps(){
  return {}
}

export default connect(mapReduxStateToReactProps, mapReduxDispatchToReactProps)(DisplayNum)
