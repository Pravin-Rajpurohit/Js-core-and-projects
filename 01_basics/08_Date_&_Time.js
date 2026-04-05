// ════════════════════════════════════════════════
//       JS DATE — WHAT YOU ACTUALLY USE
// ════════════════════════════════════════════════


// ── Get current date & time ──────────────────────
const now = new Date();
console.log(now.toISOString());       // "2024-06-15T10:30:00.000Z" → APIs/DB
console.log(Date.now());              // ms timestamp → performance, JWT


// ── Format for display ───────────────────────────
console.log(new Intl.DateTimeFormat("en-IN", {
  dateStyle: "medium",
  timeStyle: "short"
}).format(now));
// "15 Jun 2024, 10:30 am"


// ── YYYY-MM-DD string (for DB queries) ───────────
const today = new Date().toISOString().split("T")[0];
console.log(today); // "2024-06-15"


// ── Add days ─────────────────────────────────────
function addDays(date, n) {
  const d = new Date(date);
  d.setDate(d.getDate() + n);
  return d;
}
console.log(addDays(new Date(), 7).toISOString().split("T")[0]);


// ── Difference in days ───────────────────────────
function diffInDays(a, b) {
  return Math.floor((b - a) / (1000 * 60 * 60 * 24));
}
console.log(diffInDays(new Date("2024-01-01"), new Date("2024-06-15"))); // 166


// ── Start & end of day (DB range queries) ────────
function startOfDay(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
}
function endOfDay(date) {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
}


// ── isToday ──────────────────────────────────────
function isToday(date) {
  const t = new Date();
  return date.getDate()     === t.getDate()  &&
         date.getMonth()    === t.getMonth() &&
         date.getFullYear() === t.getFullYear();
}


// ── timeAgo (for post/comment timestamps) ────────
function timeAgo(date) {
  const diff  = Date.now() - new Date(date).getTime();
  const mins  = Math.floor(diff / 60000);
  const hours = Math.floor(mins / 60);
  const days  = Math.floor(hours / 24);

  if (mins  < 1)  return "just now";
  if (mins  < 60) return `${mins}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days  < 30) return `${days}d ago`;
  return new Date(date).toISOString().split("T")[0];
}
console.log(timeAgo(new Date(Date.now() - 300000))); // "5m ago"


// ── JWT expiry check ─────────────────────────────
function isTokenExpired(exp) {
  return Math.floor(Date.now() / 1000) > exp;
}


// ── Safe date copy (avoid mutation) ──────────────
const original = new Date("2024-01-01");
const copy = new Date(original.getTime()); // ✅ not just = original


// ── KEY GOTCHAS ──────────────────────────────────
// ⚠️ month is 0-indexed
new Date(2024, 0, 1); // January, not 0th month

// ⚠️ never compare dates with ===
const x = new Date("2024-06-15");
const y = new Date("2024-06-15");
console.log(x === y);                    // false ❌
console.log(x.getTime() === y.getTime()); // true ✅

// ⚠️ check invalid date
const bad = new Date("abc");
console.log(isNaN(bad.getTime()));       // true
