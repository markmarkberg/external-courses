const buttonDrop = document.querySelector('.account');
buttonDrop.setAttribute('data-index', 'false');

const userName = document.createElement('p');
userName.classList.add('user_name');
userName.innerHTML = 'Mark';

const account = document.createElement('button');
account.classList.add('dropdown_list_item');
account.innerHTML = 'My account';

const tasks = document.createElement('button');
tasks.classList.add('dropdown_list_item');
tasks.innerHTML = 'My tasks';

const exit = document.createElement('button');
exit.classList.add('dropdown_list_item');
exit.innerHTML = 'Log out';

const container = document.createElement('div');
container.classList.add('dropdown_list_active');

container.append(userName, account, tasks, exit);

const dropdown = document.querySelector('.dropdown');

const listActive = () => {
  dropdown.classList.add('dropdown_logo_rotate');
  document.querySelector('.dropdown_container').append(container);
};

const removeDropList = () => {
  document.querySelector('.dropdown_list_active').remove();
  dropdown.classList.remove('dropdown_logo_rotate');
};

buttonDrop.addEventListener('click', () => {
  if (buttonDrop.dataset.index === 'false') {
    listActive();
    buttonDrop.dataset.index = 'true';
  } else {
    removeDropList();
    buttonDrop.dataset.index = 'false';
  }
});

const mock = [
  {
    title: 'Backlog',
    issues: [
      {
        id: 'task1',
        name: 'Login page – performance issues',
      },
      {
        id: 'task2',
        name: 'Login page',
      },
      {
        id: 'task3',
        name: 'Sprint bugfix',
      },
    ],
  },
  {
    title: 'Ready',
    issues: [
      {
        id: 'task4',
        name: 'Shop page – performance issues',
      },
      {
        id: 'task5',
        name: 'Checkout bugfix',
      },
      {
        id: 'task6',
        name: 'bugfix 2',
      },
      {
        id: 'task7',
        name: 'bugfix 3',
      },
    ],
  },
  {
    title: 'In Progress',
    issues: [
      {
        id: 'task8',
        name: 'Shop page – three',
      },
    ],
  },
  {
    title: 'Finished',
    issues: [
      {
        id: 'task9',
        name: 'Shop page – four',
      },
    ],
  },
];

if (!localStorage.getItem('Data')) {
  localStorage.setItem('Data', JSON.stringify(mock));
}

let raw = localStorage.getItem('Data');

let getMock = JSON.parse(raw);

const resetMock = () => {
  localStorage.setItem('Data', JSON.stringify(getMock));
};

const main = document.querySelector('.content');

getMock.forEach((card) => {
  const block = document.createElement('section');
  block.classList.add('content_block_size');
  block.setAttribute('id', card.title);

  const blockHeading = document.createElement('div');
  blockHeading.classList.add('content_block_heading');

  const blockName = document.createElement('p');
  blockName.classList.add('heading_name');
  blockName.innerHTML = card.title;

  const blockLogo = document.createElement('div');
  blockLogo.classList.add('block_heading_logo');

  const blockTask = document.createElement('div');
  blockTask.classList.add('content_task');

  const blockInput = document.createElement('div');
  blockInput.classList.add('content_input');

  const button = document.createElement('button');
  button.classList.add('item_add');
  button.setAttribute('type', 'button');

  const buttonLogo = document.createElement('div');
  buttonLogo.classList.add('add_logo');

  const buttonName = document.createElement('p');
  buttonName.classList.add('add_text');
  buttonName.innerHTML = 'Add card';

  block.append(blockHeading, blockTask, blockInput, button);
  blockHeading.append(blockName, blockLogo);
  button.append(buttonLogo, buttonName);
  main.append(block);

  if (card.title !== 'Backlog') {
    block.classList.add(`${card.title.split(' ').join('').toLowerCase()}_item`);
    blockTask.classList.add(
      `${card.title.split(' ').join('').toLowerCase()}_task`
    );
    blockInput.classList.add(
      `${card.title.split(' ').join('').toLowerCase()}_drop`
    );
    button.classList.add(`${card.title.split(' ').join('').toLowerCase()}_add`);
  } else {
    button.classList.add('add_el');
  }
});

const createTasks = (way, el) => {
  const div = document.createElement('div');
  div.classList.add('content_item');
  document.querySelector(way).append(div);
  div.setAttribute('id', el.id);
  div.innerHTML = el.name;
};

getMock[0].issues.forEach((el) => {
  createTasks('.content_task', el);
});

getMock[1].issues.forEach((el) => {
  createTasks('.ready_task', el);
});

getMock[2].issues.forEach((el) => {
  createTasks('.inprogress_task', el);
});

getMock[3].issues.forEach((el) => {
  createTasks('.finished_task', el);
});

const button = document.querySelector('.add_el');
const buttonFind = document.querySelectorAll('.item_add');
const item = document.querySelector('.content_block_size ');
const input = document.createElement('input');

const addInput = () => {
  input.classList.add('content_item');
  input.classList.add('input');
  input.setAttribute('type', 'text');
  input.setAttribute('placeholder', 'Add new task');
  document.querySelector('.content_input').append(input);
};

button.addEventListener('click', () => {
  addInput();
});

