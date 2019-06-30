export const set = value => {
  localStorage.setItem("links", JSON.stringify(value));
};

export const get = () => {
  const data = localStorage.getItem("links");
  return data ? JSON.parse(data) : [];
};
