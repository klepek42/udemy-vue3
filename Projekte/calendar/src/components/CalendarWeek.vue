<!-- Single File Component-->
<template>
  <div id="calender-week">
    <div class="card-group">
      <div class="card" v-for="i in 7" :key="i">
        <div class="card-header text-center" role="button">
          <strong>Montag</strong>
        </div>
        <div class="card-body">
          <!-- Anfang: Template für die Calendar-Day-Component -->
          <CalendarDay />
          <!-- Ende: Template für die Calendar-Day-Component -->
        </div>
      </div>
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
