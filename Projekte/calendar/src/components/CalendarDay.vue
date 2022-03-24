<template>
  <div class="card border-start" :class="cardClasses">
    <div
      class="card-header text-center"
      :class="cardHeaderClasses"
      role="button"
    >
      <strong>{{ day.fullName }}</strong>
    </div>
    <div class="card-body">
      <CalendarEvent
        v-for="event in day.events"
        :key="event.title"
        :event="event"
      >
        <template v-slot:eventPriority></template>
        <!-- <template v-slot:default></template>   Identisch mit der Schreibweise darunter -->
        <template v-slot></template>
      </CalendarEvent>
    </div>
  </div>
</template>

<script>
import CalendarEvent from "./CalendarEvent";
import Store from "../store";
export default {
  name: "CalendarDay",
  components: {
    CalendarEvent,
  },
  // Array-Schreibweise; Nicht zu empfehlen
  //props: ["day"],

  // Objekt-Schreibweise
  props: {
    // Mögliche Typen: String, Number, Boolean, Array, Object oder Function
    // Mehrere Typen mit Array-Schreibweise: [String, Number]

    // Kurzform
    //day: Object,    // Restriktion des erwarteten Datentyps

    // Langform mit Einstellungen für Warnungen
    day: {
      type: Object, // Restriktion des erwarteten Datentyps
      required: true, // Pflicht, da unbedingt für die Anwendung notwendig
      // Bei primitiven Datentypen: default: 100
      // Bei nicht primitiven Datentypen
      default: function () {
        return {
          id: -1,
          fullName: "Fehlender Wochentag",
          events: [],
        };
      },
      validator: function (value) {
        // Wenn einer der Keys, des Arrays den Wert "id" enthält, dann gebe ein true zurück
        if (Object.keys(value).includes("id")) {
          return true;
        }
      },
    },
  },
  computed: {
    cardClasses() {
      return this.day.id === Store.getters.activeDay().id
        ? ["border-primary"]
        : null;
    },
    cardHeaderClasses() {
      return this.day.id === Store.getters.activeDay().id
        ? ["bg-primary text-white"]
        : null;
    },
  },
};
</script>

<style scoped></style>
