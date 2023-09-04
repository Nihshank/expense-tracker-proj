// store.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    income: 0,
    expenses: 0,
  },
  mutations: {
    updateIncome(state, income) {
      state.income += income;
    },
    updateExpenses(state, expenses) {
      state.expenses += expenses;
    },
    resetIncome(state){
        state.income = 0
    },
    resetExpenses(state){
        state.expenses = 0
    }
  },
});
