export const storage = (mockDat) => {
  if (!localStorage.getItem("Data")) {
    localStorage.setItem("Data", JSON.stringify(mockDat));
  }
};
