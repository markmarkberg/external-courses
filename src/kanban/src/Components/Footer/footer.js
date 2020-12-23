import "./footer.css";
export const count = (mock) => {
  const countActiveTask = () => {
    const resultActive = mock[0].issues.length;
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
