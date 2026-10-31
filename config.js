/* ======================================================================
   config.js – hier musst du nur EINE Sache eintragen: deine Discord-ID.

   So geht's (3 Schritte):
   1. Discord: Einstellungen → Erweitert → Entwicklermodus einschalten.
   2. Rechtsklick auf dein Profil → "Benutzer-ID kopieren".
      Die lange Zahl unten zwischen die Anführungszeichen einfügen.
   3. Dem Lanyard-Server beitreten: https://discord.gg/lanyard
      Der Dienst liest darüber deinen Status aus. Bleib auf dem Server,
      sonst verschwindet dein Status auf der Seite.

   Danach zeigt die Seite live deinen Discord-Status, deine Musik und
   dein aktuelles Spiel.
   ====================================================================== */
window.STATUS_CONFIG = {

  discordUserId: "754664785362157579",   // z. B. "123456789012345678"

  // Wie oft abgefragt wird (Sekunden, mindestens 5)
  pollSeconds: 10

  /* Fortgeschritten (nicht nötig): eigene Datenquelle statt Lanyard,
     z. B. der Desktop-Client aus dem Projekt:
     statusUrl: "https://deine-adresse/status",
     adapter: raw => raw   // optional, wandelt das Format um            */
};
