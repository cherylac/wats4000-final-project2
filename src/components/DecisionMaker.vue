<template>
    <div class="decisionmaker">
        <form v-on:submit.prevent="findAnswer">
            <p>Enter your burning yes or no question <input type="text" placeholder=" ex: Am I too smart?"> <button type="submit">Submit</button></p>
        </form> 
    </div>