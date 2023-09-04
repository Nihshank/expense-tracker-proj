<template>
    <form class="form" @submit.prevent="onSubmit" method="POST">
      <fieldset>
        <legend>Add New Transaction</legend>
  
        <label for="transaction_description">Description:</label>
        <input
          type="text"
          placeholder="Enter description..."
          v-model="transaction_description"
        />
  
        <label for="amount">Amount:</label>
        <input
          type="text"
          placeholder="Enter amount..."
          v-model="amount"
        />
  
        <div class="checks">
          <input
            type="checkbox"
            v-model="is_expense"
          >
          <label for="is_expense" class="checkbox-label">Expense</label>
        </div>
  
        <input
          type="submit"
          value="Confirm Transaction"
        >
      </fieldset>
    </form>
</template>
  

<script>
  import axios from "axios";
  
  export default {
    name: 'Transactions',
    props: {
      transactions: Array,
    },
    data() {
      return {
        transaction_description: '',
        amount: null,
        is_expense: false,
      };
    },
    methods: {
      fetchTransactions() {
        // Fetch the initial data when the component is created
        axios
          .get('http://localhost/expense-tracker/backend/api.php')
          .then((response) => {
            // Emit the fetched data to the parent component
            this.$emit('added-transaction', response.data);
            console.log(response.data);
          })
          .catch((error) => {
            console.error(error);
            console.log(error.response.data);
          });
      },
      onSubmit() {
        // ... Your form submission logic ...

        if(!this.transaction_description){
            alert('Please enter a description');
        }
        else if(!this.amount){
            alert('Please enter the amount')
        }
        else{

            const data = {
            transaction_description: this.transaction_description,
            amount: parseFloat(this.amount),
            is_expense: this.is_expense,
        }

        axios
          .post('http://localhost/expense-tracker/backend/api.php', data)
          .then((response) => {
            // ... Your post request logic ...
            alert('transaction added succesfully');
            // After posting the data, fetch the updated data again
            this.fetchTransactions();

            this.transaction_description = ""
            this.amount = ''
            this.is_expense = false
          })
          .catch((error) => {
            // ... Error handling for post request ...
            console.error(error);
          });
        }

      },
    },
  };
</script>
  
  
<style>

    .form{
        margin-top: 40px;
        min-width: 100%;
    }
    fieldset{
        padding: 20px;
        border-radius: 5px;
        border: 1px solid var(--secondary-color);
    }

    legend{
        font-weight: 500;
    }

    label{
        display: block;
        margin-top: 10px;
    }
    label:first-of-type{
        margin-top: 0;
    }
    input{
        outline: none;
        margin-bottom: 20px;
        accent-color: var(--secondary-color);
    }

    input:last-of-type{
        margin-bottom: 0px;
        margin-top: 20px;
    }
    
    input[type='text']{
        border: none;
        border-bottom: 1px solid var(--secondary-color);
        padding: 5px 0px;
        width: 100%;
    }
    input[type='submit']{
        cursor: pointer;
        width: 100%;
        border: 1px solid var(--secondary-color);
        background: var(--secondary-color);
        color: white;
        padding: 5px 0px;
        font-weight: bold;
        border-radius: 5px;
    }
    input[type='submit']:hover{
        transform: scale(0.97);
    }

    input[type='checkbox'] + label{
        display: inline-block; 
    }

    input[type='checkbox']{
        cursor: pointer;
    }

    .checks label{
        margin-left: 5px;
       
    }

</style>