const buttonReady = document.querySelector('.ready_add');
const buttonProgress = document.querySelector('.inprogress_add');
const buttonFinished = document.querySelector('.finished_add');

input.addEventListener('blur', (e) => {
  const nameTask = e.target.value;

  const createNum = String(Date.now());

  const createId = createNum.slice(8);

  if (nameTask) {
    getMock[0].issues.push({
      id: `task${createId}`,
      name: nameTask,
    });
  }

  if (nameTask.length > 0) {
    const div = document.createElement('div');

    div.classList.add('content_item');
    div.classList.add('new_item');
    div.innerHTML = nameTask;
    div.setAttribute('id', `task${createId}`);
    document.querySelector('.content_task').append(div);
  }

  e.target.value = '';

  input.remove();
  if (getMock[0].issues.length > 0) {
    buttonReady.classList.remove('disable');
    buttonReady.removeAttribute('disabled');
  }

   resetMock();
});

let select = document.createElement('select');
let firstOption = document.createElement('option');
select.classList.add('content_item');

select.classList.add('content_item');

const createOption = (way, el) => {
  const option = document.createElement('option');
  option.setAttribute('class', 'opt');
  option.innerHTML = el.name;
  option.setAttribute('value', el.id);
  document.querySelector(way).append(option);
};

document.addEventListener('click', (event) => {
  if (event.target.parentNode.classList.contains('ready_add')) {
    document.querySelector('.ready_drop').append(select);
    document.querySelector('.ready_drop select').append(firstOption);
    select.classList.add('item_ready');
    select.classList.remove('item_progress');
    select.classList.remove('item_finished');
    getMock[0].issues.forEach((el) => {
      createOption('.ready_drop select', el);
    });

    select.onchange = (e) => {
      const backlogTitle = 'Backlog';
      const contentTask = event.target.parentNode.parentNode.querySelector(
        '.content_task'
      );
      let readyTask = e.target.value;
      const readyTaskId = document.getElementById(readyTask);
      contentTask.append(readyTaskId);
      select.innerHTML = '';
      select.remove();
      moveDataTasks(backlogTitle, readyTask);

      if (getMock[0].issues.length === 0) {
        buttonReady.classList.add('disable');
        buttonReady.setAttribute('disable', 'disable');
      }

      if (getMock[1].issues.length > 0) {
        buttonProgress.classList.remove('disable');
        buttonProgress.removeAttribute('disabled');
      }
    };
  }

  if (event.target.parentNode.classList.contains('inprogress_add')) {
    document.querySelector('.inprogress_drop').append(select);
    document.querySelector('.inprogress_drop select').append(firstOption);
    select.classList.add('item_progress');
    select.classList.remove('item_ready');
    select.classList.remove('item_finished');
    getMock[1].issues.forEach((el, i) => {
      createOption('.inprogress_drop select', el);
    });

    select.onchange = (e) => {
      const readyTitle = 'Ready';
      const contentTask = event.target.parentNode.parentNode.querySelector(
        '.content_task'
      );
      let inprogressTask = e.target.value;
      const inprogressTaskId = document.getElementById(inprogressTask);
      contentTask.append(inprogressTaskId);
      select.innerHTML = '';
      select.remove();
      moveDataTasks(readyTitle, inprogressTask);

      if (getMock[1].issues.length === 0) {
        buttonProgress.classList.add('disable');
        buttonProgress.setAttribute('disabled', 'disabled');
      }
      if (getMock[2].issues.length > 0) {
        buttonFinished.classList.remove('disable');
        buttonFinished.removeAttribute('disabled');
      }
    };
  }

  if (event.target.parentNode.classList.contains('finished_add')) {
    document.querySelector('.finished_drop').append(select);
    document.querySelector('.finished_drop select').append(firstOption);
    select.classList.add('item_finished');
    select.classList.remove('item_progress');
    select.classList.remove('item_ready');
    getMock[2].issues.forEach((el) => {
      createOption('.finished_drop select', el);
    });

    select.onchange = (e) => {
      const progressTitle = 'In Progress';
      let finishedTask = e.target.value;
      const contentTask = event.target.parentNode.parentNode.querySelector(
        '.content_task'
      );
      const finishedTaskId = document.getElementById(finishedTask);
      contentTask.append(finishedTaskId);
      select.innerHTML = '';
      select.remove();
      moveDataTasks(progressTitle, finishedTask);

      if (getMock[2].issues.length === 0) {
        buttonFinished.classList.add('disable');
        buttonFinished.setAttribute('disabled', 'disabled');
      }
    };
  }
});

function moveDataTasks(cardTitle, taskId) {
  function findCard(title) {
    return title.title === cardTitle;
  }
  function findTask(id) {
    return id.id === taskId;
  }
  let findArray = getMock.find(findCard).issues;
  let element = findArray.find(findTask);
  let indexElement = findArray.findIndex(findTask);

  if (cardTitle === 'Backlog') {
    getMock[1].issues.push(element);
    getMock[0].issues.splice(indexElement, 1);
  }
  if (cardTitle === 'Ready') {
    getMock[2].issues.push(element);
    getMock[1].issues.splice(indexElement, 1);
  }
  if (cardTitle === 'In Progress') {
    getMock[3].issues.push(element);
    getMock[2].issues.splice(indexElement, 1);
  }
   resetMock();
}
