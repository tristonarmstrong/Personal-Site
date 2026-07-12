function calculateReadingTime(content, wordsPerMinute = 200) {
  const words = content.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}
function formatReadingTime(minutes) {
  if (minutes < 1) {
    return "< 1 min read";
  }
  return `${minutes} min read`;
}
export {
  calculateReadingTime as c,
  formatReadingTime as f
};
