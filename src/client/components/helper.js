const reviews = async () => {
  const response = await fetch("/api/reviews");
  return await response.json();
};
export default reviews;
