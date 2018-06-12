import state from "../state"

export default {
  down: value => state => ({ count: state.count - value }),
  up: value => state => ({ count: state.count + value })
}
