new Vue({
  el: '#app',
  data() {
    return {
       erc223: true,
       initialSupply: 1000000,
       cap: 200000,
       decimals: 8,
      name: "Shitcoin",
      symbol: "💩",
      crowdsale: false,
      phase: [],
      minting: false
    }
  },
  computed: {
    unit() {
      return 10 ** this.decimals;
    },
    parents() {
      let parents = [];
      if (this.minting) parents.push(`CappedToken(${this.cap})`);
      else parents = ['StandardToken']
      return parents;
    }
  }
});