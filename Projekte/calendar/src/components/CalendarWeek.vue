<!-- Single File Component-->
<template>
  <div id="calender-week">
    <div class="card-group">
      <!-- Anfang: Template für die Calendar-Day-Component -->
      <CalendarDay v-for="i in 7" :key="i" />
      <!-- Ende: Template für die Calendar-Day-Component -->
    </div>
  </div>
</template>

<script>
// Importiere unsere Single File Component "CalendarWeek"
import CalendarDay from "./CalendarDay";
// Nicht benannter Export
export default {
  name: "CalendarWeek",
  components: {
    CalendarDay,
  },
};
</script>

<style scoped>
h5 {
  color: red;
}
</style>
