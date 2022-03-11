const app = Vue.createApp({

  // Optionen
  data: function () {
    return {
      submissions: submissions, // Daten aus seed.js
      totalVotes: 0,
    };
  },
  /*
  computed: {
    calcTotalVotes() {
      console.log("computed property ausgeführt");
      return this.submissions.reduce((totalVotes, submissions) => {
        return totalVotes + submissions.votes;
      }, 0);
    }
  },
  */
  methods: {
    // upvote: function () {} // Funktionales Equivalent

    // Normale Funktionsschreibweise ohne Klammern beim Aufruf
    /*
    upvote() {
      this.submissions[0].votes++;

      console.log(this);  // this-Objekt zeigt auf die Root-Component
      console.log(event); // event-Objekt wird automatisch von Vue übergeben bei Funktionsaufruf ohne Klammern. Mit Klammern werden nur explizit angegebene Parameter übergeben.
    },
    */

    // Normale Funktionsschreibeweise mit Klammern und eigenen Parametern/Argumenten
    upvote(infoText, event) {
      this.submissions[0].votes++;

      console.log(this);  // this-Objekt zeigt auf die Root-Component
      console.log(infoText); // expliziter Parameter
      console.log(event);    // Event-Parameter explizit angegeben
    },
    logConsole(text) {
      console.log(text);
    },
    /*
    calcTotalVotes() {
      return this.submissions.reduce((totalVotes, submissions) => {
        return totalVotes + submissions.votes;
      }, 0);
    }*/

    // Keine Arrow-Functions nutzen, da this hier nicht nutzbar ist (zeigt auf Window-Objekt)!
    /*
    upvote() {
      console.log(this);
    },
    */
  },
  watch: {
    /*
    // Kurze Schreibweise
    submissions(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    },
    */
    // Lange Schreibweise
    submissions: {
      handler(newValue, oldValue) {
        console.log(newValue);
        console.log(oldValue);
        this.totalVotes = this.submissions.reduce((totalVotes, submission) => {
          return totalVotes + submission.votes;
        }, 0);
      },
      deep: true,
    },
    totalVotes(newValue, oldValue) {
      console.log(newValue);
      console.log(oldValue);
    },
  },
});

// Liefert die Instanz zur Root-Component zurück
const vm = app.mount("#app");