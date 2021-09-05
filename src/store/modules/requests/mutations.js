export default {
  addRequest(state, payload) {
    state.requests.push(payload);
  },
  setRequests(state, payload) {
    console.log('Test', state.requests, payload);
    state.requests = payload;
  }
};
