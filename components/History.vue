<template>
    <div>
      <div class="cards">
        <h4 class="history">History</h4>
  
        <div
          v-for="transaction in transactions"
          :key="transaction.id"
          class="card income-history card-balance"
          :class="transaction.is_expense ? 'border-red' : 'border-green'"
        >
          <h4>{{ transaction.transaction_description }}</h4>
          <div class="buttons">
            <Button @click="onDelete(transaction.id)" text="Delete"></Button>
            <Button v-if = "!transaction.editing" @click="toggleEditTransaction(transaction)" text="Update"></Button>
            <Button v-else @click="confirmEdit(transaction)" text="Confirm" color="green"></Button>
          </div>
          <h4 v-if = "!transaction.editing" >
            {{ transaction.is_expense ? '-' : '+' }} ${{ transaction.amount }}
          </h4>
          <input
          v-else
          type = "text"
          v-model = "transaction.updatedAmount"
          @keyup.enter = "confirmEdit(transaction)"
          >
        </div>
      </div>
    </div>
    <Transactions @added-transaction = "fetchTransactions"></Transactions>
  </template>
  
<script>
  import Button from '../components/Button.vue';
  import Transactions from '../components/Transactions.vue';
  import axios from 'axios';
  import { mapState, mapMutations } from 'vuex'; // Import Vuex mapState

  
  export default {
    name: 'History',
    components: {
      Button,
      Transactions,
    },
    computed: {
    // Map the income and expenses from the Vuex store to component data
        ...mapState(['income', 'expenses']),
    },
    data() {
      return {
        transactions: [],
      };
    },
    created(){
        this.fetchTransactions();
            // Emit an event with optional data
    },
    methods: {

        ...mapMutations(['updateIncome', 'updateExpenses']),

        updateIncome(income) {
            this.$store.commit('updateIncome', income)
        },
        updateExpenses(expenses) {
            this.$store.commit('updateExpenses', expenses);
        },


      onDelete(id) {
        axios
          .delete(`http://localhost/expense-tracker/backend/api.php?id=${id}`)
          .then((response) => {
            console.log(response);
            this.fetchTransactions();
          })
          .catch((error) => console.error(error));
      },
  
      addTransaction(all_transactions) {
        this.transactions = all_transactions;
      },
  
      fetchTransactions() {

        this.$store.commit('resetIncome');
        this.$store.commit('resetExpenses');

        axios
          .get('http://localhost/expense-tracker/backend/api.php')
          .then((response) => {
            this.transactions = response.data;
            
            this.transactions.forEach((transaction) => {
                if(transaction.is_expense){
                    this.updateExpenses(transaction.amount)
                }
                else{
                    this.updateIncome(transaction.amount)
                }
            })

          })
          .catch((error) => {
            console.error(error);
            console.log(error.response.data);
          });

      },

      toggleEditTransaction(transaction){
         transaction.editing = true
      },

      confirmEdit(transaction){
         transaction.amount = Math.abs(transaction.updatedAmount)
         transaction.editing = false

         axios
         .patch(`http://localhost/expense-tracker/backend/api.php?id=${transaction.id}`, {
            amount: transaction.amount
         })
         .then((response) => {
            console.log(response);
            this.fetchTransactions();
         })
         .catch((err) => {
            console.error(err)
         })
         transaction.updatedAmount = '';

      }
    }
}
</script>


<style>

    .income-history{
        display: grid;
        grid-template-columns: repeat(2, 150px) 100px;
        align-items: center;
    }

    .buttons{
        display: flex;
        justify-content: space-evenly;
        width: 100%;
    }

    .cards .history{
        margin-bottom: 15px;
        border-bottom: 1px solid var(--secondary-color);
    }
    .income-history h4 {
        word-wrap: break-word;   
    }
    .border-green{
        border-right: solid 5px var(--green-color);
    }
    .border-red{
        border-right: solid 5px var(--red-color);
    }
</style>