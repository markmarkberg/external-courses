import "./footer.css";
export const count = (mock) => {
  const countActiveTask = () => {
    const arr = [];

    for (let i = 1; i < mock.length - 1; i++) {
      mock[i].issues.forEach((el) => {
        arr.push(el);
      });
    }
    const resultActive = arr.length;
    const contentActive = document.querySelector(".footer_left_active");
    contentActive.innerHTML = `Active tasks: &lt; ${resultActive} &gt;`;
  };
  const countFinishTask = () => {
    const resultFinish = mock[mock.length - 1].issues.length;
    const contentFinish = document.querySelector(".footer_left_finish");
    contentFinish.innerHTML = `Finished tasks: &lt; ${resultFinish} &gt;`;
  };
  countActiveTask();
  countFinishTask();
};
