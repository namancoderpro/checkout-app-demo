<template>
  <div>
    <div>
      <div>
        <h2 id="title">Minimal Icons</h2>
        <h2 id="price">$19.00</h2>
      </div>
      <img src="../assets/icon-pack.png" alt="">
      <p id="description">A set of minimal icons that can be used commercially as well. Specifically built with
        accessibility and
        elegance in mind.</p>
    </div>

    <form action="/.netlify/functions/create-checkout-session" method="POST">
      <!--Button that redirects to Stripe's page-->
      <button type="submit">Pay With Stripe</button>
    </form>
  </div>
</template>


<style>
#title {
  font-size: xx-large;
  color: black;
}

#price {
  font-size: x-large;
  color: black;
}

#description {
  font-size: larger;
  color: black;
}

img {
  width: 50%;
  height: 50%;
}

button {
  padding: 10px;
  margin-top: 5px;
  font-size: large;
  background-color: purple;
  color: white;
  border-radius: 5px;

}
</style>

<script lang="ts">
export default {
  name: 'HomeView'
}
</script>