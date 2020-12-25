import "./footer.css";
export const count = (mock) => {
  const countActiveTask = () => {
    let count = 0;

    mock.forEach((title, i) => {
      if (i !== 0 && i < mock.length - 1) {
        title.issues.forEach((el) => {
          count++;
        });
      }
    });

    const resultActive = count;
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
