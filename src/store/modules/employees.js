import axios from "axios";

const state = {
  employees: [],
};

const getters = {
  allEmployees: (state) => state.employees,
};

const actions = {
  async fetchEmployees({ commit }) {
    const response = await axios.get(
      "http://dummy.restapiexample.com/api/v1/employees"
    );
    console.log(response.data.data, "DATA##");
    commit("setEmployees", response.data.data);
  },
};

const mutations = {
  setEmployees: (state, employees) => (state.employees = employees),
};

export default {
  state,
  getters,
  actions,
  mutations,
};
