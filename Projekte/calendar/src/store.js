// Importiere statische Daten (JSON) aus der JavaScript-Datei
import { calendarWeekData } from "./seed.js";

// Importiere Vue Funktion "reactive" zur Nutzung des Reactivity Systems von Vue (Ihr wird ein Objekt übergeben)
// Importiere Vue Funktion "readonly" zur Verhinderung von Datenmanipuliationen durch Components (Ihr wird ein Objekt übergeben)
import { reactive, readonly } from "vue";

// Anwendungsdaten
const state = reactive({
  calendarWeekData,
});

//
const getters = {
  activeDay: () => state.calendarWeekData.find((day) => day.active) // Ohne Klammern, da nur eine Anweisung folgt
};

//
const mutations = {};

export default {
  state: readonly(state),   // Daten können nur gelesen und nicht verändert werden
  getters,
  mutations,
};
