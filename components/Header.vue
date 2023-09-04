<template>
    <div class = "container">


        <div class="title">
            <h2>Expense Tracker</h2>
        </div>
        <div class="money">

            <div class="balance">
                <h3>YOUR BALANCE</h3>
                <h2>${{formatVal(this.income - this.expenses)}}</h2>
            </div>
            
            <div class="card card-balance">
                <div class="income">
                    <h4>INCOME</h4>
                    <h4 :style ="{color: 'var(--green-color)'}">+${{formatVal(this.income)}}</h4>
                </div>
                <div class="expense">
                    <h4>EXPENSE</h4>
                    <h4 :style ="{color: 'var(--red-color)' }">-${{formatVal(this.expenses)}}</h4>
                </div>
            </div>

        </div>


    </div>
</template>

<script>
    import { mapState } from 'vuex'; // Import Vuex mapState

    export default{
        name: 'Header',
        computed: {
            // Map the income and expenses from the Vuex store to component data
            ...mapState(['income', 'expenses'])
        },
        methods: {

            formatVal(val){
                const formatVal = parseFloat(val).toFixed(2);
                return (formatVal || 0);
            }
            
        }
    }
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap');
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        background: #E4D5B7

    }
    .money{
        flex-grow: 1;
        width: fit-content;
        padding: 10px 10px;
        min-width: 300px;
        width: auto;
    }
    .balance{
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 10px;
    }
    .card-balance{
        display: flex;
        justify-content: space-around;
        padding: 20px 10px;
        text-align: center;
    }
    .expense h4,
    .income h4{
        margin-top: 2px;
    }
    .expense,
    .income{
        margin-bottom: 5px;
    }


</style>