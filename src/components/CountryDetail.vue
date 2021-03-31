<template>
  <div class="container">
    <img :src="country.flag" :alt="country.name" width="100" height="60" />
    <div><span v-text="country.name"></span></div>
    <div>Native name: <span v-text="country.nativeName"></span></div>
    <div>Population: <span v-text="country.population"></span></div>
    <div>Region: <span v-text="country.region"></span></div>
    <div>Sub region: <span v-text="country.subregion"></span></div>
    <div>Capital: <span v-text="country.capital"></span></div>
    <div>Top level domain: <span v-text="country.topLevelDomain"></span></div>
    <div>
      Currencies:
      <span v-for="currency in country.currencies" :key="currency.code">
        {{ currency.name }}
      </span>
    </div>
    <div>
      Languages:
      <span v-for="language in country.Languages" :key="language.iso639_1">
        {{ language.name }}
      </span>
    </div>
    <div>
      Border countries:
      <button
        v-for="border in country.borders"
        :key="border"
        @click="changeCountry(border)"
      >
        {{ border }}
      </button>
    </div>
  </div>
</template>

<script>
import CountryService from "../../services";
export default {
  data() {
    return {
      country: [],
    };
  },
  props: ["alpha3Code"],
  async beforeRouteUpdate(to, from, next) {
    try {
      let response = await CountryService.getDetail(to.params.alpha3Code);
      this.country = response.data;
      next();
    } catch (error) {
      next();
    }
  },
  async mounted() {
    try {
      let response = await CountryService.getDetail(this.alpha3Code);
      this.country = response.data;
    } catch (error) {
      console.log(error.log);
    } finally {
      //
    }
  },
  methods: {
    changeCountry(border) {
      this.$router.push({
        name: "country-detail",
        params: { alpha3Code: border },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
</style>