<!-- Single File Component-->
<template>
  <div id="calender-week">
    <div class="card-group">
      <!-- Anfang: Template für die Calendar-Day-Component -->
      <CalendarDay v-for="day in calendarWeekData" :key="day.id" :day="day" />
      <!-- Ende: Template für die Calendar-Day-Component -->
    </div>
  </div>
</template>

<script>
// Importiere unsere Single File Component "CalendarWeek"
import CalendarDay from "./CalendarDay";
import Store from "../store";

// Nicht benannter Export
export default {
  name: "CalendarWeek",
  components: {
    CalendarDay,
  },
  data () {
    return {
      calendarWeekData: Store.state.calendarWeekData,
    };
  }
};
</script>

<style scoped>
h5 {
  color: red;
}
</style>
