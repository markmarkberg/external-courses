export const resetMock = (mock) => {
  localStorage.setItem("Data", JSON.stringify(mock));
  
};
