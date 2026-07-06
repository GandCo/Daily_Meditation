// ---- Date & Index Logic ----
function getDayOfYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

let currentOffset = 0;

function getIndexForOffset(offset) {
  const today = new Date();
  const target = new Date(today);
  target.setDate(today.getDate() + offset);
  const doy = getDayOfYear(target);
  return ((doy - 1) % 180 + 180) % 180;
}

function getDateForOffset(offset) {
  const today = new Date();
  const target = new Date(today);
  target.setDate(today.getDate() + offset);
  return target;
}

function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
}

// ---- Speech ----
let speechActive = false;

function speak() {
  if (!('speechSynthesis' in window)) return;
  const idx = getIndexForOffset(currentOffset);
  const entry = entries[idx];
  const segments = [
    '“' + entry.quote + '”' + (entry.attr ? '. ' + entry.attr + '.' : ''),
    entry.framing,
    'Winning Streak. ' + entry.prompt
  ];
  window.speechSynthesis.cancel();
  speechActive = true;
  setSpeakBtn(true);
  let i = 0;
  function next() {
    if (!speechActive || i >= segments.length) {
      speechActive = false;
      setSpeakBtn(false);
      return;
    }
    const u = new SpeechSynthesisUtterance(segments[i++]);
    u.rate = 0.92;
    u.onend = next;
    u.onerror = () => { speechActive = false; setSpeakBtn(false); };
    window.speechSynthesis.speak(u);
  }
  next();
}

function stopSpeech() {
  speechActive = false;
  window.speechSynthesis.cancel();
  setSpeakBtn(false);
}

function setSpeakBtn(active) {
  const btn = document.getElementById('speakBtn');
  if (!btn) return;
  const playIcon = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><polygon points="5,3 19,12 5,21"/></svg>';
  const stopIcon = '<svg viewBox="0 0 24 24" fill="currentColor" stroke="none"><rect x="5" y="5" width="14" height="14"/></svg>';
  btn.innerHTML = active ? stopIcon + ' Stop' : playIcon + ' Read Aloud';
  btn.onclick = active ? stopSpeech : speak;
}

// ---- Render ----
function render() {
  if (speechActive) stopSpeech();

  const date = getDateForOffset(currentOffset);
  const idx = getIndexForOffset(currentOffset);
  const entry = entries[idx];
  const cycleDay = idx + 1;

  document.getElementById('headerDate').textContent = formatDate(date);
  document.getElementById('headerCycle').textContent = 'Day ' + cycleDay + ' of 180';

  const card = document.getElementById('card');
  card.style.animation = 'none';
  card.offsetHeight;
  card.style.animation = 'fadeUp 0.4s ease both';

  document.getElementById('quoteText').textContent = '“' + entry.quote + '”';
  document.getElementById('quoteAttr').textContent = entry.attr || '—';
  document.getElementById('framingText').textContent = entry.framing;
  document.getElementById('promptText').textContent = entry.prompt;
  document.getElementById('copiedMsg').textContent = '';

  const nextBtn = document.getElementById('nextBtn');
  if (nextBtn) nextBtn.disabled = currentOffset >= 0;
}

function navigate(dir) {
  if (dir > 0 && currentOffset >= 0) return;
  currentOffset += dir;
  render();
}

function goToday() {
  currentOffset = 0;
  render();
}

function copyQuote() {
  const idx = getIndexForOffset(currentOffset);
  const entry = entries[idx];
  const text = '“' + entry.quote + '”' + (entry.attr ? ' — ' + entry.attr : '');
  navigator.clipboard.writeText(text).then(() => {
    document.getElementById('copiedMsg').textContent = 'Copied to clipboard';
    setTimeout(() => { document.getElementById('copiedMsg').textContent = ''; }, 2500);
  }).catch(() => {
    document.getElementById('copiedMsg').textContent = 'Select and copy manually';
  });
}

render();
